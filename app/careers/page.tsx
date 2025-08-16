'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Users, 
  Briefcase, 
  Globe, 
  Heart,
  Zap,
  Star,
  Building2
} from 'lucide-react';
import Link from 'next/link';

const CareerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20">
        {/* Animated Background - Similar to Ongoing Project section */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Animated gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#17D492]/10 via-transparent to-[#17D492]/10 animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#17D492]/5 via-transparent to-transparent" />
          
          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border border-[#17D492]/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-40 right-32 w-24 h-24 border border-[#17D492]/15 rounded-lg"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, -90, -180]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/3 w-20 h-20 border border-[#17D492]/25 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.7, 0.4],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Additional floating elements */}
          <motion.div
            className="absolute top-1/2 right-1/4 w-16 h-16 border border-[#17D492]/10 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.4, 0.1],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-[#17D492]/15 rounded-lg"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 90, 180]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#17D492]/10 border border-[#17D492]/20 backdrop-blur-sm mb-8"
            >
              <Zap className="w-5 h-5 text-[#17D492] mr-2" />
              <span className="text-[#17D492] font-semibold">Coming Soon</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Join Our
              <span className="block bg-gradient-to-r from-[#17D492] to-[#14c082] bg-clip-text text-transparent">
                Amazing Team
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              We're building something incredible and looking for passionate individuals 
              who want to make a difference in the tech world
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button 
                size="lg" 
                className="bg-[#17D492] hover:bg-[#14c082] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Notified
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#17D492] text-[#17D492] hover:bg-[#17D492] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                View Open Positions
              </Button>
            </motion.div>

            {/* Company Values Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { icon: Users, label: "Collaborative", color: "from-[#17D492] to-[#14c082]" },
                { icon: Globe, label: "Global Impact", color: "from-[#17D492] to-[#0f9f6f]" },
                { icon: Heart, label: "Passion-Driven", color: "from-[#17D492] to-[#0a8a5a]" },
                { icon: Star, label: "Excellence", color: "from-[#17D492] to-[#14c082]" }
              ].map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium text-sm">{value.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Join SKYBER?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just building software – we're building the future. 
              Join us in creating technology that makes a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Innovation First",
                description: "Work on cutting-edge technologies and be part of groundbreaking projects that shape the future of tech.",
                color: "from-[#17D492] to-[#14c082]"
              },
              {
                icon: Users,
                title: "Amazing Team",
                description: "Collaborate with passionate professionals who are experts in their fields and love what they do.",
                color: "from-[#17D492] to-[#0f9f6f]"
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Your work will reach clients worldwide, making a real difference in businesses and lives.",
                color: "from-[#17D492] to-[#0a8a5a]"
              },
              {
                icon: Heart,
                title: "Work-Life Balance",
                description: "We believe in sustainable productivity with flexible hours and a supportive work environment.",
                color: "from-[#17D492] to-[#0f9f6f]"
              },
              {
                icon: Zap,
                title: "Fast Growth",
                description: "Accelerate your career with rapid learning opportunities and challenging projects.",
                color: "from-[#17D492] to-[#14c082]"
              },
              {
                icon: Star,
                title: "Recognition",
                description: "Get recognized for your contributions and grow with a company that values excellence.",
                color: "from-[#17D492] to-[#0a8a5a]"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-[#17D492]/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-3xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                While we're preparing our career opportunities, you can stay updated 
                on when positions become available
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-[#17D492] hover:bg-[#14c082] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Notified
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#17D492] text-[#17D492] hover:bg-[#17D492] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Learn More About Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
