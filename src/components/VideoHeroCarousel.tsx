
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowDown, Briefcase, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface VideoSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  fallbackImage: string;
  tags: string[];
  ctaText?: string;
  ctaAction?: () => void;
}

interface VideoHeroCarouselProps {
  onScrollToSection: (sectionId: string) => void;
}

const VideoHeroCarousel = ({ onScrollToSection }: VideoHeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  const slides: VideoSlide[] = [
    {
      id: 1,
      title: "Hello, I'm Ruhi Naaz",
      subtitle: "Creative Developer & Designer",
      description: "Passionate about crafting digital experiences that blend creativity with cutting-edge technology",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      fallbackImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&auto=format&q=80",
      tags: ["Creative", "Innovative", "Passionate"]
    },
    {
      id: 2,
      title: "UI/UX Excellence",
      subtitle: "Design Meets Functionality",
      description: "Creating intuitive, beautiful interfaces that users love to interact with",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      fallbackImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop&auto=format&q=80",
      tags: ["UI/UX", "Design Systems", "User Research"]
    },
    {
      id: 3,
      title: "Featured Projects",
      subtitle: "Innovation in Action",
      description: "Discover my latest work and see how I bring ideas to life",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      fallbackImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&auto=format&q=80",
      tags: ["React", "Next.js", "Full-Stack"],
      ctaText: "View My Work",
      ctaAction: () => onScrollToSection('projects')
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play();
      }
    }
  };

  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.play();
      } else {
        currentVideo.pause();
      }
    }
  }, [currentSlide, isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <video
              ref={(el) => (videoRefs.current[currentSlide] = el)}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              poster={slides[currentSlide].fallbackImage}
              onError={(e) => {
                // Fallback to image if video fails to load
                const target = e.target as HTMLVideoElement;
                target.style.display = 'none';
                const img = document.createElement('img');
                img.src = slides[currentSlide].fallbackImage;
                img.className = 'w-full h-full object-cover';
                target.parentNode?.appendChild(img);
              }}
            >
              <source src={slides[currentSlide].videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-900/60 via-purple-900/40 to-indigo-900/60 backdrop-blur-[2px]"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8 md:p-12 border border-white/20"
            >
              {/* Tags */}
              <motion.div 
                className="flex flex-wrap gap-2 justify-center mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {slides[currentSlide].tags.map((tag, index) => (
                  <Badge 
                    key={tag}
                    className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-200 border border-violet-400/30 hover:from-violet-500/30 hover:to-purple-500/30 transition-all duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </motion.div>

              {/* Title */}
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2 
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-violet-200 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p 
                className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Button */}
              {slides[currentSlide].ctaText && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    size="lg"
                    onClick={slides[currentSlide].ctaAction}
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-violet-500/30"
                  >
                    <Briefcase className="mr-2" size={20} />
                    {slides[currentSlide].ctaText}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="glass rounded-full px-6 py-4 flex items-center gap-4 border border-white/20">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            ) : (
              <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            )}
          </button>

          {/* Dot Navigation */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-violet-400 w-8'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-400 to-purple-500"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={() => onScrollToSection('about')}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-white/80 hover:text-white transition-colors group"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </div>
      </motion.button>

      {/* Contact Button - Floating */}
      <motion.div
        className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <Button
          variant="outline"
          size="lg"
          onClick={() => onScrollToSection('contact')}
          className="glass border-white/30 text-white hover:bg-white/10 backdrop-blur-md rotate-90 origin-center"
        >
          <Mail className="mr-2" size={18} />
          Contact
        </Button>
      </motion.div>
    </section>
  );
};

export default VideoHeroCarousel;
