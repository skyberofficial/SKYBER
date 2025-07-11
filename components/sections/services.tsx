"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Code, 
  Cpu, 
  BrainCircuit, 
  Lock, 
  Globe, 
  Database, 
  Users, 
  ArrowRight,
  Smartphone,
  Palette 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Comprehensive protection against threats with advanced vulnerability assessment and monitoring.",
    features: ["Threat Protection", "Vulnerability Assessment", "Security Monitoring", "Incident Response"],
    link: "#cybersecurity-details"
  },
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description: "Full-stack web development services to create responsive, scalable, and modern websites.",
    features: ["Responsive Design", "Front-end Development", "Back-end APIs", "E-commerce Solutions"],
    link: "#web-development-details"
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences with modern design principles.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    link: "/services"
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: ["iOS Development", "Android Development", "Cross-platform Apps", "App Maintenance"],
    link: "#app-development-details"
  },
  {
    id: "tech-consultancy",
    icon: Users,
    title: "Tech Consultancy",
    description: "Expert guidance on technology strategy, architecture, and implementation.",
    features: ["Technology Assessment", "Digital Strategy", "Architecture Planning", "Team Training"],
    link: "#tech-consultancy-details"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions to secure and accelerate your business growth
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={item}
              className="bg-card rounded-lg p-6 border border-border transition-all hover:shadow-md hover:border-[#17D492]/30 group"
            >
              <div className="w-12 h-12 bg-[#17D492]/10 rounded-md flex items-center justify-center mb-6 group-hover:bg-[#17D492]/20 transition-colors">
                <service.icon className="w-6 h-6 text-[#17D492]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#17D492] mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.link}>
                <Button 
                  variant="ghost" 
                  className="text-[#17D492] hover:text-[#14c082] hover:bg-[#17D492]/10"
                >
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}