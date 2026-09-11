import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { NavigationButtonProps } from "@/types/components";

export default function Navigation({
  direction = "back",
  to,
  label,
}: NavigationButtonProps) {
  const isBack = direction === "back";

  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      {isBack && <ArrowLeft className="h-4 w-4" />}

      {label}

      {!isBack && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}
