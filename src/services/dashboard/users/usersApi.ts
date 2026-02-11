import { UsersApiResponse } from "@/types/user";

export async function fetchUsers(
  page: number,
  limit: number,
  query: string
): Promise<UsersApiResponse> {
  const res = await fetch(
    `/api/users?page=${page}&limit=${limit}&q=${query}`
  );

  if (!res.ok) {
    throw new Error("Failed to load users");
  }

  return res.json();
}
