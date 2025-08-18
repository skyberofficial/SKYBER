"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import Image from "next/image";
import { Shield, Code2, Award, Target, Sparkles } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Progress } from "@/components/ui/progress";
import cyberSecurityAnimation from "@/public/animations/cyber-security.json";

const capabilities = [
  {
    icon: <Shield className="w-6 h-6 text-[#17D492]" />,
    title: "Cybersecurity Engineering",
    description: "Threat modeling, secure SDLC, hardening and continuous security monitoring.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#17D492]" />,
    title: "Full‑Stack Development",
    description: "High‑performance apps with Next.js, TypeScript and cloud‑native backends.",
  },
  {
    icon: <Target className="w-6 h-6 text-[#17D492]" />,
    title: "Performance & Reliability",
    description: "Profiling, observability and DX that scale with your product.",
  },
  {
    icon: <Award className="w-6 h-6 text-[#17D492]" />,
    title: "Quality by Design",
    description: "Automated testing, accessibility and best‑in‑class UI foundations.",
  },
];

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [founderRef, founderInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <main data-barba="wrapper" className="relative w-full overflow-x-hidden">
      <div data-barba="container" data-barba-namespace="about">
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative mt-[5rem] min-h-[90svh] grid place-items-center overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
            <div className="pointer-events-none absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-[#17D492]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-[40rem] w-[40rem] rounded-full bg-[#17D492]/5 blur-3xl" />
          </div>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1 text-xs text-muted-foreground">
                <Sparkles className="h-4 w-4 text-[#17D492]" />
                Built with security, performance and craft
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                We build secure products that people love
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                SKYBER blends cybersecurity and product engineering to ship reliable, beautiful software without compromise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AnimatedButton className="bg-[#17D492] hover:bg-[#14c082] text-white" showArrow>
                  Explore Services
                </AnimatedButton>
                <AnimatedButton href="/contact" variant="outline">
                  Work With Us
                </AnimatedButton>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 relative h-[320px] sm:h-[420px] lg:h-[520px]"
            >
              <Lottie
                animationData={cyberSecurityAnimation}
                className="absolute inset-0 h-full w-full"
                loop
              />
            </motion.div>
          </div>
        </section>

        {/* About overview */}
        <section
          ref={aboutRef}
          className="relative py-16 sm:py-20 px-4 sm:px-6"
        >
          <div className="container grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-5"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">About SKYBER</h2>
              <p className="text-muted-foreground text-base">
                We are a security‑minded studio crafting resilient digital products. From idea to launch, we embed
                privacy, performance and maintainability into every decision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((c, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-5">
                    <div className="flex items-center gap-3 mb-2">
                      {c.icon}
                      <h3 className="font-semibold">{c.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{c.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-lg mb-3">Principles</h3>
              <ul className="space-y-3 text-sm text-muted-foreground list-disc list-inside">
                <li>Security‑first architecture and culture</li>
                <li>Strong UX paired with strong engineering</li>
                <li>Measure, iterate and improve continuously</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Founder */}
        <section
          ref={founderRef}
          className="relative mt-[5rem] min-h-[calc(100svh-5rem)] px-4 sm:px-6 bg-secondary/10 border-t border-border/60 grid place-items-center scroll-mt-[5rem]"
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={founderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">Founder</h2>
              <p className="text-muted-foreground mt-2">The vision behind SKYBER</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Left: vertical rectangle image */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={founderInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl overflow-hidden border border-border bg-card min-h-[520px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1200&auto=format&fit=crop&q=60"
                  alt="Founder portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </motion.div>

              {/* Right: about + experience + languages */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={founderInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="rounded-xl border border-border bg-card p-6 sm:p-8 flex flex-col"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">Ajay Singh</h3>
                  <p className="text-sm text-muted-foreground">Founder & CEO, Security Engineer</p>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  I lead SKYBER with a simple idea: secure software is better software. My background spans
                  full‑stack engineering, offensive security and product leadership. I care deeply about
                  developer experience and human‑centered design.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="rounded-lg border border-border p-4 text-center">
                    <div className="text-2xl font-bold">6+<span className="text-[#17D492]">y</span></div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                  <div className="rounded-lg border border-border p-4 text-center">
                    <div className="text-2xl font-bold">40+<span className="text-[#17D492]">+</span></div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="rounded-lg border border-border p-4 text-center">
                    <div className="text-2xl font-bold">10+<span className="text-[#17D492]">cert</span></div>
                    <div className="text-xs text-muted-foreground">Certifications</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Programming languages</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="mb-1 flex justify-between text-xs"><span>TypeScript</span><span>90%</span></div>
                      <div className="h-2"><Progress value={90} className="h-2" /></div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-xs"><span>JavaScript</span><span>95%</span></div>
                      <div className="h-2"><Progress value={95} className="h-2" /></div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-xs"><span>Python</span><span>80%</span></div>
                      <div className="h-2"><Progress value={80} className="h-2" /></div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-xs"><span>Go</span><span>60%</span></div>
                      <div className="h-2"><Progress value={60} className="h-2" /></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <AnimatedButton className="bg-[#17D492] hover:bg-[#14c082] text-white px-5 py-2 text-sm">
                    Connect
                  </AnimatedButton>
                  <AnimatedButton href="/contact" variant="outline" className="px-5 py-2 text-sm">
                    Hire SKYBER
                  </AnimatedButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}