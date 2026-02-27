import { http } from "@/lib/http";
import { UsersApiResponse } from "../types";

export async function fetchUsers(
  page: number,
  limit: number,
  query: string
): Promise<UsersApiResponse> {
  const res = await http.get(
    `/users?page=${page}&limit=${limit}&q=${query}`
  );
  

  return res.data;
}
