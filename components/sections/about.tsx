"use client";

import { motion } from "framer-motion";
import { Users, Award, Clock, Shield } from "lucide-react";
import Image from "next/image";

export function AboutSkyber() {
  return (
    <section id="about" className="py-20 bg-background/50 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg"
                alt="Skyber team collaboration"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-lg border border-border bg-card p-6 shadow-lg">
              <div className="flex flex-col h-full justify-between">
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-[#17D492]">4+</div>
                  <p className="text-lg font-medium">Years of Experience</p>
                </div>
                <p className="text-muted-foreground">Delivering secure, scalable, and modern digital solutions.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="skyber-text">SKYBER</span></h2>
            <p className="text-muted-foreground mb-6">
              For over 4 years, <span className="skyber-text">SKYBER</span> has helped businesses secure and elevate their digital experiences. We blend cybersecurity expertise with product-grade development to build reliable, fast, and beautiful products.
            </p>
            <p className="text-muted-foreground mb-8">
              Our approach is simple: security-first architecture, performance-focused engineering, and design that your users love.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-[#17D492] mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Security-First</h4>
                  <p className="text-sm text-muted-foreground">Threat modeling, secure coding, and continuous hardening.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-[#17D492] mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">On-Time Delivery</h4>
                  <p className="text-sm text-muted-foreground">Reliable execution with clear roadmaps and milestones.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-[#17D492] mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Collaborative</h4>
                  <p className="text-sm text-muted-foreground">Work shoulder-to-shoulder with your team and stakeholders.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="w-6 h-6 text-[#17D492] mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Quality Assured</h4>
                  <p className="text-sm text-muted-foreground">Reviews, testing, and monitoring baked into our process.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <div className="w-10 h-10 bg-[#17D492]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-5 h-5 text-[#17D492]" />
                </div>
                <div className="text-2xl font-bold mb-1">100+</div>
                <p className="text-sm text-muted-foreground">Clients Served</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <div className="w-10 h-10 bg-[#17D492]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-5 h-5 text-[#17D492]" />
                </div>
                <div className="text-2xl font-bold mb-1">4+ yrs</div>
                <p className="text-sm text-muted-foreground">Proven Track Record</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <div className="w-10 h-10 bg-[#17D492]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-5 h-5 text-[#17D492]" />
                </div>
                <div className="text-2xl font-bold mb-1">250+</div>
                <p className="text-sm text-muted-foreground">Projects & Releases</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


