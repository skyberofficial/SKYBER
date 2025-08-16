'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Monitor, Server, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const appDevelopmentServices = [
  {
    title: "iOS Development",
    description: "Native iOS applications built with Swift and SwiftUI for optimal performance",
    icon: Smartphone,
    color: "#17D492",
    features: ["Swift/SwiftUI", "App Store optimization", "Push notifications", "In-app purchases"]
  },
  {
    title: "Android Development",
    description: "Native Android applications using Kotlin and modern Android architecture",
    icon: Smartphone,
    color: "#845EFF",
    features: ["Kotlin/Java", "Material Design", "Google Play optimization", "Background services"]
  },
  {
    title: "Cross-Platform Development",
    description: "Single codebase applications that work across iOS, Android, and web",
    icon: Globe,
    color: "#FF5757",
    features: ["React Native", "Flutter", "Xamarin", "Progressive Web Apps"]
  },
  {
    title: "App Maintenance",
    description: "Ongoing support, updates, and optimization for existing applications",
    icon: Zap,
    color: "#00B8D4",
    features: ["Bug fixes", "Feature updates", "Performance optimization", "Security patches"]
  }
];

const projects = [
  {
    title: "Fitness Tracking App",
    description: "Comprehensive fitness app with workout tracking and social features",
    category: "Health & Fitness",
    features: ["Workout Tracking", "Social Features", "Progress Analytics"]
  },
  {
    title: "E-commerce Mobile App",
    description: "Mobile shopping experience with seamless payment integration",
    category: "E-commerce",
    features: ["Product Catalog", "Payment Gateway", "Order Tracking"]
  },
  {
    title: "Business Management App",
    description: "Enterprise app for team collaboration and project management",
    category: "Business",
    features: ["Team Collaboration", "Project Management", "Analytics Dashboard"]
  }
];

export default function AppDevelopmentServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] relative overflow-hidden mt-20 hero-section flex items-center">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="relative z-[2] order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#17D492]/10 backdrop-blur-md border border-[#17D492]/20">
                  <Smartphone className="w-4 h-4 mr-2 text-[#17D492]" />
                  App Development Services
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">Develop</h1>
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-white/80">
                    Native and cross-platform mobile applications that engage users
                  </h2>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-[#17D492]/90 hover:bg-[#17D492] backdrop-blur-sm border border-[#17D492]/20 w-full sm:w-auto">
                    Start App Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="backdrop-blur-sm border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                    View App Portfolio
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
                  <motion.div className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10" whileHover={{ scale: 1.05 }}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#17D492]">50+</h3>
                    <p className="text-sm sm:text-base text-white/70">Apps Developed</p>
                  </motion.div>
                  <motion.div className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10" whileHover={{ scale: 1.05 }}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#17D492]">1M+</h3>
                    <p className="text-sm sm:text-base text-white/70">Downloads</p>
                  </motion.div>
                  <motion.div className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 col-span-2 sm:col-span-1" whileHover={{ scale: 1.05 }}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#17D492]">4.8/5</h3>
                    <p className="text-sm sm:text-base text-white/70">App Store Rating</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

                         <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="relative z-[2] block lg:block h-[300px] lg:h-[555px] order-1 lg:order-2 -mt-[25%] lg:mt-0"
             >
               <div className="absolute inset-0 top-[20px] bottom-[25px] backdrop-blur-[2px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#17D492]/20 to-transparent" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="relative w-full h-full">
                     <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20" />
                     <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
                     <div className="absolute bottom-6 left-6 right-6 text-center text-white/80">
                       <Smartphone className="w-12 h-12 mx-auto mb-2 opacity-70" />
                       <p className="text-sm font-medium">Mobile Development</p>
                       <p className="text-xs opacity-75">Design → Code → Test → Deploy</p>
                     </div>
                   </div>
                 </div>
               </div>
             </motion.div>
          </div>
        </div>
      </section>

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
              <h2 className="text-4xl font-bold">Our App Development Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive mobile app development for iOS, Android, and cross-platform solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {appDevelopmentServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl border border-border/50 hover:border-[#17D492]/50 transition-all duration-300"
                  style={{ background: `radial-gradient(circle at center, ${service.color}05 0%, transparent 100%)` }}
                >
                  <div className="space-y-4">
                    <div className="p-3 w-fit rounded-xl" style={{ backgroundColor: `${service.color}10` }}>
                      <service.icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-[#17D492]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
              <h2 className="text-4xl font-bold mb-4">Featured Mobile Apps</h2>
              <p className="text-xl text-muted-foreground">Explore our latest mobile app development work across different industries</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Link
                  key={index}
                  href="/blogs"
                  className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-[#17D492]/50 transition-all duration-300"
                >
                  <div className="relative h-[300px] bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">{project.title}</p>
                      <p className="text-xs opacity-75">Mobile App</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="inline-flex items-center px-2 py-1 rounded-full bg-[#17D492]/10 text-[#17D492] text-xs mb-2">
                        {project.category}
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="text-xs bg-muted px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
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
              className="max-w-4xl mx-auto text-center bg-[#17D492]/5 rounded-2xl p-12 border border-[#17D492]/10"
            >
              <h2 className="text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
              <p className="text-xl text-muted-foreground mb-8">Let's create an engaging mobile experience that your users will love</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-[#17D492] hover:bg-[#17D492]/90">
                  Start App Development <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">Get App Quote</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
