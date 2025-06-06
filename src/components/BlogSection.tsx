
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";

interface BlogSectionProps {
  onShowBlog?: () => void;
}

const BlogSection = ({ onShowBlog }: BlogSectionProps) => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices for structuring React apps that can grow with your team and requirements. Learn about component architecture, state management, and performance optimization.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop&auto=format&q=80",
      url: "#",
      author: "Ruhi Naaz",
      category: "React",
      tags: ["React", "Architecture", "Best Practices"]
    },
    {
      title: "TypeScript Tips for Better Code Quality",
      excerpt: "Advanced TypeScript techniques that will make your code more maintainable and bug-free. Explore type guards, utility types, and advanced patterns.",
      date: "Nov 28, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop&auto=format&q=80",
      url: "#",
      author: "Ruhi Naaz",
      category: "TypeScript",
      tags: ["TypeScript", "Code Quality", "Development"]
    },
    {
      title: "Modern CSS Techniques with Tailwind",
      excerpt: "How to create stunning user interfaces using Tailwind CSS and modern design principles. Master responsive design, animations, and component styling.",
      date: "Nov 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&auto=format&q=80",
      url: "#",
      author: "Ruhi Naaz",
      category: "CSS",
      tags: ["CSS", "Tailwind", "UI/UX"]
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-gradient-to-br from-black/5 via-violet-950/10 to-purple-950/5 dark:from-black/20 dark:via-violet-950/30 dark:to-purple-950/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-400/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing knowledge about web development, best practices, and the latest technologies in the industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title} 
              className="glass glow-box overflow-hidden group hover:scale-105 transition-all duration-500 animate-slide-in-left border-violet-200/50 dark:border-violet-500/30 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={onShowBlog}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-violet-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Button 
                    size="sm" 
                    className="bg-violet-600 hover:bg-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      onShowBlog?.();
                    }}
                  >
                    <ExternalLink size={14} />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-flex items-center gap-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-2 py-1 rounded-full text-xs"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="outline" 
            className="border-violet-500/50 text-violet-600 dark:text-violet-300 hover:bg-violet-500/10 glass group btn-primary"
            onClick={onShowBlog}
          >
            View All Articles
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
