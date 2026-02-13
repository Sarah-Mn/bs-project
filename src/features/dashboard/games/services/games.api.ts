import { GamesFilters, RawgGamesResponse } from "../types";

export async function fetchGames(
  page: number,
  pageSize: number,
  filters?: GamesFilters
): Promise<RawgGamesResponse> {
  const params = new URLSearchParams();

  params.set("page", String(page));
  params.set("page_size", String(pageSize));

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        params.set(key, value);
      }
    });
  }

  const res = await fetch(`/api/games?${params.toString()}`);

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  return res.json();
}