import { Divider } from "@mui/material";
import { useRouter } from "next/router";
import { useGame } from "@/components/dashboard/games/single-game/useGame";
import Hero from "./Hero";
import Description from "./Description";
import Info from "./Info";
import Screenshots from "./Screenshots";
import Website from "./Website";

const GameDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data: game,
    isLoading,
    error,
  } = useGame(Array.isArray(slug) ? slug[0] : slug);

  if (isLoading) {
    return <div className="p-6">Loading game details...</div>;
  }

  if (error) {
    return <div className="p-6">Error loading game details</div>;
  }

  if (!game || !slug) {
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
        <Screenshots slug={slug} />
      </div>
    </div>
  );
};

export default GameDetails;
