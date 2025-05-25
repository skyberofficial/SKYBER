"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "@/components/ui/animated-button";
import { cn } from "@/lib/utils";
import {
  Code,
  Shield,
  Palette,
  Laptop,
  Smartphone,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Partner companies data
const partners = [
  { 
    name: "Apple", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    invertInDark: true
  },
  { 
    name: "Microsoft", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    invertInDark: false
  },
  { 
    name: "Google", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    invertInDark: true
  },
  { 
    name: "Facebook", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    invertInDark: false
  },
  { 
    name: "X", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg",
    invertInDark: true
  },
  { 
    name: "Instagram", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
    invertInDark: false
  },
  { 
    name: "Amazon", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    invertInDark: true
  }
];

// Portfolio data
const portfolioItems = [
  {
    title: "Cybersecurity Dashboard",
    description: "Real-time security monitoring dashboard with advanced threat detection",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    category: "Cybersecurity",
    tags: ["React", "TypeScript", "ThreeJS", "WebGL"],
    link: "#",
    icon: <Shield className="w-5 h-5" />,
    rating: 4.9,
    reviews: 128,
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce platform with AR product visualization",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    category: "Web Development",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "AR.js"],
    link: "#",
    icon: <Laptop className="w-5 h-5" />,
    rating: 4.8,
    reviews: 96,
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking application",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
    category: "App Development",
    tags: ["React Native", "Firebase", "Biometrics"],
    link: "#",
    icon: <Smartphone className="w-5 h-5" />,
    rating: 4.7,
    reviews: 152,
  },
  {
    title: "AI-Powered Analytics",
    description: "Data visualization platform with AI-driven insights",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    category: "Data Analytics",
    tags: ["Python", "TensorFlow", "D3.js"],
    link: "#",
    icon: <Code className="w-5 h-5" />,
    rating: 4.9,
    reviews: 84,
  },
  {
    title: "Design System",
    description: "Comprehensive design system for enterprise applications",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    category: "UI/UX Design",
    tags: ["Figma", "Storybook", "Design Tokens"],
    link: "#",
    icon: <Palette className="w-5 h-5" />,
    rating: 4.8,
    reviews: 112,
  },
];

// Categories for filtering
const categories = [
  "All",
  "Cybersecurity",
  "Web Development",
  "App Development",
  "Data Analytics",
  "UI/UX Design",
];

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "w-4 h-4",
            star <= Math.floor(rating)
              ? "text-[#17D492] fill-[#17D492]"
              : star - rating <= 0.5
              ? "text-[#17D492] fill-[#17D492] opacity-50"
              : "text-gray-300"
          )}
        />
      ))}
    </div>
  );
};

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const controls = useAnimation();
  const carouselRef = useRef(null);

  // Auto scroll effect
  useEffect(() => {
    const animation = {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    };

    // Start animation after component is mounted
    controls.start(animation);

    return () => {
      controls.stop();
    };
  }, [controls]); // Add controls as dependency

  // Manual navigation not needed for continuous scroll
  const duplicatedPartners = [...partners, ...partners];

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <main className="min-h-screen bg-dot-pattern">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] mt-20 flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <Image
            src="/images/portfolio-bg.jpg"
            alt="Portfolio Background"
            fill
            className="object-cover scale-110 blur-[2px]"
            priority
            quality={100}
          />
          {/* Frosty Glass Effect Layers */}
          <div className="absolute inset-0 frost-blur bg-background/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 animate-gradient" />
          
          {/* Animated Grid Layers */}
          <div className="absolute inset-0 animate-grid" />
          <div className="absolute inset-0 animate-grid-reverse" style={{ animationDuration: '4s' }} />
          
          {/* Additional Grid Layer for Depth */}
          <div className="absolute inset-0 animate-grid" style={{ 
            animationDuration: '6s',
            backgroundSize: '48px 48px',
            opacity: 0.3
          }} />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            {/* Glass Card Effect for Content */}
            <div className="glass-morphism p-8 rounded-2xl glow">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Transforming Ideas into
                <span className="text-[#17D492] glow-text block mt-2">Digital Excellence</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6">
                Explore our portfolio of innovative solutions that help businesses thrive in the digital age
              </p>
              <div className="flex items-center justify-center gap-4 mt-8">
                <AnimatedButton
                  href="#projects"
                  className="bg-[#17D492] hover:bg-[#14c082] text-white px-8 shadow-lg shadow-[#17D492]/20"
                  showArrow
                >
                  View Projects
                </AnimatedButton>
                <AnimatedButton
                  href="/contact"
                  variant="outline"
                  className="px-8 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm"
                >
                  Get in Touch
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-white/70 glass-morphism px-4 py-1 rounded-full">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-8 rounded-full bg-[#17D492]/20 backdrop-blur-sm"
            >
              <motion.div
                animate={{ height: ["0%", "100%", "0%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-full rounded-full bg-[#17D492] glow"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#17D492]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#17D492]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </section>

      {/* Partner Companies Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground">We collaborate with forward-thinking companies worldwide</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden w-full">
              <motion.div
                ref={carouselRef}
                animate={controls}
                className="flex gap-8 w-fit"
              >
                {duplicatedPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[200px]"
                  >
                    <div className="h-24 bg-background rounded-lg shadow-sm border flex items-center justify-center p-6 hover:border-[#17D492]/50 transition-all duration-300 hover:shadow-lg">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={120}
                        height={40}
                        className={cn(
                          "w-auto h-8 grayscale hover:grayscale-0 transition-all duration-300",
                          partner.invertInDark ? "dark:invert" : ""
                        )}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-20" id="projects">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
            <p className="text-muted-foreground">Discover our latest work across different industries</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-colors",
                  selectedCategory === category
                    ? "bg-[#17D492] text-white"
                    : "bg-secondary/50 hover:bg-secondary text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={ref} className="pb-20 -mt-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group h-full hover:border-[#17D492]/50 transition-colors duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-[#17D492]">
                        {item.icon}
                        <span className="text-sm font-medium">{item.category}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <StarRating rating={item.rating} />
                        <span className="text-sm text-muted-foreground">({item.reviews})</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-secondary/50 text-foreground text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <AnimatedButton
                      href={item.link}
                      variant="ghost"
                      className="w-full group/btn"
                    >
                      <span className="text-[#17D492] group-hover/btn:text-[#14c082] transition-colors">
                        View Project
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#17D492] group-hover/btn:text-[#14c082] transition-colors" />
                    </AnimatedButton>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <Card className="overflow-hidden">
            <div className="relative p-8 md:p-12">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left space-y-4 max-w-2xl">
                  <h2 className="text-3xl font-bold">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-muted-foreground">
                    Let's work together to bring your vision to life with cutting-edge technology and design.
                  </p>
                </div>
                <AnimatedButton
                  href="/contact"
                  className="bg-[#17D492] hover:bg-[#14c082] text-white min-w-[200px]"
                  showArrow
                >
                  Get in Touch
                </AnimatedButton>
              </div>

              <div className="absolute inset-0 bg-dot-pattern opacity-5" />
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
} 