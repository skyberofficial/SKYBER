import { useState, useEffect } from 'react';

export function useNewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if we've already shown the modal in this session
    const hasShownThisSession = sessionStorage.getItem('newsletterShown');
    
    if (!hasShownThisSession) {
      // Show modal after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        // Mark as shown in this session
        sessionStorage.setItem('newsletterShown', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    closeModal,
    hasShown
  };
}
