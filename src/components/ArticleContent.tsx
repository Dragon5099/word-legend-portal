
import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { ChevronDown, ArrowUp } from 'lucide-react';

// Sample featured articles
const featuredArticles = [
  {
    id: 1,
    title: "أساطير فرسان المائدة المستديرة: بين الواقع والخيال",
    excerpt: "استكشاف للقصص الشهيرة حول الملك آرثر وفرسانه، وكيف تطورت عبر القرون...",
    content: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ للأحرف بدلاً من استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو وكأنها نص مقروء.
    
    العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل افتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.
    
    هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص.`,
    image: "https://images.unsplash.com/photo-1599752424201-634e3df73a3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "12 أبريل 2023",
    readTime: "8 دقائق للقراءة",
    category: "أساطير أوروبية"
  },
  {
    id: 2,
    title: "الإلهة إيزيس: رمز الأمومة والحكمة في الأساطير المصرية",
    excerpt: "تحليل لشخصية الإلهة إيزيس ودورها المحوري في الميثولوجيا المصرية القديمة...",
    content: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ للأحرف بدلاً من استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو وكأنها نص مقروء.
    
    العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل افتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.`,
    image: "https://images.unsplash.com/photo-1608329597456-a7ce9d222128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "5 مارس 2023",
    readTime: "6 دقائق للقراءة",
    category: "أساطير مصرية"
  }
];

const ArticleContent = () => {
  const { theme } = useTheme();
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Toggle article expansion
  const toggleArticleExpansion = (id: number) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Detect scroll for back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex-1 space-y-8">
      {/* Featured Articles */}
      <div>
        <h2 className="font-fantasy text-2xl font-bold mb-6 text-right">مقالات مميزة</h2>
        
        <div className="space-y-8">
          {featuredArticles.map((article) => (
            <div 
              key={article.id} 
              className="crystal-card rounded-xl overflow-hidden"
            >
              {/* Article Image with Ken Burns effect */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-all duration-10000 ease-in-out hover:scale-110"
                  style={{ transformOrigin: 'center center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 right-0 left-0 p-6 text-white text-right">
                  <div className="mb-2 text-sm font-medium">
                    <span className="inline-block px-2 py-1 bg-white/20 rounded-md backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-fantasy">{article.title}</h3>
                  <div className="flex flex-row-reverse gap-3 text-xs text-white/80">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="p-6 text-right">
                <p className="text-base mb-4">
                  {article.excerpt}
                </p>
                
                {/* Read More Button */}
                <div className="flex justify-end">
                  <button 
                    onClick={() => toggleArticleExpansion(article.id)} 
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    {expandedArticle === article.id ? "عرض أقل" : "اقرأ المزيد"} 
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${expandedArticle === article.id ? "rotate-180" : ""}`} 
                    />
                  </button>
                </div>
                
                {/* Expanded Content */}
                {expandedArticle === article.id && (
                  <div className="mt-4 animate-slide-up">
                    <div 
                      className="text-base text-right space-y-4 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: article.content.replace(/\n\n/g, '<p class="mb-4"></p>')
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 z-40 p-3 rounded-full
            ${theme === "light" 
              ? "bg-fantasy-day-accent text-white" 
              : "bg-fantasy-night-accent text-white"}
            shadow-lg hover:shadow-xl transition-all duration-300
            animate-float
          `}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default ArticleContent;
