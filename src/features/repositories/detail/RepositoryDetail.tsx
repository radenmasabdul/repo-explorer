import { useFavorite } from "@/hooks/use-favorite";
import { useRepoDetail } from "../hooks/use-detail";
import PageState from "@/components/common/PageState";
import Navigation from "@/components/common/Navigation";
import ReposContent from "../components/RepoContent";

export default function RepositoryDetail() {
  const { repo, loading, error } = useRepoDetail();
  const { isFavorite, handleToggleFavorite } = useFavorite(repo);

  if (loading) {
    return <PageState isLoading />;
  }

  if (error || !repo) {
    return <PageState isError />;
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Navigation to="/" label="Go Back" />

      <div className="mt-4">
        <ReposContent
          repo={repo}
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />
      </div>
    </main>
  );
}
