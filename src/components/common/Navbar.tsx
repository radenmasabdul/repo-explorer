import { Link, useLocation } from "react-router-dom";
import { Code2, Heart, Moon, Sun } from "lucide-react";
import { useFavoriteStore } from "@/stores/favorite-store";
import { useThemeStore } from "@/stores/theme-store";

export default function Navbar() {
  const location = useLocation();
  const totalFavorites = useFavoriteStore((state) => state.favorites.length);
  const { theme, toggleTheme } = useThemeStore();
  const hasFavorites = totalFavorites > 0;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Code2 className="h-4 w-4" />
          </div>

          <span>
            Repo<span className="text-primary">Explorer</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            to="/favorites"
            className={`relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              location.pathname === "/favorites"
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            }`}
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                hasFavorites
                  ? "fill-red-500 text-red-500"
                  : "text-muted-foreground"
              }`}
            />
            
            <span className="hidden sm:inline">Favorites</span>

            {totalFavorites > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {totalFavorites > 99 ? "99+" : totalFavorites}
              </span>
            )}
          </Link>

          <button
            onClick={toggleTheme}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
