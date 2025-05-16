'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Shield, Key } from "lucide-react";
import { DisableDialog } from "@/components/security/disable-dialog";

export default function DevToolsBlocked() {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDisableSubmit = (code: string) => {
    // Set the disable flag with expiration time (1 hour from now)
    localStorage.setItem('devtools_disabled_until', (Date.now() + 3600000).toString());
    
    // Close the dialog and redirect to homepage
    setIsDialogOpen(false);
    
    // Use replace instead of push to prevent going back to the blocked page
    router.replace('/');
  };

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
        <div className="flex gap-4 justify-center">
        <Button 
          onClick={() => router.push('/')}
          className="bg-[#17D492] hover:bg-[#14c082] text-white"
        >
          Return to Homepage
        </Button>
          <Button 
            onClick={() => setIsDialogOpen(true)}
            variant="outline"
            className="border-[#17D492] text-[#17D492] hover:bg-[#17D492]/10"
          >
            <Key className="w-4 h-4 mr-2" />
            Enter Disable Code
          </Button>
        </div>
      </div>

      <DisableDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={handleDisableSubmit}
      />
    </div>
  );
} 