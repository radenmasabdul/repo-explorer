import { ExternalLink, GitFork, Heart, Star } from "lucide-react";
import type { RepositoryContentProps } from "../types/index";

export default function ReposContent({
  repo,
  isFavorite,
  onToggleFavorite,
}: RepositoryContentProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="border-b border-border p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <img
              src={repo.owner.avatar_url}
              alt={repo.owner.login}
              className="h-16 w-16 rounded-xl object-cover sm:h-20 sm:w-20"
            />

            <div>
              <p className="text-sm text-muted-foreground">
                @{repo.owner.login}
              </p>

              <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {repo.name}
              </h1>

              {repo.description && (
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                  {repo.description}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleFavorite}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                isFavorite
                  ? "border-red-500/20 bg-red-500/10 text-red-500"
                  : "border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              <Heart
                className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`}
              />

              {isFavorite ? "Favorit" : "Favoritkan"}
            </button>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x divide-border border-b border-border sm:grid-cols-4">
        <div className="p-5">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Star className="h-4 w-4" />
            <span className="text-xs">Stars</span>
          </div>

          <p className="mt-2 text-lg font-semibold text-foreground">
            {repo.stargazers_count?.toLocaleString()}
          </p>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-muted-foreground">
            <GitFork className="h-4 w-4" />
            <span className="text-xs">Forks</span>
          </div>

          <p className="mt-2 text-lg font-semibold text-foreground">
            {repo.forks_count?.toLocaleString()}
          </p>
        </div>

        <div className="border-t border-border p-5 sm:border-t-0">
          <p className="text-xs text-muted-foreground">Language</p>

          <p className="mt-2 text-lg font-semibold text-foreground">
            {repo.language ?? "Tidak tersedia"}
          </p>
        </div>

        <div className="border-t border-border p-5 sm:border-t-0">
          <p className="text-xs text-muted-foreground">License</p>

          <p className="mt-2 text-lg font-semibold text-foreground">
            {repo.license?.spdx_id || repo.license?.name || "Tidak tersedia"}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-foreground">
          Repository Information
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground">Repository</p>

            <p className="mt-1 break-all text-sm font-medium text-foreground">
              {repo.full_name}
            </p>
          </div>

          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground">Default Branch</p>

            <p className="mt-1 text-sm font-medium text-foreground">
              {repo.default_branch}
            </p>
          </div>

          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground">Visibility</p>

            <p className="mt-1 text-sm font-medium capitalize text-foreground">
              {repo.visibility ?? "public"}
            </p>
          </div>

          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground">Fork</p>

            <p className="mt-1 text-sm font-medium text-foreground">
              {repo.fork ? "Ya" : "Tidak"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
