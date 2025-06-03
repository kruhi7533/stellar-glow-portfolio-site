
import { Code, Palette, Zap, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // For now, we'll create a simple alert. You can replace this with actual CV download logic
    alert('CV download feature coming soon! Please contact kruhi7533@gmail.com for my resume.');
  };

  const handleLearnMore = () => {
    scrollToSection('projects');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:kruhi7533@gmail.com';
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
      title: "EcoStep",
      description: "A comprehensive carbon footprint tracker helping users monitor and reduce their environmental impact through daily activity tracking",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=500&h=300&fit=crop&auto=format",
      tech: ["React", "Node.js", "Chart.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "PointMate",
      description: "An intelligent AICTEE point management system that helps students track and optimize their academic performance",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&auto=format",
      tech: ["React", "TypeScript", "Firebase", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Manager",
      description: "A modern task management application with real-time updates, priority sorting, and collaborative features",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format",
      tech: ["React", "Redux", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Price Tracker",
      description: "An automated price monitoring tool that tracks product prices across multiple platforms and sends alerts for price drops",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&auto=format",
      tech: ["Python", "React", "Web Scraping", "SQLite"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection onScrollToSection={scrollToSection} />

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Hi, I'm Ruhi Naaz, a passionate full-stack developer with a love for creating 
                innovative digital solutions. I specialize in building user-centered applications 
                that make a real impact, from environmental tracking tools to academic management systems.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                My journey in tech has led me to work on diverse projects like EcoStep (carbon footprint tracker), 
                PointMate (AICTEE point management), and various web applications using modern technologies 
                like React, TypeScript, and Node.js.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or brainstorming ways to solve everyday problems through technology.
                I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>
              <div className="flex gap-4">
                <Button 
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                  onClick={handleDownloadCV}
                >
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
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="glass rounded-lg p-4 glow-box hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
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
                    onError={(e) => {
                      console.log(`Failed to load image for ${project.title}:`, project.image);
                      e.currentTarget.src = "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop&auto=format";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-violet-600 hover:bg-violet-700 transform hover:scale-110 transition-all duration-200">
                        <ExternalLink size={16} />
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10 transform hover:scale-110 transition-all duration-200">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-violet-500/25"
              onClick={handleEmailClick}
            >
              <Mail className="mr-2" size={20} />
              Send Message
            </Button>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-violet-500/50 text-violet-300 hover:bg-violet-500/10 glass p-4 transform hover:scale-110 transition-all duration-300"
                onClick={() => window.open('https://github.com/kruhi7533', '_blank')}
              >
                <Github size={24} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-violet-500/50 text-violet-300 hover:bg-violet-500/10 glass p-4 transform hover:scale-110 transition-all duration-300"
                onClick={() => window.open('https://linkedin.com/in/ruhi-naaz-8b5960274/', '_blank')}
              >
                <Linkedin size={24} />
              </Button>
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
                >
                  <Github size={20} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-violet-400 p-2"
                  onClick={() => window.open('https://linkedin.com/in/ruhi-naaz-8b5960274/', '_blank')}
                >
                  <Linkedin size={20} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-violet-400 p-2"
                  onClick={handleEmailClick}
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
