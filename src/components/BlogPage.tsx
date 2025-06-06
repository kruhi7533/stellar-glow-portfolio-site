import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, ExternalLink } from "lucide-react";

interface BlogPageProps {
  onBack: () => void;
}

const BlogPage = ({ onBack }: BlogPageProps) => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn the best practices for structuring React applications that can grow with your team and requirements. We'll explore component architecture, state management patterns, and performance optimization techniques.",
      content: `
        <h3>Introduction</h3>
        <p>Building scalable React applications requires careful planning and adherence to best practices. In this comprehensive guide, we'll explore the essential patterns and techniques that will help you create maintainable, performant applications.</p>
        
        <h3>Component Architecture</h3>
        <p>The foundation of any scalable React application lies in its component architecture. We'll discuss:</p>
        <ul>
          <li>Atomic design principles</li>
          <li>Component composition patterns</li>
          <li>Props interface design</li>
          <li>Custom hooks for logic separation</li>
        </ul>
        
        <h3>State Management</h3>
        <p>Effective state management is crucial for scalability. We'll cover modern approaches including Context API, Zustand, and when to use each pattern.</p>
        
        <h3>Performance Optimization</h3>
        <p>Learn about React.memo, useMemo, useCallback, and other optimization techniques that keep your application fast as it grows.</p>
      `,
      date: "2024-01-15",
      readTime: "8 min read",
      author: "Ruhi Naaz",
      tags: ["React", "TypeScript", "Architecture", "Performance"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Modern CSS Techniques with Tailwind CSS",
      excerpt: "Discover how to create stunning, responsive user interfaces using Tailwind CSS and modern design principles. From utility-first approach to custom component creation.",
      content: `
        <h3>The Utility-First Approach</h3>
        <p>Tailwind CSS revolutionizes how we write CSS by providing low-level utility classes that let you build custom designs without leaving your HTML.</p>
        
        <h3>Responsive Design Made Easy</h3>
        <p>Learn how Tailwind's responsive prefixes make it simple to create designs that work on all devices:</p>
        <ul>
          <li>Mobile-first methodology</li>
          <li>Breakpoint management</li>
          <li>Flexible grid systems</li>
        </ul>
        
        <h3>Custom Components</h3>
        <p>While utilities are powerful, sometimes you need custom components. We'll explore how to extract common patterns into reusable components.</p>
        
        <h3>Dark Mode Implementation</h3>
        <p>Implementing dark mode with Tailwind is straightforward. We'll cover the dark: variant and best practices for theming.</p>
      `,
      date: "2024-01-08",
      readTime: "6 min read",
      author: "Ruhi Naaz",
      tags: ["CSS", "Tailwind", "Design", "Responsive"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop"
    },
    {
      id: 3,
      title: "JavaScript Performance Optimization Techniques",
      excerpt: "Explore advanced JavaScript optimization techniques that can significantly improve your application's performance. From memory management to async operations.",
      content: `
        <h3>Understanding JavaScript Performance</h3>
        <p>Performance optimization in JavaScript requires understanding how the engine works and where bottlenecks commonly occur.</p>
        
        <h3>Memory Management</h3>
        <p>Proper memory management is crucial for long-running applications:</p>
        <ul>
          <li>Avoiding memory leaks</li>
          <li>Garbage collection optimization</li>
          <li>Efficient data structures</li>
        </ul>
        
        <h3>Async Operations</h3>
        <p>Learn how to optimize asynchronous code with modern patterns like async/await and Promise optimization.</p>
        
        <h3>Bundle Optimization</h3>
        <p>Reduce your bundle size with tree shaking, code splitting, and dynamic imports.</p>
      `,
      date: "2024-01-01",
      readTime: "10 min read",
      author: "Ruhi Naaz",
      tags: ["JavaScript", "Performance", "Optimization", "Best Practices"],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=300&fit=crop"
    }
  ];

  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-violet-950/20 dark:to-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedPost(null)}
            className="mb-6 hover:bg-violet-100 dark:hover:bg-violet-900/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Button>
          
          <article className="animate-fade-in">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            
            <div className="mb-6">
              <h1 className="text-4xl font-bold gradient-text mb-4">{selectedPost.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag) => (
                  <Badge key={tag} className="bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-violet-950/20 dark:to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 hover:bg-violet-100 dark:hover:bg-violet-900/20"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Button>
        
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Latest Insights & Tutorials
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing knowledge about web development, best practices, and the latest technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-in-left glass glow-box border-violet-200/50 dark:border-violet-500/30 backdrop-blur-sm cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold gradient-text group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} className="bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200 border-violet-200 dark:border-violet-700 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
