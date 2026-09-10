import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface CardProps {
  to: string;
  image?: ReactNode;
  badge?: ReactNode;
  subheader?: string;
  title: string;
  description?: string;
  footer?: ReactNode;
  className?: string;
};

export default function Card({
  to,
  image,
  badge,
  subheader,
  title,
  description,
  footer,
  className,
}: CardProps) {
  return (
    <Link
      to={to}
      className={`entity-card group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-300 ${className ?? ""}`}
    >
      {image && (
        <div className="relative overflow-hidden bg-muted">
          {image}
          {badge && <div className="absolute left-3 top-3">{badge}</div>}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        {subheader && (
          <span className="truncate text-xs text-muted-foreground">
            {subheader}
          </span>
        )}

        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        {description && (
          <p className="line-clamp-2 text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}

        {footer && <div className="mt-auto pt-3">{footer}</div>}
      </div>
    </Link>
  );
};
