import { Game } from "../../types";
import Website from "./Website";

export const Description = ({ game }: { game: Game }) => {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold">About</h2>
        <div className="mx-16">
          <Website game={game} />
        </div>
      </div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: game?.description || "",
        }}
      />
    </section>
  );
};
