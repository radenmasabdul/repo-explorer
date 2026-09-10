import { GitFork, Heart, Star } from "lucide-react";
import Card from "@/components/common/Card";
import type { RepoCardProps } from "../types";

export default function RepoCard({
  repo,
  isFavorite,
  onToggleFavorite,
}: RepoCardProps) {
  return (
    <Card
      to={`/repo/${repo.owner.login}/${repo.name}`}
      image={
        <div className="aspect-video w-full overflow-hidden bg-muted flex items-center justify-center">
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      }
      badge={
        repo.license ? (
          <span className="rounded-full bg-background/80 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-medium text-foreground border border-border">
            {repo.license.spdx_id || repo.license.name}
          </span>
        ) : null
      }
      subheader={`@${repo.owner.login}`}
      title={repo.name}
      description={repo.description ?? "Tidak ada deskripsi."}
      footer={
        <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-2.5">
          <div className="flex items-center gap-3">
            {repo.language && (
              <span className="flex items-center gap-1 font-medium text-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {repo.language}
              </span>
            )}

            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5" />
              {repo.stargazers_count?.toLocaleString()}
            </span>

            <span className="flex items-center gap-1">
              <GitFork className="h-3.5 w-3.5" />
              {repo.forks_count?.toLocaleString()}
            </span>
          </div>

          {onToggleFavorite && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onToggleFavorite(repo);
              }}
              className="rounded-md p-1 transition-colors hover:bg-muted"
              aria-label={
                isFavorite
                  ? "Remove repository from favorites"
                  : "Add repository to favorites"
              }
            >
              <Heart
                className={`h-4 w-4 transition-colors ${
                  isFavorite
                    ? "fill-current text-red-500"
                    : "text-muted-foreground"
                }`}
              />
            </button>
          )}
        </div>
      }
    />
  );
}
