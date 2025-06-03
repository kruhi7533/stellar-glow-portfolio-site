
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:kruhi7533@gmail.com';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-lg border-b border-violet-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold gradient-text">Portfolio</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-violet-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-violet-400 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-violet-400 transition-colors"
            >
              Contact
            </button>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 ml-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-violet-400 p-2"
                onClick={() => window.open('https://github.com/kruhi7533', '_blank')}
              >
                <Github size={18} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-violet-400 p-2"
                onClick={() => window.open('https://linkedin.com/in/ruhi-naaz-8b5960274/', '_blank')}
              >
                <Linkedin size={18} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-violet-400 p-2"
                onClick={handleEmailClick}
              >
                <Mail size={18} />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass rounded-lg border border-violet-500/20 p-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-violet-400 transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-violet-400 transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-violet-400 transition-colors text-left"
              >
                Contact
              </button>
              
              <div className="flex items-center space-x-3 pt-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-violet-400 p-2"
                  onClick={() => window.open('https://github.com/kruhi7533', '_blank')}
                >
                  <Github size={18} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-violet-400 p-2"
                  onClick={() => window.open('https://linkedin.com/in/ruhi-naaz-8b5960274/', '_blank')}
                >
                  <Linkedin size={18} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-violet-400 p-2"
                  onClick={handleEmailClick}
                >
                  <Mail size={18} />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
