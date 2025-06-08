import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import VideoHeroCarousel from "@/components/VideoHeroCarousel";
import PersonalSection from "@/components/PersonalSection";
import SkillsProgress from "@/components/SkillsProgress";
import BlogSection from "@/components/BlogSection";
import BlogPage from "@/components/BlogPage";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Linkedin, Mail, Sparkles, CheckCircle, Star, Trophy, Zap } from "lucide-react";

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
      githubLink: "https://github.com/kruhi7533",
      featured: true
    },
    {
      title: "Task Manager Pro",
      description: "A comprehensive task management application with priority levels, categories, and deadline tracking to boost productivity.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format&q=80",
      tags: ["React", "TypeScript", "Local Storage", "Productivity"],
      liveLink: "https://taskmanager-eight-pi.vercel.app/",
      githubLink: "https://github.com/kruhi7533",
      featured: true
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
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-violet-950/20 dark:to-gray-900 relative overflow-hidden">
        {/* Enhanced Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-violet-400/30 to-purple-600/30 rounded-full blur-3xl"
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-600/30 rounded-full blur-3xl"
            animate={{ 
              y: [0, 30, 0],
              x: [0, -20, 0],
              scale: [1, 1.1, 1],
              rotate: [0, -90, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/20 to-violet-600/20 rounded-full blur-3xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Enhanced Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${4 + i % 3}px`,
                height: `${4 + i % 3}px`,
                backgroundColor: ['#8b5cf6', '#a855f7', '#06b6d4', '#ec4899'][i % 4],
                top: `${15 + (i * 8) % 70}%`,
                left: `${10 + (i * 7) % 80}%`,
                opacity: 0.4
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-20 right-20 w-16 h-16 border-2 border-violet-400/30 rotate-45"
            animate={{
              rotate: [45, 405],
              scale: [1, 1.1, 1],
              borderColor: ['rgba(139, 92, 246, 0.3)', 'rgba(168, 85, 247, 0.5)', 'rgba(139, 92, 246, 0.3)']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-32 left-16 w-20 h-20 border-2 border-cyan-400/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              borderColor: ['rgba(6, 182, 212, 0.3)', 'rgba(34, 197, 94, 0.5)', 'rgba(6, 182, 212, 0.3)']
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <Navigation onShowBlog={showBlog} />
        
        {/* Enhanced Video Hero Carousel */}
        <motion.div 
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <VideoHeroCarousel onScrollToSection={scrollToSection} />
        </motion.div>

        {/* Personal Section with Enhanced Styling */}
        <AnimatedSection id="about" delay={0.1}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-purple-500/5"></div>
            <PersonalSection />
          </div>
        </AnimatedSection>

        {/* Skills Section with Glow Effect */}
        <AnimatedSection delay={0.2}>
          <div className="relative py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"></div>
            <SkillsProgress />
          </div>
        </AnimatedSection>

        {/* Enhanced Projects Section */}
        <AnimatedSection id="projects" className="py-20 px-4 relative" delay={0.3}>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-purple-50/30 to-indigo-50/50 dark:from-violet-950/20 dark:via-purple-950/10 dark:to-indigo-950/20"></div>
          <div className="max-w-6xl mx-auto relative">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Trophy className="h-10 w-10 text-violet-600 dark:text-violet-400" />
                </motion.div>
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
                <motion.div
                  animate={{ rotate: [0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Zap className="h-10 w-10 text-violet-600 dark:text-violet-400" />
                </motion.div>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover my latest creations that showcase innovation, creativity, and technical excellence in web development.
              </p>
              <motion.div
                className="mt-6 h-1 w-24 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, rotate: -3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -15,
                    rotate: index % 2 === 0 ? 2 : -2,
                    transition: { duration: 0.3 }
                  }}
                  className={`group ${project.featured ? 'md:col-span-1 lg:col-span-1' : ''}`}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-700 glass border-2 border-transparent bg-gradient-to-br from-white/90 to-white/60 dark:from-gray-900/90 dark:to-gray-800/60 backdrop-blur-xl hover:border-violet-300/60 dark:hover:border-violet-500/60 hover:shadow-violet-500/30 overflow-hidden h-full relative">
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold border-0 shadow-lg">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                    
                    <div className="relative overflow-hidden rounded-t-lg">
                      <motion.div
                        className="relative group-hover:scale-110 transition-transform duration-700"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-52 object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop&auto=format&q=80";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-violet-900/70 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:from-violet-500 group-hover:to-purple-500 transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.div
                            key={tagIndex}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 dark:from-violet-900/60 dark:to-purple-900/60 dark:text-violet-200 border border-violet-200 dark:border-violet-700 hover:shadow-md transition-all duration-300">
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <motion.div 
                          whileHover={{ scale: 1.05 }} 
                          whileTap={{ scale: 0.95 }} 
                          className="flex-1"
                        >
                          <Button size="sm" asChild className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                              Live Demo
                            </a>
                          </Button>
                        </motion.div>
                        <motion.div 
                          whileHover={{ scale: 1.05 }} 
                          whileTap={{ scale: 0.95 }} 
                          className="flex-1"
                        >
                          <Button size="sm" variant="outline" asChild className="w-full border-2 border-violet-300 text-violet-700 hover:bg-violet-50 dark:border-violet-600 dark:text-violet-300 dark:hover:bg-violet-900/20 group/btn">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
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

        {/* Blog Section with Enhanced Animation */}
        <AnimatedSection delay={0.4}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-violet-500/5"></div>
            <BlogSection onShowBlog={showBlog} />
          </div>
        </AnimatedSection>

        {/* Enhanced Contact Section */}
        <AnimatedSection id="contact" className="py-24 px-4 bg-gradient-to-br from-violet-100/60 via-purple-50/60 to-blue-100/60 dark:from-violet-950/40 dark:via-purple-950/30 dark:to-blue-950/40 relative" delay={0.5}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="max-w-5xl mx-auto relative">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Let's Create Something Amazing
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to bring your vision to life? Let's collaborate and build extraordinary digital experiences together.
              </p>
              <motion.div
                className="mt-6 h-1 w-32 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ContactForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
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
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Enhanced Footer */}
        <motion.footer 
          className="bg-gradient-to-r from-gray-900 via-violet-900 to-gray-900 dark:from-black dark:via-violet-950 dark:to-black text-white py-16 px-4 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-blue-600/20"></div>
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.h3 
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ruhi Naaz
            </motion.h3>
            <p className="text-gray-300 mb-10 text-lg">Full Stack Developer & UI/UX Designer</p>
            
            <motion.div 
              className="flex justify-center gap-8 mb-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.a 
                href="https://github.com/kruhi7533" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-violet-400 transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-violet-500/20"
                whileHover={{ rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-7 w-7" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/ruhi-naaz-8b5960274/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-violet-400 transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-violet-500/20"
                whileHover={{ rotate: -15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-7 w-7" />
              </motion.a>
              <motion.a 
                href="mailto:kruhi7533@gmail.com" 
                className="text-gray-400 hover:text-violet-400 transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-violet-500/20"
                whileHover={{ rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-7 w-7" />
              </motion.a>
            </motion.div>
            
            <div className="border-t border-gray-700/50 pt-8">
              <p className="text-gray-400 text-lg">
                © 2024 Ruhi Naaz. Crafted with ❤️ using React & Tailwind CSS.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
