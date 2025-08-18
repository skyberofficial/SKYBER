"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Form validation schema
const formSchema = z.object({
  // Step 1
  service: z.enum(["cybersecurity", "app-development", "ui-ux", "web-development", "tech-consultancy", "custom-software"]),
  budget: z.string().min(1, "Budget is required"),
  
  // Step 2
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Valid email is required"),
  designation: z.string().min(1, "Designation is required"),
  mobile: z.string().min(10, "Valid mobile number is required"),
  address: z.string().min(1, "Address is required"),
  projectTitle: z.string().min(1, "Project title is required"),
  projectDescription: z.string().min(10, "Project description must be at least 10 characters"),
  hasWebsite: z.boolean(),
  websiteUrl: z.string().optional(),
  
  // Step 3
  priority: z.enum(["immediate", "1-week", "2-week", "any-date"]),
  additionalInfo: z.string().optional(),
  
  // Step 4
  frameworks: z.array(z.string()).optional(),
  database: z.array(z.string()).optional(),
  server: z.array(z.string()).optional(),
  
  // Step 5
  confirmTechnologies: z.boolean().refine(val => val === true, "Please confirm technologies"),
  agreeTerms: z.boolean().refine(val => val === true, "Please agree to terms"),
  confirmRefund: z.boolean().refine(val => val === true, "Please confirm refund policy"),
  confirmLicense: z.boolean().refine(val => val === true, "Please confirm user agreement license"),
});

type FormData = z.infer<typeof formSchema>;

interface GetStartedFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const services = [
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "app-development", label: "App Development" },
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "web-development", label: "Web Development" },
  { value: "tech-consultancy", label: "Tech Consultancy" },
  { value: "custom-software", label: "Custom Software" },
];

const priorities = [
  { value: "immediate", label: "Immediate", surcharge: 10000 },
  { value: "1-week", label: "1 Week", surcharge: 3500 },
  { value: "2-week", label: "2 Weeks", surcharge: 2700 },
  { value: "any-date", label: "Any Date", surcharge: 0 },
];

const frameworks = [
  "HTML + CSS + JavaScript",
  "Next.js",
  "React",
  "Angular",
  "Let developer choose",
  "Other",
];

const databases = [
  "Prisma",
  "Supabase",
  "MySQL",
  "MongoDB",
  "Let developer choose",
  "Other",
];

const servers = [
  "Apache",
  "Nginx",
  "Let developer choose",
  "Other",
];

