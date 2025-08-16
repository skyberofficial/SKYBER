"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Eye, Play, Pause } from "lucide-react";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";

interface Project {
  id: number;
  title: string;
  description: string;
  price: string;
  views: number;
  rating: number;
  images: string[];
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Security Platform",
    description: "Advanced cybersecurity solution for online retailers with real-time threat detection and automated response systems.",
    price: "₹32,999",
    views: 15420,
    rating: 4.8,
    images: [
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    ],
    category: "Cybersecurity"
  },
  {
    id: 2,
    title: "AI-Powered Web Analytics",
    description: "Intelligent analytics dashboard with machine learning insights and predictive user behavior analysis.",
    price: "₹28,999",
    views: 8920,
    rating: 4.6,
    images: [
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
    ],
    category: "Web Development"
  },
  {
    id: 3,
    title: "Blockchain Security Suite",
    description: "Comprehensive blockchain security tools with smart contract auditing and decentralized identity management.",
    price: "₹32,999",
    views: 12350,
    rating: 4.9,
    images: [
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
    ],
    category: "Blockchain"
  },
  {
    id: 4,
    title: "Cloud Infrastructure Security",
    description: "Enterprise-grade cloud security platform with multi-cloud support and compliance automation.",
    price: "₹29,999",
    views: 18760,
    rating: 4.7,
    images: [
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
    ],
    category: "Cloud Security"
  },
  {
    id: 5,
    title: "Mobile App Security Scanner",
    description: "Advanced mobile application security testing tool with vulnerability assessment and penetration testing.",
    price: "₹24,999",
    views: 7560,
    rating: 4.5,
    images: [
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    ],
    category: "Mobile Security"
  },
  {
    id: 6,
    title: "IoT Security Framework",
    description: "Comprehensive IoT security solution with device authentication and network monitoring capabilities.",
    price: "₹26,999",
    views: 11230,
    rating: 4.4,
    images: [
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    ],
    category: "IoT Security"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play image slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, project.images.length]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-[#17D492] fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#17D492] fill-current absolute inset-0" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </div>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group w-full max-w-sm mx-auto"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* Image Slider Section - Responsive height */}
        <div className="relative w-full h-48 sm:h-56 md:h-48 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Image Navigation */}
          <div className="absolute top-2 right-2 flex gap-1">
            <button
              onClick={toggleAutoPlay}
              className="p-2 sm:p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors touch-manipulation"
              title={isAutoPlaying ? "Pause auto-play" : "Enable auto-play"}
              aria-label={isAutoPlaying ? "Pause auto-play" : "Enable auto-play"}
            >
              {isAutoPlaying ? (
                <Pause className="w-3 h-3 text-gray-700 dark:text-gray-300" />
              ) : (
                <Play className="w-3 h-3 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all touch-manipulation ${
                  idx === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>

          {/* Category Badge */}
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-[#17D492] text-white text-xs font-medium rounded-full">
              {project.category}
            </span>
          </div>

          {/* Navigation Arrows - Show on hover for desktop, always visible on mobile */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 sm:p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 touch-manipulation"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 sm:p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 touch-manipulation"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </button>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {project.title}
          </h3>
          
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Stats Row */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center gap-1">
              {renderStars(project.rating)}
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 ml-1">
                {project.rating}
              </span>
            </div>
            
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">{project.views.toLocaleString()}</span>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <span className="text-lg sm:text-xl font-bold text-[#17D492]">
              {project.price}
            </span>
            <button className="px-3 sm:px-4 py-2 bg-[#17D492] hover:bg-[#14c082] text-white rounded-lg font-medium transition-colors text-sm sm:text-base touch-manipulation">
              View Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projectsPerView = isMobile ? 1 : 3;
  const maxIndex = projects.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index % projects.length);
  };

  // Touch event handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Get current projects to display with infinite scroll
  const getCurrentProjects = () => {
    const projectsToShow = [];
    for (let i = 0; i < projectsPerView; i++) {
      const projectIndex = (currentIndex + i) % projects.length;
      projectsToShow.push(projects[projectIndex]);
    }
    return projectsToShow;
  };

  const currentProjects = getCurrentProjects();

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Aurora Animated Background */}
      <AuroraBackground 
        colorStops={["#17D492", "#14c082", "#0f172a", "#1e293b"]}
        blend={0.6}
        amplitude={isMobile ? 0.8 : 1.2}
        speed={isMobile ? 0.6 : 0.8}
      />
      
      {/* Content with higher z-index */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Completed Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Explore our collection of successful cybersecurity and web development projects
          </p>
        </div>

        {/* Projects Slider */}
        <div className="relative">
          {/* Projects Container with touch support */}
          <div 
            className="overflow-hidden px-4 sm:px-8 md:px-16"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="flex justify-center">
              <div className={`grid gap-4 sm:gap-6 max-w-6xl ${
                isMobile 
                  ? 'grid-cols-1 w-full max-w-sm' 
                  : 'grid-cols-1 md:grid-cols-3'
              }`}>
                {currentProjects.map((project, index) => (
                  <ProjectCard 
                    key={`${project.id}-${currentIndex}-${index}`} 
                    project={project} 
                    index={index} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Responsive positioning and sizing */}
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-2 md:left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-2 md:right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#17D492] scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile swipe hint */}
          {isMobile && (
            <div className="text-center mt-4 text-xs text-gray-500 dark:text-gray-400">
              Swipe left or right to navigate
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
