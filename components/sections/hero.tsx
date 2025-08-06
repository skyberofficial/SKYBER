"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Lock, Zap } from "lucide-react";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { AnimatedMesh } from "@/components/ui/animated-mesh";
import { AnimatedButton } from "@/components/ui/animated-button";
import { PerformanceTracker } from "@/components/ui/performance-tracker";

// Memoized feature item component
const FeatureItem = React.memo<{
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}>(({ icon: Icon, text }) => (
  <div className="flex flex-col items-center lg:items-start">
    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#17D492]/10 mb-2">
      <Icon className="w-5 h-5 text-[#17D492]" />
    </div>
    <p className="font-medium text-sm">{text}</p>
  </div>
));

FeatureItem.displayName = 'FeatureItem';

// Add WDYR tracking to FeatureItem
if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
  (FeatureItem as any).whyDidYouRender = {
    customName: 'FeatureItem',
    trackHooks: false,
    trackProps: true,
    logOnDifferentValues: true,
  };
}

// Memoized hero content component
const HeroContent = React.memo(() => {
  const phrases = [
    "Enhanced AI Security Features",
    "Smart Cybersecurity & Tech",
    "Secure Digital Experiences",
    "Innovative Security Solutions",
    "Secure, Develop, Design"
  ];

  return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm font-medium">
              <span className="text-[#17D492] mr-2">New</span> 
              <TypeWriter phrases={phrases} typingSpeed={80} deletingSpeed={40} delayBetweenPhrases={3000} />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Secure Your Digital<br className="hidden md:block" /> Future With{" "}
              <span className="text-[#17D492] skyber-text">SKYBER</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Leading cybersecurity solutions and exceptional web development to protect your business and accelerate your online growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <AnimatedButton size="lg" className="w-full sm:w-auto" showArrow>
                Get Started
              </AnimatedButton>
              <AnimatedButton
                href="/about"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                About Us
              </AnimatedButton>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 md:pt-4">
        <FeatureItem icon={Shield} text="99.9% Uptime" />
        <FeatureItem icon={Lock} text="SOC 2 Certified" />
        <FeatureItem icon={Zap} text="24/7 Support" />
            </div>
          </motion.div>
  );
});

HeroContent.displayName = 'HeroContent';

// Add WDYR tracking to HeroContent
if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
  (HeroContent as any).whyDidYouRender = {
    customName: 'HeroContent',
    trackHooks: true,
    trackProps: false,
    logOnDifferentValues: true,
  };
}

// Memoized hero image component
const HeroImage = React.memo(() => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-6 lg:mt-0"
          >
            <div className="relative h-[280px] sm:h-[320px] lg:h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#17D492]/20 to-transparent rounded-lg"></div>
              <Image 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cybersecurity Professional" 
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#17D492]/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
));

HeroImage.displayName = 'HeroImage';

// Add WDYR tracking to HeroImage
if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
  (HeroImage as any).whyDidYouRender = {
    customName: 'HeroImage',
    trackHooks: false,
    trackProps: false,
    logOnDifferentValues: true,
  };
}

export const Hero = React.memo(() => {
  return (
    <PerformanceTracker componentName="Hero">
      <section className="relative min-h-screen md:min-h-[calc(100vh-5rem)] pt-16 md:pt-14 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b dark:from-background dark:to-background/60 from-background to-background/90 z-0" />
        
        {/* Animated mesh background */}
        <AnimatedMesh />
        
        <div className="container relative z-10 h-full flex items-start md:items-center py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start md:items-center">
            <HeroContent />
            <HeroImage />
          </div>
      </div>
    </section>
    </PerformanceTracker>
  );
});

Hero.displayName = 'Hero';

// Add WDYR tracking to Hero component
if (process.env.NODE_ENV === 'development' && process.env.WDYR === 'true') {
  (Hero as any).whyDidYouRender = {
    customName: 'Hero',
    trackHooks: true,
    trackProps: false,
    logOnDifferentValues: true,
  };
}