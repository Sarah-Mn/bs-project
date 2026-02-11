import { useQuery } from "@tanstack/react-query";
import { RawgGamesResponse } from "@/types/games";

interface GamesFilters {
  genres?: string;
  platforms?: string;
  tags?: string;
  dates?: string;
  ordering?: string;
  search?: string;
}

async function fetchGames(
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


export function useGames(
  page: number,
  pageSize: number,
  filters?: GamesFilters
) {
  return useQuery({
    queryKey: ["games", page, pageSize, filters],
    queryFn: () => fetchGames(page, pageSize, filters),
    placeholderData: (prevData) => {
      if (prevData) {
        return {
          ...prevData,
          results: prevData.results.map((game) => ({
            ...game,
            id: game.id + page * 1000,
          })),
        };
      }
}});
}
