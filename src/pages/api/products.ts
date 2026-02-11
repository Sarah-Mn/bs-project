import type { NextApiRequest, NextApiResponse } from "next";
import { ProductsApiResponse } from "@/types/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductsApiResponse | { message: string }>
) {
  try {
    const { page = "1", limit = "10", q = "" } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const url = q
      ? `https://dummyjson.com/products/search?q=${q}&limit=${limit}&skip=${skip}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch {
    res.status(500).json({ message: "Failed to fetch products" });
  }
}
