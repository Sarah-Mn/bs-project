import { Card, CardContent, Typography } from "@mui/material";

interface StatCardProps {
  title: string;
  value: string;
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <Card className="rounded-xl">
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5" className="font-semibold mt-2">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
