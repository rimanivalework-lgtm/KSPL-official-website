import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center",
      date: "MAR 1, 2024",
      author: "by Tommy Mallen",
      title: "Strategy for Turning Big Ideas into Big Earnings",
      themeColor: "bg-gradient-to-br from-[#BADEFF] to-[#EEF7FF]",
      borderColor: "border-[#195C9A]/20"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center",
      date: "FEB 21, 2024",
      author: "by Ole Lehman",
      title: "The Art of Going Solo with Ole Lehman the AI Solopreneur",
      themeColor: "bg-gradient-to-br from-[#FFB6B7] to-[#FFEDED]",
      borderColor: "border-[#C42A2D]/20"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
      date: "FEB 14, 2024",
      author: "by Niharikaa Kaur Sodhi",
      title: "Building Balance and Authenticity with Niharikaa Kaur Sodhi",
      themeColor: "bg-gradient-to-br from-[#A0FFB5] to-[#F1FFF4]",
      borderColor: "border-[#3BAB53]/20"
    },
  ];

  return (
    <section className="py-20 lg:py-20 bg-blue-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-primary font-bold text-foreground mb-3 sm:mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-secondary">
              Insights, strategies, and stories from industry experts
            </p>
          </div>

            {/* Blog Cards Grid - Responsive Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className={`${post.themeColor} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group cursor-pointer ${
                    // Mobile: show only first card (index 0)
                    // Tablet: show first 2 cards (index 0, 1) 
                    // Desktop: show all 3 cards (index 0, 1, 2)
                    index === 0 ? 'block' : 
                    index === 1 ? 'hidden md:block' : 
                    index === 2 ? 'hidden lg:block' : 'hidden'
                  }`}
                >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="mb-4">
                    <p className="text-xs font-secondary font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      {post.date}
                    </p>
                    <p className="text-sm font-secondary text-muted-foreground">
                      {post.author}
                    </p>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-lg font-primary font-bold text-foreground mb-6 leading-tight">
                    {post.title}
                  </h3>

                  {/* Bottom Divider + Link */}
                  <div className="pt-4 border-t border-border">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-sm font-secondary font-medium text-foreground hover:text-primary transition-colors duration-200 group/link"
                    >
                      Read More 
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button variant="cta" size="lg">
              View All Posts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
