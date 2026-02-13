import { useState } from "react";
import { fetchUsers } from "../services/users.api";
import { useQuery } from "@tanstack/react-query";

export function useUsers(limit = 10) {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");


 const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users", page, query],
    queryFn: () => fetchUsers(page, limit, query),
  });

  const totalPages = data ? Math.ceil(data.total / limit) : 0;

 const handleQueryChange = (value: string) => {
  setQuery(value);
  setPage(1);
};


  return {
    users: data?.users ?? [],
    loading: isLoading,
    error: isError ? (error as Error).message : "",
    page,
    setPage,
    query,
    handleQueryChange,
    totalPages
  };
}
