import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, GraduationCap, MapPin, DollarSign, Globe, Award, ArrowRight, CheckCircle, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    icon?: any;
  }[];
}

interface CountryRecommendation {
  country: string;
  flag: string;
  score: number;
  courses: string[];
  highlights: string[];
  visaSuccessRate: number;
  prPathway: boolean;
  workRights: string;
  averageCost: string;
  topUniversities: string[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "education_level",
    question: "What is your current education level?",
    options: [
      { value: "intermediate", label: "Intermediate/High School", icon: GraduationCap },
      { value: "bachelors", label: "Bachelor's Degree", icon: GraduationCap },
      { value: "masters", label: "Master's Degree", icon: Award },
      { value: "diploma", label: "Diploma/Certificate", icon: Award }
    ]
  },
  {
    id: "budget_range",
    question: "What is your budget range for studying abroad?",
    options: [
      { value: "low", label: "Under $20,000 per year", icon: DollarSign },
      { value: "medium", label: "$20,000 - $40,000 per year", icon: DollarSign },
      { value: "high", label: "$40,000 - $60,000 per year", icon: DollarSign },
      { value: "premium", label: "Above $60,000 per year", icon: DollarSign }
    ]
  },
  {
    id: "preferred_countries",
    question: "Which countries interest you most? (Select up to 2)",
    options: [
      { value: "canada", label: "Canada", icon: MapPin },
      { value: "uk", label: "United Kingdom", icon: MapPin },
      { value: "australia", label: "Australia", icon: MapPin },
      { value: "usa", label: "United States", icon: MapPin },
      { value: "germany", label: "Germany", icon: MapPin },
      { value: "any", label: "Open to any country", icon: Globe }
    ]
  },
  {
    id: "language_proficiency",
    question: "What is your English language proficiency?",
    options: [
      { value: "high", label: "IELTS 7+ / PTE 65+", icon: Star },
      { value: "medium", label: "IELTS 6-6.5 / PTE 50-64", icon: Star },
      { value: "low", label: "IELTS 5.5-6 / PTE 42-49", icon: Star },
      { value: "none", label: "Haven't taken test yet", icon: Star }
    ]
  },
  {
    id: "field_interest",
    question: "What field of study interests you most?",
    options: [
      { value: "it", label: "Information Technology", icon: Brain },
      { value: "business", label: "Business & Management", icon: Users },
      { value: "engineering", label: "Engineering", icon: Brain },
      { value: "medical", label: "Medical & Health Sciences", icon: Award },
      { value: "arts", label: "Arts & Humanities", icon: Award },
      { value: "science", label: "Science & Research", icon: Brain }
    ]
  },
  {
    id: "future_plans",
    question: "What are your post-study plans?",
    options: [
      { value: "pr", label: "Permanent Residency", icon: Globe },
      { value: "work", label: "Work Experience", icon: Users },
      { value: "return", label: "Return to Pakistan", icon: MapPin },
      { value: "unsure", label: "Not sure yet", icon: Brain }
    ]
  }
];

