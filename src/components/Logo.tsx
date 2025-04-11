
import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";

const Logo = () => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20">
      <div
        className={`
          absolute inset-0 rounded-full
          preserve-3d perspective-1000
          ${isHovered ? "animate-pulse-3d" : "animate-float"}
          cursor-pointer transition-all duration-300
          ${theme === "light" 
            ? "bg-gradient-to-r from-blue-300/30 to-purple-300/30" 
            : "bg-gradient-to-r from-blue-900/30 to-purple-900/30"}
          backdrop-blur-xl border
          ${theme === "light" ? "border-white/50" : "border-white/20"}
          shadow-lg
          ${theme === "light" 
            ? "shadow-blue-200/50" 
            : "shadow-blue-500/20"}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Crystal Sphere */}
        <div 
          className="absolute inset-0 rounded-full overflow-hidden animate-rotate-slow"
          style={{
            background: theme === "light" 
              ? "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1))" 
              : "radial-gradient(circle at 30% 30%, rgba(180, 180, 255, 0.4), rgba(50, 50, 80, 0.1))"
          }}
        />
        
        {/* Golden Feather */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: "translateZ(5px)" }}
        >
          <div 
            className={`w-10 h-10 sm:w-12 sm:h-12 ${isHovered ? "scale-110" : "scale-100"} transition-transform duration-300`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${theme === "light" ? '%23D4AF37' : '%23C0C0C0'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z'/%3E%3Cline x1='16' y1='8' x2='2' y2='22'/%3E%3Cline x1='17.5' y1='15' x2='9' y2='15'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: `drop-shadow(0 0 3px ${theme === "light" ? "#D4AF37" : "#C0C0C0"})`
            }}
          />
        </div>

        {/* Sparkle Effects */}
        {isHovered && (
          <>
            <div className="absolute top-0 right-1 w-2 h-2 bg-white rounded-full animate-sparkle" 
                 style={{ animationDelay: "0s" }} />
            <div className="absolute bottom-2 left-1 w-2 h-2 bg-white rounded-full animate-sparkle" 
                 style={{ animationDelay: "0.3s" }} />
            <div className="absolute top-2 left-3 w-1 h-1 bg-white rounded-full animate-sparkle" 
                 style={{ animationDelay: "0.5s" }} />
            <div className="absolute bottom-1 right-3 w-1 h-1 bg-white rounded-full animate-sparkle" 
                 style={{ animationDelay: "0.7s" }} />
          </>
        )}
      </div>
    </div>
  );
};

export default Logo;
