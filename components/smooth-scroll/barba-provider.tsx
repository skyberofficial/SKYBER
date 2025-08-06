"use client";

import { useEffect, useRef } from 'react';

export function BarbaProvider({ children }: { children: React.ReactNode }) {
  const barbaRef = useRef<any>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    let isInitialized = false;

    // Dynamically import Barba.js to avoid SSR issues
    const initBarba = async () => {
      try {
        // Check if we're in a browser environment
        if (typeof window === 'undefined' || typeof document === 'undefined') {
          return;
        }

        // Check if already initialized
        if (isInitialized) return;

        // Dynamic import with proper error handling
        let barba: any;
        try {
          // Use a different import approach
          const barbaModule = await import('@barba/core');
          barba = barbaModule.default || barbaModule;
        } catch (importError) {
          console.warn('Failed to import Barba.js:', importError);
          return;
        }
        
        // Initialize Barba.js with smooth transitions
        barba.init({
          // Prevent Barba from running on the same page
          prevent: ({ el }: { el: HTMLElement }) => {
            const href = el.getAttribute('href');
            if (!href) return true;
            
            // Don't run Barba for same-page links or external links
            if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
              return true;
            }
            
            // Don't run Barba for client area links
            if (href.includes('/client')) {
              return true;
            }
            
            return false;
          },
          
          // Define transitions
          transitions: [
            {
              name: 'default-transition',
              leave(data: any) {
                // Create stunning leave animation
                const done = (this as any).async();
                
                // Get the current page content
                const currentPage = data.current.container;
                
                // Add fade out animation
                currentPage.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
                currentPage.style.opacity = '0';
                currentPage.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                  done();
                }, 300);
              },
              enter(data: any) {
                // Create amazing enter animation
                const done = (this as any).async();
                
                // Get the next page content
                const nextPage = data.next.container;
                
                // Set initial state
                nextPage.style.opacity = '0';
                nextPage.style.transform = 'translateY(20px)';
                
                // Trigger reflow
                nextPage.offsetHeight;
                
                // Add fade in animation
                nextPage.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
                nextPage.style.opacity = '1';
                nextPage.style.transform = 'translateY(0)';
                
                setTimeout(() => {
                  // Clean up styles
                  nextPage.style.transition = '';
                  nextPage.style.opacity = '';
                  nextPage.style.transform = '';
                  done();
                }, 400);
              }
            },
            {
              name: 'home-transition',
              from: { namespace: ['home'] },
              to: { namespace: ['about', 'contact', 'portfolio', 'insights'] },
              leave(data: any) {
                const done = (this as any).async();
                const currentPage = data.current.container;
                
                // Slide out to the left
                currentPage.style.transition = 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out';
                currentPage.style.transform = 'translateX(-100%)';
                currentPage.style.opacity = '0';
                
                setTimeout(() => {
                  done();
                }, 400);
              },
              enter(data: any) {
                const done = (this as any).async();
                const nextPage = data.next.container;
                
                // Slide in from the right
                nextPage.style.transform = 'translateX(100%)';
                nextPage.style.opacity = '0';
                nextPage.style.transition = 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out';
                
                // Trigger reflow
                nextPage.offsetHeight;
                
                nextPage.style.transform = 'translateX(0)';
                nextPage.style.opacity = '1';
                
                setTimeout(() => {
                  nextPage.style.transition = '';
                  nextPage.style.transform = '';
                  nextPage.style.opacity = '';
                  done();
                }, 400);
              }
            },
            {
              name: 'page-transition',
              from: { namespace: ['about', 'contact', 'portfolio', 'insights'] },
              to: { namespace: ['home'] },
              leave(data: any) {
                const done = (this as any).async();
                const currentPage = data.current.container;
                
                // Slide out to the right
                currentPage.style.transition = 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out';
                currentPage.style.transform = 'translateX(100%)';
                currentPage.style.opacity = '0';
                
                setTimeout(() => {
                  done();
                }, 400);
              },
              enter(data: any) {
                const done = (this as any).async();
                const nextPage = data.next.container;
                
                // Slide in from the left
                nextPage.style.transform = 'translateX(-100%)';
                nextPage.style.opacity = '0';
                nextPage.style.transition = 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out';
                
                // Trigger reflow
                nextPage.offsetHeight;
                
                nextPage.style.transform = 'translateX(0)';
                nextPage.style.opacity = '1';
                
                setTimeout(() => {
                  nextPage.style.transition = '';
                  nextPage.style.transform = '';
                  nextPage.style.opacity = '';
                  done();
                }, 400);
              }
            },
            {
              name: 'self',
              enter() {
                // Handle same-page navigation (e.g., hash links)
                const done = (this as any).async();
                
                // Smooth scroll to top or target
                const lenis = (window as any).lenis;
                if (lenis) {
                  lenis.scrollTo(0, { duration: 1.2 });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                
                setTimeout(() => {
                  done();
                }, 100);
              }
            }
          ],
          
          // Views configuration
          views: [
            {
              namespace: 'home',
              beforeEnter() {
                // Handle home page specific logic
              }
            },
            {
              namespace: 'about',
              beforeEnter() {
                // Handle about page specific logic
              }
            },
            {
              namespace: 'contact',
              beforeEnter() {
                // Handle contact page specific logic
              }
            },
            {
              namespace: 'portfolio',
              beforeEnter() {
                // Handle portfolio page specific logic
              }
            },
            {
              namespace: 'insights',
              beforeEnter() {
                // Handle insights page specific logic
              }
            }
          ],
          
          // Hooks for additional functionality
          before() {
            // Disable Lenis scrolling during transition
            const lenis = (window as any).lenis;
            if (lenis) {
              lenis.stop();
            }
          },
          
          after() {
            // Re-enable Lenis scrolling after transition
            const lenis = (window as any).lenis;
            if (lenis) {
              lenis.start();
            }
            
            // Scroll to top after transition
            setTimeout(() => {
              if (lenis) {
                lenis.scrollTo(0, { duration: 1.2 });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }, 100);
          }
        });

        // Store Barba instance for cleanup
        barbaRef.current = barba;
        isInitialized = true;
      } catch (error) {
        console.warn('Barba.js failed to load:', error);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initBarba();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (barbaRef.current && isInitialized) {
        try {
          barbaRef.current.destroy();
          isInitialized = false;
        } catch (error) {
          console.warn('Error destroying Barba.js:', error);
        }
      }
    };
  }, []);

  return <>{children}</>;
}
