import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { COMPANY_SIZES } from "@/lib/constants";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";
import { pulseAnimation } from "@/styles/animations";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      jobTitle: "",
      email: "",
      phone: "",
      companySize: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertLead) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/leads", data);
      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "Your demo request has been submitted. We'll contact you shortly.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-[#1E293B]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <AnimatedContainer animation="slideInLeft">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Request a <span className="text-[#E67E22]">Demo</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Fill out the form to schedule a personalized demo of LogiHubb's TMS solution. Our team will contact you within 24 hours.
              </p>
              
              <div className="bg-[#0F2A47] rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-clock text-[#2980B9] mt-1 mr-3"></i>
                    <span className="text-gray-300">30-minute personalized demo</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-user-tie text-[#2980B9] mt-1 mr-3"></i>
                    <span className="text-gray-300">Consultation with a logistics expert</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-calculator text-[#2980B9] mt-1 mr-3"></i>
                    <span className="text-gray-300">Custom ROI analysis for your business</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-file-alt text-[#2980B9] mt-1 mr-3"></i>
                    <span className="text-gray-300">Implementation roadmap and timeline</span>
                  </li>
                </ul>
              </div>
            </AnimatedContainer>
          </div>
          
          <div className="md:w-1/2">
            <AnimatedContainer animation="fadeUp">
              {isSuccess ? (
                <div className="bg-[#0F2A47] rounded-lg p-8 shadow-lg text-center">
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-[#2980B9] flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <i className="fas fa-check text-white text-3xl"></i>
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
                  <p className="text-gray-300 mb-6">
                    Your demo request has been received. A LogiHubb representative will contact you within 24 hours.
                  </p>
                  <Button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-[#2980B9] hover:bg-[#3498DB]"
                  >
                    Return to Top
                  </Button>
                </div>
              ) : (
                <div className="bg-[#0F2A47] rounded-lg p-6 shadow-lg">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name*</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                className="bg-[#1E3A5F] border-[#2980B9] focus:border-[#E67E22] text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name*</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Acme Corporation"
                                className="bg-[#1E3A5F] border-[#2980B9] focus:border-[#E67E22] text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="jobTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Title*</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Supply Chain Manager"
                                className="bg-[#1E3A5F] border-[#2980B9] focus:border-[#E67E22] text-white"
                                {...field}
                              />
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
                            <FormLabel>Business Email*</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john.doe@company.com"
                                className="bg-[#1E3A5F] border-[#2980B9] focus:border-[#E67E22] text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number*</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                className="bg-[#1E3A5F] border-[#2980B9] focus:border-[#E67E22] text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="companySize"
                        render={({ field }) => {
                          const { value, ...rest } = field;
                          return (
                            <FormItem>
                              <FormLabel>Company Size</FormLabel>
                              <Select
                                onValueChange={rest.onChange}
                                value={value || undefined}
                              >
                                <FormControl>
                                  <SelectTrigger className="bg-[#1E3A5F] border-[#2980B9] focus:border-[#E67E22] text-white">
                                    <SelectValue placeholder="Select company size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-[#1E3A5F] border-[#2980B9] text-white">
                                  {COMPANY_SIZES.map((size) => (
                                    <SelectItem key={size.value} value={size.value}>
                                      {size.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => {
                          const { value, ...rest } = field;
                          return (
                            <FormItem>
                              <FormLabel>How can we help you?</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your specific logistics needs"
                                  className="bg-[#1E3A5F] border-[#2980B9] focus:border-[#E67E22] text-white"
                                  rows={4}
                                  {...rest}
                                  value={value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      
                      <div className="flex items-start space-x-2 mt-6">
                        <Checkbox id="terms" className="mt-1 data-[state=checked]:bg-[#E67E22] data-[state=checked]:border-[#E67E22]" required />
                        <label
                          htmlFor="terms"
                          className="text-sm text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to LogiHubb's <a href="#" className="text-[#2980B9] hover:text-[#E67E22]">Privacy Policy</a> and <a href="#" className="text-[#2980B9] hover:text-[#E67E22]">Terms of Service</a>*
                        </label>
                      </div>
                      
                      <motion.div className="pt-4" variants={pulseAnimation} initial="initial" animate="animate">
                        <Button
                          type="submit"
                          className="w-full bg-[#E67E22] hover:bg-[#F39C12] text-white font-bold py-3 h-auto"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <i className="fas fa-spinner fa-spin mr-2"></i>
                              Submitting...
                            </>
                          ) : (
                            "Request Demo"
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </div>
              )}
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;