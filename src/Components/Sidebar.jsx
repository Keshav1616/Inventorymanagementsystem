import React from "react";

export default function Sidebar({ tab, setTab }) {
  const links = [
    { id: "dashboard", label: "Dashboard" },
    { id: "inventory", label: "Inventory" },
    { id: "purchases", label: "Purchases" },
  ];

  return (
    <aside className="w-60 border-r bg-white dark:bg-gray-800 p-4">
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => setTab(link.id)}
            className={`p-2 rounded-lg text-left ${
              tab === link.id ? "bg-gray-200 dark:bg-gray-700" : ""
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
