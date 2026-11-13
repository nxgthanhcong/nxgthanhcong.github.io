import React from "react";

// Placeholder shown while a section's JSON is loading.
export const SectionSkeleton = ({ lines = 4 }: { lines?: number }) => (
  <div role="status" aria-label="Loading" className="animate-pulse space-y-3 py-2">
    <div className="h-4 w-1/3 rounded bg-slate-700/60" />
    {Array.from({ length: lines }, (_, i) => (
      <div
        key={i}
        className={`h-3 rounded bg-slate-700/40 ${i === lines - 1 ? "w-2/3" : "w-full"}`}
      />
    ))}
  </div>
);

// Shown when a section's JSON could not be loaded (after retries).
export const SectionError = () => (
  <p role="alert" className="py-2 text-lg text-slate-400">
    Couldn’t load this section. Please refresh the page.
  </p>
);
