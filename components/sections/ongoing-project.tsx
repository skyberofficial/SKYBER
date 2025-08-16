"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DarkVeil from "@/components/ui/dark-veil";
import { 
  SiReact, 
  SiNextdotjs, 
  SiPrisma, 
  SiJavascript, 
  SiTailwindcss 
} from "react-icons/si";

// Tech stack icons
const techStackIcons = [
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Prisma", icon: SiPrisma, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
];

// Project stages
const projectStages = [
  { name: "Planning", status: "completed" },
  { name: "Design", status: "completed" },
  { name: "Development", status: "current" },
  { name: "Testing", status: "pending" },
  { name: "Deployment", status: "pending" },
];

const OngoingProject: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Dark Veil Animated Background */}
      <DarkVeil 
        hueShift={180}
        noiseIntensity={0.02}
        scanlineIntensity={0.1}
        speed={0.3}
        scanlineFrequency={0.5}
        warpAmount={0.1}
      />
      
      {/* Content with higher z-index */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
            Ongoing Project
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Currently working on an exciting project with cutting-edge technology
          </p>
        </div>

        {/* Main Content Container */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Container - YouTube Image, Pricing, Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* YouTube Rectangle Image */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                <Image
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                  alt="Project Demo"
                  fill
                  className="object-cover"
                />
                {/* Project Budget Badge - Top Left */}
                <div className="absolute top-4 left-4 bg-[#17D492] text-white px-3 py-2 rounded-lg text-sm font-bold shadow-lg">
                  ₹27,000
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  {/* Animated Wave Background */}
                  <div className="relative flex items-center justify-center">
                    {/* Outer Wave Ring */}
                    <motion.div
                      className="absolute w-24 h-24 rounded-full border-2 border-[#17D492]/20"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Middle Wave Ring */}
                    <motion.div
                      className="absolute w-24 h-24 rounded-full border-2 border-[#17D492]/15"
                      animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.15, 0, 0.15],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3
                      }}
                    />
                    
                    {/* Inner Wave Ring */}
                    <motion.div
                      className="absolute w-24 h-24 rounded-full border-2 border-[#17D492]/10"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.1, 0, 0.1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6
                      }}
                    />
                    
                    {/* Main Play Button */}
                    <motion.div 
                      className="relative z-10 w-16 h-16 bg-[#17D492] rounded-full flex items-center justify-center hover:bg-[#14c082] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl group"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 20px 40px rgba(23, 212, 146, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: [
                          "0 10px 30px rgba(23, 212, 146, 0.2)",
                          "0 15px 35px rgba(23, 212, 146, 0.3)",
                          "0 10px 30px rgba(23, 212, 146, 0.2)"
                        ]
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      {/* Inner Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#17D492] opacity-50 blur-md"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Play Icon with Enhanced Animation */}
                      <motion.svg 
                        className="w-7 h-7 text-white relative z-10" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <path d="M8 5v14l11-7z"/>
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>
                {/* YouTube Badge */}
                <div className="absolute top-4 right-4 bg-[#17D492] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  YouTube Demo
                </div>
              </div>
              
              {/* Tech Stack Section */}
              <div className="p-6">
                {/* Tech Stack Icons and SKYBER Badge */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Tech Stack Used
                    </h4>
                    <div className="bg-[#17D492] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                      Maintained By SKYBER
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {techStackIcons.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex flex-col items-center space-y-2"
                      >
                        <div className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center ${tech.color}`}>
                          <tech.icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Container - Project Details, Progress, SKYBER Badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Project Title and Description */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                AI-Powered E-commerce Security Platform
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A comprehensive cybersecurity solution designed specifically for online retailers. 
                Features real-time threat detection, automated response systems, and advanced 
                machine learning algorithms to protect against evolving cyber threats.
              </p>
            </div>

            {/* Current Stage with Delivery Tracking Dots */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">
                Current Stage: Development
              </h4>
              
              {/* Progress Dots */}
              <div className="space-y-6">
                {projectStages.map((stage, index) => (
                  <div key={stage.name} className="flex items-center space-x-4">
                    {/* Stage Dot */}
                    <div className="relative">
                      <div className={`w-4 h-4 rounded-full ${
                        stage.status === 'completed' 
                          ? 'bg-[#17D492]' 
                          : stage.status === 'current'
                          ? 'bg-[#17D492] animate-pulse'
                          : 'bg-gray-400'
                      }`}>
                        {/* Wave Animation for Current Stage */}
                        {stage.status === 'current' && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-[#17D492]"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}
                      </div>
                      
                      {/* Connection Line */}
                      {index < projectStages.length - 1 && (
                        <div className={`absolute top-4 left-2 w-0.5 h-8 ${
                          stage.status === 'completed' ? 'bg-[#17D492]' : 'bg-gray-400'
                        }`} />
                      )}
                    </div>
                    
                    {/* Stage Name and Status */}
                    <div className="flex-1">
                      <span className={`text-sm font-medium ${
                        stage.status === 'completed' 
                          ? 'text-[#17D492]' 
                          : stage.status === 'current'
                          ? 'text-white'
                          : 'text-gray-400'
                      }`}>
                        {stage.name}
                      </span>
                      {stage.status === 'completed' && (
                        <span className="ml-2 text-xs text-[#17D492]">✓</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>




          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OngoingProject;
