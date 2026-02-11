import { post } from "@/services/api/api";

export interface LoginRequest {
  username: string;
  password: string;
}

type LoginResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
};



export const login = (payload: LoginRequest) => {
  return post< LoginResponse, LoginRequest>('/auth/login', payload);
};
