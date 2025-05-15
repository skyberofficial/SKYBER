"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { ExternalLink, ArrowRight, ArrowLeft, ArrowUp } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  tech: string[];
  category: string;
}

const allProjects: Project[] = [
  // Featured Projects
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with advanced security features",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveUrl: "https://example.com/project1",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    category: "web"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Secure healthcare data management system with HIPAA compliance",
    image: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveUrl: "https://example.com/project2",
    tech: ["React", "Express", "MongoDB"],
    category: "web"
  },
  {
    id: 3,
    title: "Real Estate Platform",
    description: "Modern real estate listing and management platform",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    liveUrl: "https://example.com/project3",
    tech: ["Vue.js", "Firebase", "Tailwind"],
    category: "web"
  },
  {
    id: 4,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics dashboard with machine learning insights",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
    liveUrl: "https://example.com/project4",
    tech: ["React", "Python", "TensorFlow"],
    category: "web"
  },
  {
    id: 5,
    title: "Social Media Management Tool",
    description: "Comprehensive social media management and analytics platform",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    liveUrl: "https://example.com/project5",
    tech: ["Angular", "Node.js", "Redis"],
    category: "web"
  },
  {
    id: 6,
    title: "Inventory Management System",
    description: "Enterprise-level inventory tracking and management solution",
    image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",
    liveUrl: "https://example.com/project6",
    tech: ["React", "GraphQL", "PostgreSQL"],
    category: "web"
  },
  {
    id: 7,
    title: "Educational Learning Platform",
    description: "Interactive online learning platform with real-time collaboration",
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
    liveUrl: "https://example.com/project7",
    tech: ["Next.js", "Socket.io", "MongoDB"],
    category: "web"
  },
  {
    id: 8,
    title: "Cryptocurrency Trading App",
    description: "Secure and fast cryptocurrency trading application",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
    liveUrl: "https://example.com/project8",
    tech: ["React Native", "Node.js", "WebSocket"],
    category: "app"
  },
  {
    id: 9,
    title: "Restaurant Management System",
    description: "Complete restaurant management and ordering system",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    liveUrl: "https://example.com/project9",
    tech: ["Vue.js", "Laravel", "MySQL"],
    category: "web"
  },
  {
    id: 10,
    title: "Travel Booking Platform",
    description: "Comprehensive travel booking and management system",
    image: "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg",
    liveUrl: "https://example.com/project10",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    category: "web"
  },
  {
    id: 11,
    title: "Project Management Tool",
    description: "Agile project management and collaboration platform",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    liveUrl: "https://example.com/project11",
    tech: ["React", "Node.js", "MongoDB"],
    category: "web"
  },
  {
    id: 12,
    title: "Smart Home Automation",
    description: "IoT-based home automation and control system",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    liveUrl: "https://example.com/project12",
    tech: ["React", "Python", "MQTT"],
    category: "app"
  },
  {
    id: 13,
    title: "HR Management System",
    description: "Complete human resource management solution",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    liveUrl: "https://example.com/project13",
    tech: ["Angular", "Spring Boot", "PostgreSQL"],
    category: "web"
  },
  {
    id: 14,
    title: "Fitness Tracking App",
    description: "Mobile app for tracking workouts and nutrition",
    image: "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg",
    liveUrl: "https://example.com/project14",
    tech: ["React Native", "Firebase", "Redux"],
    category: "app"
  },
  {
    id: 15,
    title: "Banking Dashboard",
    description: "Modern banking interface design",
    image: "https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg",
    liveUrl: "https://example.com/project15",
    tech: ["Figma", "Adobe XD", "Protopie"],
    category: "ui"
  },

  // Web Development Projects
  {
    id: 16,
    title: "Event Management Platform",
    description: "Comprehensive event planning and ticketing system",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
    liveUrl: "https://example.com/web1",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    category: "web"
  },
  {
    id: 17,
    title: "Job Board Platform",
    description: "Advanced job listing and applicant tracking system",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    liveUrl: "https://example.com/web2",
    tech: ["React", "Node.js", "MongoDB"],
    category: "web"
  },
  {
    id: 18,
    title: "Online Learning Management",
    description: "Feature-rich learning management system",
    image: "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg",
    liveUrl: "https://example.com/web3",
    tech: ["Vue.js", "Laravel", "MySQL"],
    category: "web"
  },
  {
    id: 19,
    title: "Real-time Chat Application",
    description: "Scalable real-time messaging platform",
    image: "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg",
    liveUrl: "https://example.com/web4",
    tech: ["React", "Socket.io", "Redis"],
    category: "web"
  },
  {
    id: 20,
    title: "Content Management System",
    description: "Custom CMS with advanced publishing features",
    image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg",
    liveUrl: "https://example.com/web5",
    tech: ["Next.js", "GraphQL", "PostgreSQL"],
    category: "web"
  },
  {
    id: 21,
    title: "Booking Management System",
    description: "Appointment scheduling and management platform",
    image: "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg",
    liveUrl: "https://example.com/web6",
    tech: ["React", "Node.js", "MongoDB"],
    category: "web"
  },
  {
    id: 22,
    title: "Digital Asset Management",
    description: "Enterprise digital asset management solution",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    liveUrl: "https://example.com/web7",
    tech: ["Angular", "Spring Boot", "PostgreSQL"],
    category: "web"
  },
  {
    id: 23,
    title: "Customer Support Portal",
    description: "Comprehensive customer service and ticketing system",
    image: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg",
    liveUrl: "https://example.com/web8",
    tech: ["Vue.js", "Django", "PostgreSQL"],
    category: "web"
  },
  {
    id: 24,
    title: "Analytics Dashboard",
    description: "Real-time business analytics and reporting platform",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
    liveUrl: "https://example.com/web9",
    tech: ["React", "Python", "Redis"],
    category: "web"
  },
  {
    id: 25,
    title: "Subscription Management",
    description: "SaaS subscription and billing management system",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    liveUrl: "https://example.com/web10",
    tech: ["Next.js", "Stripe", "MongoDB"],
    category: "web"
  },
  {
    id: 26,
    title: "Document Management",
    description: "Secure document storage and sharing platform",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    liveUrl: "https://example.com/web11",
    tech: ["React", "Node.js", "AWS S3"],
    category: "web"
  },
  {
    id: 27,
    title: "Social Network Platform",
    description: "Feature-rich social networking application",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    liveUrl: "https://example.com/web12",
    tech: ["Next.js", "GraphQL", "PostgreSQL"],
    category: "web"
  },
  {
    id: 28,
    title: "Video Streaming Platform",
    description: "Custom video streaming and management system",
    image: "https://images.pexels.com/photos/3182927/pexels-photo-3182927.jpeg",
    liveUrl: "https://example.com/web13",
    tech: ["React", "Node.js", "FFmpeg"],
    category: "web"
  },
  {
    id: 29,
    title: "Task Management System",
    description: "Collaborative task and project management tool",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    liveUrl: "https://example.com/web14",
    tech: ["Vue.js", "Laravel", "MySQL"],
    category: "web"
  },
  {
    id: 30,
    title: "Real Estate Management",
    description: "Property listing and management platform",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    liveUrl: "https://example.com/web15",
    tech: ["Next.js", "Node.js", "MongoDB"],
    category: "web"
  },

  // App Development Projects
  {
    id: 31,
    title: "Food Delivery App",
    description: "On-demand food delivery mobile application",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    liveUrl: "https://example.com/app1",
    tech: ["React Native", "Node.js", "MongoDB"],
    category: "app"
  },
  {
    id: 32,
    title: "Ride Sharing App",
    description: "Real-time ride-hailing and sharing platform",
    image: "https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg",
    liveUrl: "https://example.com/app2",
    tech: ["Flutter", "Firebase", "Google Maps"],
    category: "app"
  },
  {
    id: 33,
    title: "Fitness Tracking App",
    description: "Comprehensive fitness and health monitoring app",
    image: "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg",
    liveUrl: "https://example.com/app3",
    tech: ["React Native", "Node.js", "HealthKit"],
    category: "app"
  },
  {
    id: 34,
    title: "Social Media App",
    description: "Feature-rich social networking mobile app",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    liveUrl: "https://example.com/app4",
    tech: ["Flutter", "Firebase", "CloudStore"],
    category: "app"
  },
  {
    id: 35,
    title: "Task Management App",
    description: "Mobile task and project management solution",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    liveUrl: "https://example.com/app5",
    tech: ["React Native", "Redux", "MongoDB"],
    category: "app"
  },
  {
    id: 36,
    title: "Weather App",
    description: "Real-time weather forecasting application",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    liveUrl: "https://example.com/app6",
    tech: ["Flutter", "OpenWeather API", "Google Maps"],
    category: "app"
  },
  {
    id: 37,
    title: "Music Streaming App",
    description: "Mobile music streaming and playlist management",
    image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg",
    liveUrl: "https://example.com/app7",
    tech: ["React Native", "Node.js", "Redis"],
    category: "app"
  },
  {
    id: 38,
    title: "Travel Planning App",
    description: "Comprehensive travel planning and booking app",
    image: "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg",
    liveUrl: "https://example.com/app8",
    tech: ["Flutter", "Firebase", "Google Places"],
    category: "app"
  },
  {
    id: 39,
    title: "Language Learning App",
    description: "Interactive language learning application",
    image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg",
    liveUrl: "https://example.com/app9",
    tech: ["React Native", "Node.js", "MongoDB"],
    category: "app"
  },
  {
    id: 40,
    title: "Budget Tracking App",
    description: "Personal finance and budget management app",
    image: "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg",
    liveUrl: "https://example.com/app10",
    tech: ["Flutter", "Firebase", "Plaid API"],
    category: "app"
  },
  {
    id: 41,
    title: "Recipe App",
    description: "Cooking recipe and meal planning application",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    liveUrl: "https://example.com/app11",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    category: "app"
  },
  {
    id: 42,
    title: "Dating App",
    description: "Location-based dating and matching app",
    image: "https://images.pexels.com/photos/1dinnerdate/pexels-photo-1dinnerdate.jpeg",
    liveUrl: "https://example.com/app12",
    tech: ["Flutter", "Firebase", "Google Maps"],
    category: "app"
  },
  {
    id: 43,
    title: "News Reader App",
    description: "Personalized news aggregation application",
    image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
    liveUrl: "https://example.com/app13",
    tech: ["React Native", "Node.js", "Redis"],
    category: "app"
  },
  {
    id: 44,
    title: "Meditation App",
    description: "Mindfulness and meditation guidance app",
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
    liveUrl: "https://example.com/app14",
    tech: ["Flutter", "Firebase", "Audio API"],
    category: "app"
  },
  {
    id: 45,
    title: "Event Discovery App",
    description: "Local event discovery and booking app",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
    liveUrl: "https://example.com/app15",
    tech: ["React Native", "Node.js", "MongoDB"],
    category: "app"
  },

  // UI/UX Design Projects
  {
    id: 46,
    title: "E-commerce UI Design",
    description: "Modern e-commerce platform interface design",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    liveUrl: "https://example.com/ui1",
    tech: ["Figma", "Adobe XD", "Sketch"],
    category: "ui"
  },
  {
    id: 47,
    title: "Banking App Design",
    description: "User-friendly mobile banking interface",
    image: "https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg",
    liveUrl: "https://example.com/ui2",
    tech: ["Figma", "Principle", "Protopie"],
    category: "ui"
  },
  {
    id: 48,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
    liveUrl: "https://example.com/ui3",
    tech: ["Adobe XD", "Illustrator", "Photoshop"],
    category: "ui"
  },
  {
    id: 49,
    title: "Healthcare Portal Design",
    description: "Patient management system interface",
    image: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg",
    liveUrl: "https://example.com/ui4",
    tech: ["Figma", "Sketch", "InVision"],
    category: "ui"
  },
  {
    id: 50,
    title: "Travel App Design",
    description: "Travel booking app interface design",
    image: "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg",
    liveUrl: "https://example.com/ui5",
    tech: ["Adobe XD", "After Effects", "Principle"],
    category: "ui"
  },
  {
    id: 51,
    title: "Food Delivery UI",
    description: "Food ordering app interface design",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    liveUrl: "https://example.com/ui6",
    tech: ["Figma", "Protopie", "Illustrator"],
    category: "ui"
  },
  {
    id: 52,
    title: "Fitness App Design",
    description: "Workout tracking app interface",
    image: "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg",
    liveUrl: "https://example.com/ui7",
    tech: ["Adobe XD", "Sketch", "Principle"],
    category: "ui"
  },
  {
    id: 53,
    title: "Real Estate Platform UI",
    description: "Property listing website design",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    liveUrl: "https://example.com/ui8",
    tech: ["Figma", "Photoshop", "InVision"],
    category: "ui"
  },
  {
    id: 54,
    title: "Music Player Design",
    description: "Streaming app interface design",
    image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg",
    liveUrl: "https://example.com/ui9",
    tech: ["Adobe XD", "After Effects", "Protopie"],
    category: "ui"
  },
  {
    id: 55,
    title: "Task Manager UI",
    description: "Project management tool interface",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    liveUrl: "https://example.com/ui10",
    tech: ["Figma", "Sketch", "Principle"],
    category: "ui"
  },
  {
    id: 56,
    title: "News App Design",
    description: "News reader app interface design",
    image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
    liveUrl: "https://example.com/ui11",
    tech: ["Adobe XD", "Illustrator", "InVision"],
    category: "ui"
  },
  {
    id: 57,
    title: "Education Platform UI",
    description: "Learning management system design",
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
    liveUrl: "https://example.com/ui12",
    tech: ["Figma", "Protopie", "Photoshop"],
    category: "ui"
  },
  {
    id: 58,
    title: "Smart Home App Design",
    description: "IoT control interface design",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    liveUrl: "https://example.com/ui13",
    tech: ["Adobe XD", "Principle", "Sketch"],
    category: "ui"
  },
  {
    id: 59,
    title: "Crypto Trading UI",
    description: "Cryptocurrency exchange interface",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
    liveUrl: "https://example.com/ui14",
    tech: ["Figma", "After Effects", "InVision"],
    category: "ui"
  },
  {
    id: 60,
    title: "Restaurant App Design",
    description: "Food ordering system interface",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    liveUrl: "https://example.com/ui15",
    tech: ["Adobe XD", "Sketch", "Protopie"],
    category: "ui"
  }
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [budget, setBudget] = useState([5000]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const webProjects = allProjects.filter(p => p.category === "web");
  const appProjects = allProjects.filter(p => p.category === "app");
  const uiProjects = allProjects.filter(p => p.category === "ui");

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const projectsPerView = 3;
  const totalSlides = Math.ceil(allProjects.length / projectsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const handleRequestBuild = (project: Project) => {
    setSelectedProject(project);
    setIsFormOpen(true);
  };

  const ProjectSlider = ({ projects, title }: { projects: Project[], title: string }) => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
    const [autoScrollProgress, setAutoScrollProgress] = useState(0);
    
    const projectsPerView = 3;
    const totalSlides = Math.ceil(projects.length / projectsPerView);
    const autoScrollInterval = 5000; // 5 seconds per slide

    useEffect(() => {
      // Auto-scroll effect
      const autoScrollTimer = setInterval(() => {
        setSliderIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      }, autoScrollInterval);

      // Progress bar animation
      const progressTimer = setInterval(() => {
        setAutoScrollProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + (100 / (autoScrollInterval / 100));
        });
      }, 100);

      return () => {
        clearInterval(autoScrollTimer);
        clearInterval(progressTimer);
      };
    }, [totalSlides]);

    // Reset progress when slide changes
    useEffect(() => {
      setAutoScrollProgress(0);
    }, [sliderIndex]);

    const handleImageLoad = (projectId: number) => {
      setLoadedImages((prev) => new Set(Array.from(prev).concat(projectId)));
    };

    useEffect(() => {
      // Simulate initial loading
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    const nextSlide = () => {
      setSliderIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      setAutoScrollProgress(0);
    };

    const prevSlide = () => {
      setSliderIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      setAutoScrollProgress(0);
    };

    return (
      <div className={`${title === "UI/UX Design Projects" ? "mb-8" : "mb-12"}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="flex items-center gap-4">
            <div className="w-32 h-1 bg-[#17D492]/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#17D492] transition-all duration-300 rounded-full"
                style={{ width: `${autoScrollProgress}%` }}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full slider-nav-button"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground min-w-[3rem] text-center">
                {sliderIndex + 1} / {totalSlides}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full slider-nav-button"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="project-slider relative">
        <div 
          className="project-slider-track"
            style={{ transform: `translateX(-${sliderIndex * (100 / projectsPerView)}%)` }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="w-full md:w-1/3 flex-shrink-0 p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className={`project-card ${loadedImages.has(project.id) ? 'loaded' : ''}`}>
                  {isLoading && (
                    <div className="project-card-preloader rounded-lg h-48" />
                  )}
                  <div className={`project-card-content ${isLoading ? 'hidden' : ''}`}>
                    <div className="relative h-48 project-card-image rounded-t-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onLoad={() => handleImageLoad(project.id)}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                    <Button
                      variant="secondary"
                      size="sm"
                          className="w-3/4 button-hover-effect"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      Live Preview
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      size="sm"
                          className="w-3/4 bg-[#17D492] hover:bg-[#14c082] text-white button-hover-effect"
                      onClick={() => handleRequestBuild(project)}
                    >
                      Request Build
                    </Button>
                  </div>
                </div>
                    <div className="p-6 bg-card rounded-b-lg border border-t-0 border-border">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-secondary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                      </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
  };

  return (
    <section className="py-12 bg-background relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Our Work</h2>
        <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Explore our portfolio of successful projects delivered to clients worldwide
        </p>

        <div className="space-y-8">
          <ProjectSlider projects={allProjects.slice(0, 15)} title="Featured Projects" />
          <ProjectSlider projects={webProjects.slice(0, 15)} title="Web Development Projects" />
          <ProjectSlider projects={appProjects.slice(0, 15)} title="App Development Projects" />
          <ProjectSlider projects={uiProjects.slice(0, 15)} title="UI/UX Design Projects" />
        </div>

        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Request Project Build</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Phone Number</label>
                <Input placeholder="Your contact number" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Budget (₹)</label>
                <div className="space-y-2">
                  <Slider
                    value={budget}
                    onValueChange={setBudget}
                    min={1500}
                    max={10000}
                    step={100}
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹1,500</span>
                    <span>₹{budget[0].toLocaleString()}</span>
                    <span>₹10,000</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Custom Features</label>
                <Textarea placeholder="Describe any custom features you'd like to add..." />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Address</label>
                <Textarea placeholder="Your address..." />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Additional Requirements</label>
                <Textarea placeholder="Any other requirements or notes..." />
              </div>
              <Button className="w-full bg-[#17D492] hover:bg-[#14c082] text-white">
                Submit Request
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <motion.div 
          className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
          initial={{ scale: 0 }}
          animate={{ scale: showBackToTop ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            size="icon"
            onClick={scrollToTop}
            className="rounded-full"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}