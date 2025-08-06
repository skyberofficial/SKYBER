"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeDebug() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("🔍 Theme Debug - Initial theme:", theme);
    console.log("🔍 Theme Debug - Resolved theme:", resolvedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      console.log("🔍 Theme Debug - Theme changed to:", theme);
      console.log("🔍 Theme Debug - Resolved theme:", resolvedTheme);
      console.log("🔍 Theme Debug - Document classList:", document.documentElement.classList.toString());
    }
  }, [theme, resolvedTheme, mounted]);

  const handleThemeChange = (newTheme: string) => {
    console.log("🔍 Theme Debug - Setting theme to:", newTheme);
    setTheme(newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 z-50 p-4 bg-card border rounded-lg shadow-lg max-w-xs">
      <div className="space-y-2">
        <h3 className="text-sm font-bold">Theme Debug</h3>
        <div className="text-xs space-y-1">
          <p>Theme: <span className="font-mono bg-muted px-1 rounded">{theme}</span></p>
          <p>Resolved: <span className="font-mono bg-muted px-1 rounded">{resolvedTheme}</span></p>
          <p>Classes: <span className="font-mono bg-muted px-1 rounded text-xs break-all">{document.documentElement.classList.toString()}</span></p>
        </div>
        <div className="flex gap-1">
          <button 
            onClick={() => handleThemeChange("light")}
            className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Light
          </button>
          <button 
            onClick={() => handleThemeChange("dark")}
            className="px-2 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Dark
          </button>
          <button 
            onClick={() => handleThemeChange("system")}
            className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600"
          >
            System
          </button>
        </div>
        <div className="text-xs text-muted-foreground">
          Check console for detailed logs
        </div>
      </div>
    </div>
  );
} 