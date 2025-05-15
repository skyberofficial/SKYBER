"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "<span className=\"skyber-text\">SKYBER</span> transformed our cybersecurity infrastructure. Their team identified vulnerabilities we weren't even aware of and implemented robust security measures that have protected us from multiple potential breaches.",
    author: "Alexandra Chen",
    position: "CTO, NexusFinance",
    company: "NexusFinance",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    quote: "The web application <span className=\"skyber-text\">SKYBER</span> developed for us exceeded our expectations. Not only is it visually stunning, but the functionality and user experience are exceptional. Our customer engagement has increased significantly since launch.",
    author: "Marcus Johnson",
    position: "Marketing Director, EcoSolutions",
    company: "EcoSolutions",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    quote: "Working with <span className=\"skyber-text\">SKYBER</span> on our custom software project was a seamless experience. They took the time to understand our unique needs and delivered a solution that has streamlined our operations and reduced costs by 35%.",
    author: "Sophia Rodriguez",
    position: "Operations Manager, MedTech Innovations",
    company: "MedTech Innovations",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from some of our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 -left-12 text-6xl text-[#17D492]/20">
            <Quote />
          </div>
          
          <div className="relative overflow-hidden rounded-lg bg-card border border-border p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-lg md:text-xl mb-6 italic">
                  "{testimonials[current].quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-[#17D492]">
                    <Image 
                      src={testimonials[current].image} 
                      alt={testimonials[current].author}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="font-semibold text-lg">{testimonials[current].author}</h4>
                  <p className="text-muted-foreground">
                    {testimonials[current].position}, {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prev}
                className="rounded-full hover:bg-background/80 hover:text-[#17D492]"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={next}
                className="rounded-full hover:bg-background/80 hover:text-[#17D492]"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === current ? "bg-[#17D492]" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 border border-border text-center">
            <div className="text-4xl font-bold text-[#17D492] mb-2">97%</div>
            <p className="text-muted-foreground">Client satisfaction rate</p>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border text-center">
            <div className="text-4xl font-bold text-[#17D492] mb-2">85%</div>
            <p className="text-muted-foreground">Clients return for additional projects</p>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border text-center">
            <div className="text-4xl font-bold text-[#17D492] mb-2">24/7</div>
            <p className="text-muted-foreground">Support and monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
}