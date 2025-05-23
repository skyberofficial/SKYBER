"use client";

import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import cookingAnimation from "@/components/cooking.json";

interface ProjectCard {
  title: string;
  description: string;
  imageUrl: string;
}

const webDesignProjects: ProjectCard[] = [
  {
    title: "E-commerce Website",
    description: "Modern e-commerce platform with seamless user experience",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio showcasing artistic works",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Blog Platform",
    description: "Modern blogging platform with rich content features",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Corporate Website",
    description: "Professional corporate website with modern design",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Restaurant Website",
    description: "Elegant website for fine dining experience",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Travel Blog",
    description: "Interactive travel experience sharing platform",
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Real Estate Portal",
    description: "Comprehensive property listing and search platform",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Educational Platform",
    description: "Interactive learning management system",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Healthcare Portal",
    description: "Patient-centric healthcare information system",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Fitness Website",
    description: "Dynamic fitness and wellness platform",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Music Streaming",
    description: "Modern music streaming and discovery platform",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Event Management",
    description: "Comprehensive event planning and ticketing system",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Job Portal",
    description: "Advanced job search and recruitment platform",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Social Network",
    description: "Modern social networking platform",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60",
  },
];

const appDesignProjects: ProjectCard[] = [
  {
    title: "Fitness App",
    description: "Mobile app for tracking workouts and nutrition",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Task Manager",
    description: "Productivity app for managing daily tasks",
    imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Food Delivery App",
    description: "Seamless food ordering and delivery experience",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Social Media App",
    description: "Modern social networking platform",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Weather App",
    description: "Real-time weather tracking and forecasting",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Travel Companion",
    description: "Personal travel planning and guide app",
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Language Learning",
    description: "Interactive language learning platform",
    imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Music Player",
    description: "Feature-rich music streaming application",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Photo Editor",
    description: "Professional photo editing suite",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Fitness Tracker",
    description: "Comprehensive health and fitness monitoring",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Recipe App",
    description: "Culinary inspiration and recipe management",
    imageUrl: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Budget Tracker",
    description: "Personal finance and expense management",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Meditation App",
    description: "Guided meditation and mindfulness platform",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "News Reader",
    description: "Personalized news aggregation app",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=60",
  },
];

const uiuxProjects: ProjectCard[] = [
  {
    title: "Dashboard Design",
    description: "Analytics dashboard with intuitive interface",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Mobile UI Kit",
    description: "Comprehensive UI kit for mobile applications",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Design System",
    description: "Complete design system for enterprise applications",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "User Flow Design",
    description: "Optimized user journey and interaction design",
    imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "E-commerce UI",
    description: "Modern shopping experience interface",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Banking Interface",
    description: "Secure and intuitive banking experience",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Healthcare UI",
    description: "Patient-focused healthcare interface",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Education Platform",
    description: "Engaging learning interface design",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Social Network UI",
    description: "Modern social interaction interface",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Travel App UI",
    description: "Intuitive travel planning interface",
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Fitness App UI",
    description: "Motivating fitness tracking interface",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Food Delivery UI",
    description: "Seamless food ordering experience",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Music Player UI",
    description: "Engaging music streaming interface",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Weather App UI",
    description: "Clear and intuitive weather interface",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=60",
  },
];

const comingSoonCard: ProjectCard = {
  title: "Something Fresh is Cooking",
  description: "We're brewing new ideas. Stay tuned for exciting updates!",
  imageUrl: "", // We'll use Lottie animation instead
};

// Separate wrapper component to handle hydration safely
export function ProjectShowcaseWrapper() {
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  // On first server render, return an empty div with the same height to prevent layout shift
  if (!hasMounted) {
    return (
      <section className="py-16 bg-background min-h-[800px]" aria-hidden="true">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 opacity-0">Project Showcase</h2>
          <div className="w-full max-w-md mx-auto">
            <div className="h-2 bg-border rounded-full overflow-hidden"></div>
          </div>
        </div>
      </section>
    );
  }
  
  return <ProjectShowcase />;
}

