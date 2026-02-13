import { useQuery } from "@tanstack/react-query";
import { fetchGameScreenshots } from "../services/gameScreenshots.api";
import { GameScreenshotsResponse } from "../types";


export function useGameScreenshots(slug?: string) {
   const { data, isLoading, error } = useQuery<GameScreenshotsResponse>({
    queryKey: ["game-screenshots", slug],
    queryFn: () => fetchGameScreenshots(slug!),
    enabled: !!slug,
  });



  return {
    data,
    isLoading,
    error,
  };
}
