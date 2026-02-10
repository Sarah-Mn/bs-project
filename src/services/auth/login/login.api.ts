import { post } from "@/services/api/api";

export interface LoginRequest {
  username: string;
  password: string;
}



export const login = (payload: LoginRequest) => {
  return post< any, LoginRequest>('/auth/login', payload);
};
