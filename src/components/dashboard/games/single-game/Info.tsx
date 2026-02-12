import { Game } from "@/types/games";
import { Chip } from "@mui/material";

const Info = ({ game }: { game: Game }) => {
  return (
    <section className="grid md:grid-cols-2 gap-10">
      {/* LEFT */}
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold mb-2">Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {game?.platforms?.map((p) => (
              <Chip key={p.platform?.id} label={p.platform.name} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Genres</h3>
          <div className="flex flex-wrap gap-2">
            {game?.genres?.map((g) => (
              <Chip key={g.id} label={g.name} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Developers</h3>
          <div className="flex flex-wrap gap-2">
            {game?.developers?.map((dev) => (
              <Chip key={dev.id} label={dev.name} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Stores</h3>
          <div className="flex flex-wrap gap-2">
            {game?.stores?.map((store) => (
              <Chip key={store.id} label={store.store.name} />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT - SYSTEM REQUIREMENTS */}
      <div>
        <h3 className="font-semibold mb-4">System Requirements</h3>
        {game?.platforms?.[0]?.requirements?.minimum ? (
          <div className="mb-6">
            <h4 className="font-medium">Minimum</h4>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {game.platforms[0].requirements.minimum}
            </pre>
          </div>
        ) : (
          <p>No system requirements available.</p>
        )}

        {game?.platforms?.[0]?.requirements?.recommended && (
          <div>
            <h4 className="font-medium">Recommended</h4>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {game.platforms[0].requirements.recommended}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
};

export default Info;
