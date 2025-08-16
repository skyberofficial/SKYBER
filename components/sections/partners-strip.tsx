"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type Partner = {
  name: string;
  logo: string;
  invertInDark?: boolean;
  invertInLight?: boolean;
  lightThemeLogo?: string;
};

const partners: Partner[] = [
  { 
    name: "Apple", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", 
    invertInDark: true,
    lightThemeLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  { 
    name: "Microsoft", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    lightThemeLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  { 
    name: "Google", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg", 
    invertInDark: true,
    lightThemeLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  { 
    name: "Meta", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png?20230620122121",
    lightThemeLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png?20230620122121"
  },
  { 
    name: "Amazon", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", 
    invertInDark: true,
    lightThemeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  { 
    name: "Netflix", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    lightThemeLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  },
  { 
    name: "Adobe", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/768px-Adobe_Corporate_logo.svg.png?20220820114255",
    lightThemeLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/768px-Adobe_Corporate_logo.svg.png?20220820114255"
  },
  { 
    name: "Salesforce", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/768px-Salesforce.com_logo.svg.png?20210504050649",
    lightThemeLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/768px-Salesforce.com_logo.svg.png?20210504050649"
  },
  { 
    name: "Oracle", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    lightThemeLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
  },
  { 
    name: "IBM", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    lightThemeLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  }
];

const duplicatedPartners = [...partners, ...partners];

export function PartnersStrip() {
  return (
    <section className="py-12 border-y border-border/30 bg-gradient-to-r from-background via-background/80 to-background">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">
            Collaborative Companies
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Trusted by industry leaders
          </h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            We collaborate with forward-thinking companies worldwide to deliver exceptional results
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="marquee flex gap-10 items-center">
            {duplicatedPartners.map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0">
                <div className="group relative h-20 w-[200px] bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#17D492]/30">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-800/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Logo container */}
                  <div className="relative z-10">
                    <Image
                      src={partner.lightThemeLogo || partner.logo}
                      alt={`${partner.name} logo`}
                      width={140}
                      height={40}
                      className={cn(
                        "w-auto h-10 grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 filter",
                        partner.invertInDark ? "dark:invert" : "",
                        partner.invertInLight ? "light:invert" : ""
                      )}
                      onError={(e) => {
                        // Fallback to company name if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.logo-fallback');
                        if (fallback) {
                          (fallback as HTMLElement).style.display = 'block';
                        }
                      }}
                    />
                    {/* Fallback text if image fails to load */}
                    <div className="logo-fallback hidden text-lg font-bold text-gray-600 dark:text-gray-300">
                      {partner.name}
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#17D492]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Company name tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#17D492] rounded-full"></div>
              <span>500+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#17D492] rounded-full"></div>
              <span>98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#17D492] rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: max-content;
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        /* Pause animation on hover for better UX */
        .marquee:hover {
          animation-play-state: paused;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .marquee {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
}


