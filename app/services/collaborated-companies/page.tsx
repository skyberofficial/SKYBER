'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Wrench,
  Building2,
  Users,
  Handshake
} from 'lucide-react';

const partneredCompanies = [
  {
    id: "techverra",
    name: "TechVerra",
    description: "Professional technical support services for debugging, error resolution, server maintenance, and performance optimization.",
    icon: Wrench,
    color: "#17D492",
    features: ["24/7 Support", "Expert Team", "Rapid Response", "Multi-Platform"],
    link: "/services/collaborated-companies/techverra",
    logo: "/companies/techverra-logo.png"
  }
  // Add more partnered companies here as they join
];

export default function CollaboratedCompaniesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Handshake className="w-12 h-12 text-[#17D492] mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Our Partner Companies
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to provide comprehensive solutions and specialized services that complement our core offerings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#17D492] hover:bg-[#14c082] text-white px-8 py-3 text-lg"
              >
                Explore Partnerships <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-3 text-lg"
              >
                Become a Partner
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Companies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Strategic Partnerships</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in the power of collaboration to deliver exceptional value to our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {partneredCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 bg-[#17D492]/10 rounded-full flex items-center justify-center">
                    <company.icon className="w-12 h-12 text-[#17D492]" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-semibold mb-3">{company.name}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {company.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                      {company.features.map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex}
                          variant="secondary" 
                          className="bg-[#17D492]/10 text-[#17D492] border-[#17D492]/20"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Link href={company.link}>
                      <Button className="bg-[#17D492] hover:bg-[#14c082] text-white">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the benefits of strategic partnerships in the technology sector
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#17D492]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#17D492]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expanded Reach</h3>
              <p className="text-muted-foreground">
                Access our extensive client base and industry connections to grow your business presence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#17D492]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-[#17D492]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Shared Expertise</h3>
              <p className="text-muted-foreground">
                Combine our complementary skills and knowledge to deliver superior solutions to clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#17D492]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-[#17D492]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mutual Growth</h3>
              <p className="text-muted-foreground">
                Build long-term relationships that benefit both companies and create lasting value.
              </p>
            </motion.div>
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
            className="max-w-4xl mx-auto text-center bg-primary/5 rounded-2xl p-12 border border-primary/10"
          >
            <h2 className="text-4xl font-bold mb-4">Interested in Partnership?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let&apos;s explore how we can work together to create innovative solutions and grow our businesses
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-[#17D492] hover:bg-[#14c082] text-white">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Partnership Guidelines
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
