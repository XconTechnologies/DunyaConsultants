import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, MapPin, DollarSign, BookOpen, Users, Clock, Award } from "lucide-react";
import { insertEligibilityCheckSchema } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { toast } from "@/hooks/use-toast";

const formSchema = insertEligibilityCheckSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  educationLevel: z.string().min(1, "Please select your education level"),
  fieldOfStudy: z.string().min(1, "Please select your field of study"),
  preferredCountry: z.string().min(1, "Please select your preferred country"),
  englishProficiency: z.string().min(1, "Please select your English proficiency level"),
  budget: z.string().min(1, "Please select your budget range"),
});

type FormData = z.infer<typeof formSchema>;

interface EligibilityResult {
  eligible: boolean;
  country: string;
  score: number;
  recommendations: string[];
  nextSteps: string[];
}

export default function EligibilityChecker() {
  const [result, setResult] = useState<EligibilityResult | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      educationLevel: "",
      fieldOfStudy: "",
      preferredCountry: "",
      englishProficiency: "",
      budget: "",
      workExperience: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const eligibilityResult = calculateEligibility(data);
      
      const response = await apiRequest("/api/eligibility-check", {
        method: "POST",
        body: JSON.stringify({
          ...data,
          result: eligibilityResult,
        }),
      });
      
      return { response, result: eligibilityResult };
    },
    onSuccess: (data) => {
      setResult(data.result);
      setCurrentStep(3);
      toast({
        title: "Eligibility Check Complete",
        description: "Your eligibility assessment has been completed successfully.",
      });
    },
    onError: (error) => {
      console.error("Eligibility check error:", error);
      toast({
        title: "Error",
        description: "Failed to complete eligibility check. Please try again.",
        variant: "destructive",
      });
    },
  });

  const calculateEligibility = (data: FormData): EligibilityResult => {
    let score = 0;
    const recommendations: string[] = [];
    const nextSteps: string[] = [];

    // Education level scoring
    if (data.educationLevel === "bachelor") score += 20;
    else if (data.educationLevel === "master") score += 30;
    else if (data.educationLevel === "phd") score += 35;
    else score += 15;

    // English proficiency scoring
    if (data.englishProficiency === "excellent") score += 25;
    else if (data.englishProficiency === "good") score += 20;
    else if (data.englishProficiency === "average") score += 15;
    else score += 10;

    // Budget scoring
    if (data.budget === "50000+") score += 25;
    else if (data.budget === "30000-50000") score += 20;
    else if (data.budget === "20000-30000") score += 15;
    else score += 10;

    // Work experience bonus
    if (data.workExperience === "3+ years") score += 15;
    else if (data.workExperience === "1-3 years") score += 10;
    else if (data.workExperience === "less than 1 year") score += 5;

    // Generate recommendations based on score and data
    if (score >= 80) {
      recommendations.push("Excellent profile for top universities");
      recommendations.push("Consider applying to multiple countries");
      nextSteps.push("Book a consultation for university selection");
      nextSteps.push("Prepare for English proficiency tests");
    } else if (score >= 60) {
      recommendations.push("Good profile with improvement opportunities");
      recommendations.push("Focus on strengthening weak areas");
      nextSteps.push("Consider additional qualifications");
      nextSteps.push("Improve English proficiency score");
    } else {
      recommendations.push("Profile needs significant improvement");
      recommendations.push("Consider foundation programs");
      nextSteps.push("Enhance academic qualifications");
      nextSteps.push("Gain relevant work experience");
    }

    return {
      eligible: score >= 60,
      country: data.preferredCountry,
      score,
      recommendations,
      nextSteps,
    };
  };

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 2));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const resetForm = () => {
    form.reset();
    setResult(null);
    setCurrentStep(0);
  };

  const steps = [
    { title: "Personal Information", icon: Users },
    { title: "Academic Background", icon: BookOpen },
    { title: "Preferences", icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#2764E8' }}>
            Study Abroad{" "}
            <span style={{ color: '#2764E8' }}>
              Eligibility Checker
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick assessment to check your eligibility for studying abroad and get personalized recommendations
          </p>
        </motion.div>

        {result ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white shadow-2xl border-0">
              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
                    result.eligible 
                      ? "bg-blue-100 text-blue-600" 
                      : "bg-blue-100 text-blue-600"
                  }`}>
                    {result.eligible ? (
                      <CheckCircle className="w-12 h-12" />
                    ) : (
                      <Clock className="w-12 h-12" />
                    )}
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  {result.eligible ? "Congratulations!" : "Not Quite There Yet"}
                </CardTitle>
                <p className="text-lg text-gray-600 mt-2">
                  {result.eligible 
                    ? `You qualify for ${result.country} studies with a score of ${result.score}/100`
                    : `Your current score is ${result.score}/100. Here's how to improve:`
                  }
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Score Display */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Eligibility Score</h3>
                    <span className="text-2xl font-bold text-blue-600">{result.score}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${
                        result.score >= 80 ? "bg-blue-500" :
                        result.score >= 60 ? "bg-blue-500" : "bg-blue-500"
                      }`}
                      style={{ width: `${result.score}%` }}
                    />
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Recommendations
                  </h3>
                  <div className="space-y-3">
                    {result.recommendations.map((recommendation, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{recommendation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Next Steps
                  </h3>
                  <div className="space-y-3">
                    {result.nextSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6">
                  <Button
                    onClick={resetForm}
                    variant="outline"
                    className="flex-1"
                  >
                    Take Test Again
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
                  >
                    Book Free Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <Card className="bg-white shadow-2xl border-0">
            <CardHeader>
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center gap-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        index <= currentStep
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}>
                        <step.icon className="w-5 h-5" />
                      </div>
                      <span className={`text-sm font-medium ${
                        index <= currentStep ? "text-blue-600" : "text-gray-500"
                      }`}>
                        {step.title}
                      </span>
                      {index < steps.length - 1 && (
                        <div className={`w-8 h-0.5 mx-4 ${
                          index < currentStep ? "bg-blue-600" : "bg-gray-200"
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {currentStep === 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
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
                    </motion.div>
                  )}

                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
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
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="englishProficiency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>English Proficiency Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your English level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="excellent">Excellent (IELTS 7+)</SelectItem>
                                <SelectItem value="good">Good (IELTS 6-7)</SelectItem>
                                <SelectItem value="average">Average (IELTS 5.5-6)</SelectItem>
                                <SelectItem value="beginner">Beginner (Below 5.5)</SelectItem>
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

                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
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
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Annual Budget (USD)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your budget range" />
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
                    </motion.div>
                  )}

                  <div className="flex justify-between pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                    >
                      Previous
                    </Button>
                    {currentStep < 2 ? (
                      <Button type="button" onClick={nextStep}>
                        Next
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={submitMutation.isPending}
                        className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
                      >
                        {submitMutation.isPending ? "Checking..." : "Check Eligibility"}
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}