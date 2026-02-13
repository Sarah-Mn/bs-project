import { GameDetails } from "@/features/dashboard/games";
import { DashboardLayout } from "@/layouts/dashboard/DashboardLayout";

export default function GamePage() {
  return (
    <DashboardLayout>
      <GameDetails />
    </DashboardLayout>
  );
}
