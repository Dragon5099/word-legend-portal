
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import DayNightToggle from "./DayNightToggle";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "الرئيسية", href: "/" },
    { label: "المقالات", href: "#articles" },
    { label: "الأقسام", href: "#categories" },
    { label: "من نحن", href: "#about" },
    { label: "اتصل بنا", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${scrolled
          ? "py-2 backdrop-blur-md bg-white/70 dark:bg-black/70 shadow-md"
          : "py-4 bg-transparent"}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Site Title */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo />
            <h1 className={`
              text-xl sm:text-2xl lg:text-3xl font-bold font-fantasy
              ${theme === "light" ? "text-gold" : "text-silver"}
              transform transition-transform duration-300 hover:scale-105
            `}>
              أسطورة الكلمة
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <NavLink key={index} href={item.href} label={item.label} />
            ))}
            <div className="ml-4 rtl:mr-4">
              <DayNightToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4 rtl:space-x-reverse">
            <DayNightToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="crystal-card p-2 rounded-lg"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 crystal-card rounded-xl p-4 animate-fade-in">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index} className="block w-full">
                  <a
                    href={item.href}
                    className={`
                      block w-full py-2 px-3 rounded-md text-right
                      ${theme === "light" 
                        ? "hover:bg-fantasy-day-accent/20" 
                        : "hover:bg-fantasy-night-accent/20"}
                      transition-colors duration-200
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className={`
        relative py-2 px-3 rounded-md text-lg
        ${theme === "light" 
          ? "hover:bg-fantasy-day-accent/10" 
          : "hover:bg-fantasy-night-accent/20"}
        transition-all duration-300
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{label}</span>
      {isHovered && (
        <span 
          className={`
            absolute bottom-0 left-0 h-0.5 w-0 
            ${theme === "light" ? "bg-fantasy-day-accent" : "bg-fantasy-night-accent"}
            animate-[grow_0.3s_ease_forwards]
          `}
          style={{
            animation: "grow 0.3s ease forwards",
            '@keyframes grow': {
              '0%': { width: '0%' },
              '100%': { width: '100%' },
            }
          }}
        />
      )}
    </a>
  );
};

export default Header;
