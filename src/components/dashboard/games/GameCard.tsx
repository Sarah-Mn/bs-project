import Link from "next/link";
import { Card, CardContent, Typography, Rating } from "@mui/material";
import { Game } from "@/types/games";

export default function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/dashboard/games/${game.slug}`}>
      <Card className="rounded-2xl shadow hover:shadow-lg transition">
        <img
          src={game.background_image}
          alt={game.name}
          className="h-48 w-full object-cover rounded-t-2xl"
        />

        <CardContent>
          <Typography variant="h6">{game.name}</Typography>

          <div className="flex items-center justify-between mt-2">
            <Rating value={game.rating} precision={0.1} readOnly />
            <span className="text-sm text-gray-500">{game.released}</span>
          </div>

          <div className="mt-2 text-xs text-gray-500">
            {game.platforms?.map((p) => p.platform.name).join(", ")}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
