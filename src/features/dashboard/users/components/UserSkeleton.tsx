import { Skeleton } from "@mui/material";

export function UserSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} height={50} />
      ))}
    </div>
  );
}
