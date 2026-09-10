import { useEffect } from "react";
import { useThemeStore } from "./stores/theme-store";
import AppRouter from "./routes/AppRouter";
import GlobalAlert from "./components/common/Alert";

export default function App() {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  
  return (
    <>
      <AppRouter />
      <GlobalAlert />
    </>
  );
};
