"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeTest() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 p-4 bg-card border rounded-lg shadow-lg">
      <div className="space-y-2">
        <p className="text-sm font-medium">Current Theme: {theme}</p>
        <div className="flex gap-2">
          <Button 
            size="sm" 
            onClick={() => setTheme("light")}
            variant={theme === "light" ? "default" : "outline"}
          >
            Light
          </Button>
          <Button 
            size="sm" 
            onClick={() => setTheme("dark")}
            variant={theme === "dark" ? "default" : "outline"}
          >
            Dark
          </Button>
          <Button 
            size="sm" 
            onClick={() => setTheme("system")}
            variant={theme === "system" ? "default" : "outline"}
          >
            System
          </Button>
        </div>
        <div className="text-xs text-muted-foreground">
          Background: <span className="bg-background px-1 rounded">bg-background</span>
        </div>
        <div className="text-xs text-muted-foreground">
          Text: <span className="text-foreground">text-foreground</span>
        </div>
      </div>
    </div>
  );
} 