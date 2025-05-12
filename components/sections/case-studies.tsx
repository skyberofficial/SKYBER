"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    title: "Financial Tech Security Overhaul",
    category: "Cybersecurity",
    description: "Implemented comprehensive security infrastructure for a leading fintech company, reducing vulnerabilities by 85% and ensuring compliance with industry regulations.",
    image: "https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    results: ["85% reduction in security vulnerabilities", "100% compliance with financial regulations", "Zero security breaches since implementation"]
  },
  {
    id: 2,
    title: "E-commerce Platform Redesign",
    category: "Web Development",
    description: "Rebuilt an outdated e-commerce platform with modern technologies, resulting in a 40% increase in conversion rates and a 65% improvement in page load speed.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    results: ["40% increase in conversion rates", "65% improvement in page load times", "120% increase in mobile sales"]
  },
  {
    id: 3,
    title: "Healthcare Data Management System",
    category: "Custom Software",
    description: "Developed a secure, HIPAA-compliant data management system for a healthcare provider, streamlining operations and improving patient data security.",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    results: ["30% reduction in administrative time", "100% HIPAA compliance", "50% faster patient data retrieval"]
  },
  {
    id: 4,
    title: "Supply Chain AI Optimization",
    category: "AI Tools",
    description: "Created an AI-powered solution to optimize supply chain operations for a manufacturing company, resulting in significant cost savings and improved efficiency.",
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    results: ["22% reduction in operational costs", "35% improvement in delivery times", "15% decrease in inventory holding costs"]
  }
];

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCase = () => {
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevCase = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  return (
    <section id="case-studies" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore how we've helped businesses solve complex challenges and achieve their goals
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={caseStudies[activeIndex].image}
                  alt={caseStudies[activeIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {caseStudies[activeIndex].category}
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-[#17D492]">Case Study {activeIndex + 1}/{caseStudies.length}</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{caseStudies[activeIndex].title}</h3>
                <p className="text-muted-foreground mb-6">{caseStudies[activeIndex].description}</p>
                
                <div className="mb-8">
                  <h4 className="font-medium mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {caseStudies[activeIndex].results.map((result, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#17D492] mr-2"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="bg-[#17D492] hover:bg-[#14c082] text-white">
                  View Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevCase}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-[#17D492]" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextCase}
              className="rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}