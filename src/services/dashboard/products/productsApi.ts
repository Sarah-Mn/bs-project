import { ProductsApiResponse } from "@/types/product";

export async function fetchProducts(
  page: number,
  limit: number,
  query: string
): Promise<ProductsApiResponse> {
  const res = await fetch(
    `/api/products?page=${page}&limit=${limit}&q=${query}`
  );

  if (!res.ok) {
    throw new Error("Failed to load products");
  }

  return res.json();
}
