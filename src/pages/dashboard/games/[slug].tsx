import GameDetails from "@/components/dashboard/games/single-game/GameDetails";
import { DashboardLayout } from "@/layouts/dashboard/DashboardLayout";

export default function GamePage() {
  return (
    <DashboardLayout>
      <GameDetails />
    </DashboardLayout>
  );
}
