import { Divider } from "@mui/material";
import { useGame } from "@/features/dashboard/games/hooks/useGame";
import SingleGameSkeleton from "./SingleGameSkeleton";
import { Screenshots } from "./Screenshots";
import { Hero } from "./Hero";
import { Description } from "./Description";
import { Info } from "./Info";

export const GameDetails = () => {
  const { data: game, isLoading, error } = useGame();

  if (isLoading) {
    return <SingleGameSkeleton />;
  }

  if (error) {
    return <div className="p-6">Error loading game details</div>;
  }

  if (!game) {
    return <div className="p-6">Game not found</div>;
  }

  return (
    <div className="min-h-screen pb-16">
      {/* HERO SECTION */}
      <Hero game={game} />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 mt-10 space-y-10">
        {/* DESCRIPTION */}
        <Description game={game} />

        <Divider />

        {/* GAME INFO GRID */}
        <Info game={game} />

        <Divider />

        {/* SCREENSHOTS */}
        <Screenshots slug={game?.slug} />
      </div>
    </div>
  );
};
