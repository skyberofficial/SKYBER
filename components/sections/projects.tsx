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
  // Original projects
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
  // Additional Web Development Projects
  {
    id: 3,
    title: "Real Estate Platform",
    description: "Modern real estate listing and management platform",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    liveUrl: "https://example.com/project3",
    tech: ["Vue.js", "Firebase", "Tailwind"],
    category: "web"
  },
  // App Development Projects
  {
    id: 11,
    title: "Fitness Tracking App",
    description: "Mobile app for tracking workouts and nutrition",
    image: "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg",
    liveUrl: "https://example.com/app1",
    tech: ["React Native", "Firebase", "Redux"],
    category: "app"
  },
  // UI/UX Projects
  {
    id: 21,
    title: "Banking Dashboard",
    description: "Modern banking interface design",
    image: "https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg",
    liveUrl: "https://example.com/design1",
    tech: ["Figma", "Adobe XD", "Protopie"],
    category: "ui"
  },
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

  const ProjectSlider = ({ projects, title }: { projects: Project[], title: string }) => (
    <div className="mb-20">
      <h3 className="text-2xl font-bold mb-8">{title}</h3>
      <div className="project-slider">
        <div 
          className="project-slider-track"
          style={{ transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)` }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="w-full md:w-1/3 flex-shrink-0 p-4"
            >
              <div className="bg-card rounded-lg overflow-hidden border border-border group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-3/4"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      Live Preview
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      size="sm"
                      className="w-3/4 bg-[#17D492] hover:bg-[#14c082] text-white"
                      onClick={() => handleRequestBuild(project)}
                    >
                      Request Build
                    </Button>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Work</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore our portfolio of successful projects delivered to clients worldwide
        </p>

        <ProjectSlider projects={allProjects} title="Featured Projects" />
        <ProjectSlider projects={webProjects} title="Web Development Projects" />
        <ProjectSlider projects={appProjects} title="App Development Projects" />
        <ProjectSlider projects={uiProjects} title="UI/UX Design Projects" />

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