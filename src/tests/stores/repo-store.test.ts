import { describe, it, expect, beforeEach } from "vitest";
import { useRepoStore } from "@/stores/repo-store";
import type { GithubRepoItem } from "@/types/github";

const mockItems = (count: number): GithubRepoItem[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `repo-${i + 1}`,
    full_name: `owner/repo-${i + 1}`,
    description: null,
    stargazers_count: 0,
    forks_count: 0,
    language: null,
    license: null,
    owner: { login: "owner", avatar_url: "" },
  })) as GithubRepoItem[];

const initialSnapshot = useRepoStore.getState();

describe("repo-store", () => {
  beforeEach(() => {
    useRepoStore.setState({ ...initialSnapshot });
  });

  it("has correct default state", () => {
    const state = useRepoStore.getState();

    expect(state.query).toBe("");
    expect(state.sort).toBe("stars");
    expect(state.order).toBe("desc");
    expect(state.page).toBe(1);
    expect(state.per_page).toBe(10);
    expect(state.items).toEqual([]);
    expect(state.total_count).toBe(0);
    expect(state.status).toBe("idle");
    expect(state.error_messages).toBeNull();
  });

  it("setQuery updates query and resets page & items", () => {
    useRepoStore.setState({ page: 3, items: mockItems(2) });

    useRepoStore.getState().setQuery("react");

    const state = useRepoStore.getState();
    expect(state.query).toBe("react");
    expect(state.page).toBe(1);
    expect(state.items).toEqual([]);
  });

  it("setSort updates sort and resets page & items", () => {
    useRepoStore.setState({ page: 2, items: mockItems(1) });

    useRepoStore.getState().setSort("updated");

    const state = useRepoStore.getState();
    expect(state.sort).toBe("updated");
    expect(state.page).toBe(1);
    expect(state.items).toEqual([]);
  });

  it("setOrder updates order and resets page & items", () => {
    useRepoStore.setState({ page: 4, items: mockItems(3) });

    useRepoStore.getState().setOrder("asc");

    const state = useRepoStore.getState();
    expect(state.order).toBe("asc");
    expect(state.page).toBe(1);
    expect(state.items).toEqual([]);
  });

  it("setPage updates page without touching items", () => {
    const items = mockItems(2);
    useRepoStore.setState({ items });

    useRepoStore.getState().setPage(5);

    const state = useRepoStore.getState();
    expect(state.page).toBe(5);
    expect(state.items).toEqual(items);
  });

  it("setResult replaces items when append is false", () => {
    useRepoStore.setState({ items: mockItems(2) });

    const newItems = mockItems(1);
    useRepoStore.getState().setResult(newItems, 1, false);

    const state = useRepoStore.getState();
    expect(state.items).toEqual(newItems);
    expect(state.total_count).toBe(1);
  });

  it("setResult appends items when append is true", () => {
    const existing = mockItems(2);
    useRepoStore.setState({ items: existing });

    const nextPage = mockItems(1);
    useRepoStore.getState().setResult(nextPage, 3, true);

    const state = useRepoStore.getState();
    expect(state.items).toHaveLength(3);
    expect(state.total_count).toBe(3);
  });

  it("setResult defaults append to false when not provided", () => {
    useRepoStore.setState({ items: mockItems(5) });

    useRepoStore.getState().setResult(mockItems(1), 1);

    expect(useRepoStore.getState().items).toHaveLength(1);
  });

  it("setStatus updates status and clears error_messages", () => {
    useRepoStore.setState({ error_messages: "some previous error" });

    useRepoStore.getState().setStatus("loading");

    const state = useRepoStore.getState();
    expect(state.status).toBe("loading");
    expect(state.error_messages).toBeNull();
  });

  it("setError sets status to error and stores the message", () => {
    useRepoStore.getState().setError("Failed to fetch");

    const state = useRepoStore.getState();
    expect(state.status).toBe("error");
    expect(state.error_messages).toBe("Failed to fetch");
  });

  it("reset restores the initial state", () => {
    useRepoStore.setState({
      query: "react",
      sort: "updated",
      order: "asc",
      page: 5,
      items: mockItems(3),
      total_count: 3,
      status: "success",
      error_messages: null,
    });

    useRepoStore.getState().reset();

    const state = useRepoStore.getState();
    expect(state.query).toBe("");
    expect(state.sort).toBe("stars");
    expect(state.order).toBe("desc");
    expect(state.page).toBe(1);
    expect(state.items).toEqual([]);
    expect(state.total_count).toBe(0);
    expect(state.status).toBe("idle");
  });
});
