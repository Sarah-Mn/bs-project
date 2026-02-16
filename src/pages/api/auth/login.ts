import { LoginApiResponse, LoginRequest } from "@/features/auth/login";
import { post } from "@/services/api/api";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginApiResponse | { message: string }>
) {
  try {

    const response = await post< LoginApiResponse, LoginRequest>('/auth/login', req.body);

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: "Failed to login user" });
  }
}
