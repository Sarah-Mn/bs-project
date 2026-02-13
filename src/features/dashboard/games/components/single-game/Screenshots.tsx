import { useGameScreenshots } from "../../hooks/useGameScreenshots";
import Image from "next/image";
import { GameScreenshot, GameScreenshotsResponse } from "../../types";

export const Screenshots = ({ slug }: { slug: string | string[] }) => {
  const {
    data: screenshots,
    isLoading,
    error,
  } = useGameScreenshots(Array.isArray(slug) ? slug[0] : slug);

  if (isLoading) {
    return <div className="p-6">Loading screenshots...</div>;
  }

  if (error) {
    return <div className="p-6">Error loading screenshots</div>;
  }

  return (
    (screenshots as GameScreenshotsResponse)?.results?.length > 0 && (
      <section>
        <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {screenshots?.results.map((shot: GameScreenshot) => (
            <Image
              key={shot.id}
              src={shot.image}
              alt="screenshot"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-48"
            />
          ))}
        </div>
      </section>
    )
  );
};
