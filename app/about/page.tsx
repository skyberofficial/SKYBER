'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import Image from "next/image";
import { Code, Shield, Zap, Users, Target, Award } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

// Core values data
const coreValues = [
  {
    icon: <Shield className="w-8 h-8 text-[#17D492]" />,
    title: "Security First",
    description: "We prioritize cybersecurity in everything we build, ensuring your digital assets are protected."
  },
  {
    icon: <Code className="w-8 h-8 text-[#17D492]" />,
    title: "Innovation",
    description: "Constantly pushing boundaries with cutting-edge technologies and creative solutions."
  },
  {
    icon: <Users className="w-8 h-8 text-[#17D492]" />,
    title: "Client-Centric",
    description: "Your success is our success. We work closely with you to achieve your goals."
  },
  {
    icon: <Target className="w-8 h-8 text-[#17D492]" />,
    title: "Precision",
    description: "Attention to detail in every line of code and every security measure we implement."
  },
  {
    icon: <Zap className="w-8 h-8 text-[#17D492]" />,
    title: "Agility",
    description: "Quick to adapt and respond to changing technology landscapes and security threats."
  },
  {
    icon: <Award className="w-8 h-8 text-[#17D492]" />,
    title: "Excellence",
    description: "Committed to delivering exceptional quality in every project we undertake."
  }
];

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[100svh] w-full flex items-center justify-center bg-black px-4 sm:px-6 mt-[5rem]"
      >
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 text-center lg:text-left relative z-20"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold skyber-text leading-tight">
                Securing the Future of Digital Innovation
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                At SKYBER, we blend cutting-edge cybersecurity with innovative web development 
                to create secure, scalable, and stunning digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <AnimatedButton 
                  className="bg-[#17D492] hover:bg-[#14c082] text-white w-full sm:w-auto" 
                  showArrow
                >
                  Our Services
                </AnimatedButton>
                <AnimatedButton 
                  href="/contact" 
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Contact Us
                </AnimatedButton>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] sm:h-[350px] lg:h-[500px] mt-6 lg:mt-0 order-first lg:order-last z-10"
            >
              <div className="absolute inset-0 z-20">
                <Lottie
                  animationData={require("@/public/animations/cyber-security.json")}
                  className="w-full h-full"
                  loop={true}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center z-30"
        >
          <span className="text-xs sm:text-sm text-white/70 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-6 sm:h-8 rounded-full bg-[#17D492]/20"
          >
            <motion.div
              animate={{ height: ["0%", "100%", "0%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-full rounded-full bg-[#17D492]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <motion.section 
        ref={valuesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={valuesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-screen flex items-center bg-secondary/20 py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 skyber-text">Our Core Values</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              The principles that guide us in delivering exceptional cybersecurity and web development solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-4 sm:p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-3 sm:mb-4">{value.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        ref={teamRef}
        initial={{ opacity: 0, y: 50 }}
        animate={teamInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-screen flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 skyber-text">Our Team</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              A diverse group of experts passionate about cybersecurity and web development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Team Member Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60"
                  alt="Team Member"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">John Doe</h3>
                    <p className="text-[#17D492] text-sm sm:text-base">Chief Security Officer</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60"
                  alt="Team Member"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Jane Smith</h3>
                    <p className="text-[#17D492] text-sm sm:text-base">Lead Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60"
                  alt="Team Member"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Mike Johnson</h3>
                    <p className="text-[#17D492] text-sm sm:text-base">UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
} 