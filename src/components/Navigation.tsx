
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:kruhi7533@gmail.com';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-violet-200/50 dark:border-violet-500/30 shadow-lg' 
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-2 py-1"
            aria-label="Go to homepage"
          >
            Ruhi Naaz
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-3 py-2"
              aria-label="Go to About section"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-3 py-2"
              aria-label="Go to Projects section"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-3 py-2"
              aria-label="Go to Contact section"
            >
              Contact
            </button>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 ml-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 p-2 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent"
                onClick={() => window.open('https://github.com/kruhi7533', '_blank')}
                aria-label="Visit GitHub profile"
              >
                <Github size={18} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 p-2 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent"
                onClick={() => window.open('https://linkedin.com/in/ruhi-naaz-8b5960274/', '_blank')}
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin size={18} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 p-2 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent"
                onClick={handleEmailClick}
                aria-label="Send email"
              >
                <Mail size={18} />
              </Button>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-lg border border-violet-200/50 dark:border-violet-500/30 p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors text-left focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-2 py-1"
                aria-label="Go to About section"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors text-left focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-2 py-1"
                aria-label="Go to Projects section"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors text-left focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-2 py-1"
                aria-label="Go to Contact section"
              >
                Contact
              </button>
              
              <div className="flex items-center space-x-3 pt-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 p-2 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent"
                  onClick={() => window.open('https://github.com/kruhi7533', '_blank')}
                  aria-label="Visit GitHub profile"
                >
                  <Github size={18} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 p-2 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent"
                  onClick={() => window.open('https://linkedin.com/in/ruhi-naaz-8b5960274/', '_blank')}
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin size={18} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 p-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
                  onClick={handleEmailClick}
                  aria-label="Send email"
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
