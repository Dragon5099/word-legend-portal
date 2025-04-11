
import React from "react";
import { ThemeProvider } from "../components/ThemeProvider";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
import RecentPosts from "../components/RecentPosts";
import ArticleContent from "../components/ArticleContent";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <div dir="rtl" className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar */}
            <Sidebar />
            
            {/* Main Content */}
            <ArticleContent />
            
            {/* Right Sidebar */}
            <RecentPosts />
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
