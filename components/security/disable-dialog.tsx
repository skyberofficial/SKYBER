'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield } from "lucide-react";

interface DisableDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (code: string) => void;
}

export function DisableDialog({ isOpen, onClose, onSubmit }: DisableDialogProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (code === 'ADMINDISABLE00351') {
      onSubmit(code);
      setCode('');
      setError(false);
      onClose();
    } else {
      setError(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-[#17D492]/10 flex items-center justify-center">
            <Shield className="w-6 h-6 text-[#17D492]" />
          </div>
          <DialogTitle className="text-center text-xl">Enter Disable Code</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Input
            type="password"
            placeholder="Enter security code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError(false);
            }}
            className={error ? 'border-red-500' : ''}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
          {error && (
            <p className="text-red-500 text-sm text-center">Invalid security code</p>
          )}
          <Button 
            onClick={handleSubmit}
            className="bg-[#17D492] hover:bg-[#14c082] text-white"
          >
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 