import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        w-9 h-9 flex items-center justify-center 
        rounded-lg border border-gray-300 dark:border-gray-700
        bg-white dark:bg-black
        text-gray-900 dark:text-gray-200
        transition
      "
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
