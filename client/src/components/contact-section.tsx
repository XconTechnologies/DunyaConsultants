import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { 
  Phone, 
  Send,
  Users,
  Building,
  Award
} from "lucide-react";
import teamPhoto from "@assets/487207597_1075276064616836_53131857491418050_n_1750420505177.jpg";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      destination: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: InsertContact) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  

  const countries = [
    "United States",
    "Canada", 
    "United Kingdom",
    "Australia",
    "Germany",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Our Expert Team</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Ready to begin your journey to international education? Contact us for a free consultation.
          </p>
        </motion.div>

        {/* Team Photo and UAN Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={teamPhoto} 
              alt="Path Visa Consultants Team - 17+ Branches, 200+ Employees, 1000+ Ambassadors" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* UAN Highlight */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-sm text-neutral-600">Call Our UAN</div>
                  <div className="text-xl font-bold text-primary">(+92) 304 1110947</div>
                </div>
              </div>
            </div>
            
            {/* Team Statistics Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="grid grid-cols-3 gap-8 text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <Building className="w-8 h-8 mb-2" />
                  <div className="text-3xl font-bold">17+</div>
                  <div className="text-white/90 text-sm">Branches</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <Users className="w-8 h-8 mb-2" />
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-white/90 text-sm">Employees</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col items-center"
                >
                  <Award className="w-8 h-8 mb-2" />
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-white/90 text-sm">Ambassadors</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        

        
      </div>
    </section>
  );
}
