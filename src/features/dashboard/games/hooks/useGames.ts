import { useQuery } from "@tanstack/react-query";
import { GamesFilters } from "../types";
import { fetchGames } from "../services/games.api";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";


export function useGames(pageSize = 12) {

  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") || 1);

 const filters: GamesFilters = {
    search: searchParams.get("search") || undefined,
    genres: searchParams.get("genres") || undefined,
    ordering: searchParams.get("ordering") || "-rating",
  };

 const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["games", page, pageSize, filters],
    queryFn: () => fetchGames(page, pageSize, filters),
});



const totalPages = data?.results ? Math.ceil(data.count / pageSize) : 0;

const updatePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    router.push(`/dashboard/games?${params.toString()}`);
  };


return {
    games: data?.results ?? [],
    loading: isLoading,
    error: isError ? (error as Error).message : "",
    page,
    updatePage,
    totalPages
  };
}
