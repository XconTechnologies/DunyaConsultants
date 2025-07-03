import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle, GraduationCap, CreditCard, Plane, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const faqCategories = [
  { id: "admission", label: "Admission", icon: GraduationCap, color: "blue" },
  { id: "visa", label: "Visa", icon: FileText, color: "green" },
  { id: "finances", label: "Finances", icon: CreditCard, color: "purple" },
  { id: "travel", label: "Travel", icon: Plane, color: "orange" },
];

const faqData = [
  {
    category: "admission",
    question: "What are the minimum requirements for admission to international universities?",
    answer: "The minimum requirements vary by country and university, but generally include: a completed bachelor's degree (for master's programs), English proficiency test scores (IELTS/TOEFL), academic transcripts, statement of purpose, letters of recommendation, and sometimes work experience. We help you understand specific requirements for your chosen universities."
  },
  {
    category: "admission",
    question: "How long does the university application process take?",
    answer: "The application process typically takes 3-6 months from start to finish. This includes university research, application preparation, document submission, and waiting for admission decisions. We recommend starting at least 6-8 months before your intended start date."
  },
  {
    category: "admission",
    question: "Can I apply to multiple universities at the same time?",
    answer: "Yes, we strongly recommend applying to multiple universities (typically 5-8) to increase your chances of admission. This includes a mix of reach schools, target schools, and safety schools based on your profile."
  },
  {
    category: "visa",
    question: "How long does the student visa process take?",
    answer: "Student visa processing times vary by country: UK (3-6 weeks), Canada (4-12 weeks), Australia (4-8 weeks), USA (2-8 weeks). We recommend applying for your visa as soon as you receive your university acceptance letter."
  },
  {
    category: "visa",
    question: "What documents are required for a student visa application?",
    answer: "Common documents include: valid passport, university acceptance letter, financial proof, academic transcripts, English proficiency scores, medical examination results, and visa application forms. Specific requirements vary by country and we provide detailed checklists."
  },
  {
    category: "visa",
    question: "What if my visa application is rejected?",
    answer: "If your visa is rejected, we analyze the rejection reasons and help you prepare a stronger reapplication. This may involve addressing specific concerns, providing additional documentation, or improving your profile before reapplying."
  },
  {
    category: "finances",
    question: "How much does it cost to study abroad?",
    answer: "Costs vary significantly by country and program. Annual expenses typically range from $20,000-$60,000 including tuition and living costs. We provide detailed cost breakdowns and help you explore scholarship opportunities and financial planning options."
  },
  {
    category: "finances",
    question: "Are scholarships available for international students?",
    answer: "Yes, many universities and governments offer scholarships for international students. These can be merit-based, need-based, or specific to your field of study. We help identify and apply for relevant scholarship opportunities."
  },
  {
    category: "finances",
    question: "Can I work while studying abroad?",
    answer: "Most countries allow international students to work part-time (typically 20 hours per week) during studies and full-time during breaks. Work regulations vary by country and visa type, and we provide detailed information about work rights."
  },
  {
    category: "travel",
    question: "What should I pack for studying abroad?",
    answer: "Pack essentials like important documents, medications, seasonal clothing, electronics with adapters, and personal items. We provide comprehensive packing checklists and guidance on what to bring vs. what to buy locally."
  },
  {
    category: "travel",
    question: "How do I find accommodation abroad?",
    answer: "Accommodation options include university dormitories, shared apartments, homestays, and private rentals. We assist with accommodation research, applications, and provide guidance on the best options for your budget and preferences."
  },
  {
    category: "travel",
    question: "What support is available after I arrive at my destination?",
    answer: "We provide pre-departure orientation, airport pickup assistance (if needed), initial settlement support, and ongoing guidance throughout your studies. Many universities also offer international student support services."
  },
];

export default function FAQsSection() {
  const [selectedCategory, setSelectedCategory] = useState("admission");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqData.filter(faq => 
    faq.category === selectedCategory &&
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about studying abroad, admissions, visas, and more
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-lg rounded-full border-0 shadow-lg"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-4 p-2 bg-white rounded-2xl shadow-lg">
            {faqCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setExpandedFAQ(null);
                  setSearchTerm("");
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${getCategoryColor(category.color)} text-white shadow-lg`
                    : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0"
                          >
                            <ChevronDown className="w-6 h-6 text-gray-500" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {expandedFAQ === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-0">
                                <div className="h-px bg-gray-200 mb-4" />
                                <p className="text-gray-700 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-xl text-gray-500">
                    No FAQs found matching your search.
                  </p>
                  <Button
                    onClick={() => setSearchTerm("")}
                    variant="outline"
                    className="mt-4"
                  >
                    Clear Search
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-100" />
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our expert counselors are here to help you with any questions about studying abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold"
              >
                Ask a Question
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold"
              >
                Live Chat Support
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}