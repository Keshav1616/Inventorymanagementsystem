import React, { useState, useEffect } from "react";
import { Input } from "./UI/Input";

export default function CommandPalette({ open, setOpen, actions }) {
  const [query, setQuery] = useState("");

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  // open with Ctrl+K
  useEffect(() => {
    const onDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onDown);
    return () => window.removeEventListener("keydown", onDown);
  }, [setOpen]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex items-start justify-center p-6"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-3 border-b">
          <Input
            autoFocus
            placeholder="Type a command…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="max-h-64 overflow-auto divide-y">
          {filtered.map((a) => (
            <button
              key={a.id}
              onClick={() => {
                a.run();
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {a.label}
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="px-3 py-4 text-sm opacity-60">No matches</div>
          )}
        </div>
      </div>
    </div>
  );
}
