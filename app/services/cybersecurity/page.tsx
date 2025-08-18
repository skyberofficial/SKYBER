'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Target,
  Heart,
  Database,
  Network,
  Key,
  Monitor
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const cybersecurityServices = [
  {
    title: "Threat Detection & Prevention",
    description: "Advanced monitoring systems to detect and prevent cyber threats in real-time",
    icon: Eye,
    color: "#FF5757",
    features: [
      "24/7 threat monitoring",
      "Real-time threat detection",
      "Automated response systems",
      "Threat intelligence feeds"
    ]
  },
  {
    title: "Vulnerability Assessment",
    description: "Comprehensive security audits to identify and address system vulnerabilities",
    icon: Target,
    color: "#17D492",
    features: [
      "Penetration testing",
      "Security audits",
      "Vulnerability scanning",
      "Risk assessment"
    ]
  },
  {
    title: "Incident Response",
    description: "Rapid response and recovery services for security incidents and breaches",
    icon: AlertTriangle,
    color: "#845EFF",
    features: [
      "Emergency response team",
      "Forensic analysis",
      "Recovery planning",
      "Post-incident review"
    ]
  },
  {
    title: "Security Architecture",
    description: "Design and implementation of robust security frameworks and policies",
    icon: Shield,
    color: "#00B8D4",
    features: [
      "Security framework design",
      "Policy development",
      "Compliance management",
      "Security training"
    ]
  }
];

const projects = [
  {
    title: "Enterprise Security Platform",
    description: "Comprehensive security solution for large-scale enterprise environments",
    category: "Enterprise",
    image: "/projects/enterprise-security.jpg",
    features: ["Multi-layered Security", "Compliance", "Real-time Monitoring"]
  },
  {
    title: "Financial Institution Protection",
    description: "Advanced security measures for banking and financial services",
    category: "Finance",
    image: "/projects/financial-security.jpg",
    features: ["Fraud Detection", "Data Encryption", "Compliance"]
  },
  {
    title: "Healthcare Data Security",
    description: "HIPAA-compliant security solutions for healthcare organizations",
    category: "Healthcare",
    image: "/projects/healthcare-security.jpg",
    features: ["HIPAA Compliance", "Patient Data Protection", "Access Control"]
  }
];

export default function CybersecurityServicesPage() {
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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF5757]/10 backdrop-blur-md border border-[#FF5757]/20">
                  <Shield className="w-4 h-4 mr-2 text-[#FF5757]" />
                  Cybersecurity Solutions
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">Secure</h1>
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-white/80">
                    Advanced protection for your digital assets and infrastructure
                  </h2>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg"
                    className="bg-[#FF5757]/90 hover:bg-[#FF5757] backdrop-blur-sm border border-[#FF5757]/20 w-full sm:w-auto"
                  >
                    Get Protected <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="backdrop-blur-sm border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    Security Assessment
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
                  <motion.div 
                    className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#FF5757]">99.9%</h3>
                    <p className="text-sm sm:text-base text-white/70">Threat Block Rate</p>
                  </motion.div>
                  <motion.div 
                    className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#FF5757]">24/7</h3>
                    <p className="text-sm sm:text-base text-white/70">Monitoring</p>
                  </motion.div>
                  <motion.div 
                    className="space-y-2 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 col-span-2 sm:col-span-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#FF5757]">5min</h3>
                    <p className="text-sm sm:text-base text-white/70">Response Time</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

                         {/* Right Column - Security Visualization */}
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="relative z-[2] block lg:block h-[300px] lg:h-[555px] order-1 lg:order-2 -mt-[25%] lg:mt-0"
             >
               <div className="absolute inset-0 top-[20px] bottom-[25px] backdrop-blur-[2px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#FF5757]/20 to-transparent" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="relative w-full h-full">
                     <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20" />
                     <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
                     <div className="absolute bottom-6 left-6 right-6 text-center text-white/80">
                       <Shield className="w-12 h-12 mx-auto mb-2 opacity-70" />
                       <p className="text-sm font-medium">Security Shield</p>
                       <p className="text-xs opacity-75">Protect → Detect → Respond → Recover</p>
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
              <h2 className="text-4xl font-bold">Our Security Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive cybersecurity solutions to protect your business from evolving threats
              </p>
            </motion.div>

            {/* Services grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {cybersecurityServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveService(index)}
                  className="group relative p-8 rounded-2xl border border-border/50 hover:border-[#FF5757]/50 transition-all duration-300"
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
                          <CheckCircle className="w-4 h-4 mr-2 text-[#FF5757]" />
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
              <h2 className="text-4xl font-bold mb-4">Featured Security Projects</h2>
              <p className="text-xl text-muted-foreground">
                Explore our latest cybersecurity implementations across different industries
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Link
                  key={index}
                  href="/blogs"
                  className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-[#FF5757]/50 transition-all duration-300"
                >
                  <div className="relative h-[300px] bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Shield className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">{project.title}</p>
                      <p className="text-xs opacity-75">Security Project</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="inline-flex items-center px-2 py-1 rounded-full bg-[#FF5757]/10 text-[#FF5757] text-xs mb-2">
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
              className="max-w-4xl mx-auto text-center bg-[#FF5757]/5 rounded-2xl p-12 border border-[#FF5757]/10"
            >
              <h2 className="text-4xl font-bold mb-4">Ready to Secure Your Digital Assets?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let&apos;s protect your business with advanced cybersecurity solutions
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-[#FF5757] hover:bg-[#FF5757]/90">
                  Get Security Assessment <ArrowRight className="ml-2 h-4 w-4" />
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
