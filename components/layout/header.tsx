"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { Menu as MenuIcon } from "lucide-react";
import { MegaMenu } from "@/components/ui/mega-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

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

  return (
    <>
      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
      
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-md",
          scrolled
            ? "bg-background/70 shadow-md py-3 backdrop-blur-xl border-b border-border/30"
            : "bg-background/40 py-5 backdrop-blur-lg"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setMegaMenuOpen(true)}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>

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
              <span className="font-bold text-xl text-foreground skyber-text">SKYBER</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <Link href="#about" className="px-4">
                About Us
              </Link>

              <Link href="#insights" className="px-4">
                Insights
              </Link>

              <Link href="#portfolio" className="px-4">
                Portfolio
              </Link>

              <Link href="#contact" className="px-4">
                Contact Us
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <Link href="/client">
                <Button className="bg-[#17D492] hover:bg-[#14c082] text-white">
                  Client Area
                </Button>
              </Link>
            </div>
          </nav>

          <div className="flex md:hidden items-center space-x-4">
            <ThemeSwitcher />
            <Link href="/client">
              <Button className="bg-[#17D492] hover:bg-[#14c082] text-white">
                Client Area
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;