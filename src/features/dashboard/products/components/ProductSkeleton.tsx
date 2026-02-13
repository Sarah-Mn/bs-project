import { Skeleton } from "@mui/material";

export function ProductSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} height={56} />
      ))}
    </div>
  );
}
