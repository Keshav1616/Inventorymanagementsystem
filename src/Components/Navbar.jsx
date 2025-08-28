import React from "react";
import { Button } from "./UI/Button";

export default function Navbar({ setCommandOpen }) {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-800 shadow-sm">
      <h1 className="text-xl font-bold">Store Manager</h1>
      <Button variant="default" onClick={() => setCommandOpen(true)}>
        ⌘K Command
      </Button>
    </header>
  );
}
