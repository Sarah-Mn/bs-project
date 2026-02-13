import {
  FiltersSidebar,
  GameCard,
  GamesListSkeleton,
  useGames,
} from "@/features/dashboard/games";
import { DashboardLayout } from "@/layouts/dashboard/DashboardLayout";
import { Alert, Pagination } from "@mui/material";

export default function GamesPage() {
  const { games, loading, error, totalPages, page, updatePage } = useGames();

  return (
    <DashboardLayout>
      <div className="mb-10">
        <FiltersSidebar />
      </div>
      {error && <Alert severity="error">{error}</Alert>}

      {loading && (
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <GamesListSkeleton key={i} />
          ))}
        </div>
      )}

      {!loading && games.length === 0 && (
        <Alert severity="info">No games found.</Alert>
      )}

      {!loading && games.length > 0 && (
        <>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games?.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
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
        </>
      )}
    </DashboardLayout>
  );
}
