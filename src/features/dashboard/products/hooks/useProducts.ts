import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/products.api";

export function useProducts(limit = 10) {
    
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");


 const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", page, query],
    queryFn: () => fetchProducts(page, limit, query),
  });

  const totalPages = data ? Math.ceil(data.total / limit) : 0;

 const handleQueryChange = (value: string) => {
  setQuery(value);
  setPage(1);
};


  return {
    products: data?.products ?? [],
    loading: isLoading,
    error: isError ? (error as Error).message : "",
    page,
    setPage,
    query,
    handleQueryChange,
    totalPages
  };
}
