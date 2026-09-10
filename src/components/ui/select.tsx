import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NativeSelect = React.forwardRef<HTMLSelectElement, React.ComponentProps<"select">>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "flex h-11 w-full appearance-none rounded-md border border-border bg-muted/60 px-4 pr-10 text-base text-foreground transition-colors focus-visible:border-accent disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          aria-hidden
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        />
      </div>
    );
  },
);
NativeSelect.displayName = "NativeSelect";

export { NativeSelect };
