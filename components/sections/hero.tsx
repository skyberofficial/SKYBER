"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Shield, Lock, Zap } from "lucide-react";
import { TypeWriter } from "@/components/ui/TypeWriter";

export function Hero() {
  const phrases = [
    "Enhanced AI Security Features",
    "Smart Cybersecurity & Tech",
    "Secure Digital Experiences",
    "Innovative Security Solutions",
    "Secure, Develop, Design"
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b dark:from-background dark:to-background/60 from-background to-background/90 z-0" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm font-medium mb-6">
              <span className="text-[#17D492] mr-2">New</span> 
              <TypeWriter phrases={phrases} typingSpeed={80} deletingSpeed={40} delayBetweenPhrases={3000} />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Secure Your Digital<br className="hidden md:block" /> Future With{" "}
              <span className="text-[#17D492]">Skyber</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Leading cybersecurity solutions and exceptional web development to protect your business and accelerate your online growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-[#17D492] hover:bg-[#14c082] text-white w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Schedule Demo
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#17D492]/10 mb-3">
                  <Shield className="w-5 h-5 text-[#17D492]" />
                </div>
                <p className="font-medium">99.9% Uptime</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#17D492]/10 mb-3">
                  <Lock className="w-5 h-5 text-[#17D492]" />
                </div>
                <p className="font-medium">SOC 2 Certified</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#17D492]/10 mb-3">
                  <Zap className="w-5 h-5 text-[#17D492]" />
                </div>
                <p className="font-medium">24/7 Support</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#17D492]/20 to-transparent rounded-lg"></div>
              <Image 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cybersecurity Professional" 
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#17D492]/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-5 -left-5 w-32 h-32 bg-[#17D492]/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}