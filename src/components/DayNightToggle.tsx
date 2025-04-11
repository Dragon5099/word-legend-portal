
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const DayNightToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
    }, 150);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div 
      className={`
        cursor-pointer relative w-12 h-12 
        perspective-1000 preserve-3d
        rounded-full flex items-center justify-center
        ${theme === "light" 
          ? "bg-gradient-to-br from-yellow-200 to-yellow-400" 
          : "bg-gradient-to-br from-indigo-800 to-purple-900"}
        ${isAnimating ? "animate-pulse-3d" : ""}
        transition-colors duration-300
      `}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <Sun 
          className="w-6 h-6 text-yellow-600" 
          strokeWidth={2.5} 
        />
      ) : (
        <Moon 
          className="w-6 h-6 text-indigo-200" 
          strokeWidth={2.5} 
        />
      )}
      <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm" />
    </div>
  );
};

export default DayNightToggle;
