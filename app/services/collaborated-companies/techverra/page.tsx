"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  // Wrench, 
  Server, 
  Bug, 
  Clock, 
  Shield, 
  Users, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Headphones,
  Code,
  Database,
  Globe,
  Cpu,
  AlertTriangle,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Bug,
    title: "Debugging Support",
    description: "Expert debugging services for complex technical issues across all platforms and technologies."
  },
  {
    icon: Server,
    title: "Server Maintenance",
    description: "Comprehensive server maintenance including monitoring, updates, security patches, and optimization."
  },
  {
    icon: Code,
    title: "Error Resolution",
    description: "Quick identification and resolution of coding errors, bugs, and system malfunctions."
  },
  {
    icon: Database,
    title: "Database Support",
    description: "Database optimization, backup management, and performance tuning for optimal data handling."
  },
  {
    icon: Globe,
    title: "Network Support",
    description: "Network troubleshooting, security configuration, and infrastructure optimization."
  },
  {
    icon: Cpu,
    title: "Performance Optimization",
    description: "System performance analysis and optimization to ensure maximum efficiency and speed."
  }
];

const benefits = [
  "24/7 Technical Support Availability",
  "Expert Team with 10+ Years Experience",
  "Rapid Response Time (Under 2 Hours)",
  "Comprehensive Issue Documentation",
  "Proactive Monitoring & Prevention",
  "Cost-Effective Support Solutions",
  "Multi-Platform Technology Expertise",
  "Custom Support Plans Available"
];

const supportPlans = [
  {
    name: "Basic Support",
    price: "From $99/month",
    features: [
      "Email Support",
      "Basic Troubleshooting",
      "Monthly System Review",
      "Security Updates"
    ],
    popular: false
  },
  {
    name: "Professional Support",
    price: "From $199/month",
    features: [
      "Priority Phone & Email Support",
      "Advanced Debugging",
      "Weekly System Monitoring",
      "Performance Optimization",
      "Emergency Response"
    ],
    popular: true
  },
  {
    name: "Enterprise Support",
    price: "Custom Pricing",
    features: [
      "Dedicated Support Team",
      "24/7 Phone Support",
      "Custom Monitoring Solutions",
      "On-site Support Available",
      "SLA Guarantees",
      "Custom Integration Support"
    ],
    popular: false
  }
];

export default function TechVerraSupportPage() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleRequestService = () => {
    // Use window.open for external links to prevent page reload
    window.open("https://techverra.skybersupport.me", "_blank", "noopener,noreferrer");
  };

  const handleContactSales = (service?: string, plan?: string) => {
    setSelectedService(service || "");
    setSelectedPlan(plan || "");
    // For now, just redirect to contact page
    window.location.href = "/contact";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Starts immediately after header */}
      <section className="relative flex items-center justify-center overflow-hidden min-h-screen pt-15">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#17D492]/10 via-transparent to-[#14c082]/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-[#17D492]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute top-40 right-20 w-96 h-96 bg-[#14c082]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#17D492]/3 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 15, 0],
              y: [0, -15, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          ></motion.div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #17D492 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '20px 20px', '0px 0px']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
        </div>

        <div className="container mx-auto relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-[#17D492] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Technical Support by{" "}
              <span className="text-[#17D492] drop-shadow-lg">TechVerra</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Professional technical support services for debugging, error resolution, server maintenance, 
              and comprehensive IT infrastructure management. Get expert help when you need it most.
            </motion.p>

            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div 
                className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-[#17D492] mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support Availability</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-[#17D492] mb-1">&lt;2hrs</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-[#17D492] mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleRequestService}
                  size="lg" 
                  className="bg-gradient-to-r from-[#17D492] to-[#14c082] hover:from-[#14c082] hover:to-[#17D492] text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-[#17D492]/25 hover:shadow-xl hover:shadow-[#17D492]/30 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Request Service
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => window.open("https://www.techverra.tech/#contact", "_blank", "noopener,noreferrer")}
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold border-2 border-[#17D492]/20 hover:border-[#17D492] hover:bg-[#17D492]/5 transition-all duration-300"
                >
                  Contact Sales Team
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-[#17D492]/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-[#17D492] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section - Full viewport height */}
      <section className="min-h-screen flex items-center py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Technical Support Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From debugging to server maintenance, we provide expert technical support for all your IT needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-[#17D492]/30">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#17D492]/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-[#17D492]" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Full viewport height */}
      <section className="min-h-screen flex items-center py-20 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose TechVerra Support?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional technical support services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-[#17D492] mt-1 flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Plans Section - Full viewport height */}
      <section className="min-h-screen flex items-center py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Support Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible support plans designed to meet your specific technical needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className={`h-full relative ${plan.popular ? 'border-[#17D492] shadow-lg' : 'border-border'}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#17D492] text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-xl font-semibold text-[#17D492]">
                      {plan.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#17D492] flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.name === "Enterprise Support" ? (
                      <Button 
                        onClick={() => handleContactSales("enterprise-support", "enterprise")}
                        className="w-full bg-[#17D492] hover:bg-[#14c082] text-white"
                      >
                        Contact Team
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleRequestService}
                        className={`w-full ${plan.popular ? 'bg-[#17D492] hover:bg-[#14c082]' : 'bg-secondary hover:bg-secondary/80'}`}
                      >
                        Get Started
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full viewport height */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-r from-[#17D492]/10 to-[#14c082]/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Expert Technical Support?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don&apos;t let technical issues slow down your business. Get professional support from TechVerra today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleRequestService}
                size="lg" 
                className="bg-[#17D492] hover:bg-[#14c082] text-white px-8 py-3 text-lg"
              >
                Request Service Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => handleContactSales()}
                variant="outline" 
                size="lg"
                className="px-8 py-3 text-lg"
              >
                Contact Sales Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
