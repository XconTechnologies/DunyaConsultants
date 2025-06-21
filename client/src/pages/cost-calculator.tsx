import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calculator,
  DollarSign,
  GraduationCap,
  MapPin,
  Plane,
  Shield,
  FileText,
  Heart,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  TrendingUp,
  BookOpen,
  Users,
  Globe
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface CountryData {
  currency: string;
  tuitionRange: [number, number];
  livingExpenses: [number, number];
  visaFee: number;
  cities: Record<string, { livingCost: number; rent: number }>;
  averageIncome: number;
  workHours: number;
  healthInsurance: number;
  flightCost: number;
}

const countryData: Record<string, CountryData> = {
  "United States": {
    currency: "USD",
    tuitionRange: [25000, 60000],
    livingExpenses: [15000, 25000],
    visaFee: 350,
    cities: {
      "New York": { livingCost: 28000, rent: 24000 },
      "Los Angeles": { livingCost: 25000, rent: 22000 },
      "Chicago": { livingCost: 20000, rent: 18000 },
      "Boston": { livingCost: 23000, rent: 20000 }
    },
    averageIncome: 15,
    workHours: 20,
    healthInsurance: 2500,
    flightCost: 1200
  },
  "United Kingdom": {
    currency: "GBP",
    tuitionRange: [15000, 35000],
    livingExpenses: [12000, 18000],
    visaFee: 363,
    cities: {
      "London": { livingCost: 20000, rent: 15000 },
      "Manchester": { livingCost: 15000, rent: 10000 },
      "Birmingham": { livingCost: 14000, rent: 9000 },
      "Edinburgh": { livingCost: 16000, rent: 11000 }
    },
    averageIncome: 12,
    workHours: 20,
    healthInsurance: 0,
    flightCost: 800
  },
  "Canada": {
    currency: "CAD",
    tuitionRange: [20000, 45000],
    livingExpenses: [12000, 20000],
    visaFee: 150,
    cities: {
      "Toronto": { livingCost: 18000, rent: 15000 },
      "Vancouver": { livingCost: 17000, rent: 14000 },
      "Montreal": { livingCost: 14000, rent: 10000 },
      "Calgary": { livingCost: 15000, rent: 12000 }
    },
    averageIncome: 14,
    workHours: 20,
    healthInsurance: 800,
    flightCost: 1000
  },
  "Australia": {
    currency: "AUD",
    tuitionRange: [25000, 50000],
    livingExpenses: [18000, 25000],
    visaFee: 620,
    cities: {
      "Sydney": { livingCost: 25000, rent: 18000 },
      "Melbourne": { livingCost: 22000, rent: 16000 },
      "Brisbane": { livingCost: 20000, rent: 14000 },
      "Perth": { livingCost: 19000, rent: 13000 }
    },
    averageIncome: 18,
    workHours: 20,
    healthInsurance: 600,
    flightCost: 1400
  },
  "Germany": {
    currency: "EUR",
    tuitionRange: [0, 20000],
    livingExpenses: [10000, 15000],
    visaFee: 75,
    cities: {
      "Berlin": { livingCost: 12000, rent: 8000 },
      "Munich": { livingCost: 15000, rent: 12000 },
      "Hamburg": { livingCost: 13000, rent: 9000 },
      "Frankfurt": { livingCost: 14000, rent: 11000 }
    },
    averageIncome: 12,
    workHours: 20,
    healthInsurance: 1200,
    flightCost: 700
  }
};

