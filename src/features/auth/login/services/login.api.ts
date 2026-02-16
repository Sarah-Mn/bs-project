import { LoginRequest } from "../types";


export const login = async (payload: LoginRequest) => {

   const res = await fetch(
    `/api/auth/login`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

  if (!res.ok) {
    throw new Error("Failed to login user");
  }

  return res.json();
};
