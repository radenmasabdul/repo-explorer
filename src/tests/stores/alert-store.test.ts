import { useAlertStore } from "@/stores/alert-store";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

describe("alert-store", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    useAlertStore.setState({ alert: null });
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("has null alert by default", () => {
    expect(useAlertStore.getState().alert).toBeNull();
  });

  it("sets alert when showAlert is called", () => {
    useAlertStore.getState().showAlert({
      variant: "success",
      title: "Berhasil",
      description: "Test alert",
    });

    expect(useAlertStore.getState().alert).toEqual({
      variant: "success",
      title: "Berhasil",
      description: "Test alert",
    });
  });

  it("auto-clears alert after default duration (3000ms)", () => {
    useAlertStore.getState().showAlert({
      variant: "info",
      title: "Info",
    });

    expect(useAlertStore.getState().alert).not.toBeNull();

    vi.advanceTimersByTime(3000);

    expect(useAlertStore.getState().alert).toBeNull();
  });

  it("auto-clears alert after custom duration", () => {
    useAlertStore
      .getState()
      .showAlert({ variant: "info", title: "Info" }, 1000);

    vi.advanceTimersByTime(999);
    expect(useAlertStore.getState().alert).not.toBeNull();

    vi.advanceTimersByTime(1);
    expect(useAlertStore.getState().alert).toBeNull();
  });

  it("resets timer when showAlert is called again before duration ends", () => {
    useAlertStore
      .getState()
      .showAlert({ variant: "info", title: "First" }, 3000);

    vi.advanceTimersByTime(2000);

    useAlertStore
      .getState()
      .showAlert({ variant: "success", title: "Second" }, 3000);

    vi.advanceTimersByTime(2000);
    expect(useAlertStore.getState().alert?.title).toBe("Second");

    vi.advanceTimersByTime(1000);
    expect(useAlertStore.getState().alert).toBeNull();
  });

  it("closeAlert clears alert immediately and cancels pending timeout", () => {
    useAlertStore.getState().showAlert({ variant: "info", title: "Info" });

    useAlertStore.getState().closeAlert();
    expect(useAlertStore.getState().alert).toBeNull();

    vi.advanceTimersByTime(3000);
    expect(useAlertStore.getState().alert).toBeNull();
  });
});
