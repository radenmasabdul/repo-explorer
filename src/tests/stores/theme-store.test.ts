import { describe, it, expect, beforeEach } from "vitest";
import { useThemeStore } from "@/stores/theme-store";

describe("theme-store", () => {
  beforeEach(() => {
    localStorage.clear();
    useThemeStore.setState({ theme: "light" });
  });

  it("defaults to light theme", () => {
    expect(useThemeStore.getState().theme).toBe("light");
  });

  it("toggleTheme switches from light to dark", () => {
    useThemeStore.getState().toggleTheme();
    expect(useThemeStore.getState().theme).toBe("dark");
  });

  it("toggleTheme switches from dark back to light", () => {
    useThemeStore.getState().toggleTheme();
    useThemeStore.getState().toggleTheme();
    expect(useThemeStore.getState().theme).toBe("light");
  });

  it("setTheme sets theme explicitly", () => {
    useThemeStore.getState().setTheme("dark");
    expect(useThemeStore.getState().theme).toBe("dark");

    useThemeStore.getState().setTheme("light");
    expect(useThemeStore.getState().theme).toBe("light");
  });
});
