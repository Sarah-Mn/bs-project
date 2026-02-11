import { ReactNode, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: LayoutProps) {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [open, setOpen] = useState(!isMobile);

  return (
    <div className="flex min-h-screen">
      <Sidebar open={open} onClose={() => setOpen(false)} isMobile={isMobile} />

      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <Header onMenuClick={() => setOpen((prev) => !prev)} />
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
