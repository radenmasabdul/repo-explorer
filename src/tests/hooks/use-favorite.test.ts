import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useFavorite } from "@/hooks/use-favorite";
import { useFavoriteStore } from "@/stores/favorite-store";
import { useAlertStore } from "@/stores/alert-store";
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
    owner: { login: "owner", avatar_url: "" },
    ...overrides,
  }) as GithubRepoItem;

const mockEvent = () =>
  ({
    preventDefault: () => {},
    stopPropagation: () => {},
  }) as React.MouseEvent;

describe("useFavorite", () => {
  beforeEach(() => {
    localStorage.clear();
    useFavoriteStore.setState({ favorites: [] });
    useAlertStore.setState({ alert: null });
  });

  it("returns isFavorite false when repo is null", () => {
    const { result } = renderHook(() => useFavorite(null));
    expect(result.current.isFavorite).toBe(false);
  });

  it("returns isFavorite false when repo is not in favorites", () => {
    const repo = mockRepo();
    const { result } = renderHook(() => useFavorite(repo));
    expect(result.current.isFavorite).toBe(false);
  });

  it("returns isFavorite true when repo is already in favorites", () => {
    const repo = mockRepo();
    useFavoriteStore.setState({ favorites: [repo] });

    const { result } = renderHook(() => useFavorite(repo));
    expect(result.current.isFavorite).toBe(true);
  });

  it("handleToggleFavorite adds repo to favorites and shows success alert", () => {
    const repo = mockRepo();
    const { result } = renderHook(() => useFavorite(repo));

    act(() => {
      result.current.handleToggleFavorite(mockEvent());
    });

    expect(useFavoriteStore.getState().isFavorite(repo.id)).toBe(true);
    expect(useAlertStore.getState().alert?.variant).toBe("success");
    expect(useAlertStore.getState().alert?.title).toContain(
      "Added to favorites",
    );
  });

  it("handleToggleFavorite removes repo from favorites and shows info alert", () => {
    const repo = mockRepo();
    useFavoriteStore.setState({ favorites: [repo] });

    const { result } = renderHook(() => useFavorite(repo));

    act(() => {
      result.current.handleToggleFavorite(mockEvent());
    });

    expect(useFavoriteStore.getState().isFavorite(repo.id)).toBe(false);
    expect(useAlertStore.getState().alert?.variant).toBe("info");
    expect(useAlertStore.getState().alert?.title).toContain(
      "Removed from favorites",
    );
  });

  it("handleToggleFavorite does nothing when repo is null", () => {
    const { result } = renderHook(() => useFavorite(null));

    act(() => {
      result.current.handleToggleFavorite(mockEvent());
    });

    expect(useFavoriteStore.getState().favorites).toHaveLength(0);
    expect(useAlertStore.getState().alert).toBeNull();
  });

  it("handleFooterClick calls preventDefault and stopPropagation", () => {
    const repo = mockRepo();
    const { result } = renderHook(() => useFavorite(repo));

    let preventCalled = false;
    let stopCalled = false;

    const event = {
      preventDefault: () => {
        preventCalled = true;
      },
      stopPropagation: () => {
        stopCalled = true;
      },
    } as React.MouseEvent;

    act(() => {
      result.current.handleFooterClick(event);
    });

    expect(preventCalled).toBe(true);
    expect(stopCalled).toBe(true);
  });
});
