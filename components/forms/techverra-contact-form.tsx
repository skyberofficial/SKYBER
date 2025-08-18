"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle,
  Shield,
  Server,
  Bug,
  Database,
  Globe,
  Cpu,
  Settings,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialPlan?: string;
}

const requiredServices = [
  { value: "debugging", label: "Debugging Support", icon: Bug },
  { value: "server-maintenance", label: "Server Maintenance", icon: Server },
  { value: "error-resolution", label: "Error Resolution", icon: AlertCircle },
  { value: "database-support", label: "Database Support", icon: Database },
  { value: "network-support", label: "Network Support", icon: Globe },
  { value: "performance-optimization", label: "Performance Optimization", icon: Cpu },
  { value: "security-audit", label: "Security Audit", icon: Shield },
  { value: "custom-integration", label: "Custom Integration", icon: Settings },
  { value: "consultation", label: "Technical Consultation", icon: FileText },
  { value: "other", label: "Other Services", icon: MessageSquare }
];

const supportPlans = [
  { value: "basic", label: "Basic Support", price: "From $99/month" },
  { value: "professional", label: "Professional Support", price: "From $199/month" },
  { value: "enterprise", label: "Enterprise Support", price: "Custom Pricing" },
  { value: "custom", label: "Custom Plan", price: "Tailored Pricing" }
];

const urgencyLevels = [
  { value: "low", label: "Low Priority", description: "General inquiry or planning" },
  { value: "medium", label: "Medium Priority", description: "Issues affecting some operations" },
  { value: "high", label: "High Priority", description: "Critical issues affecting business" },
  { value: "urgent", label: "Urgent", description: "System down or security breach" }
];

