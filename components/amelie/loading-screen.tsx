"use client";

import { useEffect, useState } from "react";
import { LOADING_MESSAGES } from "@/lib/wizard-data";

export function LoadingScreen() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-fade-in flex min-h-screen flex-col items-center justify-center gap-8 p-4">
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="bg-primary size-4 rounded-full animate-bounce-soft"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <p className="text-muted-foreground text-lg transition-opacity duration-300">
        {LOADING_MESSAGES[messageIndex]}
      </p>
    </div>
  );
}
