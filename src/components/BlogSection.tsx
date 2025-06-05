
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices for structuring React apps that can grow with your team and requirements.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      url: "#"
    },
    {
      title: "TypeScript Tips for Better Code Quality",
      excerpt: "Advanced TypeScript techniques that will make your code more maintainable and bug-free.",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
      url: "#"
    },
    {
      title: "Modern CSS Techniques with Tailwind",
      excerpt: "How to create stunning user interfaces using Tailwind CSS and modern design principles.",
      date: "Nov 10, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      url: "#"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.title} className="glass glow-box overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Button 
                    size="sm" 
                    className="bg-violet-600 hover:bg-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => window.open(post.url, '_blank')}
                  >
                    <ExternalLink size={14} />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-violet-500/50 text-violet-300 hover:bg-violet-500/10 glass"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
