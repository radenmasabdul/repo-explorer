import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";

export const variantConfig = {
  success: {
    icon: CheckCircle2,
    className: "border-green-500/50 text-green-600",
  },
  error: {
    icon: AlertCircle,
    className: "border-destructive/50 text-destructive",
  },
  warning: {
    icon: TriangleAlert,
    className: "border-yellow-500/50 text-yellow-600",
  },
  info: { icon: Info, className: "border-blue-500/50 text-blue-600" },
};
