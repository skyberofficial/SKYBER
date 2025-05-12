"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { Code, ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
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
          <span className="font-bold text-xl text-foreground">Skyber</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-0 flex items-center">
                  Services <ChevronDown className="ml-1 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="#cybersecurity" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    Cybersecurity
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#web-development" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    Web Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#custom-software" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    Custom Software
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#ai-tools" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    AI-Based Tools
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-0 flex items-center">
                  Resources <ChevronDown className="ml-1 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="#case-studies" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    Case Studies
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#blog" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#documentation" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    Documentation
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-0 flex items-center">
                  Company <ChevronDown className="ml-1 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="#about" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#careers" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    Careers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <Button className="bg-[#17D492] hover:bg-[#14c082] text-white">
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeSwitcher />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu} 
            className="rounded-full"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-3">
              <div className="font-medium">Services</div>
              <ul className="pl-4 space-y-2">
                <li>
                  <Link href="#cybersecurity" className="text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link href="#web-development" className="text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#custom-software" className="text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link href="#ai-tools" className="text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                    AI-Based Tools
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-medium">Resources</div>
              <ul className="pl-4 space-y-2">
                <li>
                  <Link href="#case-studies" className="text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#documentation" className="text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-medium">Company</div>
              <ul className="pl-4 space-y-2">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <Button className="w-full bg-[#17D492] hover:bg-[#14c082] text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;