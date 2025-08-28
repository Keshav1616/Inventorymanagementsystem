import React from "react";

export const Card = ({ children }) => {
  return (
    <div className="p-4 rounded-2xl shadow bg-white dark:bg-gray-800">
      {children}
    </div>
  );
};
