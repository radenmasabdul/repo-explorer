import { create } from "zustand";
import type { AlertProps } from "@/types/components";

interface AlertState {
  alert: AlertProps | null;
  showAlert: (alert: AlertProps, duration?: number) => void;
  closeAlert: () => void;
}

let timeoutId: ReturnType<typeof setTimeout> | null = null;

export const useAlertStore = create<AlertState>((set) => ({
  alert: null,

  showAlert: (alert, duration = 3000) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    };

    set({ alert });

    timeoutId = setTimeout(() => {
      set({ alert: null });
      timeoutId = null;
    }, duration);
  },

  closeAlert: () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    set({ alert: null });
  },
}));
