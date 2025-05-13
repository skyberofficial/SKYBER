"use client";

import { useState } from "react";
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
import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  tech: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with advanced security features",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveUrl: "https://example.com/project1",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Secure healthcare data management system with HIPAA compliance",
    image: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveUrl: "https://example.com/project2",
    tech: ["React", "Express", "MongoDB"],
  },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [budget, setBudget] = useState([5000]);

  const projectsPerView = 3;
  const totalSlides = Math.ceil(projects.length / projectsPerView);

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

  const visibleProjects = projects.slice(
    currentIndex * projectsPerView,
    (currentIndex + 1) * projectsPerView
  );

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Work</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore our portfolio of successful projects delivered to clients worldwide
        </p>

        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full md:w-1/3 bg-card rounded-lg overflow-hidden border border-border group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      Live Preview
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#17D492] hover:bg-[#14c082] text-white"
                      onClick={() => handleRequestBuild(project)}
                    >
                      Request Build
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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
              </motion.div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full"
            onClick={prevSlide}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full"
            onClick={nextSlide}
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
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
      </div>
    </section>
  );
}