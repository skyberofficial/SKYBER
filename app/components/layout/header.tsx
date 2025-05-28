'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/theme/mode-toggle';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'About Us', href: '/about' },
  { name: 'Insights', href: '/insights' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact Us', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 h-20 flex items-center border-b border-border/40 bg-background/80 backdrop-blur-xl z-[9998]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Skyber Logo" width={40} height={40} />
            <span className="font-bold text-xl">SKYBER</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm transition-colors hover:text-primary',
                  pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Client Area
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 