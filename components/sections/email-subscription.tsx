"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailSubscription() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#17D492]/5 via-background to-[#14c082]/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#17D492]/10 via-transparent to-[#14c082]/10"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#17D492]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#14c082]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#17D492]/10 rounded-full mb-6">
              <Mail className="w-8 h-8 text-[#17D492]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with SKYBER
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get the latest cybersecurity insights, tech updates, and exclusive offers delivered directly to your inbox
            </p>
          </motion.div>

          {/* Subscription Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 px-4 text-base border-2 border-border focus:border-[#17D492] focus:ring-[#17D492]/20 transition-all"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading || !email}
                  className="h-12 px-8 bg-gradient-to-r from-[#17D492] to-[#14c082] hover:from-[#14c082] hover:to-[#17D492] text-white font-semibold shadow-lg shadow-[#17D492]/25 hover:shadow-xl hover:shadow-[#17D492]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Subscribe</span>
                    </div>
                  )}
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#17D492]/10 border-2 border-[#17D492]/20 rounded-lg p-6 max-w-md mx-auto"
              >
                <div className="flex items-center justify-center gap-3 text-[#17D492]">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-semibold text-lg">Successfully Subscribed!</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  Thank you for subscribing. You'll receive our updates soon!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 text-center hover:shadow-lg transition-all duration-300 hover:border-[#17D492]/30">
              <div className="w-12 h-12 bg-[#17D492]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-[#17D492]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Weekly Updates</h3>
              <p className="text-muted-foreground text-sm">
                Get curated cybersecurity news and tech insights every week
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 text-center hover:shadow-lg transition-all duration-300 hover:border-[#17D492]/30">
              <div className="w-12 h-12 bg-[#17D492]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-[#17D492]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Exclusive Offers</h3>
              <p className="text-muted-foreground text-sm">
                Access to special discounts and early bird pricing on our services
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 text-center hover:shadow-lg transition-all duration-300 hover:border-[#17D492]/30">
              <div className="w-12 h-12 bg-[#17D492]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-[#17D492]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Tips</h3>
              <p className="text-muted-foreground text-sm">
                Receive actionable cybersecurity tips and best practices
              </p>
            </div>
          </motion.div>

          {/* Privacy Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-muted-foreground mt-8 max-w-2xl mx-auto"
          >
            🔒 We respect your privacy. Unsubscribe at any time. No spam, ever.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
