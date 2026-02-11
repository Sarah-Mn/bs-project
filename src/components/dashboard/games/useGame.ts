import { Game } from "@/types/games";
import { useQuery } from "@tanstack/react-query";

async function fetchGameBySlug(slug: string) {
    try {
         const res = await fetch(`/api/games/${slug}`);
         
        return res.json();
    } catch (error) {
        console.error("Error in fetchGameBySlug:", error);
          
    }
 
}

export function useGame(slug?: string) {
  return useQuery<Game>({
    queryKey: ["game", slug],
    queryFn: () => fetchGameBySlug(slug!),
    enabled: !!slug, 
    staleTime: 1000 * 60, 
  });
}
