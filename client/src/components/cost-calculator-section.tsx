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
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cost Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center text-2xl">
                  <Calculator className="w-6 h-6 mr-3 text-primary" />
                  Cost Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Country Selection */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Destination Country</Label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(countryData).map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Study Level */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Study Level</Label>
                  <Select value={studyLevel} onValueChange={setStudyLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select study level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="undergraduate">Undergraduate</SelectItem>
                      <SelectItem value="postgraduate">Postgraduate</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Duration */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Course Duration</Label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Year</SelectItem>
                      <SelectItem value="2">2 Years</SelectItem>
                      <SelectItem value="3">3 Years</SelectItem>
                      <SelectItem value="4">4 Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* City Selection */}
                {selectedCountry && (
                  <div>
                    <Label className="text-sm font-medium mb-2 block">City (Optional)</Label>
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a city" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(countryData[selectedCountry].cities).map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Tuition Fee Slider */}
                {selectedCountry && (
                  <div>
                    <Label className="text-sm font-medium mb-2 block">
                      Annual Tuition Fee ({countryData[selectedCountry].currency})
                    </Label>
                    <div className="px-3">
                      <Slider
                        value={tuitionFee}
                        onValueChange={setTuitionFee}
                        max={countryData[selectedCountry].tuitionRange[1]}
                        min={countryData[selectedCountry].tuitionRange[0]}
                        step={1000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-neutral-500 mt-1">
                        <span>{countryData[selectedCountry].tuitionRange[0].toLocaleString()}</span>
                        <span className="font-medium">{tuitionFee[0].toLocaleString()}</span>
                        <span>{countryData[selectedCountry].tuitionRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Living Expenses */}
                {selectedCountry && (
                  <div>
                    <Label className="text-sm font-medium mb-2 block">
                      Annual Living Expenses ({countryData[selectedCountry].currency})
                    </Label>
                    <div className="px-3">
                      <Slider
                        value={livingExpenses}
                        onValueChange={setLivingExpenses}
                        max={countryData[selectedCountry].livingExpenses[1]}
                        min={countryData[selectedCountry].livingExpenses[0]}
                        step={500}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-neutral-500 mt-1">
                        <span>{countryData[selectedCountry].livingExpenses[0].toLocaleString()}</span>
                        <span className="font-medium">{livingExpenses[0].toLocaleString()}</span>
                        <span>{countryData[selectedCountry].livingExpenses[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Additional Costs */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Additional Costs</Label>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ielts"
                      checked={includeIelts}
                      onCheckedChange={setIncludeIelts}
                    />
                    <Label htmlFor="ielts" className="text-sm">
                      IELTS Test ($250 USD)
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="toefl"
                      checked={includeToefl}
                      onCheckedChange={setIncludeToefl}
                    />
                    <Label htmlFor="toefl" className="text-sm">
                      TOEFL Test ($185 USD)
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="flight"
                      checked={includeFlight}
                      onCheckedChange={setIncludeFlight}
                    />
                    <Label htmlFor="flight" className="text-sm">
                      Round-trip Flight
                    </Label>
                    {includeFlight && (
                      <Input
                        type="number"
                        placeholder={selectedCountry ? `${additionalCosts.flight[selectedCountry]}` : "800"}
                        value={customFlight}
                        onChange={(e) => setCustomFlight(e.target.value)}
                        className="w-24 h-8 ml-2"
                      />
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="insurance"
                      checked={includeInsurance}
                      onCheckedChange={setIncludeInsurance}
                    />
                    <Label htmlFor="insurance" className="text-sm">
                      Health Insurance (Annual)
                    </Label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button onClick={resetCalculator} variant="outline" className="flex-1">
                    Reset
                  </Button>
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    Get Detailed Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cost Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 h-fit">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center text-2xl">
                  <DollarSign className="w-6 h-6 mr-3 text-green-600" />
                  Cost Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedCountry && duration ? (
                  <div className="space-y-4">
                    {/* Total Cost */}
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-white">
                      <div className="text-center">
                        <div className="text-sm opacity-90">Total Estimated Cost</div>
                        <div className="text-3xl font-bold">
                          {calculateTotal().toLocaleString()} {countryData[selectedCountry].currency}
                        </div>
                        <div className="text-sm opacity-90">for {duration} year(s)</div>
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                          <span className="text-sm">Tuition Fees</span>
                        </div>
                        <span className="font-medium">
                          {(tuitionFee[0] * parseInt(duration)).toLocaleString()} {countryData[selectedCountry].currency}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-2 text-red-600" />
                          <span className="text-sm">Living Expenses</span>
                        </div>
                        <span className="font-medium">
                          {(livingExpenses[0] * parseInt(duration)).toLocaleString()} {countryData[selectedCountry].currency}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-green-600" />
                          <span className="text-sm">Visa Fee</span>
                        </div>
                        <span className="font-medium">
                          {countryData[selectedCountry].visaFee} {countryData[selectedCountry].currency}
                        </span>
                      </div>

                      {(includeIelts || includeToefl || includeFlight || includeInsurance) && (
                        <div className="pt-2 border-t">
                          <div className="text-sm font-medium text-neutral-700 mb-2">Additional Costs:</div>
                          
                          {includeIelts && (
                            <div className="flex justify-between text-sm p-2 bg-blue-50 rounded">
                              <span>IELTS Test</span>
                              <span>$250 USD</span>
                            </div>
                          )}
                          
                          {includeToefl && (
                            <div className="flex justify-between text-sm p-2 bg-blue-50 rounded">
                              <span>TOEFL Test</span>
                              <span>$185 USD</span>
                            </div>
                          )}
                          
                          {includeFlight && (
                            <div className="flex justify-between text-sm p-2 bg-blue-50 rounded">
                              <span>Flight Ticket</span>
                              <span>
                                ${customFlight || additionalCosts.flight[selectedCountry]} USD
                              </span>
                            </div>
                          )}
                          
                          {includeInsurance && (
                            <div className="flex justify-between text-sm p-2 bg-blue-50 rounded">
                              <span>Health Insurance</span>
                              <span>
                                {additionalCosts.insurance[selectedCountry] * parseInt(duration)} {countryData[selectedCountry].currency}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 space-y-3">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        Schedule Free Consultation
                      </Button>
                      <Button variant="outline" className="w-full">
                        Download Detailed Cost Report
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="w-16 h-16 mx-auto text-neutral-300 mb-4" />
                    <p className="text-neutral-500">
                      Select a country and duration to see cost breakdown
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

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

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="text-yellow-600 mr-3 mt-1">💡</div>
                  <div>
                    <div className="font-medium text-yellow-800 mb-1">Pro Tip</div>
                    <div className="text-sm text-yellow-700">
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