export function TechVerraContactForm({ isOpen, onClose, initialService, initialPlan }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    requiredServices: initialService || "",
    supportPlan: initialPlan || "",
    urgency: "",
    description: "",
    budget: "",
    timeline: "",
    agreement: false,
    marketing: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent body scroll when form is open
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Also disable Lenis scrolling if available
      if ((window as { lenis?: { stop: () => void } }).lenis) {
        (window as { lenis?: { stop: () => void } }).lenis?.stop();
      }
    } else {
      // Restore scroll position and body styles
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
      
      // Re-enable Lenis scrolling if available
      if ((window as { lenis?: { start: () => void } }).lenis) {
        (window as { lenis?: { start: () => void } }).lenis?.start();
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if ((window as { lenis?: { start: () => void } }).lenis) {
        (window as { lenis?: { start: () => void } }).lenis?.start();
      }
    };
  }, [isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.requiredServices) {
      newErrors.requiredServices = "Please select a required service";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please describe your requirements";
    }

    if (!formData.agreement) {
      newErrors.agreement = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          requiredServices: "",
          supportPlan: "",
          urgency: "",
          description: "",
          budget: "",
          timeline: "",
          agreement: false,
          marketing: false
        });
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const getServiceIcon = (serviceValue: string) => {
    const service = requiredServices.find(s => s.value === serviceValue);
    return service ? service.icon : MessageSquare;
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking the backdrop itself, not its children
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={handleBackdropClick}
          />

          {/* Form Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()} // Prevent backdrop click when clicking modal
          >
            <div className="w-full max-w-4xl h-[90vh] flex flex-col">
              <Card className="w-full h-full flex flex-col">
                <CardHeader className="flex-shrink-0 border-b bg-background">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#17D492]/10 rounded-lg flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-[#17D492]" />
                        </div>
                        Contact TechVerra Support Team
                      </CardTitle>
                      <CardDescription>
                        Get expert technical support for your business needs
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={onClose}
                      className="h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>

                <div 
                  className="flex-1 min-h-0 overflow-y-auto"
                  onWheel={(e) => {
                    // Prevent the wheel event from bubbling up to parent containers
                    e.stopPropagation();
                  }}
                >
                  <CardContent className="p-6">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 bg-[#17D492]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-[#17D492]" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                        <p className="text-muted-foreground mb-4">
                          Your request has been submitted successfully. Our team will contact you within 2 hours.
                        </p>
                        <Badge variant="secondary" className="bg-[#17D492]/10 text-[#17D492]">
                          Request ID: TV-{Date.now().toString().slice(-6)}
                        </Badge>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <User className="w-5 h-5 text-[#17D492]" />
                            Personal Information
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                placeholder="Enter your full name"
                                className={errors.name ? "border-red-500" : ""}
                              />
                              {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                              )}
                            </div>
                            <div>
                              <Label htmlFor="email">Email Address *</Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                placeholder="Enter your email address"
                                className={errors.email ? "border-red-500" : ""}
                              />
                              {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                              )}
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                placeholder="Enter your phone number"
                                className={errors.phone ? "border-red-500" : ""}
                              />
                              {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                              )}
                            </div>
                            <div>
                              <Label htmlFor="company">Company Name</Label>
                              <Input
                                id="company"
                                value={formData.company}
                                onChange={(e) => handleInputChange("company", e.target.value)}
                                placeholder="Enter your company name"
                              />
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Service Requirements */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Settings className="w-5 h-5 text-[#17D492]" />
                            Service Requirements
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="requiredServices">Required Service *</Label>
                              <Select
                                value={formData.requiredServices}
                                onValueChange={(value) => handleInputChange("requiredServices", value)}
                              >
                                <SelectTrigger className={errors.requiredServices ? "border-red-500" : ""}>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                  {requiredServices.map((service) => {
                                    const IconComponent = service.icon;
                                    return (
                                      <SelectItem key={service.value} value={service.value}>
                                        <div className="flex items-center gap-2">
                                          <IconComponent className="w-4 h-4" />
                                          {service.label}
                                        </div>
                                      </SelectItem>
                                    );
                                  })}
                                </SelectContent>
                              </Select>
                              {errors.requiredServices && (
                                <p className="text-red-500 text-sm mt-1">{errors.requiredServices}</p>
                              )}
                            </div>
                            <div>
                              <Label htmlFor="supportPlan">Support Plan</Label>
                              <Select
                                value={formData.supportPlan}
                                onValueChange={(value) => handleInputChange("supportPlan", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a support plan" />
                                </SelectTrigger>
                                <SelectContent>
                                  {supportPlans.map((plan) => (
                                    <SelectItem key={plan.value} value={plan.value}>
                                      <div className="flex items-center justify-between w-full">
                                        <span>{plan.label}</span>
                                        <span className="text-xs text-muted-foreground">{plan.price}</span>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="urgency">Urgency Level</Label>
                              <Select
                                value={formData.urgency}
                                onValueChange={(value) => handleInputChange("urgency", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select urgency level" />
                                </SelectTrigger>
                                <SelectContent>
                                  {urgencyLevels.map((level) => (
                                    <SelectItem key={level.value} value={level.value}>
                                      <div>
                                        <div className="font-medium">{level.label}</div>
                                        <div className="text-xs text-muted-foreground">{level.description}</div>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="budget">Budget Range</Label>
                              <Select
                                value={formData.budget}
                                onValueChange={(value) => handleInputChange("budget", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="under-1k">Under $1,000</SelectItem>
                                  <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                  <SelectItem value="over-50k">Over $50,000</SelectItem>
                                  <SelectItem value="custom">Custom Budget</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Project Details */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-[#17D492]" />
                            Project Details
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="description">Project Description *</Label>
                              <Textarea
                                id="description"
                                value={formData.description}
                                onChange={(e) => handleInputChange("description", e.target.value)}
                                placeholder="Please describe your technical requirements, issues, or project details..."
                                rows={4}
                                className={errors.description ? "border-red-500" : ""}
                              />
                              {errors.description && (
                                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                              )}
                            </div>
                            <div>
                              <Label htmlFor="timeline">Timeline</Label>
                              <Select
                                value={formData.timeline}
                                onValueChange={(value) => handleInputChange("timeline", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="immediate">Immediate (Within 24 hours)</SelectItem>
                                  <SelectItem value="1-week">Within 1 week</SelectItem>
                                  <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                                  <SelectItem value="1-month">Within 1 month</SelectItem>
                                  <SelectItem value="flexible">Flexible timeline</SelectItem>
                                  <SelectItem value="ongoing">Ongoing support</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Agreements */}
                        <div className="space-y-4">
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="agreement"
                              checked={formData.agreement}
                              onCheckedChange={(checked) => handleInputChange("agreement", checked as boolean)}
                            />
                            <div className="grid gap-1.5 leading-none">
                              <Label htmlFor="agreement" className="text-sm">
                                I agree to the terms and conditions *
                              </Label>
                              <p className="text-xs text-muted-foreground">
                                By checking this box, you agree to our terms of service and privacy policy.
                              </p>
                            </div>
                          </div>
                          {errors.agreement && (
                            <p className="text-red-500 text-sm">{errors.agreement}</p>
                          )}

                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="marketing"
                              checked={formData.marketing}
                              onCheckedChange={(checked) => handleInputChange("marketing", checked as boolean)}
                            />
                            <div className="grid gap-1.5 leading-none">
                              <Label htmlFor="marketing" className="text-sm">
                                I would like to receive updates about TechVerra services
                              </Label>
                              <p className="text-xs text-muted-foreground">
                                Get notified about new features, updates, and special offers.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-4">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-[#17D492] hover:bg-[#14c082] text-white"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Submitting...
                              </>
                            ) : (
                              "Submit Request"
                            )}
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            disabled={isSubmitting}
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    )}
                  </CardContent>
                </div>
              </Card>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 