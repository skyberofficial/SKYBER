'use client';

import { useNewsletterModal } from '@/hooks/use-newsletter-modal';
import NewsletterModal from '@/components/ui/newsletter-modal';

export default function NewsletterProvider() {
  const { isOpen, closeModal } = useNewsletterModal();

  return <NewsletterModal isOpen={isOpen} onClose={closeModal} />;
}
