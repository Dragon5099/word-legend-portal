
import React from "react";
import { useTheme } from "./ThemeProvider";

const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div 
        className={`
          absolute inset-0 transition-all duration-700 ease-in-out
          ${isDark ? 'night-background' : 'day-background'}
        `}
      >
        {/* Day Mode Elements - Trees, Sun, etc. */}
        {!isDark && (
          <div className="absolute inset-0">
            {/* Sun Light Effect */}
            <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-yellow-200 opacity-50 blur-3xl animate-pulse-3d"></div>
            
            {/* Ground */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-fantasy-day-highlight to-transparent"></div>
            
            {/* Trees (simplified SVG representation) */}
            <div className="absolute bottom-0 left-10 w-40 h-80 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="w-16 h-64 mx-auto bg-gradient-to-b from-amber-800 to-amber-900 rounded-md"></div>
              <div className="absolute bottom-48 w-40 h-40 bg-gradient-to-b from-green-600 to-green-800 rounded-full"></div>
              <div className="absolute bottom-32 w-36 h-36 bg-gradient-to-b from-green-500 to-green-700 rounded-full"></div>
              <div className="absolute bottom-16 w-32 h-32 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
            </div>
            
            <div className="absolute bottom-0 right-20 w-32 h-64 animate-float" style={{ animationDelay: "0.8s" }}>
              <div className="w-12 h-48 mx-auto bg-gradient-to-b from-amber-800 to-amber-900 rounded-md"></div>
              <div className="absolute bottom-36 w-32 h-32 bg-gradient-to-b from-green-600 to-green-800 rounded-full"></div>
              <div className="absolute bottom-24 w-28 h-28 bg-gradient-to-b from-green-500 to-green-700 rounded-full"></div>
              <div className="absolute bottom-12 w-24 h-24 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
            </div>
            
            {/* Golden Patterns */}
            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-yellow-400 opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute top-2/3 left-1/2 w-24 h-24 bg-yellow-400 opacity-10 rounded-full blur-xl"></div>
          </div>
        )}
        
        {/* Night Mode Elements - Stars, Moon, etc. */}
        {isDark && (
          <div className="absolute inset-0">
            {/* Moon Light Effect */}
            <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-indigo-100 opacity-20 blur-3xl"></div>
            
            {/* Stars */}
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-white animate-pulse-3d"
                  style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 70}%`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                    animationDelay: `${Math.random() * 2}s`,
                    opacity: Math.random() * 0.7 + 0.3
                  }}
                ></div>
              ))}
              
              {/* Larger stars with glow effect */}
              {[...Array(15)].map((_, i) => (
                <div 
                  key={`large-${i}`}
                  className="absolute rounded-full bg-blue-100 animate-pulse-3d"
                  style={{
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 4 + 2}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 70}%`,
                    animationDuration: `${Math.random() * 4 + 3}s`,
                    animationDelay: `${Math.random() * 2}s`,
                    boxShadow: `0 0 ${Math.random() * 5 + 3}px rgba(147, 197, 253, 0.7)`,
                    opacity: Math.random() * 0.8 + 0.5
                  }}
                ></div>
              ))}
              
              {/* Supernovas (rare, larger stars that flash) */}
              {[...Array(3)].map((_, i) => (
                <div 
                  key={`nova-${i}`}
                  className="absolute rounded-full bg-purple-200 animate-sparkle"
                  style={{
                    width: `${Math.random() * 6 + 3}px`,
                    height: `${Math.random() * 6 + 3}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 60}%`,
                    animationDuration: `${Math.random() * 5 + 5}s`,
                    animationDelay: `${Math.random() * 10}s`,
                    boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(216, 180, 254, 0.9)`,
                  }}
                ></div>
              ))}
            </div>
            
            {/* Dark Silhouette Trees */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4">
              <div className="absolute bottom-0 left-10 w-40 h-40 bg-black opacity-30 rounded-t-full"></div>
              <div className="absolute bottom-0 left-40 w-20 h-60 bg-black opacity-30 rounded-t-full"></div>
              <div className="absolute bottom-0 right-20 w-30 h-50 bg-black opacity-30 rounded-t-full"></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Content Overlay */}
      <div className="relative container mx-auto px-4 pt-32 pb-20 h-screen flex flex-col justify-center items-center text-center z-10">
        <h1 
          className={`
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8
            font-fantasy tracking-wider
            ${theme === "light" ? "text-gold" : "text-silver"}
            animate-fade-in
          `}
          style={{ textShadow: theme === "light" ? 
            "0 2px 4px rgba(0,0,0,0.1)" : 
            "0 2px 5px rgba(0,0,0,0.3)" }}
        >
          أسطورة الكلمة
        </h1>
        
        <p 
          className={`
            text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8
            animate-slide-up
            ${theme === "light" ? "text-fantasy-day-text" : "text-fantasy-night-text"}
          `}
          style={{animationDelay: "0.2s"}}
        >
          بوابتك إلى عالم من الأساطير والقصص الملهمة التي تأخذك في رحلة خيالية فريدة
        </p>
        
        <div 
          className="crystal-card px-6 py-3 rounded-full text-lg font-medium cursor-pointer hover:shadow-lg transition-all duration-300 animate-slide-up"
          style={{animationDelay: "0.4s"}}
        >
          ابدأ الرحلة
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
