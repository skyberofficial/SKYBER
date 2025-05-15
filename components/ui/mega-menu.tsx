import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Code,
  Laptop,
  Smartphone,
  Palette,
  Settings,
  Shield,
  Building2,
  GraduationCap,
  Heart,
  Store,
  X,
  ChevronRight
} from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const menuItems = {
    services: {
      title: "Our Services",
      items: [
        {
          icon: <Shield className="w-6 h-6 text-[#17D492]" />,
          title: "Cybersecurity Solutions",
          description: "Advanced security measures for your digital assets",
          image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          icon: <Laptop className="w-6 h-6 text-[#17D492]" />,
          title: "Web Development",
          description: "Custom websites and web applications",
          image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          icon: <Smartphone className="w-6 h-6 text-[#17D492]" />,
          title: "App Development",
          description: "Native and cross-platform mobile solutions",
          image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          icon: <Code className="w-6 h-6 text-[#17D492]" />,
          title: "Custom Software",
          description: "Tailored software solutions for your business",
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          icon: <Palette className="w-6 h-6 text-[#17D492]" />,
          title: "UI/UX Design",
          description: "Beautiful and intuitive user experiences",
          image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          icon: <Settings className="w-6 h-6 text-[#17D492]" />,
          title: "Tech Consultation",
          description: "Expert guidance for your tech decisions",
          image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ]
    },
    industries: {
      title: "Industries Served",
      items: [
        {
          icon: <Building2 className="w-6 h-6 text-[#17D492]" />,
          title: "Startups",
          description: "Empowering new ventures with technology",
          image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          icon: <Store className="w-6 h-6 text-[#17D492]" />,
          title: "E-commerce",
          description: "Digital solutions for online retail",
          image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          icon: <GraduationCap className="w-6 h-6 text-[#17D492]" />,
          title: "Education",
          description: "Technology for modern learning",
          image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          icon: <Heart className="w-6 h-6 text-[#17D492]" />,
          title: "Healthcare",
          description: "Digital solutions for healthcare providers",
          image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ]
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed top-0 left-0 h-screen w-full sm:w-[400px] bg-background border-r border-border z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 375 375"
                    className="text-[#17D492] dark:text-[#17D492]"
                  >
                    <path
                      fill="currentColor"
                      d="M328.512 185.605h-54.512c-10.031 0-18.168 8.141-18.168 18.172v54.512c0 .324.07.629.094.945l-47.399 47.399h-26.312l-33.18-33.18c.535-1.984.899-4.031.899-6.188v-72.683c0-2.157-.376-4.204-.899-6.192l18.122-18.121c.316.012.62.098.945.098h54.512c10.03 0 18.172-8.14 18.172-18.172V97.684c0-10.028-8.141-18.169-18.172-18.169h-54.512c-.324 0-.629.07-.945.094l-28.551-28.551V19.723c0-6.688-5.426-12.117-12.114-12.117H90.152c-6.687 0-12.113 5.43-12.113 12.117v36.34c0 6.687 5.426 12.113 12.113 12.113h31.325l28.55 28.55c-.011.317-.093.633-.093.946v54.511c0 .328.07.63.094.946l-18.121 18.121c-1.985-.532-4.047-.895-6.203-.895H53.035c-13.387 0-24.226 10.84-24.226 24.227v72.684c0 13.383 10.84 24.226 24.226 24.226h72.684c2.156 0 4.203-.375 6.199-.898l33.168 33.168v31.328c0 6.684 5.426 12.114 12.114 12.114h36.344c6.683 0 12.113-5.43 12.113-12.114v-31.328l47.41-47.414c.316.015.621.097.945.097h54.512c10.031 0 18.172-8.14 18.172-18.168v-54.512c0-10.031-8.141-18.172-18.172-18.172z"
                    />
                  </svg>
                  <span className="font-bold text-xl text-foreground skyber-text">SKYBER</span>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="space-y-8">
                {/* Services Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">{menuItems.services.title}</h3>
                  <div className="space-y-4">
                    {menuItems.services.items.map((item, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                        onMouseEnter={() => setActiveTab(`services-${index}`)}
                        onMouseLeave={() => setActiveTab(null)}
                      >
                        <div className="flex-shrink-0">{item.icon}</div>
                        <div className="flex-grow">
                          <h4 className="font-medium group-hover:text-[#17D492] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Industries Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">{menuItems.industries.title}</h3>
                  <div className="space-y-4">
                    {menuItems.industries.items.map((item, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                        onMouseEnter={() => setActiveTab(`industries-${index}`)}
                        onMouseLeave={() => setActiveTab(null)}
                      >
                        <div className="flex-shrink-0">{item.icon}</div>
                        <div className="flex-grow">
                          <h4 className="font-medium group-hover:text-[#17D492] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Preview Image Panel */}
          <AnimatePresence>
            {activeTab && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="fixed top-0 left-[400px] h-screen w-[500px] bg-background/50 backdrop-blur-md z-50 border-r border-border"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={
                      activeTab.startsWith("services")
                        ? menuItems.services.items[parseInt(activeTab.split("-")[1])].image
                        : menuItems.industries.items[parseInt(activeTab.split("-")[1])].image
                    }
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent">
                    <h3 className="text-2xl font-bold mb-2">
                      {activeTab.startsWith("services")
                        ? menuItems.services.items[parseInt(activeTab.split("-")[1])].title
                        : menuItems.industries.items[parseInt(activeTab.split("-")[1])].title}
                    </h3>
                    <p className="text-muted-foreground">
                      {activeTab.startsWith("services")
                        ? menuItems.services.items[parseInt(activeTab.split("-")[1])].description
                        : menuItems.industries.items[parseInt(activeTab.split("-")[1])].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
} 