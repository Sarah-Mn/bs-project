import { useState } from "react";
import {  useGetUsers } from "../services/users.queries";

export function useUsers(limit = 10) {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");


const {data,isLoading,isError,error} = useGetUsers(page, limit, query)

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
