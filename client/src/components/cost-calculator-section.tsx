import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calculator, DollarSign, GraduationCap, Plane, FileText, Heart, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

// Cost data for different countries
const countryData = {
  "Canada": {
    tuitionRange: [15000, 35000],
    livingExpenses: [12000, 18000],
    visaFee: 150,
    currency: "CAD",
    cities: {
      "Toronto": { living: 18000, multiplier: 1.2 },
      "Vancouver": { living: 17000, multiplier: 1.15 },
      "Montreal": { living: 14000, multiplier: 0.95 },
      "Ottawa": { living: 15000, multiplier: 1.0 }
    }
  },
  "UK": {
    tuitionRange: [12000, 40000],
    livingExpenses: [10000, 15000],
    visaFee: 348,
    currency: "GBP",
    cities: {
      "London": { living: 15000, multiplier: 1.3 },
      "Manchester": { living: 12000, multiplier: 1.0 },
      "Edinburgh": { living: 13000, multiplier: 1.1 },
      "Birmingham": { living: 11000, multiplier: 0.9 }
    }
  },
  "Australia": {
    tuitionRange: [20000, 45000],
    livingExpenses: [18000, 25000],
    visaFee: 630,
    currency: "AUD",
    cities: {
      "Sydney": { living: 25000, multiplier: 1.25 },
      "Melbourne": { living: 23000, multiplier: 1.15 },
      "Brisbane": { living: 20000, multiplier: 1.0 },
      "Perth": { living: 19000, multiplier: 0.95 }
    }
  },
  "USA": {
    tuitionRange: [25000, 55000],
    livingExpenses: [15000, 25000],
    visaFee: 160,
    currency: "USD",
    cities: {
      "New York": { living: 25000, multiplier: 1.4 },
      "Los Angeles": { living: 22000, multiplier: 1.3 },
      "Chicago": { living: 18000, multiplier: 1.1 },
      "Boston": { living: 20000, multiplier: 1.2 }
    }
  },
  "Germany": {
    tuitionRange: [0, 20000],
    livingExpenses: [8000, 12000],
    visaFee: 75,
    currency: "EUR",
    cities: {
      "Berlin": { living: 10000, multiplier: 1.0 },
      "Munich": { living: 12000, multiplier: 1.2 },
      "Hamburg": { living: 11000, multiplier: 1.1 },
      "Frankfurt": { living: 11500, multiplier: 1.15 }
    }
  }
};

const additionalCosts = {
  ielts: 250,
  toefl: 185,
  flight: {
    "Canada": 800,
    "UK": 600,
    "Australia": 1200,
    "USA": 700,
    "Germany": 500
  },
  insurance: {
    "Canada": 600,
    "UK": 400,
    "Australia": 500,
    "USA": 1200,
    "Germany": 300
  }
};

const faqData = [
  {
    category: "Visa Requirements",
    questions: [
      {
        q: "What documents do I need for a student visa?",
        a: "Required documents typically include: valid passport, letter of acceptance from university, proof of financial support, academic transcripts, English language test scores, medical examination results, and visa application form."
      },
      {
        q: "How long does visa processing take?",
        a: "Processing times vary by country: Canada (4-12 weeks), UK (3-8 weeks), Australia (4-6 weeks), USA (3-5 weeks). Apply well in advance of your intended start date."
      },
      {
        q: "Can I work while studying?",
        a: "Most countries allow part-time work for international students: Canada (20 hours/week), UK (20 hours/week), Australia (40 hours/fortnight), USA (on-campus only in first year)."
      }
    ]
  },
  {
    category: "Tuition & Fees",
    questions: [
      {
        q: "Are there scholarships available?",
        a: "Yes, we help students access various scholarships including merit-based, need-based, and country-specific scholarships. Our team maintains relationships with universities offering exclusive funding opportunities."
      },
      {
        q: "Can I pay tuition fees in installments?",
        a: "Most universities offer installment payment plans. Typically, you can pay per semester or term. Some institutions also offer monthly payment plans with administrative fees."
      },
      {
        q: "What happens if currency exchange rates change?",
        a: "Tuition fees are usually fixed in the local currency. Currency fluctuations affect your payment amount in your home currency. Consider hedging strategies or early payment to lock in rates."
      }
    ]
  },
  {
    category: "English Tests",
    questions: [
      {
        q: "Which English test should I take - IELTS or TOEFL?",
        a: "Both are widely accepted. IELTS is preferred in UK, Australia, and Canada. TOEFL is more common for USA. Check your target university's specific requirements as some prefer one over the other."
      },
      {
        q: "What scores do I need?",
        a: "Minimum scores vary: Undergraduate (IELTS 6.0-6.5, TOEFL 70-80), Postgraduate (IELTS 6.5-7.0, TOEFL 80-90). Top universities may require higher scores."
      },
      {
        q: "How long are test scores valid?",
        a: "Both IELTS and TOEFL scores are valid for 2 years from the test date. Plan your test timing accordingly with your application deadlines."
      }
    ]
  },
  {
    category: "Application Process",
    questions: [
      {
        q: "When should I start my application?",
        a: "Start 12-18 months before your intended start date. This allows time for test preparation, document collection, university applications, and visa processing."
      },
      {
        q: "How many universities should I apply to?",
        a: "We recommend applying to 6-8 universities: 2-3 reach schools, 3-4 target schools, and 1-2 safety schools to maximize your chances of acceptance."
      },
      {
        q: "What if my application gets rejected?",
        a: "Don't worry - we provide comprehensive support including appeal processes, alternative university options, and guidance for strengthening future applications."
      }
    ]
  }
];

