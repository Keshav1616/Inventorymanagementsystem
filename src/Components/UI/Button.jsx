import React from "react";

export const Button = ({ children, variant = "default", size = "md", ...props }) => {
  const base = "rounded-xl px-4 py-2 font-medium transition active:scale-95";
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-3 text-lg",
  };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  );
};
