
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="border-violet-300/50 text-violet-600 hover:bg-violet-100 dark:border-violet-500/50 dark:text-violet-300 dark:hover:bg-violet-500/10 glass relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative flex items-center justify-center">
        {theme === 'light' ? (
          <Moon size={16} className="transition-transform duration-300 hover:rotate-12" />
        ) : (
          <Sun size={16} className="transition-transform duration-300 hover:rotate-12" />
        )}
      </div>
    </Button>
  );
};

export default ThemeToggle;
