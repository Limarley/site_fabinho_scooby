"use client";

import { useEffect } from "react";

/** Garante o scroll até a âncora da SPA no carregamento e em mudanças de hash. */
export function HashScroll() {
  useEffect(() => {
    const go = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const t = window.setTimeout(go, 50);
    window.addEventListener("hashchange", go);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", go);
    };
  }, []);

  return null;
}
