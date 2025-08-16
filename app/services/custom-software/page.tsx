'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award
} from 'lucide-react';

const CustomSoftwarePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-[#17D492]/10 via-transparent to-[#17D492]/10 animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#17D492]/5 via-transparent to-transparent" />
          
          {/* Floating shapes */}
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
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Custom Software
              <span className="block bg-gradient-to-r from-[#17D492] to-[#14c082] bg-clip-text text-transparent">
                Development
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your business with tailor-made software solutions that drive efficiency, 
              innovation, and competitive advantage
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="bg-[#17D492] hover:bg-[#14c082] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#17D492] text-[#17D492] hover:bg-[#17D492] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                View Portfolio
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {[
                { number: "150+", label: "Projects Delivered", icon: CheckCircle },
                { number: "98%", label: "Client Satisfaction", icon: Star },
                { number: "24/7", label: "Support Available", icon: Users },
                { number: "5+", label: "Years Experience", icon: Award }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#17D492] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Custom Software?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our custom software solutions are designed to give your business the competitive edge it needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Custom Development",
                description: "Tailored software solutions built from the ground up to meet your specific business requirements",
                color: "from-[#17D492] to-[#14c082]"
              },
              {
                icon: Cpu,
                title: "System Integration",
                description: "Seamlessly connect existing systems and create unified workflows across your organization",
                color: "from-[#17D492] to-[#0f9f6f]"
              },
              {
                icon: Database,
                title: "Database Design",
                description: "Optimized database architecture for performance, scalability, and data integrity",
                color: "from-[#17D492] to-[#0a8a5a]"
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and deployment strategies for modern applications",
                color: "from-[#17D492] to-[#0a8a5a]"
              },
              {
                icon: Shield,
                title: "Security First",
                description: "Enterprise-grade security measures built into every layer of your custom software",
                color: "from-[#17D492] to-[#0f9f6f]"
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Lightning-fast applications optimized for speed, efficiency, and user experience",
                color: "from-[#17D492] to-[#14c082]"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-[#17D492]/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
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
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a custom software solution that transforms your business
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-[#17D492] hover:bg-[#14c082] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#17D492] text-[#17D492] hover:bg-[#17D492] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftwarePage;
