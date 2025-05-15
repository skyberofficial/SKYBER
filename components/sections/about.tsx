"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import Image from "next/image";

export function About() {
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
                src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Skyber Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-lg border border-border bg-card p-6 shadow-lg">
              <div className="flex flex-col h-full justify-between">
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-[#17D492]">10+</div>
                  <p className="text-lg font-medium">Years of Excellence</p>
                </div>
                <p className="text-muted-foreground">Delivering top-tier cybersecurity and development solutions since 2013</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="skyber-text">SKYBER</span></h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2013, <span className="skyber-text">SKYBER</span> has grown from a small security consulting firm to a comprehensive technology partner for businesses worldwide. Our mission is to secure and optimize your digital presence while driving innovation.
            </p>
            <p className="text-muted-foreground mb-8">
              We combine cutting-edge cybersecurity expertise with exceptional development capabilities to deliver solutions that are not just secure, but also intuitive, scalable, and aligned with your business objectives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#17D492] mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Industry Experts</h4>
                  <p className="text-sm text-muted-foreground">Led by certified security professionals and senior developers</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#17D492] mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Custom Approach</h4>
                  <p className="text-sm text-muted-foreground">Tailored solutions designed for your specific requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#17D492] mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Continuous Support</h4>
                  <p className="text-sm text-muted-foreground">Ongoing maintenance, updates, and security monitoring</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#17D492] mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Transparent Process</h4>
                  <p className="text-sm text-muted-foreground">Clear communication and regular progress updates</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <div className="w-10 h-10 bg-[#17D492]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-5 h-5 text-[#17D492]" />
                </div>
                <div className="text-2xl font-bold mb-1">200+</div>
                <p className="text-sm text-muted-foreground">Clients Worldwide</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <div className="w-10 h-10 bg-[#17D492]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-5 h-5 text-[#17D492]" />
                </div>
                <div className="text-2xl font-bold mb-1">50+</div>
                <p className="text-sm text-muted-foreground">Industry Awards</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <div className="w-10 h-10 bg-[#17D492]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-5 h-5 text-[#17D492]" />
                </div>
                <div className="text-2xl font-bold mb-1">750+</div>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}