const countryDatabase: Record<string, any> = {
  canada: {
    country: "Canada",
    flag: "🇨🇦",
    courses: {
      it: ["Computer Science", "Software Engineering", "Data Science"],
      business: ["MBA", "Business Administration", "Finance"],
      engineering: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering"],
      medical: ["Nursing", "Public Health", "Medical Laboratory Technology"],
      arts: ["Psychology", "Communications", "Fine Arts"],
      science: ["Biology", "Chemistry", "Environmental Science"]
    },
    highlights: ["Strong immigration pathways", "Work while studying", "Post-graduation work permit"],
    visaSuccessRate: 85,
    prPathway: true,
    workRights: "20 hours/week during studies",
    averageCost: "$15,000 - $35,000 CAD",
    topUniversities: ["University of Toronto", "McGill University", "UBC"]
  },
  uk: {
    country: "United Kingdom",
    flag: "🇬🇧",
    courses: {
      it: ["Computer Science", "Artificial Intelligence", "Cybersecurity"],
      business: ["MBA", "International Business", "Marketing"],
      engineering: ["Aerospace Engineering", "Chemical Engineering", "Civil Engineering"],
      medical: ["Medicine", "Nursing", "Biomedical Sciences"],
      arts: ["Literature", "History", "Philosophy"],
      science: ["Physics", "Chemistry", "Mathematics"]
    },
    highlights: ["World-class universities", "Research opportunities", "Cultural diversity"],
    visaSuccessRate: 80,
    prPathway: false,
    workRights: "20 hours/week during studies",
    averageCost: "£12,000 - £28,000",
    topUniversities: ["Oxford University", "Cambridge University", "Imperial College"]
  },
  australia: {
    country: "Australia",
    flag: "🇦🇺",
    courses: {
      it: ["Information Technology", "Software Development", "Data Analytics"],
      business: ["Business Management", "Accounting", "Marketing"],
      engineering: ["Mining Engineering", "Environmental Engineering", "Software Engineering"],
      medical: ["Nursing", "Pharmacy", "Health Sciences"],
      arts: ["Media Studies", "Design", "Education"],
      science: ["Marine Biology", "Geology", "Agricultural Science"]
    },
    highlights: ["High quality of life", "Strong job market", "PR opportunities"],
    visaSuccessRate: 82,
    prPathway: true,
    workRights: "20 hours/week during studies",
    averageCost: "$20,000 - $45,000 AUD",
    topUniversities: ["University of Melbourne", "Australian National University", "University of Sydney"]
  },
  usa: {
    country: "United States",
    flag: "🇺🇸",
    courses: {
      it: ["Computer Science", "Information Systems", "Software Engineering"],
      business: ["MBA", "Finance", "International Business"],
      engineering: ["Computer Engineering", "Biomedical Engineering", "Industrial Engineering"],
      medical: ["Pre-Med", "Public Health", "Nursing"],
      arts: ["Liberal Arts", "Fine Arts", "Communications"],
      science: ["Biology", "Chemistry", "Physics"]
    },
    highlights: ["Top universities globally", "Innovation hub", "Extensive alumni networks"],
    visaSuccessRate: 75,
    prPathway: false,
    workRights: "On-campus work only",
    averageCost: "$25,000 - $55,000 USD",
    topUniversities: ["Harvard University", "MIT", "Stanford University"]
  },
  germany: {
    country: "Germany",
    flag: "🇩🇪",
    courses: {
      it: ["Computer Science", "Information Technology", "Digital Engineering"],
      business: ["International Business", "Economics", "Management"],
      engineering: ["Mechanical Engineering", "Automotive Engineering", "Industrial Engineering"],
      medical: ["Medicine", "Biotechnology", "Health Management"],
      arts: ["Philosophy", "History", "Literature"],
      science: ["Physics", "Chemistry", "Environmental Science"]
    },
    highlights: ["Low/no tuition fees", "Strong engineering programs", "Central European location"],
    visaSuccessRate: 78,
    prPathway: true,
    workRights: "120 full days per year",
    averageCost: "€0 - €20,000",
    topUniversities: ["Technical University of Munich", "University of Heidelberg", "Humboldt University"]
  }
};

