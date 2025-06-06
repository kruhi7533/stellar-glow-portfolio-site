
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PersonalSection from "@/components/PersonalSection";
import SkillsProgress from "@/components/SkillsProgress";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Linkedin, Mail, Sparkles } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "EcoStep",
      description: "A sustainable lifestyle tracking app that helps users monitor their carbon footprint and adopt eco-friendly habits.",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=500&h=300&fit=crop&auto=format&q=80",
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveLink: "https://ecostep-demo.netlify.app",
      githubLink: "https://github.com/username/ecostep"
    },
    {
      title: "TaskFlow Pro",
      description: "A collaborative project management tool with real-time updates, file sharing, and team communication features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format&q=80",
      tags: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
      liveLink: "https://taskflow-pro.vercel.app",
      githubLink: "https://github.com/username/taskflow-pro"
    },
    {
      title: "AI Recipe Generator",
      description: "An intelligent recipe recommendation system that suggests meals based on available ingredients and dietary preferences.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop&auto=format&q=80",
      tags: ["Python", "Flask", "OpenAI API", "React"],
      liveLink: "https://ai-recipe-gen.herokuapp.com",
      githubLink: "https://github.com/username/ai-recipe-generator"
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-violet-950/20 dark:to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-violet-600/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <Navigation />
        
        {/* Hero Section */}
        <HeroSection onScrollToSection={scrollToSection} />

        {/* Personal Section */}
        <PersonalSection />

        {/* Skills Section */}
        <SkillsProgress />

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                <h2 className="text-4xl font-bold gradient-text">
                  Featured Projects
                </h2>
                <Sparkles className="h-8 w-8 text-violet-600 dark:text-violet-400" />
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and creativity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-in-left glass glow-box border-violet-200/50 dark:border-violet-500/30 backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        console.info(`Failed to load image for ${project.title}: ${project.image}`);
                        e.currentTarget.src = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop&auto=format&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold gradient-text">{project.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200 border-violet-200 dark:border-violet-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" asChild className="flex-1 btn-primary bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="flex-1 border-violet-300 text-violet-700 hover:bg-violet-50 dark:border-violet-600 dark:text-violet-300 dark:hover:bg-violet-900/20">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Blog Section */}
        <BlogSection />

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gradient-to-br from-violet-100/50 via-purple-50/50 to-blue-100/50 dark:from-violet-950/30 dark:via-purple-950/20 dark:to-blue-950/30 relative">
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
              <div className="space-y-8">
                <Card className="glass glow-box border-violet-200/50 dark:border-violet-500/30">
                  <CardHeader>
                    <CardTitle className="gradient-text">Other Ways to Connect</CardTitle>
                    <CardDescription>
                      Prefer a different way to get in touch? Here are some alternatives.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 transition-colors hover:from-violet-100 hover:to-purple-100 dark:hover:from-violet-900/30 dark:hover:to-purple-900/30">
                      <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-lg shadow-lg">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">ruhi@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 transition-colors hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg shadow-lg">
                        <Linkedin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <a 
                          href="https://linkedin.com/in/yourprofile" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Connect with me professionally
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 transition-colors hover:from-emerald-100 hover:to-teal-100 dark:hover:from-emerald-900/30 dark:hover:to-teal-900/30">
                      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-lg shadow-lg">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Schedule a Call</p>
                        <a 
                          href="https://calendly.com/yourprofile" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                        >
                          Book a 30-minute chat
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass glow-box border-violet-200/50 dark:border-violet-500/30">
                  <CardHeader>
                    <CardTitle className="gradient-text">Response Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      I typically respond to messages within 24 hours during weekdays. 
                      For urgent inquiries, please mention it in your message.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 via-violet-900 to-gray-900 dark:from-black dark:via-violet-950 dark:to-black text-white py-12 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-blue-600/10"></div>
          <div className="max-w-4xl mx-auto text-center relative">
            <h3 className="text-2xl font-bold mb-4 gradient-text text-white">Ruhi Naaz</h3>
            <p className="text-gray-300 mb-8">Full Stack Developer & UI/UX Designer</p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors transform hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:ruhi@example.com" className="text-gray-400 hover:text-violet-400 transition-colors transform hover:scale-110">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © 2024 Ruhi Naaz. All rights reserved. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
