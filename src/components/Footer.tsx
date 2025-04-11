
import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Facebook, Twitter, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Globe size={18} />, href: "#" },
  ];
  
  const footerLinks = [
    { title: "من نحن", href: "#about" },
    { title: "سياسة الخصوصية", href: "#privacy" },
    { title: "الشروط والأحكام", href: "#terms" },
    { title: "اتصل بنا", href: "#contact" },
  ];

  return (
    <footer className={`mt-16 ${isVisible ? 'animate-fade-in' : ''}`}>
      <div className={`
        relative py-10 overflow-hidden
        ${theme === "light" 
          ? "bg-gradient-to-r from-fantasy-day-primary to-fantasy-day-secondary" 
          : "bg-gradient-to-r from-fantasy-night-primary to-fantasy-night-secondary"}
      `}>
        {/* Mystical Patterns Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='${theme === "light" ? "%23D4AF37" : "%23C0C0C0"}' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '150px',
          }}></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
            {/* Logo and About */}
            <div className="lg:col-span-2">
              <h2 className={`
                text-2xl font-bold mb-4 font-fantasy
                ${theme === "light" ? "text-gold" : "text-silver"}
              `}>
                أسطورة الكلمة
              </h2>
              <p className="mb-4 text-sm">
                بوابتك إلى عالم من الأساطير والقصص الملهمة التي تأخذك في رحلة خيالية فريدة من خلال تاريخ وثقافات الشعوب المختلفة.
              </p>
              
              {/* Social Links */}
              <div className="flex flex-row-reverse gap-4 mt-6">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href}
                    className={`
                      p-2 rounded-full transition-all duration-300
                      ${theme === "light" 
                        ? "bg-fantasy-day-accent/20 text-fantasy-day-accent hover:bg-fantasy-day-accent hover:text-white" 
                        : "bg-fantasy-night-accent/20 text-fantasy-night-accent hover:bg-fantasy-night-accent hover:text-white"}
                    `}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Footer Links */}
            <div>
              <h3 className="text-lg font-medium mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className={`
                        text-sm hover:underline
                        ${theme === "light" ? "text-fantasy-day-text" : "text-fantasy-night-text"}
                      `}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter Subscription */}
            <div>
              <h3 className="text-lg font-medium mb-4">النشرة البريدية</h3>
              <p className="text-sm mb-3">اشترك للحصول على التحديثات</p>
              <form className="flex flex-row-reverse">
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  className={`
                    flex-1 py-2 px-3 rounded-r-md text-right
                    ${theme === "light" ? "bg-white/70 text-gray-800" : "bg-white/10 text-white"}
                    focus:outline-none
                  `}
                />
                <button 
                  type="submit" 
                  className={`
                    py-2 px-4 rounded-l-md
                    ${theme === "light" 
                      ? "bg-fantasy-day-accent text-white" 
                      : "bg-fantasy-night-accent text-white"}
                  `}
                >
                  اشترك
                </button>
              </form>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-10 pt-6 border-t border-gray-200/20 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} أسطورة الكلمة - جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
