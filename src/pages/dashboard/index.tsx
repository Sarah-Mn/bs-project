import { DashboardLayout } from "@/layouts/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Users" value="1,240" />
        <StatCard title="Orders" value="320" />
        <StatCard title="Revenue" value="$12,400" />
        <StatCard title="Products" value="58" />
      </div>
    </DashboardLayout>
  );
}
