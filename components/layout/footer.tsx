import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-[#17D492]" />
              <span className="font-bold text-xl skyber-text">SKYBER</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Providing cutting-edge cybersecurity and web development solutions to protect and propel your business.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-[#17D492] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#17D492] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#17D492] transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#17D492] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#17D492] transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#cybersecurity" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#web-development" className="text-muted-foreground hover:text-foreground transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#custom-software" className="text-muted-foreground hover:text-foreground transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="#ai-tools" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI-Based Tools
                </Link>
              </li>
              <li>
                <Link href="#ethical-hacking" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ethical Hacking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#17D492] mt-0.5" />
                <span className="text-muted-foreground">
                  123 Tech Avenue, Suite 400<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#17D492]" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#17D492]" />
                <span className="text-muted-foreground">info@skyber.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-border" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="skyber-text">SKYBER</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
            <Link href="#sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;