function ProjectShowcase() {
  const webDesignRef = useRef<HTMLDivElement>(null);
  const appDesignRef = useRef<HTMLDivElement>(null);
  const uiuxRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = webDesignProjects.length + appDesignProjects.length + uiuxProjects.length;

  useEffect(() => {
    console.log("Starting image preloading...");
    const preloadImages = async () => {
      const allProjects = [...webDesignProjects, ...appDesignProjects, ...uiuxProjects];
      
      // Create an array of image loading promises
      const imagePromises = allProjects.map((project) => {
        return new Promise((resolve) => {
          // Skip empty URLs (like in the coming soon card)
          if (!project.imageUrl) {
            setLoadedImages(prev => prev + 1);
            resolve(null);
            return;
          }

          const img = new Image();
          img.src = project.imageUrl;
          img.onload = () => {
            setLoadedImages(prev => prev + 1);
            resolve(img);
          };
          img.onerror = () => {
            // Still count error images as loaded to avoid hanging
            setLoadedImages(prev => prev + 1);
            resolve(null);
          };
        });
      });

      try {
        await Promise.all(imagePromises);
        console.log("All images loaded, transitioning...");
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          setIsLoading(false);
          console.log("Loading complete, showing content");
        }, 500);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const cardWidth = 300;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      const currentScroll = ref.current.scrollLeft;
      const maxScroll = ref.current.scrollWidth - ref.current.clientWidth;
      
      let newScroll;
      if (direction === 'left') {
        newScroll = Math.max(0, Math.floor(currentScroll / scrollAmount) * scrollAmount - scrollAmount);
      } else {
        newScroll = Math.min(maxScroll, Math.ceil(currentScroll / scrollAmount) * scrollAmount + scrollAmount);
      }
      
      ref.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const ComingSoonCard = () => (
    <Card className="w-[300px] flex-shrink-0 overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 ease-in-out">
      <div className="aspect-video relative bg-black">
        <Lottie
          animationData={cookingAnimation}
          className="w-full h-full"
          loop={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-lg text-foreground">{comingSoonCard.title}</h4>
        <p className="text-muted-foreground mt-2">{comingSoonCard.description}</p>
        <div className="mt-4 flex items-center justify-center">
          <div className="animate-pulse flex space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </Card>
  );

  // Show loading indicator
  if (isLoading) {
    return (
      <section className="py-16 bg-background min-h-[400px] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="w-full max-w-md mx-auto">
            <div className="h-2 bg-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300 ease-in-out"
                style={{ width: `${(loadedImages / totalImages) * 100}%` }}
              />
            </div>
            <p className="mt-4 text-muted-foreground">
              Loading projects... {Math.round((loadedImages / totalImages) * 100)}%
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-foreground">Project Showcase</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Web Designs Container */}
          <div className="bg-card rounded-lg shadow-lg p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-foreground">Web Designs</h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll(webDesignRef, 'left')}
                  className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button 
                  onClick={() => scroll(webDesignRef, 'right')}
                  className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>
            <div className="overflow-hidden w-[300px]" ref={webDesignRef}>
              <div className="flex space-x-6 transition-all duration-700 ease-in-out" style={{ minWidth: 'max-content' }}>
                {webDesignProjects.map((project, index) => (
                  <Card key={index} className="w-[300px] flex-shrink-0 overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-lg">
                    <div className="aspect-video relative">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="object-cover w-full h-full transition-all duration-500 ease-in-out hover:scale-105"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg text-foreground">{project.title}</h4>
                      <p className="text-muted-foreground mt-2">{project.description}</p>
                    </div>
                  </Card>
                ))}
                <ComingSoonCard />
              </div>
            </div>
          </div>

          {/* App Designs Container */}
          <div className="bg-card rounded-lg shadow-lg p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-foreground">App Designs</h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll(appDesignRef, 'left')}
                  className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button 
                  onClick={() => scroll(appDesignRef, 'right')}
                  className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>
            <div className="overflow-hidden w-[300px]" ref={appDesignRef}>
              <div className="flex space-x-6 transition-all duration-700 ease-in-out" style={{ minWidth: 'max-content' }}>
                {appDesignProjects.map((project, index) => (
                  <Card key={index} className="w-[300px] flex-shrink-0 overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-lg">
                    <div className="aspect-video relative">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="object-cover w-full h-full transition-all duration-500 ease-in-out hover:scale-105"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg text-foreground">{project.title}</h4>
                      <p className="text-muted-foreground mt-2">{project.description}</p>
                    </div>
                  </Card>
                ))}
                <ComingSoonCard />
              </div>
            </div>
          </div>

          {/* UI/UX Designs Container */}
          <div className="bg-card rounded-lg shadow-lg p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-foreground">UI/UX Designs</h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll(uiuxRef, 'left')}
                  className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button 
                  onClick={() => scroll(uiuxRef, 'right')}
                  className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>
            <div className="overflow-hidden w-[300px]" ref={uiuxRef}>
              <div className="flex space-x-6 transition-all duration-700 ease-in-out" style={{ minWidth: 'max-content' }}>
                {uiuxProjects.map((project, index) => (
                  <Card key={index} className="w-[300px] flex-shrink-0 overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-lg">
                    <div className="aspect-video relative">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="object-cover w-full h-full transition-all duration-500 ease-in-out hover:scale-105"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg text-foreground">{project.title}</h4>
                      <p className="text-muted-foreground mt-2">{project.description}</p>
                    </div>
                  </Card>
                ))}
                <ComingSoonCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 