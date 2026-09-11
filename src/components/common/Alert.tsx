import {
  Alert as ShadcnAlert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { variantConfig } from "@/constants";
import type { AlertProps } from "@/types/components";
import { useAlertStore } from "@/stores/alert-store";

function Alert({
  variant = "info",
  title,
  description,
  className,
}: AlertProps) {
  
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <ShadcnAlert className={`${config.className} ${className ?? ""}`}>
      <Icon className="h-4 w-4" />
      {title && <AlertTitle>{title}</AlertTitle>}
      {description && <AlertDescription>{description}</AlertDescription>}
    </ShadcnAlert>
  );
};

export default function GlobalAlert() {
  const alert = useAlertStore((state) => state.alert);

  if (!alert) {
    return null;
  };

  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 w-[calc(100%-2rem)] max-w-sm">
      <Alert
        variant={alert.variant}
        title={alert.title}
        description={alert.description}
        className="pointer-events-auto shadow-lg"
      />
    </div>
  );
};
