import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toasts({ toasts, remove }) {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`rounded-xl px-4 py-3 shadow-lg border ${
              t.variant === "destructive"
                ? "bg-red-600 text-white border-red-700"
                : t.variant === "success"
                ? "bg-green-600 text-white border-green-700"
                : "bg-black text-white border-black"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <span>{t.message}</span>
              <button
                onClick={() => remove(t.id)}
                className="text-xs underline opacity-80"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
