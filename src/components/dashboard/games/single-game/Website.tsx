import { Game } from "@/types/games";
import { Button } from "@mui/material";

const Website = ({ game }: { game: Game }) => {
  return (
    game?.website && (
      <Button variant="contained" href={game.website} target="_blank">
        Official Website
      </Button>
    )
  );
};

export default Website;
