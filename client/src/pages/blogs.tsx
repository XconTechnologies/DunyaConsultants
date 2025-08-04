import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  Filter,
  ChevronRight,
  Eye,
  MessageCircle,
  Share2,
  TrendingUp,
  Globe,
  GraduationCap,
  MapPin,
  Calculator,
  Users,
  Video,
  FileText,
  Award
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  views: number;
  comments: number;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Why Turkey is the Best Choice for Pakistani Students in 2024",
    excerpt: "Discover why Turkey has emerged as the top study destination for Pakistani students, offering quality education, cultural compatibility, and excellent career prospects.",
    content: `Turkey has rapidly emerged as one of the most attractive study destinations for Pakistani students, and for good reason. With its strategic location bridging Europe and Asia, rich cultural heritage, and world-class educational institutions, Turkey offers an unparalleled study abroad experience.

## Quality Education at Affordable Costs

Turkish universities are gaining international recognition for their academic excellence. With over 200 universities, including many ranked among the world's top institutions, Turkey offers diverse programs in English and Turkish. The cost of education is significantly lower compared to Western countries, with annual tuition fees ranging from $2,000 to $8,000.

## Cultural Compatibility and Islamic Values

For Pakistani students, Turkey offers a unique advantage of cultural familiarity. As a predominantly Muslim country, Turkey provides an environment where Pakistani students can practice their faith freely while pursuing higher education. The cultural similarities make the transition smoother for students and their families.

## Strategic Location and Travel Benefits

Turkey's location offers easy access to both European and Asian countries. Students can explore diverse cultures and opportunities within the region. The visa-free or visa-on-arrival access to many countries makes Turkey an ideal base for international exposure.

## Government Scholarships and Support

The Turkish government offers extensive scholarship programs, including the prestigious Türkiye Scholarships, which cover tuition fees, accommodation, health insurance, and monthly stipends. These scholarships are specifically designed to attract international students and foster cultural exchange.

## Career Opportunities and Industry Connections

Turkey's growing economy and strong ties with Pakistan create excellent career opportunities for graduates. Many Turkish companies have operations in Pakistan, providing direct pathways for employment. The country's strategic importance in international trade opens doors to global career prospects.

## Language Advantages

While many programs are offered in English, learning Turkish opens additional opportunities in the region. Turkish is spoken by over 80 million people and is increasingly valuable in international business and diplomacy.

## Living Standards and Safety

Turkey offers a high standard of living at a reasonable cost. Cities like Istanbul, Ankara, and Izmir provide modern amenities, efficient public transportation, and a safe environment for international students. The hospitality of Turkish people towards Pakistani students is particularly noteworthy.

Turkey represents an optimal balance of quality education, cultural comfort, affordability, and career prospects, making it the ideal choice for Pakistani students seeking international education.`,
    author: {
      name: "Dr. Mehmet Özkan",
      title: "Education Consultant",
      avatar: "/api/placeholder/50/50"
    },
    publishedDate: "2024-03-17",
    readTime: "8 min read",
    category: "Study Destinations",
    tags: ["Turkey", "Pakistani Students", "Scholarships", "Education"],
    featured: true,
    views: 2450,
    comments: 23,
    image: "/api/placeholder/600/400",
    slug: "why-turkey-best-choice-pakistani-students"
  },
  {
    id: "2",
    title: "Complete Guide to Canadian Student Visa Application 2024",
    excerpt: "Step-by-step guide to successfully apply for a Canadian student visa, including document requirements, processing times, and expert tips.",
    content: `Canada remains one of the most sought-after destinations for international students. The Canadian student visa application process, while comprehensive, is straightforward when you understand the requirements and procedures.

## Understanding the Study Permit

A study permit is not a visa but an authorization to study in Canada. Most international students need both a study permit and a visitor visa or Electronic Travel Authorization (eTA) to enter Canada.

## Essential Document Requirements

### Academic Documents
- Official transcripts from all previously attended institutions
- Diploma or degree certificates
- Language proficiency test results (IELTS, TOEFL, etc.)
- Letter of acceptance from a Designated Learning Institution (DLI)

### Financial Documentation
- Proof of financial support ($10,000 CAD per year plus tuition fees)
- Bank statements for the past 4-6 months
- Education loan approval letters
- Scholarship award letters (if applicable)

### Personal Documents
- Valid passport
- Medical examination results (if required)
- Statement of Purpose
- Police clearance certificate

## Application Process Timeline

### 1. Receive Letter of Acceptance (2-8 weeks)
Apply to Canadian institutions and receive your official acceptance letter.

### 2. Gather Required Documents (2-4 weeks)
Collect and prepare all necessary documentation.

### 3. Submit Online Application (1-2 weeks)
Complete the application through the Immigration, Refugees and Citizenship Canada (IRCC) website.

### 4. Biometrics Appointment (1-2 weeks)
Schedule and attend your biometrics appointment at a Visa Application Centre.

### 5. Processing Time (4-12 weeks)
Wait for the decision on your application.

## Pro Tips for Success

- Apply early, especially for September intake
- Ensure all documents are properly translated and notarized
- Provide clear and honest information in your Statement of Purpose
- Show strong ties to your home country
- Demonstrate genuine intent to study

## Common Reasons for Rejection

- Insufficient financial proof
- Weak Statement of Purpose
- Incomplete documentation
- Concerns about returning to home country
- Medical inadmissibility

## Post-Graduation Opportunities

Canada offers excellent post-graduation work permits (PGWP) that allow students to work in Canada after completing their studies, potentially leading to permanent residency through various immigration programs.

With proper preparation and documentation, obtaining a Canadian student visa is highly achievable for Pakistani students.`,
    author: {
      name: "Sarah Khan",
      title: "Immigration Specialist",
      avatar: "/api/placeholder/50/50"
    },
    publishedDate: "2024-03-10",
    readTime: "12 min read",
    category: "Visa Guide",
    tags: ["Canada", "Student Visa", "Immigration", "Documentation"],
    featured: true,
    views: 3200,
    comments: 45,
    image: "/api/placeholder/600/400",
    slug: "canada-student-visa-guide-2024"
  },
  {
    id: "3",
    title: "Top 10 Scholarships for International Students in 2024",
    excerpt: "Comprehensive list of the most prestigious and accessible scholarships available for international students across different countries and fields of study.",
    content: `Scholarships can significantly reduce the financial burden of studying abroad. Here are the top 10 scholarship opportunities that international students should consider for 2024.

## 1. Fulbright Foreign Student Program (USA)
- **Coverage**: Full tuition, living expenses, health insurance
- **Eligibility**: Graduate students and young professionals
- **Application Deadline**: Varies by country

## 2. Chevening Scholarships (UK)
- **Coverage**: Full tuition fees, monthly stipend, travel costs
- **Eligibility**: Master's degree candidates with leadership potential
- **Application Deadline**: November 2024

## 3. Australia Awards Scholarships
- **Coverage**: Full tuition, living allowance, health cover
- **Eligibility**: Undergraduate and postgraduate students
- **Application Deadline**: April 2024

## 4. DAAD Scholarships (Germany)
- **Coverage**: Monthly stipend, tuition fees, health insurance
- **Eligibility**: Graduate students and researchers
- **Application Deadline**: October 2024

## 5. Türkiye Scholarships
- **Coverage**: Full tuition, accommodation, monthly allowance
- **Eligibility**: Undergraduate, graduate, and PhD students
- **Application Deadline**: February 2024

## 6. Erasmus Mundus Joint Master Degrees (Europe)
- **Coverage**: Full tuition, living allowance, travel costs
- **Eligibility**: Master's degree candidates
- **Application Deadline**: January 2024

## 7. Sweden Institute Scholarships
- **Coverage**: Tuition fees and living allowance
- **Eligibility**: Master's degree students from developing countries
- **Application Deadline**: February 2024

## 8. Netherlands Fellowship Programme
- **Coverage**: Full tuition, monthly allowance, visa costs
- **Eligibility**: Mid-career professionals
- **Application Deadline**: May 2024

## 9. New Zealand Development Scholarships
- **Coverage**: Full tuition, living allowance, establishment allowance
- **Eligibility**: Students from developing countries
- **Application Deadline**: July 2024

## 10. Canadian Commonwealth Scholarship Program
- **Coverage**: Tuition fees, living allowance, travel costs
- **Eligibility**: Commonwealth country citizens
- **Application Deadline**: December 2024

## Application Tips

### Start Early
Most scholarship applications require extensive preparation. Begin at least 6-12 months before the deadline.

### Strong Personal Statement
Craft a compelling personal statement that highlights your achievements, goals, and how the scholarship aligns with your career objectives.

### Letters of Recommendation
Choose recommenders who know your work well and can speak to your qualifications and potential.

### Meet All Requirements
Ensure you meet all eligibility criteria and submit all required documents before the deadline.

### Apply Broadly
Don't put all your eggs in one basket. Apply to multiple scholarships to increase your chances of success.

Remember, scholarship competition is intense, but with proper preparation and a strong application, you can secure funding for your international education dreams.`,
    author: {
      name: "Dr. Amanda Foster",
      title: "Scholarship Advisor",
      avatar: "/api/placeholder/50/50"
    },
    publishedDate: "2024-03-05",
    readTime: "10 min read",
    category: "Scholarships",
    tags: ["Scholarships", "Financial Aid", "International Students", "Funding"],
    featured: false,
    views: 1890,
    comments: 32,
    image: "/api/placeholder/600/400",
    slug: "top-scholarships-international-students-2024"
  },
  {
    id: "4",
    title: "IELTS vs TOEFL: Which English Test Should You Choose?",
    excerpt: "Detailed comparison of IELTS and TOEFL tests to help you choose the right English proficiency exam for your study abroad goals.",
    content: `Choosing between IELTS and TOEFL is a crucial decision for international students. Both tests assess English proficiency but have different formats, scoring systems, and acceptance rates across institutions.

## Test Format Comparison

### IELTS (International English Language Testing System)
- **Duration**: 2 hours 45 minutes
- **Format**: Paper-based or computer-based
- **Sections**: Listening, Reading, Writing, Speaking
- **Speaking**: Face-to-face interview with examiner

### TOEFL (Test of English as a Foreign Language)
- **Duration**: 3 hours
- **Format**: Internet-based (iBT)
- **Sections**: Reading, Listening, Speaking, Writing
- **Speaking**: Computer-based recording

## Scoring Systems

### IELTS Scoring
- **Scale**: 0-9 bands
- **Overall Score**: Average of four sections
- **Common Requirements**: 6.0-7.5 for most universities

### TOEFL Scoring
- **Scale**: 0-120 points
- **Section Scores**: 0-30 per section
- **Common Requirements**: 80-100 for most universities

## Geographic Preferences

### IELTS is Preferred in:
- United Kingdom
- Australia
- New Zealand
- Canada (increasingly accepted)

### TOEFL is Preferred in:
- United States
- Canada (traditional preference)
- Some Asian countries

## Test Content Differences

### IELTS Features
- British English emphasis
- Variety of accents in listening section
- Handwritten writing section (paper-based)
- Human interaction in speaking

### TOEFL Features
- American English emphasis
- Academic context throughout
- Integrated tasks combining skills
- Computer-based interaction

## Which Test Should You Choose?

### Choose IELTS if:
- You're applying to UK, Australia, or New Zealand
- You prefer face-to-face speaking interaction
- You're comfortable with various English accents
- You prefer shorter test duration

### Choose TOEFL if:
- You're applying primarily to US universities
- You're comfortable with computer-based testing
- You prefer American English
- You excel at integrated academic tasks

## Preparation Strategies

### For IELTS
- Practice with British Council materials
- Focus on different English accents
- Prepare for speaking interview format
- Practice handwriting for paper-based test

### For TOEFL
- Use ETS official preparation materials
- Practice integrated skills tasks
- Familiarize yourself with computer interface
- Focus on academic vocabulary and contexts

## Cost and Availability

Both tests cost approximately $200-250 and are available multiple times per month in major cities worldwide. IELTS offers more test dates and locations globally.

## Final Recommendation

Your choice should primarily depend on your target universities' requirements. Research specific requirements for your intended institutions and choose the test that aligns with your study destinations and personal strengths.

Both tests are widely accepted, and either can open doors to quality international education opportunities.`,
    author: {
      name: "Prof. David Wilson",
      title: "English Language Expert",
      avatar: "/api/placeholder/50/50"
    },
    publishedDate: "2024-02-28",
    readTime: "9 min read",
    category: "Test Preparation",
    tags: ["IELTS", "TOEFL", "English Tests", "Test Preparation"],
    featured: false,
    views: 2100,
    comments: 28,
    image: "/api/placeholder/600/400",
    slug: "ielts-vs-toefl-comparison-guide"
  },
  {
    id: "5",
    title: "Cost of Living Guide: Studying in Major Global Cities",
    excerpt: "Comprehensive breakdown of living expenses for international students in popular study destinations including accommodation, food, and transportation costs.",
    content: `Understanding the cost of living is crucial when choosing your study destination. Here's a detailed breakdown of expenses in major global cities popular among international students.

## North America

### Toronto, Canada
- **Accommodation**: $800-1500/month
- **Food**: $300-500/month
- **Transportation**: $150/month
- **Miscellaneous**: $200-400/month
- **Total Monthly Cost**: $1450-2550

### New York, USA
- **Accommodation**: $1200-2500/month
- **Food**: $400-700/month
- **Transportation**: $120/month
- **Miscellaneous**: $300-500/month
- **Total Monthly Cost**: $2020-3820

## Europe

### London, UK
- **Accommodation**: £600-1200/month
- **Food**: £200-350/month
- **Transportation**: £150/month
- **Miscellaneous**: £200-400/month
- **Total Monthly Cost**: £1150-2100

### Berlin, Germany
- **Accommodation**: €400-800/month
- **Food**: €200-300/month
- **Transportation**: €100/month
- **Miscellaneous**: €150-250/month
- **Total Monthly Cost**: €850-1450

### Istanbul, Turkey
- **Accommodation**: $200-500/month
- **Food**: $150-250/month
- **Transportation**: $30/month
- **Miscellaneous**: $100-200/month
- **Total Monthly Cost**: $480-980

## Asia-Pacific

### Sydney, Australia
- **Accommodation**: AUD 800-1500/month
- **Food**: AUD 300-500/month
- **Transportation**: AUD 150/month
- **Miscellaneous**: AUD 200-400/month
- **Total Monthly Cost**: AUD 1450-2550

### Singapore
- **Accommodation**: SGD 800-1500/month
- **Food**: SGD 300-500/month
- **Transportation**: SGD 120/month
- **Miscellaneous**: SGD 200-400/month
- **Total Monthly Cost**: SGD 1420-2520

## Money-Saving Tips

### Accommodation
- Consider shared housing or student dormitories
- Look for accommodations slightly outside city centers
- Explore homestay options for cultural immersion

### Food
- Cook at home instead of eating out frequently
- Shop at local markets and discount stores
- Take advantage of student meal plans

### Transportation
- Use student discounts on public transport
- Consider cycling or walking for short distances
- Look for monthly or annual transport passes

### Entertainment and Miscellaneous
- Take advantage of student discounts
- Explore free cultural activities and events
- Use student ID for museum and cinema discounts

## Budget Planning Tips

### Emergency Fund
Maintain an emergency fund covering 2-3 months of expenses.

### Currency Fluctuations
Factor in potential currency exchange rate changes.

### Health Insurance
Budget for mandatory health insurance requirements.

### Seasonal Variations
Consider seasonal cost variations, especially for heating in winter.

## Part-Time Work Opportunities

Most countries allow international students to work part-time:
- **Canada**: 20 hours/week during studies
- **Australia**: 20 hours/week during studies
- **UK**: 20 hours/week during studies
- **USA**: On-campus work only in first year

Understanding these costs helps you make informed decisions about your study destination and budget accordingly for a successful international education experience.`,
    author: {
      name: "Maria Rodriguez",
      title: "Financial Advisor",
      avatar: "/api/placeholder/50/50"
    },
    publishedDate: "2024-02-20",
    readTime: "11 min read",
    category: "Cost of Living",
    tags: ["Cost of Living", "Budgeting", "Student Life", "Financial Planning"],
    featured: false,
    views: 1750,
    comments: 19,
    image: "/api/placeholder/600/400",
    slug: "cost-living-guide-global-cities"
  }
];

