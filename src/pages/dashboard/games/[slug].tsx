import { useGame } from "@/components/dashboard/games/useGame";
import { Rating } from "@mui/material";
import { useRouter } from "next/router";

export default function GamePage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading, error } = useGame(
    Array.isArray(slug) ? slug[0] : slug,
  );

  if (isLoading) {
    return <div className="p-6">Loading game details...</div>;
  }

  if (error) {
    return <div className="p-6">Error loading game details</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">{data?.name}</h1>

      <Rating value={data?.rating} readOnly precision={0.1} />

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: data?.description || "" }}
      />
    </div>
  );
}
