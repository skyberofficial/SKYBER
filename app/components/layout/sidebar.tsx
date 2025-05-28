'use client';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navigation = [
  { name: 'About Us', href: '/about' },
  { name: 'Insights', href: '/insights' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact Us', href: '/contact' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild className="z-[9999] md:hidden">
        <Button variant="ghost" className="w-10 h-10 p-0">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] z-[9999]">
        <nav className="flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'block px-2 py-1 text-lg transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
} 