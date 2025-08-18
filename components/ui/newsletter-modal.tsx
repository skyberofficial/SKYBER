'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Gift, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Close modal after 2 seconds
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFirstName('');
      setEmail('');
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
                     {/* Modal */}
           <motion.div
             initial={{ scale: 0.9, opacity: 0, y: 20 }}
             animate={{ scale: 1, opacity: 1, y: 0 }}
             exit={{ scale: 0.9, opacity: 0, y: 20 }}
             transition={{ type: "spring", damping: 25, stiffness: 300 }}
             className="relative w-full max-w-4xl bg-black rounded-lg border border-gray-700 shadow-2xl overflow-hidden"
           >
                         {/* Close Button */}
             <button
               onClick={onClose}
               className="absolute top-4 right-4 z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
             >
               <X className="w-5 h-5 text-white" />
             </button>

            {/* Content */}
            <div className="flex">
              {/* Left Section - Text and Form */}
              <div className="w-full lg:w-1/2 p-8">
                                 <div className="text-center mb-6">
                   <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.1 }}
                   >
                     <h2 className="text-2xl font-bold text-white mb-2">Stay Ahead with Tech Insights!</h2>
                     <p className="text-white/80 text-sm">
                       Get exclusive cybersecurity tips, tech trends & project insights
                     </p>
                   </motion.div>
                 </div>

                {/* Form */}
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                                   <Input
                   type="text"
                   placeholder="Your first name"
                   value={firstName}
                   onChange={(e) => setFirstName(e.target.value)}
                   className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md focus:border-[#17D492] focus:outline-none transition-colors text-white placeholder-white/60"
                   required
                 />
                 <Input
                   type="email"
                   placeholder="Your email address"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md focus:border-[#17D492] focus:outline-none transition-colors text-white placeholder-white/60"
                   required
                 />
                                   <Button
                   type="submit"
                   disabled={isSubmitting || !firstName || !email}
                   className="w-full py-3 bg-[#17D492] hover:bg-[#17D492]/90 text-white font-semibold rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                 >
                   {isSubmitting ? (
                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                   ) : (
                     "SUBSCRIBE NOW"
                   )}
                 </Button>
                </motion.form>

                                 {/* Disclaimer */}
                 <motion.p
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.3 }}
                   className="text-xs text-white/70 text-center mt-4"
                 >
                   Get weekly insights on cybersecurity, web development & tech innovation
                 </motion.p>
              </div>

                             {/* Right Section - Image */}
               <div className="hidden lg:block w-1/2 bg-[#17D492]/10">
                 <div className="w-full h-full bg-cover bg-center bg-no-repeat relative" 
                      style={{
                        backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
                      }}>
                   <div className="absolute inset-0 bg-black/50"></div>
                   <div className="absolute bottom-6 left-6 right-6 text-center text-white">
                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#17D492] mb-3">
                       <Mail className="w-6 h-6 text-white" />
                     </div>
                     <p className="text-sm font-medium">Tech Innovation</p>
                     <p className="text-xs opacity-75">Cybersecurity • Web Dev • AI Solutions</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                                 <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   className="absolute inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center rounded-lg"
                 >
                   <div className="text-center">
                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#17D492] mb-4">
                       <CheckCircle className="w-8 h-8 text-white" />
                     </div>
                     <h3 className="text-xl font-semibold text-white mb-2">Welcome to Tech Insights!</h3>
                     <p className="text-white/80">You&apos;re now subscribed to our cybersecurity & tech newsletter.</p>
                   </div>
                 </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
