import { motion } from "framer-motion";
import { useState } from "react";
import { FileText, Download, CheckCircle, AlertCircle, Globe, GraduationCap, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface DocumentItem {
  id: string;
  name: string;
  description: string;
  required: boolean;
  category: string;
  timeline: string;
  tips?: string;
}

const documentsByCountry: Record<string, DocumentItem[]> = {
  usa: [
    {
      id: "passport",
      name: "Valid Passport",
      description: "Passport valid for at least 6 months beyond intended stay",
      required: true,
      category: "Identity",
      timeline: "Apply 3-4 months before"
    },
    {
      id: "i20",
      name: "Form I-20",
      description: "Certificate of Eligibility for Nonimmigrant Student Status",
      required: true,
      category: "Academic",
      timeline: "Received after admission"
    },
    {
      id: "sevis",
      name: "SEVIS Fee Receipt",
      description: "Student and Exchange Visitor Information System fee payment",
      required: true,
      category: "Financial",
      timeline: "Pay before visa interview"
    },
    {
      id: "transcripts-usa",
      name: "Academic Transcripts",
      description: "Official transcripts from all previously attended institutions",
      required: true,
      category: "Academic",
      timeline: "Request 2-3 weeks before deadline"
    },
    {
      id: "financial-usa",
      name: "Financial Documentation",
      description: "Bank statements, sponsorship letters, or scholarship awards",
      required: true,
      category: "Financial",
      timeline: "Statements within 6 months"
    },
    {
      id: "toefl",
      name: "TOEFL/IELTS Scores",
      description: "English proficiency test scores",
      required: true,
      category: "Academic",
      timeline: "Valid for 2 years"
    },
    {
      id: "gre-usa",
      name: "GRE/GMAT Scores",
      description: "Graduate admission test scores (if required)",
      required: false,
      category: "Academic",
      timeline: "Valid for 5 years"
    }
  ],
  uk: [
    {
      id: "passport-uk",
      name: "Valid Passport",
      description: "Passport valid for entire duration of stay",
      required: true,
      category: "Identity",
      timeline: "Apply 3-4 months before"
    },
    {
      id: "cas",
      name: "CAS Letter",
      description: "Confirmation of Acceptance for Studies from university",
      required: true,
      category: "Academic",
      timeline: "Received after admission"
    },
    {
      id: "financial-uk",
      name: "Financial Evidence",
      description: "Bank statements showing required funds for tuition and living",
      required: true,
      category: "Financial",
      timeline: "28 consecutive days ending within 31 days of application"
    },
    {
      id: "ielts-uk",
      name: "IELTS Academic",
      description: "Secure English Language Test approved by UKVI",
      required: true,
      category: "Academic",
      timeline: "Valid for 2 years"
    },
    {
      id: "tb-test",
      name: "TB Test Certificate",
      description: "Tuberculosis test from approved clinic (if from certain countries)",
      required: false,
      category: "Health",
      timeline: "Valid for 6 months"
    },
    {
      id: "transcripts-uk",
      name: "Academic Qualifications",
      description: "Degree certificates and transcripts",
      required: true,
      category: "Academic",
      timeline: "Official copies required"
    }
  ],
  canada: [
    {
      id: "passport-ca",
      name: "Valid Passport",
      description: "Passport valid for duration of intended stay",
      required: true,
      category: "Identity",
      timeline: "Apply 3-4 months before"
    },
    {
      id: "loa-ca",
      name: "Letter of Acceptance",
      description: "Official acceptance letter from designated learning institution",
      required: true,
      category: "Academic",
      timeline: "Received after admission"
    },
    {
      id: "financial-ca",
      name: "Proof of Financial Support",
      description: "Bank statements, GIC, or sponsorship documentation",
      required: true,
      category: "Financial",
      timeline: "Recent statements required"
    },
    {
      id: "language-ca",
      name: "Language Test Results",
      description: "IELTS, TOEFL, or other approved English/French test",
      required: true,
      category: "Academic",
      timeline: "Valid for 2 years"
    },
    {
      id: "medical-ca",
      name: "Medical Exam",
      description: "Medical examination by panel physician (if required)",
      required: false,
      category: "Health",
      timeline: "Valid for 12 months"
    },
    {
      id: "police-ca",
      name: "Police Clearance",
      description: "Police certificates from countries lived in for 6+ months",
      required: false,
      category: "Background",
      timeline: "Valid for 12 months"
    }
  ],
  australia: [
    {
      id: "passport-au",
      name: "Valid Passport",
      description: "Passport valid for entire course duration",
      required: true,
      category: "Identity",
      timeline: "Apply 3-4 months before"
    },
    {
      id: "coe-au",
      name: "CoE (Confirmation of Enrolment)",
      description: "Electronic Confirmation of Enrolment from institution",
      required: true,
      category: "Academic",
      timeline: "Received after admission and payment"
    },
    {
      id: "oshc",
      name: "OSHC Coverage",
      description: "Overseas Student Health Cover for entire stay",
      required: true,
      category: "Health",
      timeline: "Purchase before visa application"
    },
    {
      id: "financial-au",
      name: "Financial Capacity Evidence",
      description: "Bank statements or financial guarantee showing required funds",
      required: true,
      category: "Financial",
      timeline: "Recent statements within 3 months"
    },
    {
      id: "english-au",
      name: "English Language Proficiency",
      description: "IELTS, TOEFL, or PTE Academic scores",
      required: true,
      category: "Academic",
      timeline: "Valid for 2 years"
    },
    {
      id: "health-au",
      name: "Health Examination",
      description: "Medical examination by approved doctor",
      required: false,
      category: "Health",
      timeline: "Valid for 12 months"
    }
  ]
};

const studyLevels = [
  { value: "undergraduate", label: "Undergraduate (Bachelor's)" },
  { value: "postgraduate", label: "Postgraduate (Master's)" },
  { value: "doctorate", label: "Doctorate (PhD)" },
  { value: "diploma", label: "Diploma/Certificate" },
  { value: "foundation", label: "Foundation/Pathway" }
];

const countries = [
  { value: "usa", label: "United States", flag: "🇺🇸" },
  { value: "uk", label: "United Kingdom", flag: "🇬🇧" },
  { value: "canada", label: "Canada", flag: "🇨🇦" },
  { value: "australia", label: "Australia", flag: "🇦🇺" }
];

export default function DocumentChecklistGenerator() {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [completedDocuments, setCompletedDocuments] = useState<Set<string>>(new Set());
  const [showChecklist, setShowChecklist] = useState(false);

  const handleGenerateChecklist = () => {
    if (selectedCountry && selectedLevel) {
      setShowChecklist(true);
      setCompletedDocuments(new Set());
    }
  };

  const toggleDocument = (documentId: string) => {
    const newCompleted = new Set(completedDocuments);
    if (newCompleted.has(documentId)) {
      newCompleted.delete(documentId);
    } else {
      newCompleted.add(documentId);
    }
    setCompletedDocuments(newCompleted);
  };

  const getDocuments = () => {
    return documentsByCountry[selectedCountry] || [];
  };

  const getCompletionStats = () => {
    const documents = getDocuments();
    const required = documents.filter(doc => doc.required);
    const completedRequired = required.filter(doc => completedDocuments.has(doc.id));
    return {
      total: documents.length,
      required: required.length,
      completed: completedDocuments.size,
      completedRequired: completedRequired.length
    };
  };

  const stats = getCompletionStats();
  const progress = stats.required > 0 ? (stats.completedRequired / stats.required) * 100 : 0;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-3 mb-6">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Smart Document Planning</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Document Checklist{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Generator
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Generate a personalized document checklist for your study abroad application. 
            Stay organized and never miss a crucial document again.
          </p>
        </motion.div>

        {/* Generator Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                <User className="w-6 h-6 mr-3 text-blue-600" />
                Customize Your Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Country Selection */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    <Globe className="w-4 h-4 inline mr-2" />
                    Destination Country
                  </label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="h-12 text-lg">
                      <SelectValue placeholder="Select your destination country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{country.flag}</span>
                            <span>{country.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Study Level Selection */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    Study Level
                  </label>
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger className="h-12 text-lg">
                      <SelectValue placeholder="Select your study level" />
                    </SelectTrigger>
                    <SelectContent>
                      {studyLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="text-center">
                <Button
                  onClick={handleGenerateChecklist}
                  disabled={!selectedCountry || !selectedLevel}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-xl disabled:opacity-50"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Generate My Checklist
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Generated Checklist */}
        {showChecklist && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Progress Summary */}
            <Card className="mb-8 shadow-xl border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Your {countries.find(c => c.value === selectedCountry)?.label} Checklist
                    </h3>
                    <p className="text-blue-100">
                      {studyLevels.find(l => l.value === selectedLevel)?.label} Application
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{Math.round(progress)}%</div>
                    <div className="text-blue-100">Required Complete</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{stats.completedRequired}/{stats.required}</div>
                    <div className="text-blue-100">Required Documents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{stats.completed}/{stats.total}</div>
                    <div className="text-blue-100">Total Progress</div>
                  </div>
                  <div className="text-center">
                    <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Document Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {['Identity', 'Academic', 'Financial', 'Health', 'Background'].map((category) => {
                const categoryDocs = getDocuments().filter(doc => doc.category === category);
                if (categoryDocs.length === 0) return null;

                return (
                  <Card key={category} className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        {category === 'Identity' && <User className="w-5 h-5 mr-2 text-blue-600" />}
                        {category === 'Academic' && <GraduationCap className="w-5 h-5 mr-2 text-green-600" />}
                        {category === 'Financial' && <Calendar className="w-5 h-5 mr-2 text-yellow-600" />}
                        {category === 'Health' && <AlertCircle className="w-5 h-5 mr-2 text-red-600" />}
                        {category === 'Background' && <FileText className="w-5 h-5 mr-2 text-purple-600" />}
                        {category} Documents
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {categoryDocs.map((document) => (
                          <motion.div
                            key={document.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                              completedDocuments.has(document.id)
                                ? 'border-green-200 bg-green-50'
                                : document.required
                                ? 'border-red-200 bg-red-50'
                                : 'border-gray-200 bg-gray-50'
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <Checkbox
                                checked={completedDocuments.has(document.id)}
                                onCheckedChange={() => toggleDocument(document.id)}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <h4 className="font-bold text-gray-800">{document.name}</h4>
                                  {document.required ? (
                                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                      Required
                                    </span>
                                  ) : (
                                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                                      Optional
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-600 text-sm mb-2">{document.description}</p>
                                <div className="flex items-center text-xs text-gray-500">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {document.timeline}
                                </div>
                                {document.tips && (
                                  <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-blue-700">
                                    <strong>Tip:</strong> {document.tips}
                                  </div>
                                )}
                              </div>
                              {completedDocuments.has(document.id) && (
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Card className="shadow-xl border-0 bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Need Help with Your Documents?</h3>
                  <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                    Our expert counselors can help you prepare, review, and organize all your documents 
                    to ensure a successful application.
                  </p>
                  <Button className="bg-white text-green-600 hover:bg-green-50 font-bold px-8 py-3 rounded-xl shadow-xl">
                    Get Document Assistance
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}