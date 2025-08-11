import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Plane, DollarSign, HelpCircle, Users, Clock } from "lucide-react";

export default function FAQsSection() {
  const faqCategories = [
    {
      id: "admission",
      title: "Admission Process",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      faqs: [
        {
          question: "What documents do I need for university applications?",
          answer: "You'll need academic transcripts, degree certificates, English proficiency test scores (IELTS/TOEFL), passport, statement of purpose, letters of recommendation, CV/resume, and financial statements. Specific requirements vary by university and program."
        },
        {
          question: "How many universities should I apply to?",
          answer: "We recommend applying to 6-8 universities - 2 safe choices, 3-4 moderate choices, and 1-2 reach universities. This gives you the best chance of receiving multiple offers while managing application costs and effort."
        },
        {
          question: "When should I start my university applications?",
          answer: "Start 12-18 months before your intended study date. This allows time for English tests, document preparation, applications, visa processing, and pre-departure arrangements. Early applications often have better scholarship opportunities."
        },
        {
          question: "Can I apply without IELTS or TOEFL scores?",
          answer: "Some universities accept conditional offers pending English test results, while others require scores upfront. We can identify universities that match your timeline and help you plan your English testing strategy."
        },
        {
          question: "What is a statement of purpose and how important is it?",
          answer: "The SOP is your personal essay explaining your academic goals, career plans, and why you want to study at that specific university. It's crucial for admission decisions and can significantly impact scholarship eligibility."
        },
        {
          question: "How do I choose the right university and program?",
          answer: "Consider factors like program ranking, university reputation, location, cost, campus facilities, job placement rates, and visa policies. Our counselors provide personalized guidance based on your academic background and career goals."
        }
      ]
    },
    {
      id: "visa",
      title: "Visa Process",
      icon: Plane,
      color: "from-blue-500 to-blue-600",
      faqs: [
        {
          question: "How long does the visa process take?",
          answer: "Processing times vary by country: UK (3-6 weeks), Canada (4-8 weeks), Australia (4-6 weeks), USA (2-8 weeks), Germany (6-12 weeks). We recommend applying as soon as you receive your university offer letter."
        },
        {
          question: "What financial documents are required for visa applications?",
          answer: "You'll need bank statements (6 months), education loan approval letter, property documents, income tax returns, salary certificates, and sponsor's financial documents if applicable. The amount required varies by country and duration of study."
        },
        {
          question: "Can I work while studying on a student visa?",
          answer: "Yes, most countries allow part-time work: UK (20 hrs/week), Canada (20 hrs/week during studies, full-time during breaks), Australia (48 hrs/fortnight), USA (20 hrs/week on-campus), Germany (120 full days or 240 half days per year)."
        },
        {
          question: "What happens if my visa application is rejected?",
          answer: "We analyze the rejection reasons and help you address the issues for reapplication. Common reasons include insufficient funds, poor academic records, or incomplete documentation. Most rejections can be overcome with proper guidance."
        },
        {
          question: "Do I need health insurance for my visa application?",
          answer: "Health insurance requirements vary by country. Australia requires OSHC, Germany requires health insurance proof, while UK, Canada, and USA have different requirements. We help arrange appropriate coverage as part of our services."
        },
        {
          question: "Can my family accompany me on a student visa?",
          answer: "Dependent visa policies vary: Canada and Australia allow spouses and children for Masters/PhD students, UK allows dependents for programs longer than 9 months, USA allows dependents on F-2 visas, Germany has family reunion options."
        }
      ]
    },
    {
      id: "finances",
      title: "Finances & Scholarships",
      icon: DollarSign,
      color: "from-blue-500 to-blue-600",
      faqs: [
        {
          question: "How much does it cost to study abroad?",
          answer: "Total costs vary significantly: UK (£15,000-40,000/year), Canada (CAD 20,000-35,000/year), Australia (AUD 25,000-45,000/year), USA ($25,000-60,000/year), Germany (€200-3,000/year tuition + €8,000-12,000 living costs)."
        },
        {
          question: "What scholarship opportunities are available?",
          answer: "We help you access merit-based scholarships, need-based grants, government scholarships (like Chevening, Fulbright), university-specific awards, and external funding opportunities. Scholarships can cover 20-100% of expenses."
        },
        {
          question: "Can I get an education loan to study abroad?",
          answer: "Yes, major banks offer education loans up to ₹1.5 crore for overseas studies. We assist with loan applications, documentation, and connecting you with the best lenders offering competitive interest rates and terms."
        },
        {
          question: "How much money should I show for visa applications?",
          answer: "Financial requirements vary: UK (₹15-20 lakhs), Canada (₹12-18 lakhs), Australia (₹18-25 lakhs), USA (₹20-35 lakhs), Germany (₹8-10 lakhs). These amounts should be maintained for 6 months before application."
        },
        {
          question: "Are there any hidden costs I should know about?",
          answer: "Consider additional expenses like application fees, English test fees, visa fees, health insurance, flight tickets, accommodation deposits, initial living expenses, and emergency funds. We provide detailed cost breakdowns for each destination."
        },
        {
          question: "When do I need to pay university fees?",
          answer: "Universities typically require a deposit (₹50,000-2,00,000) to confirm your place after receiving an offer. Full fees are usually due before semester commencement or can be paid in installments as per university policy."
        }
      ]
    },
    {
      id: "general",
      title: "General Questions",
      icon: HelpCircle,
      color: "from-blue-500 to-blue-600",
      faqs: [
        {
          question: "Why should I choose Dunya Consultants?",
          answer: "With 15+ years of experience, 5,000+ successful placements, 98% visa success rate, and 17+ offices across Pakistan, we provide comprehensive end-to-end services from university selection to post-arrival support."
        },
        {
          question: "Do you provide services after I reach my destination country?",
          answer: "Yes, we offer post-arrival support including airport pickup assistance, accommodation guidance, SIM card and bank account setup help, orientation sessions, and ongoing support throughout your studies."
        },
        {
          question: "How do you help with university selection?",
          answer: "Our expert counselors assess your academic background, career goals, budget, and preferences to shortlist suitable universities and programs. We consider factors like ranking, location, job prospects, and scholarship availability."
        },
        {
          question: "What is your success rate for admissions and visas?",
          answer: "We maintain a 95% admission success rate and 98% visa approval rate. Our experienced team's deep knowledge of requirements and strong university partnerships contribute to these excellent success rates."
        },
        {
          question: "How much do your services cost?",
          answer: "Our service fees vary based on the package you choose, ranging from ₹15,000 to ₹50,000. We offer comprehensive packages covering the entire process and individual services for specific needs. Free initial consultation is always provided."
        },
        {
          question: "How long does the entire process take from application to departure?",
          answer: "The complete process typically takes 8-12 months: 2-3 months for applications, 2-4 months for admission decisions, 1-3 months for visa processing, and 1-2 months for pre-departure preparations."
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("admission");

  const currentCategory = faqCategories.find(cat => cat.id === selectedCategory) || faqCategories[0];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#1E50CA]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about studying abroad and our services
          </p>
        </motion.div>

        {/* Category Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          <Card className="text-center shadow-lg border-l-4 border-blue-500">
            <CardContent className="p-6">
              <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Questions Answered</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg border-l-4 border-blue-500">
            <CardContent className="p-6">
              <Clock className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg border-l-4 border-blue-500">
            <CardContent className="p-6">
              <GraduationCap className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">98%</h3>
              <p className="text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg border-l-4 border-blue-500">
            <CardContent className="p-6">
              <HelpCircle className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8 bg-gray-100 p-1 rounded-xl">
              {faqCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center space-x-2 rounded-lg py-3 px-4"
                >
                  <category.icon className="h-5 w-5" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card className="shadow-xl border-0 overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r ${category.color} text-white p-8`}>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white/20 rounded-full">
                        <category.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl mb-2">{category.title}</CardTitle>
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          {category.faqs.length} Questions
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-8">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border border-gray-200 rounded-lg px-6 py-2"
                        >
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-4 pb-2">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our expert counselors are here to help you with personalized guidance for your study abroad journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+923041110947"
                  className="bg-gradient-to-r from-blue-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Call Us: +92 304 1110947
                </a>
                <a
                  href="mailto:info@dunyaconsultants.com"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  Email Us
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}