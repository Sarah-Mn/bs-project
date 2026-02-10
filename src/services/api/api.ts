import axios from 'axios';


const getAuthorization = () => {
  const accessToken =
    typeof window !== "undefined" &&  localStorage.getItem("AccessToken");

  return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
};

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    ...getAuthorization()
  },
  // withCredentials: true,

});


api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);


export const get = async <T>(url: string): Promise<T> => {
  const { data } = await api.get<T>(url);
  return data;
};


export const post = async <T, B = unknown>(
  url: string,
  body: B
): Promise<T> => {
  const { data } = await api.post<T>(url, body);
  return data;
};
