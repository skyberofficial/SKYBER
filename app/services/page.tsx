'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { MeshGradient } from "@/components/ui/mesh-gradient";
import { Model3DViewer } from "@/components/3d/Model3D";
import { 
  ArrowRight, 
  Code2, 
  Gamepad2, 
  Palette, 
  Box, 
  Monitor, 
  Brain,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    title: "3D Modeling & Animation",
    description: "Stunning 3D models and animations for games, AR/VR, and web applications",
    icon: Box,
    color: "#FF5757",
    projects: [
  {
        title: "Cyber Guardian",
        description: "Interactive 3D character with advanced animations",
        image: "/projects/cyber-guardian.jpg",
        link: "/portfolio/cyber-guardian"
      },
      {
        title: "Space Station",
        description: "Detailed 3D environment for VR experience",
        image: "/projects/space-station.jpg",
        link: "/portfolio/space-station"
      }
    ]
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that drive engagement and conversions",
    icon: Palette,
    color: "#17D492",
    projects: [
      {
        title: "Finance Dashboard",
        description: "Modern financial analytics platform",
        image: "/projects/finance-dashboard.jpg",
        link: "/portfolio/finance-dashboard"
      },
      {
        title: "Health App",
        description: "Intuitive mobile health tracking solution",
        image: "/projects/health-app.jpg",
        link: "/portfolio/health-app"
      }
    ]
  },
  {
    title: "Game Development",
    description: "Engaging games with cutting-edge graphics and mechanics",
    icon: Gamepad2,
    color: "#845EFF",
    projects: [
      {
        title: "Cyber Quest",
        description: "Futuristic RPG with advanced AI",
        image: "/projects/cyber-quest.jpg",
        link: "/portfolio/cyber-quest"
  },
  {
        title: "Space Raiders",
        description: "Multiplayer space combat game",
        image: "/projects/space-raiders.jpg",
        link: "/portfolio/space-raiders"
  }
    ]
  },
  {
    title: "Web Applications",
    description: "Full-stack web solutions with modern technologies",
    icon: Monitor,
    color: "#00B8D4",
    projects: [
  {
        title: "AI Code Assistant",
        description: "Real-time coding assistance platform",
        image: "/projects/code-assistant.jpg",
        link: "/portfolio/code-assistant"
  },
  {
        title: "Cloud Dashboard",
        description: "Enterprise cloud management system",
        image: "/projects/cloud-dashboard.jpg",
        link: "/portfolio/cloud-dashboard"
      }
    ]
  }
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header + Hero Background Container */}
      <div className="h-[100vh] absolute top-0 left-0 right-0 z-[1]">
        <MeshGradient />
      </div>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] relative overflow-hidden mt-20 hero-section flex items-center">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column - Content */}
            <div className="relative z-[2] order-2 lg:order-1">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20">
                  <Code2 className="w-4 h-4 mr-2" />
                  Our Services
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">Create</h1>
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-white/80">
                    Transforming ideas into digital reality with cutting-edge technology
                  </h2>
                </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                    className="bg-primary/90 hover:bg-primary backdrop-blur-sm border border-primary/20 w-full sm:w-auto"
                >
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                    className="backdrop-blur-sm border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                    View Portfolio
                </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
                  <motion.div 
                    className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary">50+</h3>
                    <p className="text-sm sm:text-base text-white/70">Projects Completed</p>
                  </motion.div>
                  <motion.div 
                    className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary">100%</h3>
                    <p className="text-sm sm:text-base text-white/70">Client Satisfaction</p>
                  </motion.div>
                  <motion.div 
                    className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 col-span-2 sm:col-span-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary">24/7</h3>
                    <p className="text-sm sm:text-base text-white/70">Support Available</p>
                  </motion.div>
                </div>
              </motion.div>
              </div>

            {/* Right Column - 3D Model */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-[2] block lg:block h-[300px] lg:h-[555px] order-1 lg:order-2 -mt-[25%] lg:mt-0"
            >
              <div className="absolute inset-0 top-[20px] bottom-[25px] backdrop-blur-[2px] bg-white/5 rounded-2xl border border-white/10">
                <Model3DViewer modelPath="/3d-models/Cyber_Guardian.glb" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the sections with solid background */}
      <div className="relative z-[3] bg-background">
        {/* Services Section */}
        <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 space-y-4"
              >
                <h2 className="text-4xl font-bold">Our Expertise</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Discover our comprehensive range of digital services tailored to your needs
                </p>
              </motion.div>

              {/* Services grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
          <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveService(index)}
                    className="group relative p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${service.color}05 0%, transparent 100%)`
                    }}
          >
                    <div className="space-y-4">
                      <div className="p-3 w-fit rounded-xl" style={{ backgroundColor: `${service.color}10` }}>
                        <service.icon className="w-6 h-6" style={{ color: service.color }} />
            </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                      <Link 
                        href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-sm text-primary hover:underline"
                      >
                        Learn more <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

        {/* Projects Section */}
        <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-muted-foreground">
                Explore our latest work across different domains
              </p>
            </motion.div>

            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                    <service.icon className="w-6 h-6" style={{ color: service.color }} />
                    {service.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {service.projects.map((project, projectIndex) => (
                      <Link
                        key={projectIndex}
                        href={project.link}
                        className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="relative h-[300px]">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                            <p className="text-muted-foreground">{project.description}</p>
                          </div>
              </div>
                      </Link>
                ))}
                  </div>
            </motion.div>
              ))}
              </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center bg-primary/5 rounded-2xl p-12 border border-primary/10"
            >
              <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's transform your ideas into reality with our expertise
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Our Process
              </Button>
              </div>
            </motion.div>
          </div>
        </section>
        </div>
    </div>
  );
} 
