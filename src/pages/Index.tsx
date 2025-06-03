
import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: "React", level: 90, icon: Code },
    { name: "TypeScript", level: 85, icon: Code },
    { name: "Node.js", level: 80, icon: Code },
    { name: "UI/UX Design", level: 88, icon: Palette },
    { name: "Next.js", level: 82, icon: Zap },
    { name: "Tailwind CSS", level: 92, icon: Palette }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["React", "TypeScript", "Socket.io", "Express"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation app using OpenAI's DALL-E API",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      tech: ["React", "OpenAI API", "Tailwind", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-cyan-600/20 animate-gradient-shift bg-[length:200%_200%]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-xl animate-float opacity-30"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl animate-float opacity-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur-xl animate-float opacity-25" style={{ animationDelay: '2s' }}></div>

        <div className={`text-center z-10 px-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text leading-tight">
            Creative
            <br />
            Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting stunning digital experiences with modern technologies and creative design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg animate-glow"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-violet-500/50 text-violet-300 hover:bg-violet-500/10 px-8 py-4 text-lg glass"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-violet-400 hover:text-violet-300 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                beautiful, functional, and user-centered digital experiences. I love turning 
                complex problems into simple, beautiful solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge with the developer community.
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                  Download CV
                </Button>
                <Button variant="outline" className="border-violet-500/50 text-violet-300 hover:bg-violet-500/10 glass">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="glass rounded-lg p-4 glow-box" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="text-violet-400" size={20} />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-violet-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
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
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
                        <ExternalLink size={16} />
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
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
                      <span key={tech} className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-xs font-medium">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg animate-glow">
              <Mail className="mr-2" size={20} />
              Send Message
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="border-violet-500/50 text-violet-300 hover:bg-violet-500/10 glass p-4">
                <Github size={24} />
              </Button>
              <Button variant="outline" size="lg" className="border-violet-500/50 text-violet-300 hover:bg-violet-500/10 glass p-4">
                <Linkedin size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-violet-500/30 bg-black/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Creative Developer. Crafted with ❤️ and code.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