export function GetStartedForm({ open, onOpenChange }: GetStartedFormProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hasWebsite: false,
      frameworks: [],
      database: [],
      server: [],
      confirmTechnologies: false,
      agreeTerms: false,
      confirmRefund: false,
      confirmLicense: false,
    },
  });

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^\d]/g, "");
    if (numericValue === "") return "";
    const number = parseInt(numericValue);
    return number.toLocaleString("en-IN");
  };

  const calculateTotal = () => {
    const basePrice = 8000;
    const priority = form.getValues("priority");
    const priorityData = priorities.find(p => p.value === priority);
    const surcharge = priorityData?.surcharge || 0;
    return basePrice + surcharge;
  };

  const handleNext = async () => {
    const isValid = await form.trigger();
    if (isValid && currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    onOpenChange(false);
    setCurrentStep(1);
    form.reset();
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Services Required</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Project Budget</FormLabel>
              <FormControl>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 font-semibold">
                    ₹
                  </span>
                  <Input
                    {...field}
                    placeholder="Enter budget amount"
                    className="pl-8 text-green-600 font-semibold"
                    onChange={(e) => {
                      const formatted = formatCurrency(e.target.value);
                      field.onChange(formatted);
                    }}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="designation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Designation</FormLabel>
              <FormControl>
                <Input placeholder="Your designation" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter mobile number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input placeholder="Project title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address</FormLabel>
            <FormControl>
              <Textarea placeholder="Enter your address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="projectDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Description</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Describe your project requirements" 
                className="min-h-[100px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="hasWebsite"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Do you have a website?</FormLabel>
            </div>
          </FormItem>
        )}
      />

      {form.watch("hasWebsite") && (
        <FormField
          control={form.control}
          name="websiteUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website URL</FormLabel>
              <FormControl>
                <Input placeholder="https://yourwebsite.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <FormField
        control={form.control}
        name="priority"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold">Choose Priority</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {priorities.map((priority) => (
                  <SelectItem key={priority.value} value={priority.value}>
                    {priority.label} {priority.surcharge > 0 && `(+₹${priority.surcharge.toLocaleString()})`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="additionalInfo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Additional Information</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Any additional information about your project" 
                className="min-h-[100px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </motion.div>
  );

  const renderStep4 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <p className="text-sm text-muted-foreground">You can skip this step if you prefer to let us choose the best technologies for your project.</p>
      </div>

      <div className="space-y-6">
        <div>
          <Label className="text-base font-semibold">Frameworks (Optional)</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            {frameworks.map((framework) => (
              <FormField
                key={framework}
                control={form.control}
                name="frameworks"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(framework)}
                        onCheckedChange={(checked) => {
                          const currentValues = field.value || [];
                          if (checked) {
                            field.onChange([...currentValues, framework]);
                          } else {
                            field.onChange(currentValues.filter((value) => value !== framework));
                          }
                        }}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <Label className="text-sm">{framework}</Label>
                    </div>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>

        <div>
          <Label className="text-base font-semibold">Database (Optional)</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            {databases.map((database) => (
              <FormField
                key={database}
                control={form.control}
                name="database"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(database)}
                        onCheckedChange={(checked) => {
                          const currentValues = field.value || [];
                          if (checked) {
                            field.onChange([...currentValues, database]);
                          } else {
                            field.onChange(currentValues.filter((value) => value !== database));
                          }
                        }}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <Label className="text-sm">{database}</Label>
                    </div>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>

        <div>
          <Label className="text-base font-semibold">Server (Optional)</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            {servers.map((server) => (
              <FormField
                key={server}
                control={form.control}
                name="server"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(server)}
                        onCheckedChange={(checked) => {
                          const currentValues = field.value || [];
                          if (checked) {
                            field.onChange([...currentValues, server]);
                          } else {
                            field.onChange(currentValues.filter((value) => value !== server));
                          }
                        }}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <Label className="text-sm">{server}</Label>
                    </div>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderStep5 = () => {
    const values = form.getValues();
    const total = calculateTotal();
    const selectedService = services.find(s => s.value === values.service);
    const selectedPriority = priorities.find(p => p.value === values.priority);

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        <div className="bg-muted/50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold">Project Summary</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Plan:</span> Basic
            </div>
            <div>
              <span className="font-medium">Budget:</span> ₹{values.budget || "Not specified"}
            </div>
            <div>
              <span className="font-medium">Name:</span> {values.name || "Not provided"}
            </div>
            <div>
              <span className="font-medium">Email:</span> {values.email || "Not provided"}
            </div>
            <div>
              <span className="font-medium">Phone:</span> {values.mobile || "Not provided"}
            </div>
            <div>
              <span className="font-medium">Company:</span> {values.designation || "Not provided"}
            </div>
            <div>
              <span className="font-medium">Website:</span> {values.hasWebsite ? (values.websiteUrl || "Yes") : "No"}
            </div>
            <div>
              <span className="font-medium">Service:</span> {selectedService?.label || "Not selected"}
            </div>
            <div>
              <span className="font-medium">Priority:</span> {selectedPriority?.label} {selectedPriority?.surcharge && selectedPriority.surcharge > 0 && `(₹${selectedPriority.surcharge.toLocaleString()})`}
            </div>
          </div>

          <div>
            <span className="font-medium">Description:</span>
            <p className="text-sm text-muted-foreground mt-1">{values.projectDescription || "Not provided"}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium">Frameworks:</span> {values.frameworks?.length ? values.frameworks.join(", ") : "-"}
            </div>
            <div>
              <span className="font-medium">Database:</span> {values.database?.length ? values.database.join(", ") : "-"}
            </div>
            <div>
              <span className="font-medium">Server:</span> {values.server?.length ? values.server.join(", ") : "-"}
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Total Cost</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Plan price</span>
              <span>₹8,000 / month</span>
            </div>
            <div className="flex justify-between">
              <span>Priority surcharge</span>
              <span>₹{selectedPriority?.surcharge ? selectedPriority.surcharge.toLocaleString() : 0}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>₹{total.toLocaleString()} / month</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <FormField
            control={form.control}
            name="confirmTechnologies"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Confirm all technologies selected are correct</FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agreeTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Agree to Terms & Agreement</FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmRefund"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Confirm Refund Policy</FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmLicense"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Confirm User Agreement License</FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>
      </motion.div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      default:
        return null;
    }
  };

  const steps = [
    { number: 1, title: "Services & Budget" },
    { number: 2, title: "Project Details" },
    { number: 3, title: "Priority & Info" },
    { number: 4, title: "Tech Stack" },
    { number: 5, title: "Review & Confirm" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Get Started with Your Project
          </DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= step.number
                    ? "bg-[#17D492] border-[#17D492] text-white"
                    : "border-gray-300 text-gray-500"
                }`}
              >
                {currentStep > step.number ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="text-sm font-medium">{step.number}</span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-16 h-0.5 mx-2 ${
                    currentStep > step.number ? "bg-[#17D492]" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-center">
            Step {currentStep}: {steps[currentStep - 1]?.title}
          </h3>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <AnimatePresence mode="wait">
              {renderStepContent()}
            </AnimatePresence>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              {currentStep < 5 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-[#17D492] hover:bg-[#17D492]/90"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="flex items-center gap-2 bg-[#17D492] hover:bg-[#17D492]/90"
                >
                  Submit Project
                  <Check className="w-4 h-4" />
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