export default function CostCalculatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Calculator state
  const [selectedCountry, setSelectedCountry] = useState("");
  const [studyLevel, setStudyLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [tuitionFee, setTuitionFee] = useState([25000]);
  const [livingExpenses, setLivingExpenses] = useState([15000]);
  const [includeIelts, setIncludeIelts] = useState(false);
  const [includeToefl, setIncludeToefl] = useState(false);
  const [includeFlight, setIncludeFlight] = useState(false);
  const [includeInsurance, setIncludeInsurance] = useState(false);
  const [customFlight, setCustomFlight] = useState("");
  
  // FAQ state
  const [openFaqCategory, setOpenFaqCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(null);

  // Calculate total cost
  const calculateTotal = () => {
    if (!selectedCountry || !duration) return 0;
    
    const durationYears = parseInt(duration);
    const country = countryData[selectedCountry];
    
    let total = 0;
    
    // Tuition fees
    total += tuitionFee[0] * durationYears;
    
    // Living expenses
    let living = livingExpenses[0];
    if (selectedCity && country.cities[selectedCity]) {
      living = country.cities[selectedCity].living;
    }
    total += living * durationYears;
    
    // Visa fee
    total += country.visaFee;
    
    // Language tests
    if (includeIelts) total += additionalCosts.ielts;
    if (includeToefl) total += additionalCosts.toefl;
    
    // Flight
    if (includeFlight) {
      const flightCost = customFlight ? parseInt(customFlight) : additionalCosts.flight[selectedCountry];
      total += flightCost;
    }
    
    // Insurance
    if (includeInsurance) {
      total += additionalCosts.insurance[selectedCountry] * durationYears;
    }
    
    return total;
  };

  const resetCalculator = () => {
    setSelectedCountry("");
    setStudyLevel("");
    setDuration("");
    setSelectedCity("");
    setTuitionFee([25000]);
    setLivingExpenses([15000]);
    setIncludeIelts(false);
    setIncludeToefl(false);
    setIncludeFlight(false);
    setIncludeInsurance(false);
    setCustomFlight("");
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-6">
            Study Abroad Cost Calculator
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Get an accurate estimate of your total study abroad expenses including tuition, 
            living costs, visa fees, and additional expenses.
          </p>
        </motion.div>

        

        {/* FAQ Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-800 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-neutral-600">
              Get answers to common questions about studying abroad
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* FAQ Categories */}
            <div className="space-y-4">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setOpenFaqCategory(openFaqCategory === categoryIndex ? -1 : categoryIndex)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-neutral-800">{category.category}</span>
                    {openFaqCategory === categoryIndex ? (
                      <ChevronUp className="w-5 h-5 text-neutral-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-500" />
                    )}
                  </button>
                  
                  {openFaqCategory === categoryIndex && (
                    <div className="border-t border-gray-200">
                      {category.questions.map((faq, questionIndex) => (
                        <div key={questionIndex} className="border-b border-gray-100 last:border-b-0">
                          <button
                            onClick={() => setOpenQuestion(openQuestion === `${categoryIndex}-${questionIndex}` ? null : `${categoryIndex}-${questionIndex}`)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-sm font-medium text-neutral-700">{faq.q}</span>
                            {openQuestion === `${categoryIndex}-${questionIndex}` ? (
                              <ChevronUp className="w-4 h-4 text-neutral-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-neutral-400" />
                            )}
                          </button>
                          
                          {openQuestion === `${categoryIndex}-${questionIndex}` && (
                            <div className="px-4 pb-4">
                              <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Live Chat Support */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary to-secondary text-white">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h4 className="text-xl font-bold mb-2">Need Instant Help?</h4>
                  <p className="text-blue-100 mb-4">
                    Chat with our expert counselors for personalized guidance on your study abroad journey.
                  </p>
                  <Button className="bg-white text-primary hover:bg-blue-50 w-full">
                    Start Live Chat
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="text-lg font-bold mb-4 text-neutral-800">Why Choose Our Services?</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-neutral-800">Expert Guidance</div>
                      <div className="text-sm text-neutral-600">200+ certified counselors with 15+ years experience</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-neutral-800">250+ University Partners</div>
                      <div className="text-sm text-neutral-600">Direct partnerships with top global institutions</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-neutral-800">95% Success Rate</div>
                      <div className="text-sm text-neutral-600">Proven track record of successful applications</div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="#1845B3 mr-3 mt-1">💡</div>
                  <div>
                    <div className="font-medium text-[#1565c0] mb-1">Pro Tip</div>
                    <div className="text-sm text-#1a73e8">
                      Start your planning 12-18 months in advance to secure the best scholarships and ensure smooth visa processing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}