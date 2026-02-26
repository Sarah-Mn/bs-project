import { UsersApiResponse } from "@/features/dashboard/users/types";
import type { NextApiRequest, NextApiResponse } from "next";


const baseUrl = process.env.API_BASE_URL || "https://dummyjson.com";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersApiResponse | { message: string }>
) {
  try {
      const authHeader = req.headers.cookie;
      

    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized" });
    };
    
    const { page = "1", limit = "10", q = "" } = req.query;

    const skip = (Number(page) - 1) * Number(limit);

    const url = q
      ? `${baseUrl}/users/search?q=${q}&limit=${limit}&skip=${skip}`
      : `${baseUrl}/users?limit=${limit}&skip=${skip}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch {
    res.status(500).json({ message: "Failed to fetch users" });
  }
}