const faqData = [
  {
    category: "Tuition & Fees",
    questions: [
      {
        q: "What's included in tuition fees?",
        a: "Tuition fees typically include academic instruction, access to university facilities, student services, and some administrative costs. Additional fees may apply for specialized programs, lab usage, or student activities."
      },
      {
        q: "Are there scholarships available?",
        a: "Yes, many universities offer merit-based and need-based scholarships. We help identify and apply for scholarships that can reduce your overall costs by 20-70%."
      }
    ]
  },
  {
    category: "Living Expenses",
    questions: [
      {
        q: "How much should I budget for accommodation?",
        a: "Accommodation typically costs 40-60% of your living expenses. On-campus housing ranges from $8,000-$15,000 annually, while off-campus options vary by city and sharing arrangements."
      },
      {
        q: "Can I work while studying?",
        a: "Most countries allow international students to work part-time (15-20 hours/week) during studies and full-time during breaks. This can help offset living costs."
      }
    ]
  },
  {
    category: "Visa & Immigration",
    questions: [
      {
        q: "What documents do I need for visa application?",
        a: "Required documents include admission letter, proof of funds, academic transcripts, English proficiency scores, passport, and health insurance. Requirements vary by country."
      },
      {
        q: "How long does visa processing take?",
        a: "Visa processing times vary: US (2-12 weeks), UK (3-6 weeks), Canada (4-12 weeks), Australia (4-8 weeks). Apply early to avoid delays."
      }
    ]
  }
];

