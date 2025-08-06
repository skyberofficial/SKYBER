'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import { Send, Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';
import { GoogleMapComponent } from '@/components/map/google-map';
import { MapLibreComponent } from '@/components/map/maplibre-map';

// Dynamically import Lottie to ensure it only runs on client
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [mapRef, mapInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated API call
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main data-barba="wrapper" className="min-h-screen bg-dot-pattern">
      <div data-barba="container" data-barba-namespace="contact">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-[calc(100vh-5rem)] mt-20 flex items-center justify-center overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 animate-gradient" />
            <div className="absolute inset-0 animate-grid" />
            <div className="absolute inset-0 animate-grid-reverse" style={{ animationDuration: '4s' }} />
          </div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Let's Start a
                  <span className="text-[#17D492] block mt-2">Conversation</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                  Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your ideas to life.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-[#17D492]/50 transition-colors">
                    <Phone className="w-5 h-5 text-[#17D492]" />
                    <div className="text-left">
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 89574 76865</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-[#17D492]/50 transition-colors">
                    <Mail className="w-5 h-5 text-[#17D492]" />
                    <div className="text-left">
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-muted-foreground">info@skyber.codes</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] lg:h-[500px]"
              >
                {/* Main Contact Animation */}
                <div className="absolute inset-0">
                  <Lottie
                    animationData={require("@/public/animations/contact-hero.json")}
                    className="w-full h-full"
                    loop={true}
                  />
                </div>

                {/* Additional Floating Elements */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-16 h-16 text-[#17D492]"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Mail className="w-full h-full" />
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-16 h-16 text-[#17D492]"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <MessageSquare className="w-full h-full" />
                </motion.div>

                {/* Glowing Orbs */}
                <motion.div
                  className="absolute top-1/3 right-1/3 w-32 h-32 bg-[#17D492]/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#17D492]/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
          >
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-8 rounded-full bg-[#17D492]/20"
            >
              <motion.div
                animate={{ height: ["0%", "100%", "0%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-full rounded-full bg-[#17D492]"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section 
          ref={formRef}
          className="relative py-20 overflow-hidden"
        >
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-[#17D492] focus:ring-1 focus:ring-[#17D492] outline-none transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-[#17D492] focus:ring-1 focus:ring-[#17D492] outline-none transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-[#17D492] focus:ring-1 focus:ring-[#17D492] outline-none transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-[#17D492] focus:ring-1 focus:ring-[#17D492] outline-none transition-colors resize-none"
                        required
                      />
                    </div>

                    <AnimatedButton
                      type="submit"
                      className="w-full bg-[#17D492] hover:bg-[#14c082] text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </div>
                      )}
                    </AnimatedButton>
                  </form>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div className="relative h-[200px]">
                    <Lottie
                      animationData={require("@/public/animations/message-sent.json")}
                      className="w-full h-full"
                      loop={true}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-[#17D492]/50 transition-colors">
                      <MapPin className="w-5 h-5 text-[#17D492] mt-1" />
                      <div>
                        <p className="font-medium">Office Location</p>
                        <p className="text-sm text-muted-foreground">Mandhana, Kanpur, Uttar Pradesh - 209217</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-[#17D492]/50 transition-colors">
                      <MessageSquare className="w-5 h-5 text-[#17D492] mt-1" />
                      <div>
                        <p className="font-medium">Live Chat</p>
                        <p className="text-sm text-muted-foreground">Our team is available 24/7 for urgent inquiries</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-[#17D492]/50 transition-colors">
                      <Clock className="w-5 h-5 text-[#17D492] mt-1" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Background Glow Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#17D492]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#17D492]/5 rounded-full blur-3xl" />
          </div>
        </section>

        {/* Map Section */}
        <section 
          ref={mapRef}
          className="relative py-20 bg-card"
        >
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
                <p className="text-muted-foreground">Come say hello at our office headquarters.</p>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden bg-card border border-border">
                {/* Map Container */}
                <div className="absolute inset-0">
                  <MapLibreComponent />
                </div>

                {/* Office Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-6 border-t border-border">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#17D492] mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">SKYBER Headquarters</h3>
                      <p className="text-muted-foreground">Mandhana, Kanpur<br />Uttar Pradesh, India - 209217</p>
                      <div className="flex gap-4 mt-3">
                        <AnimatedButton
                          className="bg-[#17D492] hover:bg-[#14c082] text-white text-sm px-4 py-2"
                          onClick={() => {
                            window.open('https://maps.google.com/?q=Mandhana+Kanpur+209217', '_blank');
                          }}
                        >
                          Get Directions
                        </AnimatedButton>
                        <AnimatedButton
                          className="bg-secondary hover:bg-secondary/80 text-sm px-4 py-2"
                          onClick={() => {
                            window.open('tel:+918957476865');
                          }}
                        >
                          Call Office
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#17D492]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#17D492]/10 rounded-full blur-3xl" />
          </div>
        </section>
      </div>
    </main>
  );
} 