const categories = ["All", "Study Destinations", "Visa Guide", "Scholarships", "Test Preparation", "Cost of Living"];

export default function Blogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        {/* Article Header */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              onClick={() => setSelectedPost(null)}
              variant="outline" 
              className="mb-8 text-white border-white hover:bg-white/10"
            >
              ← Back to Blogs
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-primary">{selectedPost.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{selectedPost.title}</h1>
              
              <div className="flex items-center space-x-6 text-blue-100 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(selectedPost.publishedDate)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  {selectedPost.content.split('\n\n').map((paragraph, index) => {
                    // Insert lead form after 3rd paragraph
                    if (index === 3) {
                      return (
                        <div key={`content-${index}`}>
                          <p className="text-neutral-700 leading-relaxed mb-4">{paragraph}</p>
                          
                          {/* Inline Lead Form */}
                          <div className="my-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                            <div className="text-center mb-6">
                              <h3 className="text-2xl font-bold text-neutral-800 mb-2">Get Free Study Abroad Consultation</h3>
                              <p className="text-neutral-600">Expert guidance tailored to your academic goals</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
                              <Input placeholder="Your Name" className="bg-white" />
                              <Input placeholder="Email Address" type="email" className="bg-white" />
                              <Input placeholder="Phone Number" type="tel" className="bg-white" />
                              <Select>
                                <SelectTrigger className="bg-white">
                                  <SelectValue placeholder="Study Destination" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="usa">United States</SelectItem>
                                  <SelectItem value="uk">United Kingdom</SelectItem>
                                  <SelectItem value="canada">Canada</SelectItem>
                                  <SelectItem value="australia">Australia</SelectItem>
                                  <SelectItem value="turkey">Turkey</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white py-3">
                              Get Free Consultation
                            </Button>
                          </div>
                        </div>
                      );
                    }

                    // Insert animated banner after 6th paragraph
                    if (index === 6) {
                      return (
                        <div key={`content-${index}`}>
                          <p className="text-neutral-700 leading-relaxed mb-4">{paragraph}</p>
                          
                          {/* Animated Study Visa Banner */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                            className="my-12 p-6 bg-gradient-to-r from-blue-500 to-blue-500 rounded-xl text-white relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-black/10"></div>
                            <div className="relative z-10 text-center">
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="inline-block mb-4"
                              >
                                <GraduationCap className="w-12 h-12 mx-auto" />
                              </motion.div>
                              <h3 className="text-2xl font-bold mb-2">🎓 Study Visa Success Rate: 95%</h3>
                              <p className="mb-4">Join thousands of successful students who got their visas with our expert guidance</p>
                              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                                Start Your Visa Journey
                              </Button>
                            </div>
                          </motion.div>
                        </div>
                      );
                    }

                    if (paragraph.startsWith('## ')) {
                      return <h2 key={index} className="text-2xl font-bold text-neutral-800 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                    } else if (paragraph.startsWith('### ')) {
                      return <h3 key={index} className="text-xl font-semibold text-neutral-800 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                    } else if (paragraph.startsWith('- **') || paragraph.startsWith('* **')) {
                      return (
                        <div key={index} className="mb-2">
                          <p className="text-neutral-700 leading-relaxed">{paragraph}</p>
                        </div>
                      );
                    } else {
                      return <p key={index} className="text-neutral-700 leading-relaxed mb-4">{paragraph}</p>;
                    }
                  })}
                </div>
              </div>

              {/* Sticky Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Quick Cost Calculator */}
                  <Card className="p-6 shadow-lg">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center text-lg">
                        <Calculator className="w-5 h-5 mr-2 text-primary" />
                        Quick Cost Calculator
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usa">USA</SelectItem>
                          <SelectItem value="uk">UK</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Study Level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="postgraduate">Postgraduate</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">$45,000</div>
                        <div className="text-sm text-neutral-600">Estimated Annual Cost</div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Get Detailed Estimate
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Contact QR Code */}
                  <Card className="p-6 shadow-lg text-center">
                    <h3 className="text-lg font-bold mb-4">Quick Contact</h3>
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                        <div className="text-xs font-mono">
                          QR<br/>CODE
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-600 mb-4">Scan to chat with our consultants on WhatsApp</p>
                    <div className="text-center">
                      <div className="font-bold text-primary">+92 304 1110947</div>
                    </div>
                  </Card>

                  {/* Community Links */}
                  <Card className="p-6 shadow-lg">
                    <h3 className="text-lg font-bold mb-4">Join Our Community</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="w-4 h-4 mr-2" />
                        Facebook Group (15K+)
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Community
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Globe className="w-4 h-4 mr-2" />
                        LinkedIn Network
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Video className="w-4 h-4 mr-2" />
                        YouTube Channel
                      </Button>
                    </div>
                  </Card>

                  {/* PDF Downloads */}
                  <Card className="p-6 shadow-lg">
                    <h3 className="text-lg font-bold mb-4">Free Resources</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start text-sm">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Study Abroad Guide (PDF)
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm">
                        <FileText className="w-4 h-4 mr-2" />
                        Scholarship Directory
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm">
                        <Award className="w-4 h-4 mr-2" />
                        University Rankings
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        Country Comparison
                      </Button>
                    </div>
                  </Card>

                  {/* Newsletter Signup */}
                  <Card className="p-6 shadow-lg bg-gradient-to-br from-primary to-secondary text-white">
                    <h3 className="text-lg font-bold mb-4">Weekly Insights</h3>
                    <p className="text-blue-100 text-sm mb-4">Get expert tips and latest updates delivered to your inbox</p>
                    <div className="space-y-3">
                      <Input placeholder="Email Address" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                      <Button className="w-full bg-white text-primary hover:bg-blue-50">
                        Subscribe Now
                      </Button>
                    </div>
                    <p className="text-xs text-blue-200 mt-2">Join 10,000+ students getting weekly insights</p>
                  </Card>
                </div>
              </div>
            </div>

            {/* Final CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="my-12 p-8 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-xl text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <h3 className="text-3xl font-bold mb-4">🚀 Ready to Start Your Journey?</h3>
                </motion.div>
                <p className="text-xl mb-6">Don't let your dreams wait! Get personalized guidance from our experts today.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 flex-1">
                    Book Free Consultation
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 flex-1">
                    Download Guide
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Share Section */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  {selectedPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-neutral-600">
                    <Eye className="w-4 h-4" />
                    <span>{selectedPost.views}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-600">
                    <MessageCircle className="w-4 h-4" />
                    <span>{selectedPost.comments}</span>
                  </div>
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50" ref={ref}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Enhanced Background with Animated Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20"></div>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.1, 1, 1.1],
              rotate: [0, -5, 0],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-300/10 blur-3xl"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-8 py-4 mb-8 border border-white/20"
            >
              <BookOpen className="w-5 h-5 text-blue-200" />
              <span className="text-sm font-medium text-blue-100">Education Insights & Expert Guidance</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Study Abroad<br />
              <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 bg-clip-text text-transparent">
                Blog & Insights
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Expert guidance, insider tips, and comprehensive guides to help you navigate your international education journey successfully. Your trusted source for study abroad success.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-sm text-blue-200">Expert Articles</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <div className="text-sm text-blue-200">Countries Covered</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-sm text-blue-200">Monthly Readers</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-4xl font-bold text-white mb-2">Daily</div>
                <div className="text-sm text-blue-200">Fresh Content</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="p-8 shadow-xl border-0 bg-gradient-to-r from-blue-50 to-blue-100/50 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
                    <Input
                      placeholder="Search articles, topics, or destinations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-12 border-blue-200 focus:border-blue-400 focus:ring-blue-400 text-base bg-white/80 backdrop-blur-sm"
                    />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-52 h-12 border-blue-200 focus:border-blue-400 focus:ring-blue-400 bg-white/80 backdrop-blur-sm">
                      <Filter className="w-4 h-4 mr-2 text-blue-500" />
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-neutral-800 mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <Card key={post.id} className="hover:shadow-xl transition-all duration-300 border shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-neutral-800 mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-neutral-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-neutral-500">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishedDate)}</span>
                        </div>

                        <Button 
                          onClick={() => setSelectedPost(post)}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Read More
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-neutral-800">Latest Articles</h2>
              <div className="flex items-center space-x-2 text-neutral-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">{filteredPosts.length} articles found</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-neutral-800 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-neutral-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-neutral-500">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishedDate)}</span>
                        </div>
                        <Button 
                          size="sm" 
                          onClick={() => setSelectedPost(post)}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Read More
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 mx-auto text-neutral-300 mb-4" />
                <h3 className="text-xl font-semibold text-neutral-600 mb-2">No articles found</h3>
                <p className="text-neutral-500">Try adjusting your search or filters</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -10, 0],
            }}
            transition={{ 
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Get weekly expert tips, scholarship updates, and study abroad insights delivered to your inbox. Join 50,000+ students already subscribed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="bg-white/15 border-white/30 text-white placeholder:text-white/70 backdrop-blur-md h-12 focus:border-white focus:ring-white"
              />
              <Button className="bg-white text-blue-700 hover:bg-blue-50 whitespace-nowrap h-12 px-8 font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe Free
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">✨ No spam, unsubscribe anytime</p>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}