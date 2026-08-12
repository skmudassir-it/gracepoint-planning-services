"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      richColors
      closeButton
      toastOptions={{
        style: {
          borderRadius: "0.9rem",
          backdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.85)",
          border: "1px solid rgba(59,74,90,0.15)",
        },
      }}
    />
  );
}
