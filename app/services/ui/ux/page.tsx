'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Eye, 
  Smartphone, 
  Monitor, 
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Target,
  Heart
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import ModelViewer from "@/components/ui/model-viewer";

const uiuxServices = [
  {
    title: "User Research & Analysis",
    description: "Deep dive into user behavior, needs, and pain points to inform design decisions",
    icon: Users,
    color: "#17D492",
    features: [
      "User interviews and surveys",
      "Behavioral analytics",
      "Competitive analysis",
      "Persona development"
    ]
  },
  {
    title: "Wireframing & Prototyping",
    description: "Create interactive prototypes to visualize and test user flows before development",
    icon: Target,
    color: "#845EFF",
    features: [
      "Low-fidelity wireframes",
      "High-fidelity prototypes",
      "Interactive mockups",
      "User flow mapping"
    ]
  },
  {
    title: "Visual Design",
    description: "Beautiful, consistent visual designs that align with your brand identity",
    icon: Palette,
    color: "#FF5757",
    features: [
      "Brand identity design",
      "UI component libraries",
      "Design systems",
      "Visual hierarchy"
    ]
  },
  {
    title: "Usability Testing",
    description: "Validate designs through user testing to ensure optimal user experience",
    icon: Eye,
    color: "#00B8D4",
    features: [
      "A/B testing",
      "User testing sessions",
      "Usability audits",
      "Performance optimization"
    ]
  }
];

const projects = [
  {
    title: "Finance Dashboard",
    description: "Modern financial analytics platform with intuitive data visualization",
    category: "Web Application",
    image: "/projects/finance-dashboard.jpg",
    features: ["Responsive Design", "Data Visualization", "User Analytics"]
  },
  {
    title: "Health App",
    description: "Intuitive mobile health tracking solution for wellness management",
    category: "Mobile Application",
    image: "/projects/health-app.jpg",
    features: ["Mobile-First Design", "Accessibility", "Gamification"]
  },
  {
    title: "E-commerce Platform",
    description: "Seamless shopping experience with optimized conversion flows",
    category: "E-commerce",
    image: "/projects/ecommerce-platform.jpg",
    features: ["Conversion Optimization", "Mobile Commerce", "Personalization"]
  }
];

export default function UIUXServicesPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] relative overflow-hidden mt-20 hero-section flex items-center">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column - Content */}
            <div className="relative z-[2] order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#17D492]/10 backdrop-blur-md border border-[#17D492]/20">
                  <Palette className="w-4 h-4 mr-2 text-[#17D492]" />
                  UI/UX Design Services
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">Design</h1>
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-white/80">
                    Creating intuitive and engaging user experiences that drive results
                  </h2>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg"
                    className="bg-[#17D492]/90 hover:bg-[#17D492] backdrop-blur-sm border border-[#17D492]/20 w-full sm:w-auto"
                  >
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="backdrop-blur-sm border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                   Read Blogs
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
                  <motion.div 
                    className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#17D492]">95%</h3>
                    <p className="text-sm sm:text-base text-white/70">User Satisfaction</p>
                  </motion.div>
                  <motion.div 
                    className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#17D492]">40%</h3>
                    <p className="text-sm sm:text-base text-white/70">Conversion Increase</p>
                  </motion.div>
                  <motion.div 
                    className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 col-span-2 sm:col-span-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#17D492]">2.5x</h3>
                    <p className="text-sm sm:text-base text-white/70">Faster Development</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

                         {/* Right Column - 3D Model Visualization */}
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
                                           <ModelViewer
                        url="/3d-models/Cyber_Guardian.glb"
                        width="100%"
                        height="100%"
                        defaultRotationX={-30}
                        defaultRotationY={20}
                        defaultZoom={2}
                        minZoomDistance={1}
                        maxZoomDistance={5}
                        enableMouseParallax={false}
                        enableManualRotation={false}
                        enableHoverRotation={false}
                        enableManualZoom={false}
                        ambientIntensity={0.4}
                        keyLightIntensity={1.2}
                        fillLightIntensity={0.6}
                        rimLightIntensity={0.8}
                        environmentPreset="studio"
                        autoRotate={true}
                        autoRotateSpeed={0.5}
                        showScreenshotButton={false}
                        fadeIn={true}
                        onModelLoaded={() => console.log("3D Model loaded successfully")}
                      />
                     <div className="absolute bottom-6 left-6 right-6 text-center text-white/80 pointer-events-none">
                       <Palette className="w-12 h-12 mx-auto mb-2 opacity-70" />
                       <p className="text-sm font-medium">Design Process</p>
                       <p className="text-xs opacity-75">Research → Design → Test → Iterate</p>
                     </div>
                   </div>
                 </div>
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the sections with solid background */}
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
              <h2 className="text-4xl font-bold">Our Design Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A comprehensive approach to creating user-centered designs that deliver results
              </p>
            </motion.div>

            {/* Services grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {uiuxServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveService(index)}
                  className="group relative p-8 rounded-2xl border border-border/50 hover:border-[#17D492]/50 transition-all duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${service.color}05 0%, transparent 100%)`
                  }}
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
              <h2 className="text-4xl font-bold mb-4">Featured UI/UX Projects</h2>
              <p className="text-xl text-muted-foreground">
                Explore our latest design work across different industries
              </p>
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
                      <Monitor className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">{project.title}</p>
                      <p className="text-xs opacity-75">Project Preview</p>
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
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your User Experience?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's create intuitive, engaging designs that your users will love
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-[#17D492] hover:bg-[#17D492]/90">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
