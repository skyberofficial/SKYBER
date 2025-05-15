'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Shield } from "lucide-react";

export default function DevToolsBlocked() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-[#17D492]/10 flex items-center justify-center mb-4">
            <Shield className="w-10 h-10 text-[#17D492]" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-foreground">Access Denied</h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Developer tools are not permitted on this site for security reasons.
        </p>
        <Button 
          onClick={() => router.push('/')}
          className="bg-[#17D492] hover:bg-[#14c082] text-white"
        >
          Return to Homepage
        </Button>
      </div>
    </div>
  );
} 