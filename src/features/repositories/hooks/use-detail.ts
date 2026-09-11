import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRepoDetail } from "@/services/github-service";
import type { GithubRepoDetail } from "@/types/github";

export function useRepoDetail() {
  const { owner, repo: repoName } = useParams<{
    owner: string;
    repo: string;
  }>();

  const [repo, setRepo] = useState<GithubRepoDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getRepoDetail = async () => {
      if (!owner || !repoName) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(false);

        const data = await fetchRepoDetail({
          owner,
          repo: repoName,
        });

        setRepo(data);
      } catch {
        setError(true);
        setRepo(null);
      } finally {
        setLoading(false);
      }
    };

    getRepoDetail();
  }, [owner, repoName]);

  return {
    repo,
    loading,
    error,
  };
};