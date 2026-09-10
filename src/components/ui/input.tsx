import * as React from "react";
import { cn } from "@/lib/utils";

const fieldClasses =
  "flex w-full rounded-lg border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted transition-colors focus-visible:border-accent aria-[invalid=true]:border-red-600 disabled:cursor-not-allowed disabled:opacity-50";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(fieldClasses, "h-11", className)}
      {...props}
    />
  );
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(fieldClasses, "min-h-36 py-3 resize-y", className)}
      {...props}
    />
  );
}

function Select({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(fieldClasses, "h-11 appearance-none pr-10", className)}
      {...props}
    />
  );
}

export { Input, Textarea, Select, fieldClasses };
