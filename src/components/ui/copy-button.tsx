"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";

type Props = Omit<ButtonProps, "onClick" | "children"> & {
  text: string;
  label?: string;
  copiedLabel?: string;
};

export function CopyButton({
  text,
  label = "Copiar texto",
  copiedLabel = "Copiado",
  variant = "outline",
  size = "sm",
  ...props
}: Props) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 2000);
    return () => clearTimeout(t);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("error");
    }
  };

  return (
    <Button type="button" variant={variant} size={size} onClick={copy} {...props}>
      {state === "copied" ? <Check /> : <Copy />}
      {state === "copied" ? copiedLabel : state === "error" ? "Não foi possível copiar" : label}
      <span role="status" aria-live="polite" className="sr-only">
        {state === "copied" ? "Texto copiado para a área de transferência." : ""}
      </span>
    </Button>
  );
}
