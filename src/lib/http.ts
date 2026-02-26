import axios from "axios";
import { clearAccessToken, getAccessToken, setAccessToken } from "./tokenStorage";




export const http = axios.create({
    baseURL: "/api",
});

http.interceptors.request.use((config) => {

    const token = getAccessToken();

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});


let isRefreshing = false;
let failedQueue: Array<{ resolve: (token: string | null) => void; reject: (error: Error) => void }> = [];

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return http(originalRequest);
          })
          .catch(Promise.reject);
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { data } = await axios.post("/api/auth/refresh");
        setAccessToken(data.accessToken);

        processQueue(null, data.accessToken);
        return http(originalRequest);
      } catch (err: unknown) {
        if(err)
        processQueue(err as Error, null);
        clearAccessToken();
        window.location.href = "/auth/login";
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);