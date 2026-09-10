import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { useThemeStore } from "./stores/theme-store";

export default function App() {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  
  return <AppRouter />;
};
