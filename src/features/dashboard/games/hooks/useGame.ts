import { useQuery } from "@tanstack/react-query";
import { Game } from "../types";
import { fetchGameBySlug } from "../services/game.api";
import { useRouter } from "next/router";


export function useGame() {

  const router = useRouter();
  const { slug } = router.query;

  const { data: game,
    isLoading,
    error,
  } =
   useQuery<Game>({
    queryKey: ["game", slug],
    queryFn: () => fetchGameBySlug(Array.isArray(slug) ? slug[0] : slug!),
    enabled: !!slug,  
  });

  return {
    data: game,
    isLoading,
    error,
  };
}
