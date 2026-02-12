import { GameScreenshotsResponse } from "@/types/dashboard/games/gameScreenshots";
import { useQuery } from "@tanstack/react-query";


async function fetchGameScreenshots(slug: string) {
  try {
    const res = await fetch(`/api/games/${slug}/screenshots`);

    if (!res.ok) {
      throw new Error("Failed to fetch screenshots");
    }

    return res.json();
  } catch (error) {
    console.error("Error in fetchGameScreenshots:", error);
    throw error;
  }
}


export function useGameScreenshots(slug?: string) {
  return useQuery<GameScreenshotsResponse>({
    queryKey: ["game-screenshots", slug],
    queryFn: () => fetchGameScreenshots(slug!),
    enabled: !!slug,
    staleTime: 1000 * 60, // 1 minute
  });
}
