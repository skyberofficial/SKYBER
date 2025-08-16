'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to web development services page
    router.replace('/services/web-development');
  }, [router]);

  // Show loading state while redirecting
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#17D492] mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to Web Development Services...</p>
      </div>
    </div>
  );
}
