import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, MapPin, GraduationCap, Home, Plane, Heart, DollarSign, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

interface CostData {
  country: string;
  currency: string;
  tuitionRange: [number, number];
  livingExpenses: {
    shared: number;
    oncampus: number;
    private: number;
  };
  cities: {
    [key: string]: {
      livingCost: number;
      rentMultiplier: number;
    };
  };
  visaFee: number;
  healthInsurance: number;
  flightCost: number;
  workRights: string;
  prPathway: boolean;
}

const costDatabase: Record<string, CostData> = {
  canada: {
    country: "Canada",
    currency: "CAD",
    tuitionRange: [15000, 35000],
    livingExpenses: {
      shared: 12000,
      oncampus: 14000,
      private: 18000
    },
    cities: {
      toronto: { livingCost: 16000, rentMultiplier: 1.3 },
      vancouver: { livingCost: 15500, rentMultiplier: 1.25 },
      montreal: { livingCost: 13000, rentMultiplier: 1.0 },
      calgary: { livingCost: 12500, rentMultiplier: 0.9 },
      ottawa: { livingCost: 13500, rentMultiplier: 1.1 }
    },
    visaFee: 150,
    healthInsurance: 600,
    flightCost: 1200,
    workRights: "20 hours/week during studies, full-time during breaks",
    prPathway: true
  },
  uk: {
    country: "United Kingdom",
    currency: "GBP",
    tuitionRange: [12000, 28000],
    livingExpenses: {
      shared: 9000,
      oncampus: 11000,
      private: 13000
    },
    cities: {
      london: { livingCost: 14000, rentMultiplier: 1.4 },
      manchester: { livingCost: 10000, rentMultiplier: 1.0 },
      birmingham: { livingCost: 9500, rentMultiplier: 0.95 },
      glasgow: { livingCost: 8500, rentMultiplier: 0.85 },
      leeds: { livingCost: 9000, rentMultiplier: 0.9 }
    },
    visaFee: 363,
    healthInsurance: 470,
    flightCost: 1000,
    workRights: "20 hours/week during studies",
    prPathway: false
  },
  australia: {
    country: "Australia",
    currency: "AUD",
    tuitionRange: [20000, 45000],
    livingExpenses: {
      shared: 15000,
      oncampus: 17000,
      private: 21000
    },
    cities: {
      sydney: { livingCost: 22000, rentMultiplier: 1.3 },
      melbourne: { livingCost: 20000, rentMultiplier: 1.2 },
      brisbane: { livingCost: 18000, rentMultiplier: 1.0 },
      perth: { livingCost: 17000, rentMultiplier: 0.95 },
      adelaide: { livingCost: 16000, rentMultiplier: 0.9 }
    },
    visaFee: 620,
    healthInsurance: 548,
    flightCost: 1400,
    workRights: "20 hours/week during studies, full-time during breaks",
    prPathway: true
  },
  usa: {
    country: "United States",
    currency: "USD",
    tuitionRange: [25000, 55000],
    livingExpenses: {
      shared: 12000,
      oncampus: 15000,
      private: 20000
    },
    cities: {
      newyork: { livingCost: 25000, rentMultiplier: 1.5 },
      losangeles: { livingCost: 22000, rentMultiplier: 1.4 },
      chicago: { livingCost: 18000, rentMultiplier: 1.1 },
      boston: { livingCost: 20000, rentMultiplier: 1.3 },
      austin: { livingCost: 16000, rentMultiplier: 1.0 }
    },
    visaFee: 160,
    healthInsurance: 2000,
    flightCost: 1300,
    workRights: "On-campus work only (20 hours/week)",
    prPathway: false
  },
  germany: {
    country: "Germany",
    currency: "EUR",
    tuitionRange: [0, 20000],
    livingExpenses: {
      shared: 8000,
      oncampus: 9000,
      private: 11000
    },
    cities: {
      berlin: { livingCost: 10000, rentMultiplier: 1.1 },
      munich: { livingCost: 12000, rentMultiplier: 1.3 },
      hamburg: { livingCost: 10500, rentMultiplier: 1.15 },
      cologne: { livingCost: 9500, rentMultiplier: 1.0 },
      frankfurt: { livingCost: 11000, rentMultiplier: 1.2 }
    },
    visaFee: 75,
    healthInsurance: 1100,
    flightCost: 900,
    workRights: "120 full days or 240 half days per year",
    prPathway: true
  }
};

