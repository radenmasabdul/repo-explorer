import { HeartOff } from "lucide-react";
import { useFavoriteStore } from "@/stores/favorite-store";
import RepoCard from "../repositories/components/RepoCard";

export default function Favorite() {
  const favorites = useFavoriteStore((s) => s.favorites);

  if (favorites.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border py-20 text-center">
          <HeartOff className="h-10 w-10 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">
            No favorite repositories yet.
          </h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Click the heart icon on a repository you like to add it to your
            favorites list.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">
            Favorite Repositories
          </h1>
          <p className="text-sm text-muted-foreground">
            {favorites.length} Repository saved
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {favorites.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
