import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useScrollSection } from "@/hooks/useScrollSection";

interface NavigationProps {
  onShowBlog?: () => void;
}

const Navigation = ({ onShowBlog }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSection();

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

  const handleBlogClick = () => {
    setIsMobileMenuOpen(false);
    onShowBlog?.();
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-violet-200/50 dark:border-violet-500/30 shadow-xl shadow-violet-500/10' 
          : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button 
            onClick={scrollToTop}
            className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-2 py-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ruhi Naaz
          </motion.button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-3 py-2 ${
                  activeSection === item.id
                    ? 'text-violet-600 dark:text-violet-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600"
                    layoutId="activeSection"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
            
            <motion.button 
              onClick={handleBlogClick}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-3 py-2 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen size={16} />
              Blog
            </motion.button>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 ml-4">
              {[
                { icon: Github, href: 'https://github.com/kruhi7533', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/ruhi-naaz-8b5960274/', label: 'LinkedIn' },
                { icon: Mail, onClick: handleEmailClick, label: 'Email' }
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 p-2 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent"
                    onClick={social.onClick || (() => window.open(social.href, '_blank'))}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </Button>
                </motion.div>
              ))}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4 glass rounded-lg border border-violet-200/50 dark:border-violet-500/30 p-4 shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
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
                onClick={handleBlogClick}
                className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors text-left focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-2 py-1 flex items-center gap-2"
                aria-label="Go to Blog"
              >
                <BookOpen size={16} />
                Blog
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
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
