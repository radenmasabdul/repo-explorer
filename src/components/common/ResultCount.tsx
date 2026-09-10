import type { ResultCountProps }from "@/types/components";

export default function ResultCount({
  count,
  isLoading = false,
  isError = false,
  label = "repositories",
}: ResultCountProps) {
  if (isLoading || isError) {
    return null;
  };

  return (
    <p className="mb-4 text-sm text-muted-foreground">
      {count === 0 ? `No ${label} found` : `Showing ${count} ${label}`}
    </p>
  );
};
