
import React from 'react';
import { useTheme } from './ThemeProvider';

// Sample post data
const recentPosts = [
  {
    id: 1,
    title: "أساطير الشرق القديم وتأثيرها على الأدب المعاصر",
    excerpt: "استكشاف للعلاقة بين الأساطير القديمة وكيف شكلت الأدب الحديث...",
    image: "https://images.unsplash.com/photo-1515645998177-facd2b31cadd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    date: "منذ 3 أيام",
    category: "تاريخ الأساطير"
  },
  {
    id: 2,
    title: "رحلة مع الآلهة اليونانية: قصص وحكايات",
    excerpt: "تعرف على أشهر الآلهة في الميثولوجيا اليونانية وقصصهم المثيرة...",
    image: "https://images.unsplash.com/photo-1598979374269-055aa15a29c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    date: "منذ 5 أيام",
    category: "الأساطير اليونانية"
  },
  {
    id: 3,
    title: "أساطير الخلق: كيف فسرت الحضارات القديمة نشأة الكون",
    excerpt: "مقارنة بين مختلف قصص الخلق عبر الحضارات والثقافات المتنوعة...",
    image: "https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    date: "منذ أسبوع",
    category: "أساطير الخلق"
  }
];

const RecentPosts = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full lg:w-72 space-y-6">
      <div className="crystal-card p-6 rounded-xl">
        <h2 className="font-fantasy text-xl font-semibold mb-4 text-right">أحدث المقالات</h2>
        
        <div className="space-y-6">
          {recentPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="group cursor-pointer"
            >
              {/* 3D Card with Parallax Effect */}
              <div className="card-3d mb-3 rounded-xl overflow-hidden parallax-effect">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div 
                  className={`
                    absolute top-2 right-2 text-xs py-1 px-2 rounded-md
                    ${theme === "light" 
                      ? "bg-fantasy-day-accent/80 text-white" 
                      : "bg-fantasy-night-accent/80 text-white"}
                  `}
                >
                  {post.category}
                </div>
                
                {/* Overlay Gradient */}
                <div 
                  className={`
                    absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300
                    ${theme === "light" 
                      ? "bg-gradient-to-t from-fantasy-day-accent to-transparent" 
                      : "bg-gradient-to-t from-fantasy-night-accent to-transparent"}
                  `}
                ></div>
              </div>
              
              {/* Post Info */}
              <div className="text-right">
                <h3 className="font-semibold mb-1 group-hover:underline">{post.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Articles Button */}
        <div className="mt-6">
          <button 
            className={`
              w-full py-2 rounded-lg border transition-all duration-300 text-sm
              ${theme === "light" 
                ? "border-fantasy-day-accent text-fantasy-day-accent hover:bg-fantasy-day-accent/10" 
                : "border-fantasy-night-accent text-fantasy-night-accent hover:bg-fantasy-night-accent/10"}
            `}
          >
            عرض جميع المقالات
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
