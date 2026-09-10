import { Link } from "react-router-dom";
import { ArrowLeft, PackageSearch } from "lucide-react";
import type { PageStateProps } from "@/types/components";

export default function PageState({
  isLoading = false,
  isError = false,
  loadingMessage = "Loading data...",
  errorTitle = "Data not found",
  errorDescription = "The data you are looking for is not available.",
  backTo = "/",
  backLabel = "Go Back",
}: PageStateProps) {
  if (isLoading) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center justify-center px-4 sm:px-6">
        <p className="text-sm text-muted-foreground">{loadingMessage}</p>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center justify-center px-4 sm:px-6">
        <div className="text-center">
          <PackageSearch className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />

          <h1 className="text-2xl font-bold text-foreground">{errorTitle}</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            {errorDescription}
          </p>

          <Link
            to={backTo}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        </div>
      </main>
    );
  }

  return null;
}
