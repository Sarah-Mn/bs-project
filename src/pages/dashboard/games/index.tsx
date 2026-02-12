import FiltersSidebar from "@/components/dashboard/games/FiltersSidebar";
import GameCard from "@/components/dashboard/games/GameCard";
import { useGames } from "@/components/dashboard/games/useGames";
import { DashboardLayout } from "@/layouts/dashboard/DashboardLayout";
import { Pagination } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function GamesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") || 1);
  const pageSize = 20;

  const filters = {
    search: searchParams.get("search") || undefined,
    genres: searchParams.get("genres") || undefined,
    ordering: searchParams.get("ordering") || "-rating",
  };

  const { data, isLoading, isError } = useGames(page, pageSize, filters);

  const totalPages = data ? Math.ceil(data.count / pageSize) : 0;

  const updatePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    router.push(`/dashboard/games?${params.toString()}`);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 px-6">
        <FiltersSidebar />

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.results.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center my-4">
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, p) => updatePage(p)}
          />
        </div>
      )}
    </DashboardLayout>
  );
}
