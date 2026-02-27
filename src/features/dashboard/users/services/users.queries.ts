import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./users.api";

export const useGetUsers = (page: number = 1, limit: number = 10, query: string = "") =>
  useQuery({
    queryKey: ["users", page, limit, query],
    queryFn: () => fetchUsers(page, limit, query),
  });