export default function CostCalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [studyLevel, setStudyLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [tuitionFee, setTuitionFee] = useState<number[]>([30000]);
  const [livingExpenses, setLivingExpenses] = useState<number[]>([15000]);
  const [includeInsurance, setIncludeInsurance] = useState(false);
  const [includeFlight, setIncludeFlight] = useState(false);
  const [includeIelts, setIncludeIelts] = useState(false);
  const [customFlight, setCustomFlight] = useState("");
  const [openFaqCategory, setOpenFaqCategory] = useState(-1);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const resetCalculator = () => {
    setSelectedCountry("");
    setSelectedCity("");
    setStudyLevel("");
    setDuration("");
    setTuitionFee([30000]);
    setLivingExpenses([15000]);
    setIncludeInsurance(false);
    setIncludeFlight(false);
    setIncludeIelts(false);
    setCustomFlight("");
  };

  const calculateTotal = () => {
    if (!selectedCountry || !duration) return 0;
    
    const data = countryData[selectedCountry];
    let total = 0;
    
    // Base costs
    total += tuitionFee[0] * parseInt(duration);
    total += livingExpenses[0] * parseInt(duration);
    total += data.visaFee;
    
    // Additional costs
    if (includeIelts) total += 250; // USD equivalent
    if (includeFlight) total += parseInt(customFlight) || data.flightCost;
    if (includeInsurance) total += data.healthInsurance * parseInt(duration);
    
    return total;
  };

  const getWorkEarnings = () => {
    if (!selectedCountry || !duration) return 0;
    const data = countryData[selectedCountry];
    return data.averageIncome * data.workHours * 52 * parseInt(duration); // 52 weeks per year
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-700 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Calculator className="w-5 h-5" />
              <span className="text-sm font-medium">Smart Planning Tool</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Study Abroad<br />
              <span className="text-yellow-300">Cost Calculator</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Plan your international education budget with precision. Get accurate estimates for tuition, 
              living expenses, and additional costs across top study destinations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">250+</div>
                <div className="text-sm text-blue-100">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">95%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">50+</div>
                <div className="text-sm text-blue-100">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">24/7</div>
                <div className="text-sm text-blue-100">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              Calculate Your Study Costs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Get a comprehensive breakdown of all expenses including tuition, accommodation, 
              living costs, and additional fees for your chosen destination.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 shadow-xl">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-2xl">
                    <Calculator className="w-6 h-6 mr-3 text-primary" />
                    Cost Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Country & City Selection */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Study Destination</Label>
                      <Select value={selectedCountry} onValueChange={(value) => {
                        setSelectedCountry(value);
                        setSelectedCity("");
                        if (value && countryData[value]) {
                          setTuitionFee([countryData[value].tuitionRange[0]]);
                          setLivingExpenses([countryData[value].livingExpenses[0]]);
                        }
                      }}>
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
                  </div>

                  {/* Study Level & Duration */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Study Level</Label>
                      <Select value={studyLevel} onValueChange={setStudyLevel}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select study level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="undergraduate">Undergraduate (Bachelor's)</SelectItem>
                          <SelectItem value="postgraduate">Postgraduate (Master's)</SelectItem>
                          <SelectItem value="phd">PhD / Doctoral</SelectItem>
                          <SelectItem value="diploma">Diploma / Certificate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

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
                          <SelectItem value="5">5 Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

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
                        <div className="flex justify-between text-sm text-neutral-500 mt-2">
                          <span>{countryData[selectedCountry].tuitionRange[0].toLocaleString()}</span>
                          <span className="font-medium text-primary">{tuitionFee[0].toLocaleString()}</span>
                          <span>{countryData[selectedCountry].tuitionRange[1].toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Living Expenses Slider */}
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
                        <div className="flex justify-between text-sm text-neutral-500 mt-2">
                          <span>{countryData[selectedCountry].livingExpenses[0].toLocaleString()}</span>
                          <span className="font-medium text-primary">{livingExpenses[0].toLocaleString()}</span>
                          <span>{countryData[selectedCountry].livingExpenses[1].toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Additional Costs */}
                  <div className="space-y-4">
                    <Label className="text-sm font-medium">Additional Expenses</Label>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Checkbox
                          id="ielts"
                          checked={includeIelts}
                          onCheckedChange={setIncludeIelts}
                        />
                        <div className="flex-1">
                          <Label htmlFor="ielts" className="text-sm font-medium">IELTS Test</Label>
                          <div className="text-xs text-neutral-500">$250 USD</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Checkbox
                          id="flight"
                          checked={includeFlight}
                          onCheckedChange={setIncludeFlight}
                        />
                        <div className="flex-1">
                          <Label htmlFor="flight" className="text-sm font-medium">Flight Tickets</Label>
                          <div className="text-xs text-neutral-500">
                            {selectedCountry ? `$${countryData[selectedCountry].flightCost}` : "$800"} USD
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Checkbox
                          id="insurance"
                          checked={includeInsurance}
                          onCheckedChange={setIncludeInsurance}
                        />
                        <div className="flex-1">
                          <Label htmlFor="insurance" className="text-sm font-medium">Health Insurance</Label>
                          <div className="text-xs text-neutral-500">
                            {selectedCountry ? `${countryData[selectedCountry].healthInsurance} ${countryData[selectedCountry].currency}/year` : "Varies"}
                          </div>
                        </div>
                      </div>

                      {includeFlight && (
                        <div className="p-3 border rounded-lg">
                          <Label className="text-sm font-medium mb-2 block">Custom Flight Cost (USD)</Label>
                          <Input
                            type="number"
                            placeholder={selectedCountry ? `${countryData[selectedCountry].flightCost}` : "800"}
                            value={customFlight}
                            onChange={(e) => setCustomFlight(e.target.value)}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-6">
                    <Button onClick={resetCalculator} variant="outline" className="flex-1">
                      Reset Calculator
                    </Button>
                    <Button className="flex-1 bg-primary hover:bg-primary/90">
                      Get Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cost Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-6 shadow-xl sticky top-8">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl">
                    <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                    Cost Breakdown
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  {selectedCountry && duration ? (
                    <div className="space-y-6">
                      {/* Total Cost */}
                      <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-white text-center">
                        <div className="text-sm opacity-90 mb-2">Total Estimated Cost</div>
                        <div className="text-3xl font-bold mb-2">
                          {calculateTotal().toLocaleString()}
                        </div>
                        <div className="text-sm opacity-90">
                          {countryData[selectedCountry].currency} for {duration} year(s)
                        </div>
                      </div>

                      {/* Earnings Potential */}
                      {getWorkEarnings() > 0 && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center text-green-800 mb-2">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            <span className="font-medium">Potential Earnings</span>
                          </div>
                          <div className="text-2xl font-bold text-green-700">
                            {getWorkEarnings().toLocaleString()} {countryData[selectedCountry].currency}
                          </div>
                          <div className="text-sm text-green-600">
                            Part-time work ({countryData[selectedCountry].workHours}h/week @ {countryData[selectedCountry].averageIncome}/hour)
                          </div>
                        </div>
                      )}

                      {/* Detailed Breakdown */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center">
                            <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                            <span className="text-sm">Tuition Fees</span>
                          </div>
                          <span className="font-medium">
                            {(tuitionFee[0] * parseInt(duration)).toLocaleString()}
                          </span>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-2 text-orange-600" />
                            <span className="text-sm">Living Expenses</span>
                          </div>
                          <span className="font-medium">
                            {(livingExpenses[0] * parseInt(duration)).toLocaleString()}
                          </span>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                          <div className="flex items-center">
                            <FileText className="w-4 h-4 mr-2 text-purple-600" />
                            <span className="text-sm">Visa Fee</span>
                          </div>
                          <span className="font-medium">
                            {countryData[selectedCountry].visaFee}
                          </span>
                        </div>

                        {(includeIelts || includeFlight || includeInsurance) && (
                          <div className="border-t pt-3">
                            <div className="text-sm font-medium text-neutral-700 mb-2">Additional Costs:</div>
                            
                            {includeIelts && (
                              <div className="flex justify-between text-sm p-2 bg-gray-50 rounded mb-1">
                                <span>IELTS Test</span>
                                <span>$250 USD</span>
                              </div>
                            )}
                            
                            {includeFlight && (
                              <div className="flex justify-between text-sm p-2 bg-gray-50 rounded mb-1">
                                <span>Flight Tickets</span>
                                <span>
                                  ${customFlight || countryData[selectedCountry].flightCost} USD
                                </span>
                              </div>
                            )}
                            
                            {includeInsurance && (
                              <div className="flex justify-between text-sm p-2 bg-gray-50 rounded">
                                <span>Health Insurance</span>
                                <span>
                                  {countryData[selectedCountry].healthInsurance * parseInt(duration)}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3 pt-4">
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          Schedule Free Consultation
                        </Button>
                        <Button variant="outline" className="w-full">
                          Download Cost Report
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Calculator className="w-16 h-16 mx-auto text-neutral-300 mb-4" />
                      <p className="text-neutral-500 text-sm">
                        Select a country and duration to see your personalized cost breakdown
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Country Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              Compare Study Destinations
            </h2>
            <p className="text-xl text-neutral-600">
              Quick comparison of popular study destinations
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                  <th className="p-4 text-left">Country</th>
                  <th className="p-4 text-center">Tuition Range</th>
                  <th className="p-4 text-center">Living Costs</th>
                  <th className="p-4 text-center">Work Rights</th>
                  <th className="p-4 text-center">Post-Study Work</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(countryData).map(([country, data], index) => (
                  <tr key={country} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-medium">{country}</td>
                    <td className="p-4 text-center">
                      {data.tuitionRange[0].toLocaleString()} - {data.tuitionRange[1].toLocaleString()} {data.currency}
                    </td>
                    <td className="p-4 text-center">
                      {data.livingExpenses[0].toLocaleString()} - {data.livingExpenses[1].toLocaleString()} {data.currency}
                    </td>
                    <td className="p-4 text-center">
                      <Badge variant="secondary">{data.workHours}h/week</Badge>
                    </td>
                    <td className="p-4 text-center">
                      <Badge variant="outline">Available</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600">
              Get answers to common questions about study abroad costs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="border border-gray-200 rounded-lg bg-white">
                  <button
                    onClick={() => setOpenFaqCategory(openFaqCategory === categoryIndex ? -1 : categoryIndex)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-neutral-800 text-lg">{category.category}</span>
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

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary to-secondary text-white">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h4 className="text-xl font-bold mb-2">Need Expert Help?</h4>
                  <p className="text-blue-100 mb-4">
                    Get personalized guidance from our education consultants
                  </p>
                  <Button className="bg-white text-primary hover:bg-blue-50 w-full">
                    Book Free Consultation
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="text-lg font-bold mb-4 text-neutral-800">Why Choose Path Consultants?</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-neutral-800">200+ Expert Counselors</div>
                      <div className="text-sm text-neutral-600">Certified professionals with 15+ years experience</div>
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our experts help you turn your study abroad dreams into reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}