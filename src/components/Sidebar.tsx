
import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Mail, Check } from "lucide-react";

const Sidebar = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showSubscribeInput, setShowSubscribeInput] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
        setShowSubscribeInput(false);
      }, 3000);
    }
  };

  return (
    <aside className="w-full lg:w-64 space-y-6">
      {/* Author Section */}
      <div className="crystal-card p-6 rounded-xl">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-24 h-24 mb-4">
            {/* Author Image with floating animation */}
            <div className="absolute inset-0 rounded-full overflow-hidden animate-float">
              <div 
                className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 opacity-50 absolute"
              ></div>
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                alt="الكاتب"
                className="w-full h-full object-cover rounded-full"
              />
              {/* Glow effect */}
              <div 
                className={`absolute inset-0 rounded-full animate-pulse opacity-70 ${theme === "light" ? "bg-blue-400" : "bg-purple-600"}`}
                style={{ 
                  filter: "blur(15px)",
                  animationDuration: "3s" 
                }}
              ></div>
            </div>
          </div>
          <h3 className="text-lg font-fantasy font-semibold mb-2">أحمد الراوي</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">كاتب وباحث في الأساطير والتراث</p>
          <div className={`h-0.5 w-12 mb-3 ${theme === "light" ? "bg-fantasy-day-accent" : "bg-fantasy-night-accent"}`}></div>
          <p className="text-xs">كاتب يبحر في عوالم الخيال والأساطير، يجمع بين التراث القديم والرؤى المعاصرة</p>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="crystal-card p-6 rounded-xl">
        <h3 className="font-fantasy text-lg font-semibold mb-4 text-right">أفضل المقالات</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div 
              key={index} 
              className={`
                flex flex-row-reverse gap-3 p-2 rounded-lg 
                transition-all duration-300 cursor-pointer
                ${theme === "light" 
                  ? "hover:bg-fantasy-day-secondary/50" 
                  : "hover:bg-fantasy-night-secondary/50"}
              `}
            >
              <div className="w-16 h-16 rounded-md overflow-hidden parallax-effect">
                <img 
                  src={`https://source.unsplash.com/random/100x100?fantasy&sig=${index}`} 
                  alt="مقال شائع" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-right">
                <h4 className="text-sm font-semibold line-clamp-2">رحلة إلى عوالم الأساطير القديمة {index + 1}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">منذ {index + 2} أيام</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="crystal-card p-6 rounded-xl">
        <h3 className="font-fantasy text-lg font-semibold mb-3 text-right">النشرة البريدية</h3>
        <p className="text-sm mb-4 text-right">اشترك للحصول على أحدث المقالات والقصص</p>
        
        {!showSubscribeInput ? (
          <button 
            onClick={() => setShowSubscribeInput(true)}
            className={`
              w-full py-2 px-4 rounded-lg font-medium text-sm
              transition-all duration-300
              flex items-center justify-center gap-2
              ${theme === "light" 
                ? "bg-fantasy-day-accent text-white hover:bg-opacity-90" 
                : "bg-fantasy-night-accent text-white hover:bg-opacity-90"}
            `}
          >
            <Mail size={16} />
            <span>اشترك الآن</span>
          </button>
        ) : (
          <form onSubmit={handleSubscribe} className="animate-slide-up">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                required
                className={`
                  w-full py-2 px-4 rounded-lg text-sm bg-white/70 dark:bg-black/20
                  focus:outline-none focus:ring-2 
                  ${theme === "light" 
                    ? "focus:ring-fantasy-day-accent/50 border-fantasy-day-accent/20" 
                    : "focus:ring-fantasy-night-accent/50 border-fantasy-night-accent/20"}
                  border text-right
                `}
              />
              <button
                type="submit"
                className={`
                  absolute left-1 top-1 bottom-1 px-3 rounded-md
                  ${theme === "light" 
                    ? "bg-fantasy-day-accent text-white" 
                    : "bg-fantasy-night-accent text-white"}
                  ${isSubscribed ? "flex items-center justify-center" : ""}
                `}
              >
                {isSubscribed ? <Check className="w-4 h-4" /> : "اشترك"}
              </button>
            </div>
          </form>
        )}
        
        {isSubscribed && (
          <div className="mt-2 text-center text-xs text-green-600 dark:text-green-400 animate-fade-in">
            تم الاشتراك بنجاح! شكرًا لك.
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
