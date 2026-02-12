import { Game } from "@/types/games";
import { Chip, Rating } from "@mui/material";
import Image from "next/image";

const Hero = ({ game }: { game: Game }) => {
  return (
    <div className="relative h-100 w-full">
      <Image
        src={game?.background_image}
        alt={game?.name}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60 flex items-end">
        <div className="p-6 text-white">
          <h1 className="text-4xl font-bold">{game?.name}</h1>

          <div className="flex items-center gap-4 mt-2">
            <Rating value={game?.rating} readOnly precision={0.1} />
            <span>{game?.released}</span>
            {game?.esrb_rating && (
              <Chip label={game?.esrb_rating?.name} color="warning" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
