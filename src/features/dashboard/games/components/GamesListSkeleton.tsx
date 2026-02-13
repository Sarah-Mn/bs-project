import { Card, CardContent, Skeleton } from "@mui/material";

export function GamesListSkeleton() {
  return (
    <Card className="rounded-2xl shadow min-h-96">
      {/* Image Skeleton */}
      <Skeleton variant="rectangular" height={192} className="rounded-t-2xl" />

      <CardContent>
        {/* Title */}
        <Skeleton variant="text" height={28} width="70%" />

        {/* Rating + Release */}
        <div className="flex items-center justify-between mt-2">
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={80} />
        </div>

        {/* Platforms */}
        <div className="mt-2">
          <Skeleton variant="text" width="90%" />
        </div>
      </CardContent>
    </Card>
  );
}