export default function CourseMatchTool() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<CountryRecommendation[]>([]);

  const handleAnswer = (questionId: string, value: string) => {
    if (questionId === "preferred_countries") {
      const currentAnswers = (answers[questionId] as string[]) || [];
      let newAnswers;
      
      if (currentAnswers.includes(value)) {
        newAnswers = currentAnswers.filter(v => v !== value);
      } else if (currentAnswers.length < 2) {
        newAnswers = [...currentAnswers, value];
      } else {
        return; // Don't allow more than 2 selections
      }
      
      setAnswers(prev => ({ ...prev, [questionId]: newAnswers }));
    } else {
      setAnswers(prev => ({ ...prev, [questionId]: value }));
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateRecommendations();
    }
  };

  const calculateRecommendations = () => {
    const countryScores: Record<string, number> = {};
    
    // Initialize scores
    Object.keys(countryDatabase).forEach(country => {
      countryScores[country] = 0;
    });

    // Budget scoring
    const budget = answers.budget_range as string;
    if (budget === "low") {
      countryScores.germany += 30;
      countryScores.canada += 15;
    } else if (budget === "medium") {
      countryScores.canada += 25;
      countryScores.uk += 20;
      countryScores.australia += 15;
    } else if (budget === "high") {
      countryScores.australia += 25;
      countryScores.usa += 20;
      countryScores.uk += 15;
    } else if (budget === "premium") {
      countryScores.usa += 30;
      countryScores.uk += 20;
    }

    // Preferred countries scoring
    const preferredCountries = (answers.preferred_countries as string[]) || [];
    preferredCountries.forEach(country => {
      if (countryScores[country] !== undefined) {
        countryScores[country] += 40;
      }
    });

    // Future plans scoring
    const futurePlans = answers.future_plans as string;
    if (futurePlans === "pr") {
      countryScores.canada += 25;
      countryScores.australia += 25;
      countryScores.germany += 20;
    } else if (futurePlans === "work") {
      countryScores.canada += 20;
      countryScores.australia += 20;
      countryScores.uk += 15;
    }

    // Language proficiency scoring
    const language = answers.language_proficiency as string;
    if (language === "high") {
      Object.keys(countryScores).forEach(country => {
        countryScores[country] += 10;
      });
    } else if (language === "low" || language === "none") {
      countryScores.germany += 15; // More forgiving language requirements
    }

    // Convert to recommendations
    const sortedCountries = Object.entries(countryScores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([country, score]) => {
        const countryData = countryDatabase[country];
        const fieldOfInterest = answers.field_interest as string;
        
        return {
          country: countryData.country,
          flag: countryData.flag,
          score: Math.min(score, 100),
          courses: countryData.courses[fieldOfInterest] || ["General Studies"],
          highlights: countryData.highlights,
          visaSuccessRate: countryData.visaSuccessRate,
          prPathway: countryData.prPathway,
          workRights: countryData.workRights,
          averageCost: countryData.averageCost,
          topUniversities: countryData.topUniversities
        };
      });

    setRecommendations(sortedCountries);
    setShowResults(true);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <Navigation />
        
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                  Your Perfect Study Matches
                </span>
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Based on your preferences, here are our top recommendations for your study abroad journey.
              </p>
            </motion.div>

            {/* Recommendations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.country}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className={`shadow-xl border-0 relative overflow-hidden ${
                    index === 0 ? 'ring-2 ring-primary' : ''
                  }`}>
                    {index === 0 && (
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                        BEST MATCH
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{rec.flag}</span>
                          <div>
                            <CardTitle className="text-xl">{rec.country}</CardTitle>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < Math.round(rec.score / 20) ? 'text-blue-400 fill-current' : 'text-neutral-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-neutral-600">{rec.score}% match</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Recommended Courses */}
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Recommended Courses</h4>
                        <div className="space-y-1">
                          {rec.courses.slice(0, 3).map((course, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                              <span className="text-sm text-neutral-600">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Highlights */}
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Key Highlights</h4>
                        <div className="space-y-1">
                          {rec.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <ArrowRight className="w-4 h-4 text-primary" />
                              <span className="text-sm text-neutral-600">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{rec.visaSuccessRate}%</div>
                          <div className="text-xs text-neutral-500">Visa Success Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{rec.prPathway ? 'Yes' : 'No'}</div>
                          <div className="text-xs text-neutral-500">PR Pathway</div>
                        </div>
                      </div>

                      {/* Cost */}
                      <div className="bg-neutral-50 p-3 rounded-lg">
                        <div className="text-sm font-medium text-neutral-800">Average Cost</div>
                        <div className="text-lg font-bold text-primary">{rec.averageCost}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <Card className="shadow-xl border-0 bg-gradient-to-r from-primary via-secondary to-accent text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                  <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                    Our expert counselors will help you choose the perfect program and guide you through the entire application process.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
                    >
                      Book Free Consultation
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
                      onClick={() => {
                        setCurrentQuestion(0);
                        setAnswers({});
                        setShowResults(false);
                      }}
                    >
                      Retake Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-purple-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Smart Course Match Tool
              </span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Answer a few questions and discover the perfect countries and courses for your study abroad journey.
            </p>
          </motion.div>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-neutral-600">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <span className="text-sm font-medium text-primary">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </motion.div>

          {/* Question */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  {quizQuestions[currentQuestion].question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={
                    Array.isArray(answers[quizQuestions[currentQuestion].id])
                      ? ""
                      : (answers[quizQuestions[currentQuestion].id] as string) || ""
                  }
                  onValueChange={(value) => handleAnswer(quizQuestions[currentQuestion].id, value)}
                  className="space-y-4"
                >
                  {quizQuestions[currentQuestion].options.map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                        (Array.isArray(answers[quizQuestions[currentQuestion].id]) 
                          ? (answers[quizQuestions[currentQuestion].id] as string[]).includes(option.value)
                          : answers[quizQuestions[currentQuestion].id] === option.value)
                          ? 'border-primary bg-primary/5'
                          : 'border-neutral-200 hover:border-primary/50 hover:bg-neutral-50'
                      }`}
                      onClick={() => handleAnswer(quizQuestions[currentQuestion].id, option.value)}
                    >
                      {quizQuestions[currentQuestion].id === "preferred_countries" ? (
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                          (answers[quizQuestions[currentQuestion].id] as string[] || []).includes(option.value)
                            ? 'border-primary bg-primary'
                            : 'border-neutral-300'
                        }`}>
                          {(answers[quizQuestions[currentQuestion].id] as string[] || []).includes(option.value) && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                      ) : (
                        <RadioGroupItem value={option.value} id={option.value} />
                      )}
                      {option.icon && <option.icon className="w-5 h-5 text-primary" />}
                      <Label htmlFor={option.value} className="cursor-pointer flex-1 font-medium">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {quizQuestions[currentQuestion].id === "preferred_countries" && (
                  <p className="text-sm text-neutral-500 mt-4 text-center">
                    You can select up to 2 countries
                  </p>
                )}

                <div className="flex justify-center mt-8">
                  <Button
                    onClick={nextQuestion}
                    disabled={
                      !answers[quizQuestions[currentQuestion].id] ||
                      (Array.isArray(answers[quizQuestions[currentQuestion].id]) && 
                       (answers[quizQuestions[currentQuestion].id] as string[]).length === 0)
                    }
                    className="px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? 'Get My Recommendations' : 'Next Question'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}