export default function CostCalculator() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [duration, setDuration] = useState("");
  const [livingStyle, setLivingStyle] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [customTuition, setCustomTuition] = useState("");
  const [results, setResults] = useState<any>(null);

  const calculateCosts = () => {
    if (!selectedCountry || !duration || !livingStyle) return;

    const countryData = costDatabase[selectedCountry];
    const durationYears = parseFloat(duration);
    
    // Calculate tuition
    const avgTuition = customTuition 
      ? parseFloat(customTuition) 
      : (countryData.tuitionRange[0] + countryData.tuitionRange[1]) / 2;
    const totalTuition = avgTuition * durationYears;

    // Calculate living expenses
    let baseLiving = countryData.livingExpenses[livingStyle as keyof typeof countryData.livingExpenses];
    if (selectedCity && countryData.cities[selectedCity]) {
      baseLiving = countryData.cities[selectedCity].livingCost;
    }
    const totalLiving = baseLiving * durationYears;

    // Other costs
    const visaFee = countryData.visaFee;
    const healthInsurance = countryData.healthInsurance * durationYears;
    const flightCost = countryData.flightCost;

    const totalCost = totalTuition + totalLiving + visaFee + healthInsurance + flightCost;

    setResults({
      country: countryData.country,
      currency: countryData.currency,
      tuition: totalTuition,
      living: totalLiving,
      visa: visaFee,
      insurance: healthInsurance,
      flight: flightCost,
      total: totalCost,
      workRights: countryData.workRights,
      prPathway: countryData.prPathway,
      duration: durationYears
    });
  };

  useEffect(() => {
    if (selectedCountry && duration && livingStyle) {
      calculateCosts();
    }
  }, [selectedCountry, duration, livingStyle, selectedCity, customTuition]);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50">
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
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <Calculator className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Live Cost Calculator
              </span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Get accurate cost estimates for studying abroad. Calculate tuition, living expenses, 
              visa fees, and more for your dream destination.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span>Calculate Your Study Costs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Country Selection */}
                  <div>
                    <Label htmlFor="country" className="text-sm font-medium">
                      Select Country
                    </Label>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose your destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="canada">🇨🇦 Canada</SelectItem>
                        <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                        <SelectItem value="australia">🇦🇺 Australia</SelectItem>
                        <SelectItem value="usa">🇺🇸 United States</SelectItem>
                        <SelectItem value="germany">🇩🇪 Germany</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* City Selection */}
                  {selectedCountry && (
                    <div>
                      <Label htmlFor="city" className="text-sm font-medium">
                        Select City (Optional)
                      </Label>
                      <Select value={selectedCity} onValueChange={setSelectedCity}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Choose a city for accurate costs" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(costDatabase[selectedCountry].cities).map((city) => (
                            <SelectItem key={city} value={city}>
                              <MapPin className="w-4 h-4 inline mr-2" />
                              {city.charAt(0).toUpperCase() + city.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Duration */}
                  <div>
                    <Label htmlFor="duration" className="text-sm font-medium">
                      Course Duration
                    </Label>
                    <Select value={duration} onValueChange={setDuration}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0.5">6 months</SelectItem>
                        <SelectItem value="1">1 year</SelectItem>
                        <SelectItem value="1.5">1.5 years</SelectItem>
                        <SelectItem value="2">2 years</SelectItem>
                        <SelectItem value="3">3 years</SelectItem>
                        <SelectItem value="4">4 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Living Style */}
                  <div>
                    <Label htmlFor="living" className="text-sm font-medium">
                      Living Arrangement
                    </Label>
                    <Select value={livingStyle} onValueChange={setLivingStyle}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select living style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="shared">
                          <Home className="w-4 h-4 inline mr-2" />
                          Shared Apartment
                        </SelectItem>
                        <SelectItem value="oncampus">
                          <GraduationCap className="w-4 h-4 inline mr-2" />
                          On-Campus Housing
                        </SelectItem>
                        <SelectItem value="private">
                          <Home className="w-4 h-4 inline mr-2" />
                          Private Apartment
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Custom Tuition */}
                  <div>
                    <Label htmlFor="tuition" className="text-sm font-medium">
                      Custom Tuition Fee (Optional)
                    </Label>
                    <Input
                      type="number"
                      placeholder="Enter if you know exact amount"
                      value={customTuition}
                      onChange={(e) => setCustomTuition(e.target.value)}
                      className="mt-2"
                    />
                    {selectedCountry && (
                      <p className="text-xs text-neutral-500 mt-1">
                        Average range: {formatCurrency(costDatabase[selectedCountry].tuitionRange[0], costDatabase[selectedCountry].currency)} - {formatCurrency(costDatabase[selectedCountry].tuitionRange[1], costDatabase[selectedCountry].currency)} per year
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {results ? (
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 #1845B3" />
                      <span>Cost Breakdown - {results.country}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Cost Items */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Tuition Fees ({results.duration} years)</span>
                          <span className="font-bold #1845B3">
                            {formatCurrency(results.tuition, results.currency)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Living Expenses</span>
                          <span className="font-bold #1845B3">
                            {formatCurrency(results.living, results.currency)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Visa Fee</span>
                          <span className="font-bold #1845B3">
                            {formatCurrency(results.visa, results.currency)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Health Insurance</span>
                          <span className="font-bold #1845B3">
                            {formatCurrency(results.insurance, results.currency)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Flight Cost</span>
                          <span className="font-bold #1845B3">
                            {formatCurrency(results.flight, results.currency)}
                          </span>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white">
                          <span className="text-lg font-bold">Total Cost</span>
                          <span className="text-2xl font-bold">
                            {formatCurrency(results.total, results.currency)}
                          </span>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="space-y-3 pt-4">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <Info className="w-5 h-5 #1845B3 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium text-[#1565c0]">Work Rights</p>
                              <p className="text-sm text-#1a73e8">{results.workRights}</p>
                            </div>
                          </div>
                        </div>
                        {results.prPathway && (
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-start space-x-2">
                              <Heart className="w-5 h-5 #1845B3 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-medium text-[#1565c0]">PR Pathway Available</p>
                                <p className="text-sm text-#1a73e8">This country offers pathways to permanent residency for international students.</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                          Book Free Consultation
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-xl border-0">
                  <CardContent className="flex flex-col items-center justify-center h-96 text-center">
                    <Calculator className="w-16 h-16 text-neutral-300 mb-4" />
                    <h3 className="text-lg font-medium text-neutral-600 mb-2">
                      Ready to Calculate?
                    </h3>
                    <p className="text-neutral-500">
                      Fill in the form to see your personalized cost breakdown
                    </p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}