import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Clock, 
  FileUp, 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";
import { insertConsultationSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/hooks/use-toast";

const formSchema = insertConsultationSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  educationLevel: z.string().min(1, "Please select your education level"),
  fieldOfStudy: z.string().min(1, "Please select your field of study"),
  preferredCountry: z.string().min(1, "Please select your preferred country"),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 1, title: "Personal Details", icon: User },
  { id: 2, title: "Academic Background", icon: GraduationCap },
  { id: 3, title: "Study Preferences", icon: MapPin },
  { id: 4, title: "Consultation Details", icon: Calendar },
  { id: 5, title: "Document Upload", icon: FileUp },
];

export default function ConsultationBooking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      educationLevel: "",
      fieldOfStudy: "",
      preferredCountry: "",
      preferredIntake: "",
      budget: "",
      englishTest: "",
      workExperience: "",
      additionalInfo: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("/api/consultations", {
        method: "POST",
        body: JSON.stringify({
          ...data,
          documents: [], // Will be implemented with file upload
        }),
      });
      return response;
    },
    onSuccess: () => {
      setIsCompleted(true);
      toast({
        title: "Consultation Booked Successfully",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
    },
    onError: (error) => {
      console.error("Consultation booking error:", error);
      toast({
        title: "Error",
        description: "Failed to book consultation. Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  const resetForm = () => {
    form.reset();
    setCurrentStep(1);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white shadow-2xl border-0 text-center">
              <CardContent className="p-12">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 #3367D6" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Consultation Booked Successfully!
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Thank you for booking a consultation with Dunya Consultants. Our expert counselors 
                  will contact you within 24 hours to confirm your appointment and discuss your study abroad plans.
                </p>
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 #3367D6 rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                        1
                      </div>
                      <p className="text-gray-700">We'll call you to confirm your appointment time</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 #3367D6 rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                        2
                      </div>
                      <p className="text-gray-700">Prepare your academic documents and questions</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 #3367D6 rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                        3
                      </div>
                      <p className="text-gray-700">Attend your personalized consultation session</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button onClick={resetForm} variant="outline" className="flex-1">
                    Book Another Consultation
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-[#4285F4] to-[#3367D6]">
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Book Your Free{" "}
            <span className="bg-gradient-to-r from-[#4285F4] to-[#3367D6] bg-clip-text text-transparent">
              Consultation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get personalized guidance from our expert counselors to plan your study abroad journey
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`relative flex flex-col items-center ${
                  index < steps.length - 1 ? 'flex-1' : ''
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    currentStep >= step.id
                      ? "#3367D6 #3367D6 text-white"
                      : "bg-white border-gray-300 text-gray-500"
                  }`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-sm font-medium mt-2 text-center ${
                    currentStep >= step.id ? "#3367D6" : "text-gray-500"
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                    currentStep > step.id ? "#3367D6" : "bg-gray-300"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-white shadow-2xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Step {currentStep}: {steps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Enter your email" {...field} />
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
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date of Birth (Optional)</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="educationLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Highest Education Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your education level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="high-school">High School</SelectItem>
                                <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                                <SelectItem value="master">Master's Degree</SelectItem>
                                <SelectItem value="phd">PhD</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="fieldOfStudy"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Field of Study</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your field of study" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="engineering">Engineering</SelectItem>
                                <SelectItem value="business">Business</SelectItem>
                                <SelectItem value="computer-science">Computer Science</SelectItem>
                                <SelectItem value="medicine">Medicine</SelectItem>
                                <SelectItem value="arts">Arts</SelectItem>
                                <SelectItem value="sciences">Sciences</SelectItem>
                                <SelectItem value="law">Law</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="workExperience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work Experience (Optional)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your work experience" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="none">No experience</SelectItem>
                                <SelectItem value="less than 1 year">Less than 1 year</SelectItem>
                                <SelectItem value="1-3 years">1-3 years</SelectItem>
                                <SelectItem value="3+ years">3+ years</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="preferredCountry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Study Destination</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your preferred country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="UK">United Kingdom</SelectItem>
                                <SelectItem value="Canada">Canada</SelectItem>
                                <SelectItem value="Australia">Australia</SelectItem>
                                <SelectItem value="USA">United States</SelectItem>
                                <SelectItem value="Germany">Germany</SelectItem>
                                <SelectItem value="New Zealand">New Zealand</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="preferredIntake"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Intake (Optional)</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select intake" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="September 2025">September 2025</SelectItem>
                                  <SelectItem value="January 2026">January 2026</SelectItem>
                                  <SelectItem value="May 2026">May 2026</SelectItem>
                                  <SelectItem value="September 2026">September 2026</SelectItem>
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
                              <FormLabel>Budget Range (Optional)</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select budget" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="under-20000">Under $20,000</SelectItem>
                                  <SelectItem value="20000-30000">$20,000 - $30,000</SelectItem>
                                  <SelectItem value="30000-50000">$30,000 - $50,000</SelectItem>
                                  <SelectItem value="50000+">$50,000+</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="englishTest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>English Test Status (Optional)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select English test status" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="not-taken">Not taken yet</SelectItem>
                                <SelectItem value="ielts-planning">Planning to take IELTS</SelectItem>
                                <SelectItem value="ielts-taken">Already taken IELTS</SelectItem>
                                <SelectItem value="toefl-planning">Planning to take TOEFL</SelectItem>
                                <SelectItem value="toefl-taken">Already taken TOEFL</SelectItem>
                                <SelectItem value="pte-planning">Planning to take PTE</SelectItem>
                                <SelectItem value="pte-taken">Already taken PTE</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="bg-blue-50 rounded-xl p-6">
                        <h3 className="font-semibold text-gray-900 mb-4">Consultation Options</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <Phone className="w-8 h-8 #3367D6 mb-2" />
                            <h4 className="font-medium text-gray-900">Phone Call</h4>
                            <p className="text-sm text-gray-600">30-45 minutes</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <MessageCircle className="w-8 h-8 #3367D6 mb-2" />
                            <h4 className="font-medium text-gray-900">Video Call</h4>
                            <p className="text-sm text-gray-600">45-60 minutes</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <MapPin className="w-8 h-8 #3367D6 mb-2" />
                            <h4 className="font-medium text-gray-900">In-Person</h4>
                            <p className="text-sm text-gray-600">60 minutes</p>
                          </div>
                        </div>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your specific questions, concerns, or any additional information that would help us prepare for your consultation..."
                                className="min-h-[100px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  {currentStep === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <FileUp className="w-5 h-5 #3367D6" />
                          Document Upload (Optional)
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Upload any relevant documents to help us better understand your profile. 
                          These might include transcripts, CV, or test scores.
                        </p>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <FileUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 mb-2">Drag and drop files here, or click to browse</p>
                          <p className="text-sm text-gray-500">Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                          <Button variant="outline" className="mt-4">
                            Choose Files
                          </Button>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-xl p-6">
                        <h3 className="font-semibold text-gray-900 mb-4">Review Your Information</h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Name:</span>
                            <span className="font-medium">{form.watch("name") || "Not provided"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Email:</span>
                            <span className="font-medium">{form.watch("email") || "Not provided"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Phone:</span>
                            <span className="font-medium">{form.watch("phone") || "Not provided"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Education Level:</span>
                            <span className="font-medium">{form.watch("educationLevel") || "Not provided"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Field of Study:</span>
                            <span className="font-medium">{form.watch("fieldOfStudy") || "Not provided"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Preferred Country:</span>
                            <span className="font-medium">{form.watch("preferredCountry") || "Not provided"}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  {currentStep < 5 ? (
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="flex items-center gap-2"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={submitMutation.isPending}
                      className="bg-gradient-to-r from-[#4285F4] to-[#3367D6] hover:from-#1a73e8 hover:to-[#1a73e8] flex items-center gap-2"
                    >
                      {submitMutation.isPending ? "Booking..." : "Book Consultation"}
                      <CheckCircle className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}