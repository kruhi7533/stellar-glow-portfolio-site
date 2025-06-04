
import { useState, useEffect } from "react";
import { ArrowDown, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ onScrollToSection }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  
  const skills = ["Full-Stack Developer", "UI/UX Enthusiast", "Problem Solver", "React Specialist"];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-cyan-600/20 animate-gradient-shift bg-[length:400%_400%]"></div>
      
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Floating Elements with enhanced animation */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-xl animate-float opacity-30"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl animate-float opacity-20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur-xl animate-float opacity-25" style={{ animationDelay: '2s' }}></div>

      <div className={`text-center z-10 px-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* Profile Avatar with hover effect */}
        <div className="flex justify-center mb-8">
          <Avatar className="w-32 h-32 ring-4 ring-violet-500/30 ring-offset-4 ring-offset-transparent hover:ring-violet-400/50 transition-all duration-300 hover:scale-105">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Ruhi Naaz Profile" />
            <AvatarFallback className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-2xl font-bold">RN</AvatarFallback>
          </Avatar>
        </div>

        {/* Personal Introduction with hover effect */}
        <p className="text-lg md:text-xl text-violet-300 mb-4 font-medium hover:text-violet-200 transition-colors duration-300">
          Hi, I'm Ruhi Naaz
        </p>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight group">
          <span className="gradient-text animate-gradient-shift bg-[length:200%_200%] group-hover:scale-105 transition-transform duration-300 inline-block">Creative</span>
          <br />
          <span className="gradient-text animate-gradient-shift bg-[length:200%_200%] group-hover:scale-105 transition-transform duration-300 inline-block" style={{ animationDelay: '0.5s' }}>Developer</span>
        </h1>

        {/* Dynamic tagline with typewriter effect */}
        <div className="mb-6">
          <p className="text-2xl md:text-3xl font-semibold text-transparent bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text mb-2">
            {skills[currentSkillIndex]}
          </p>
          <p className="text-lg md:text-xl text-gray-300 italic">
            For startups • Building scalable web apps
          </p>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
          Crafting stunning digital experiences with modern technologies and creative design
        </p>
        
        {/* Design Philosophy */}
        <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto italic">
          "Passionate about blending technology and creativity to solve real-world problems"
        </p>
        
        {/* Enhanced CTA Buttons with icons and better contrast */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 hover:from-purple-700 hover:via-violet-700 hover:to-purple-800 text-white px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 focus:ring-4 focus:ring-purple-500/50"
            onClick={() => onScrollToSection('projects')}
          >
            <Briefcase className="mr-2" size={20} />
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-yellow-400/70 text-yellow-300 bg-yellow-400/5 hover:bg-yellow-400/15 hover:border-yellow-300 hover:text-yellow-200 px-10 py-4 text-lg glass backdrop-blur-sm transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-yellow-400/50"
            onClick={() => onScrollToSection('contact')}
          >
            <Mail className="mr-2" size={20} />
            Get In Touch
          </Button>
        </div>
        
        <button 
          onClick={() => onScrollToSection('about')}
          className="animate-bounce text-violet-400 hover:text-violet-300 transition-colors group focus:ring-4 focus:ring-violet-500/50 rounded-full p-2"
        >
          <ArrowDown size={32} className="group-hover:animate-pulse" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
