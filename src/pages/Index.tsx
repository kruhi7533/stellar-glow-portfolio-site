import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PersonalSection from "@/components/PersonalSection";
import SkillsProgress from "@/components/SkillsProgress";
import BlogSection from "@/components/BlogSection";
import BlogPage from "@/components/BlogPage";
import ContactForm from "@/components/ContactForm";
import CustomCursor from "@/components/CustomCursor";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Linkedin, Mail, Sparkles, CheckCircle } from "lucide-react";

const Index = () => {
  const [currentView, setCurrentView] = useState<'portfolio' | 'blog'>('portfolio');

  const scrollToSection = (sectionId: string) => {
    if (currentView !== 'portfolio') {
      setCurrentView('portfolio');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const showBlog = () => {
    setCurrentView('blog');
  };

  const showPortfolio = () => {
    setCurrentView('portfolio');
  };

  if (currentView === 'blog') {
    return (
      <ThemeProvider>
        <CustomCursor />
        <BlogPage onBack={showPortfolio} />
      </ThemeProvider>
    );
  }

  const projects = [
    {
      title: "EcoStep - Carbon Footprint Tracker",
      description: "A sustainable lifestyle tracking app that helps users monitor their carbon footprint and adopt eco-friendly habits with detailed analytics and tips.",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=500&h=300&fit=crop&auto=format&q=80",
      tags: ["React", "Chart.js", "Local Storage", "Environmental"],
      liveLink: "https://carbon-footprint-tracker-plum.vercel.app/",
      githubLink: "https://github.com/kruhi7533"
    },
    {
      title: "Task Manager Pro",
      description: "A comprehensive task management application with priority levels, categories, and deadline tracking to boost productivity.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format&q=80",
      tags: ["React", "TypeScript", "Local Storage", "Productivity"],
      liveLink: "https://taskmanager-eight-pi.vercel.app/",
      githubLink: "https://github.com/kruhi7533"
    },
    {
      title: "Pomodoro Timer",
      description: "A focus-enhancing Pomodoro technique timer with customizable work and break intervals, session tracking, and productivity analytics.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop&auto=format&q=80",
      tags: ["React", "Timer", "Focus", "Productivity"],
      liveLink: "https://pomodoro-kappa-virid.vercel.app/",
      githubLink: "https://github.com/kruhi7533"
    },
    {
      title: "Tourism Explorer",
      description: "A travel and tourism discovery platform showcasing beautiful destinations with detailed information and travel guides.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop&auto=format&q=80",
      tags: ["React", "Travel", "Tourism", "Responsive Design"],
      liveLink: "https://tourism-three-nu.vercel.app/",
      githubLink: "https://github.com/kruhi7533"
    },
    {
      title: "Sudoku Solver",
      description: "An intelligent Sudoku puzzle solver with step-by-step solution visualization and multiple difficulty levels for puzzle enthusiasts.",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop&auto=format&q=80",
      tags: ["React", "Algorithm", "Puzzle", "Logic"],
      liveLink: "https://puzzle-logic-master.vercel.app/",
      githubLink: "https://github.com/kruhi7533"
    }
  ];

  return (
    <ThemeProvider>
      <CustomCursor />
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-violet-950/20 dark:to-gray-900 relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-full blur-3xl"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-full blur-3xl"
            animate={{ 
              y: [0, 20, 0],
              x: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-violet-600/10 rounded-full blur-3xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 bg-violet-400/30 rounded-full`}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <Navigation onShowBlog={showBlog} />
        
        {/* Hero Section */}
        <motion.div id="hero">
          <HeroSection onScrollToSection={scrollToSection} />
        </motion.div>

        {/* Personal Section */}
        <AnimatedSection id="about" delay={0.1}>
          <PersonalSection />
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection delay={0.2}>
          <SkillsProgress />
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="py-20 px-4 relative" delay={0.3}>
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
                <motion.div
                  animate={{ rotate: [0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Sparkles className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                </motion.div>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and creativity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -10,
                    rotate: 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-500 glass border-2 border-transparent bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-800/40 backdrop-blur-xl hover:border-violet-300/50 dark:hover:border-violet-500/50 hover:shadow-violet-500/25 overflow-hidden">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop&auto=format&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.div
                            key={tagIndex}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 dark:from-violet-900/50 dark:to-purple-900/50 dark:text-violet-200 border border-violet-200 dark:border-violet-700">
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                          <Button size="sm" asChild className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                          <Button size="sm" variant="outline" asChild className="w-full border-2 border-violet-300 text-violet-700 hover:bg-violet-50 dark:border-violet-600 dark:text-violet-300 dark:hover:bg-violet-900/20">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Blog Section */}
        <AnimatedSection delay={0.4}>
          <BlogSection onShowBlog={showBlog} />
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="py-20 px-4 bg-gradient-to-br from-violet-100/50 via-purple-50/50 to-blue-100/50 dark:from-violet-950/30 dark:via-purple-950/20 dark:to-blue-950/30 relative" delay={0.5}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/5 to-transparent"></div>
          <div className="max-w-4xl mx-auto relative">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 gradient-text">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Information */}
              <div className="space-y-8 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                <Card className="glass glow-box border-violet-200/50 dark:border-violet-500/30">
                  <CardHeader>
                    <CardTitle className="gradient-text flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Other Ways to Connect
                    </CardTitle>
                    <CardDescription>
                      Prefer a different way to get in touch? Here are some alternatives.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div 
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 transition-all duration-300 hover:from-violet-100 hover:to-purple-100 dark:hover:from-violet-900/30 dark:hover:to-purple-900/30 hover:scale-105 cursor-pointer group border border-violet-200/50 dark:border-violet-700/50"
                      onClick={() => window.location.href = 'mailto:kruhi7533@gmail.com?subject=Portfolio Inquiry&body=Hi Ruhi,%0D%0A%0D%0AI would like to connect with you regarding...'}
                    >
                      <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Direct Email</p>
                        <p className="text-sm text-violet-600 dark:text-violet-400 font-medium">kruhi7533@gmail.com</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Click to compose email</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-violet-600 dark:text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div 
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 transition-all duration-300 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 hover:scale-105 cursor-pointer group border border-blue-200/50 dark:border-blue-700/50"
                      onClick={() => window.open('https://linkedin.com/in/ruhi-naaz-8b5960274/', '_blank')}
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                        <Linkedin className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">LinkedIn</p>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Professional Network</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Connect for professional opportunities</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div 
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 transition-all duration-300 hover:from-emerald-100 hover:to-teal-100 dark:hover:from-emerald-900/30 dark:hover:to-teal-900/30 hover:scale-105 cursor-pointer group border border-emerald-200/50 dark:border-emerald-700/50"
                      onClick={() => window.open('https://github.com/kruhi7533', '_blank')}
                    >
                      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                        <Github className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">GitHub</p>
                        <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">View My Code</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Explore my projects and contributions</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border border-orange-200/50 dark:border-orange-700/50">
                      <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-xl shadow-lg">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">Quick Response</p>
                        <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">Within 24 hours</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">I typically respond quickly during weekdays</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass glow-box border-violet-200/50 dark:border-violet-500/30">
                  <CardHeader>
                    <CardTitle className="gradient-text">What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-violet-500 rounded-full p-1 mt-1">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Quick Response</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">I respond to all messages within 24 hours during weekdays</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-violet-500 rounded-full p-1 mt-1">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Detailed Discussion</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">We'll discuss your project requirements in detail</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-violet-500 rounded-full p-1 mt-1">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Free Consultation</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Initial project consultation is always free</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <motion.footer 
          className="bg-gradient-to-r from-gray-900 via-violet-900 to-gray-900 dark:from-black dark:via-violet-950 dark:to-black text-white py-12 px-4 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-blue-600/10"></div>
          <div className="max-w-4xl mx-auto text-center relative">
            <h3 className="text-2xl font-bold mb-4 gradient-text text-white">Ruhi Naaz</h3>
            <p className="text-gray-300 mb-8">Full Stack Developer & UI/UX Designer</p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/kruhi7533" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/ruhi-naaz-8b5960274/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:kruhi7533@gmail.com" className="text-gray-400 hover:text-violet-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © 2024 Ruhi Naaz. All rights reserved. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
