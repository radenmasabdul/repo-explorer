import { describe, it, expect, beforeEach } from "vitest";
import { useFavoriteStore } from "@/stores/favorite-store";
import type { GithubRepoItem } from "@/types/github";

const mockRepo = (overrides: Partial<GithubRepoItem> = {}): GithubRepoItem =>
  ({
    id: 1,
    name: "repo-one",
    full_name: "owner/repo-one",
    description: "A test repo",
    stargazers_count: 10,
    forks_count: 2,
    language: "TypeScript",
    license: null,
    owner: {
      login: "owner",
      avatar_url: "https://example.com/avatar.png",
    },
    ...overrides,
  }) as GithubRepoItem;

describe("favorite-store", () => {
  beforeEach(() => {
    localStorage.clear();
    useFavoriteStore.setState({ favorites: [] });
  });

  it("starts with an empty favorites list", () => {
    expect(useFavoriteStore.getState().favorites).toEqual([]);
  });

  it("addFavorite adds a repo to favorites", () => {
    const repo = mockRepo();
    useFavoriteStore.getState().addFavorite(repo);

    expect(useFavoriteStore.getState().favorites).toHaveLength(1);
    expect(useFavoriteStore.getState().favorites[0]).toEqual(repo);
  });

  it("addFavorite appends without removing existing favorites", () => {
    const repoA = mockRepo({ id: 1 });
    const repoB = mockRepo({ id: 2, name: "repo-two" });

    useFavoriteStore.getState().addFavorite(repoA);
    useFavoriteStore.getState().addFavorite(repoB);

    expect(useFavoriteStore.getState().favorites).toHaveLength(2);
    expect(useFavoriteStore.getState().favorites.map((r) => r.id)).toEqual([
      1, 2,
    ]);
  });

  it("removeFavorite removes a repo by id", () => {
    const repoA = mockRepo({ id: 1 });
    const repoB = mockRepo({ id: 2, name: "repo-two" });

    useFavoriteStore.getState().addFavorite(repoA);
    useFavoriteStore.getState().addFavorite(repoB);
    useFavoriteStore.getState().removeFavorite(1);

    expect(useFavoriteStore.getState().favorites).toHaveLength(1);
    expect(useFavoriteStore.getState().favorites[0].id).toBe(2);
  });

  it("removeFavorite does nothing if id doesn't exist", () => {
    const repo = mockRepo({ id: 1 });
    useFavoriteStore.getState().addFavorite(repo);

    useFavoriteStore.getState().removeFavorite(999);

    expect(useFavoriteStore.getState().favorites).toHaveLength(1);
  });

  it("isFavorite returns true if repo id exists in favorites", () => {
    const repo = mockRepo({ id: 1 });
    useFavoriteStore.getState().addFavorite(repo);

    expect(useFavoriteStore.getState().isFavorite(1)).toBe(true);
  });

  it("isFavorite returns false if repo id doesn't exist", () => {
    expect(useFavoriteStore.getState().isFavorite(1)).toBe(false);
  });

  it("toggleFavorite adds repo when not yet favorited", () => {
    const repo = mockRepo({ id: 1 });

    useFavoriteStore.getState().toggleFavorite(repo);

    expect(useFavoriteStore.getState().isFavorite(1)).toBe(true);
    expect(useFavoriteStore.getState().favorites).toHaveLength(1);
  });

  it("toggleFavorite removes repo when already favorited", () => {
    const repo = mockRepo({ id: 1 });

    useFavoriteStore.getState().toggleFavorite(repo);
    useFavoriteStore.getState().toggleFavorite(repo);

    expect(useFavoriteStore.getState().isFavorite(1)).toBe(false);
    expect(useFavoriteStore.getState().favorites).toHaveLength(0);
  });

  it("toggleFavorite twice in a row on two different repos keeps both independent", () => {
    const repoA = mockRepo({ id: 1 });
    const repoB = mockRepo({ id: 2, name: "repo-two" });

    useFavoriteStore.getState().toggleFavorite(repoA);
    useFavoriteStore.getState().toggleFavorite(repoB);
    useFavoriteStore.getState().toggleFavorite(repoA);

    expect(useFavoriteStore.getState().isFavorite(1)).toBe(false);
    expect(useFavoriteStore.getState().isFavorite(2)).toBe(true);
    expect(useFavoriteStore.getState().favorites).toHaveLength(1);
  });
});
