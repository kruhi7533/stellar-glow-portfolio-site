import { Code, Palette, Zap, ExternalLink, Github, Linkedin, Mail, Database, Monitor, Wrench, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ThemeToggle from "@/components/ThemeToggle";
import SkillsProgress from "@/components/SkillsProgress";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import PersonalSection from "@/components/PersonalSection";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/RuhiNaaz_CV.pdf';
    link.download = 'RuhiNaaz_CV.pdf';
    link.setAttribute('aria-label', 'Download Ruhi Naaz CV');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLearnMore = () => {
    scrollToSection('projects');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:kruhi7533@gmail.com';
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Ruhi Naaz',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const projects = [
    {
      title: "EcoStep",
      description: "A comprehensive carbon footprint tracker helping users monitor and reduce their environmental impact through daily activity tracking",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=500&h=300&fit=crop&auto=format&q=80",
      tech: ["React", "Node.js", "Chart.js", "MongoDB"],
      liveUrl: "https://carbon-footprint-tracker-plum.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Task Manager",
      description: "A modern task management application with real-time updates, priority sorting, and collaborative features",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format&q=80",
      tech: ["React", "Redux", "Express", "PostgreSQL"],
      liveUrl: "https://taskmanager-eight-pi.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Sudoku Solver",
      description: "An intelligent Sudoku puzzle solver with step-by-step visualization and multiple difficulty levels for puzzle enthusiasts",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop&auto=format&q=80",
      tech: ["React", "JavaScript", "CSS3", "Algorithm"],
      liveUrl: "https://puzzle-logic-master.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Pomodoro Timer",
      description: "A productivity-focused Pomodoro timer with customizable work/break intervals, task tracking, and progress analytics",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&h=300&fit=crop&auto=format&q=80",
      tech: ["React", "TypeScript", "Local Storage", "PWA"],
      liveUrl: "https://pomodoro-kappa-virid.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Tourism Explorer",
      description: "A comprehensive travel guide platform featuring destination discovery, trip planning, and local recommendations for travelers",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop&auto=format&q=80",
      tech: ["React", "APIs", "Maps Integration", "Responsive Design"],
      liveUrl: "https://tourism-three-nu.vercel.app/",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation with Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <Navigation />
      <HeroSection onScrollToSection={scrollToSection} />

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">About Me</h2>
          <p className="text-xl text-center text-violet-300 mb-16 italic">
            "Turning ideas into interactive digital experiences"
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-in-left">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Hi, I'm Ruhi Naaz, a passionate full-stack developer with a love for creating 
                innovative digital solutions. I specialize in building user-centered applications 
                that make a real impact, from environmental tracking tools to academic management systems.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                My journey in tech has led me to work on diverse projects like EcoStep (carbon footprint tracker), 
                task management systems, and various web applications using modern technologies 
                like React, TypeScript, and Node.js.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or brainstorming ways to solve everyday problems through technology.
                I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>
              <div className="flex gap-4">
                <Button 
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-violet-500/25 focus:ring-4 focus:ring-violet-500/50"
                  onClick={handleDownloadCV}
                >
                  <Download size={20} className="mr-2" />
                  Download CV
                </Button>
                <Button 
                  variant="outline" 
                  className="border-violet-500/50 text-violet-300 hover:bg-violet-500/10 glass transform hover:scale-105 transition-all duration-300"
                  onClick={handleLearnMore}
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Skills with Progress Bars */}
            <SkillsProgress />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="glass glow-box group hover:scale-105 transition-all duration-300 overflow-hidden border-violet-500/30">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      console.log(`Failed to load image for ${project.title}:`, project.image);
                      e.currentTarget.src = "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop&auto=format&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="bg-violet-600 hover:bg-violet-700 transform hover:scale-110 transition-all duration-200"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={16} />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-white/30 text-white hover:bg-white/10 transform hover:scale-110 transition-all duration-200"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        aria-label={`View source code of ${project.title}`}
                      >
                        <Github size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-xs font-medium hover:bg-violet-500/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Personal Section */}
      <PersonalSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="space-y-6">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-violet-300 font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="bg-white/10 border-violet-500/30 text-white placeholder:text-gray-400 focus:border-violet-400 focus:ring-violet-400/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-violet-300 font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="bg-white/10 border-violet-500/30 text-white placeholder:text-gray-400 focus:border-violet-400 focus:ring-violet-400/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-violet-300 font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or how I can help you..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="bg-white/10 border-violet-500/30 text-white placeholder:text-gray-400 focus:border-violet-400 focus:ring-violet-400/50 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-violet-500/25 focus:ring-4 focus:ring-violet-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Mail className="mr-2" size={20} />
                  {isSubmitting ? 'Sending...' : 'Start Your Project'}
                </Button>
              </form>
              
              <div className="text-center space-y-4">
                <p className="text-gray-400 text-sm mb-2">Or contact me directly:</p>
                <a 
                  href="mailto:kruhi7533@gmail.com"
                  className="text-violet-400 hover:text-violet-300 transition-colors font-medium block"
                >
                  kruhi7533@gmail.com
                </a>
                <Button 
                  variant="outline"
                  className="border-yellow-400/70 text-yellow-300 hover:bg-yellow-400/10"
                  onClick={() => window.open('https://calendly.com/ruhi-naaz', '_blank')}
                >
                  <Calendar className="mr-2" size={16} />
                  Schedule a Meeting
                </Button>
                <p className="text-gray-500 text-xs">✨ Typically replies within 24 hours</p>
                <p className="text-gray-500 text-xs">🌟 Trusted by startups and agencies worldwide</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
                <p className="text-gray-400 mb-6">Let's discuss your next project or just say hello!</p>
              </div>
              
              <div className="flex gap-6">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-violet-500/50 text-violet-300 hover:bg-violet-500/10 glass p-4 transform hover:scale-110 transition-all duration-300"
                        onClick={() => window.open('https://github.com/kruhi7533', '_blank')}
                        aria-label="Visit my GitHub profile"
                      >
                        <Github size={24} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub Profile</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-violet-500/50 text-violet-300 hover:bg-violet-500/10 glass p-4 transform hover:scale-110 transition-all duration-300"
                        onClick={() => window.open('https://linkedin.com/in/ruhi-naaz-8b5960274/', '_blank')}
                        aria-label="Connect with me on LinkedIn"
                      >
                        <Linkedin size={24} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LinkedIn Profile</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-violet-500/50 text-violet-300 hover:bg-violet-500/10 glass p-4 transform hover:scale-110 transition-all duration-300"
                        onClick={handleEmailClick}
                        aria-label="Send me an email"
                      >
                        <Mail size={24} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Send Email</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-6 border-t border-violet-500/30 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">Let's Connect</h3>
              <div className="flex justify-center md:justify-start gap-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-violet-400 p-2"
                  onClick={() => window.open('https://github.com/kruhi7533', '_blank')}
                  aria-label="Visit my GitHub profile"
                >
                  <Github size={20} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-violet-400 p-2"
                  onClick={() => window.open('https://linkedin.com/in/ruhi-naaz-8b5960274/', '_blank')}
                  aria-label="Connect with me on LinkedIn"
                >
                  <Linkedin size={20} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-violet-400 p-2"
                  onClick={handleEmailClick}
                  aria-label="Send me an email"
                >
                  <Mail size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-violet-400 transition-colors">About</button>
                <button onClick={() => scrollToSection('projects')} className="block text-gray-400 hover:text-violet-400 transition-colors">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-violet-400 transition-colors">Contact</button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-400 text-sm">
                Ready to bring your ideas to life?<br />
                Let's create something extraordinary together.
              </p>
            </div>
          </div>
          <div className="border-t border-violet-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Ruhi Naaz. Crafted with ❤️ and code.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
