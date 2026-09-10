import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-sm transition-colors",
        className,
      )}
      {...props}
    />
  );
}

export { Card };
