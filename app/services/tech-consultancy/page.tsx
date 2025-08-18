'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, Target, ArrowRight, CheckCircle, Zap, Brain, Lightbulb } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const techConsultancyServices = [
  {
    title: "Technology Assessment",
    description: "Comprehensive evaluation of your current technology stack and infrastructure",
    icon: Target,
    color: "#17D492",
    features: ["Technology audit", "Performance analysis", "Security review", "Scalability assessment"]
  },
  {
    title: "Digital Strategy",
    description: "Strategic planning for digital transformation and technology adoption",
    icon: Brain,
    color: "#845EFF",
    features: ["Digital roadmap", "Technology selection", "Implementation planning", "ROI analysis"]
  },
  {
    title: "Architecture Planning",
    description: "Design and planning of scalable, secure, and efficient technology architectures",
    icon: Settings,
    color: "#FF5757",
    features: ["System architecture", "Cloud strategy", "Integration planning", "Security design"]
  },
  {
    title: "Team Training",
    description: "Comprehensive training programs for your development and IT teams",
    icon: Users,
    color: "#00B8D4",
    features: ["Technology training", "Best practices", "Certification programs", "Ongoing support"]
  }
];

const projects = [
  {
    title: "Enterprise Digital Transformation",
    description: "Complete digital transformation strategy for large enterprise organization",
    category: "Enterprise",
    features: ["Digital Strategy", "Technology Migration", "Change Management"]
  },
  {
    title: "Startup Technology Stack",
    description: "Technology architecture and strategy for scaling startup business",
    category: "Startup",
    features: ["Technology Selection", "Scalable Architecture", "Cost Optimization"]
  },
  {
    title: "Legacy System Modernization",
    description: "Modernization strategy for outdated legacy systems and infrastructure",
    category: "Modernization",
    features: ["System Analysis", "Migration Planning", "Risk Mitigation"]
  }
];

export default function TechConsultancyServicesPage() {
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
                  <Settings className="w-4 h-4 mr-2 text-[#17D492]" />
                  Tech Consultancy Services
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">Consult</h1>
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-white/80">
                    Expert guidance for your technology decisions and digital transformation
                  </h2>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-[#17D492]/90 hover:bg-[#17D492] backdrop-blur-sm border border-[#17D492]/20 w-full sm:w-auto">
                    Get Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="backdrop-blur-sm border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                    View Case Studies
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
                  <motion.div className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10" whileHover={{ scale: 1.05 }}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#17D492]">200+</h3>
                    <p className="text-sm sm:text-base text-white/70">Projects Consulted</p>
                  </motion.div>
                  <motion.div className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10" whileHover={{ scale: 1.05 }}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#17D492]">15+</h3>
                    <p className="text-sm sm:text-base text-white/70">Years Experience</p>
                  </motion.div>
                  <motion.div className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 col-span-2 sm:col-span-1" whileHover={{ scale: 1.05 }}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#17D492]">98%</h3>
                    <p className="text-sm sm:text-base text-white/70">Success Rate</p>
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
                     <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20" />
                     <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
                     <div className="absolute bottom-6 left-6 right-6 text-center text-white/80">
                       <Lightbulb className="w-12 h-12 mx-auto mb-2 opacity-70" />
                       <p className="text-sm font-medium">Strategic Consulting</p>
                       <p className="text-xs opacity-75">Analyze → Plan → Implement → Optimize</p>
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
              <h2 className="text-4xl font-bold">Our Consultancy Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert technology consulting to help you make informed decisions and achieve your goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {techConsultancyServices.map((service, index) => (
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
              <h2 className="text-4xl font-bold mb-4">Featured Consultancy Projects</h2>
              <p className="text-xl text-muted-foreground">Explore our latest technology consulting work across different industries</p>
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
                      <Lightbulb className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">{project.title}</p>
                      <p className="text-xs opacity-75">Consulting Project</p>
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
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Technology Strategy?</h2>
              <p className="text-xl text-muted-foreground mb-8">Let&apos;s work together to optimize your technology decisions and drive growth</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-[#17D492] hover:bg-[#17D492]/90">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">Get Free Assessment</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
