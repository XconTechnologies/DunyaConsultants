import React, { useState } from 'react';
import { Search, Share2, Facebook, Twitter, Linkedin, Copy, Clock, ArrowRight } from 'lucide-react';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ContactForm from '../../components/blog/ContactForm';
import ContactSection from '../../components/blog/ContactSection';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function MasterOfFinanceInUK() {
  const [sidebarSearch, setSidebarSearch] = useState("");

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'Master of Finance in UK Guide - Dunya Consultants';

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      copy: shareUrl
    };
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    }
  };

  const relatedBlogs = [
    {
      id: 'study-in-uk-complete-guide',
      title: 'Study in UK Complete Guide',
      excerpt: 'Comprehensive guide covering everything Pakistani students need to know about studying in the UK, from admission requirements to visa processes.',
      category: 'Study Guides',
      readTime: '12 min',
      href: '/blog/study-in-uk-complete-guide'
    },
    {
      id: 'llm-in-uk-for-pakistani-students',
      title: 'LLM in UK for Pakistani Students',
      excerpt: 'Complete guide to pursuing Master of Laws (LLM) degrees in UK universities, including admission requirements and career prospects.',
      category: 'Study Programs', 
      readTime: '10 min',
      href: '/blog/llm-in-uk-for-pakistani-students'
    },
    {
      id: 'msc-business-analytics-in-uk',
      title: 'MSc Business Analytics in UK',
      excerpt: 'Everything about pursuing Masters in Business Analytics in UK, including top universities, requirements, and job opportunities.',
      category: 'Study Programs',
      readTime: '9 min',
      href: '/blog/msc-business-analytics-in-uk'
    }
  ];
  return (
    
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1D50C9] via-blue-600 to-cyan-600 flex items-center justify-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
            }}
          />
          <div className="relative z-10 text-center px-8">
            <h1 className="text-5xl font-bold mb-4">A Beginner's Guide to Master of Finance in UK</h1>
            <p className="text-2xl font-light">Complete guide to pursuing Master's in Finance at top UK universities</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The United Kingdom is quite well-known for having some of the best business universities in the world that provide master of finance degrees. Programs in MSc finance in UK are very famous among international students because they provide advanced knowledge and skills to manage financial resources. Studying for this degree is one of the best options in the UK because it has approximately 174 universities that are offering it. The majority of students complete their finance masters courses in just one year.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Moreover, this program not only helps students learn how to research, report, and analyze financial situations but also teaches them about financial analysis in a global context. With an MS in Finance in UK, students can also open up different job opportunities worldwide. If you are interested in studying in UK, contact our team at Dunya Consultants and get detailed guidance.
                </p>
              </div>

              {/* What is MSc Finance in UK Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">What is MSc finance in UK?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  An MSc in Finance in UK (also known as an MFin degree) is one of the most popular programs for international students. It is highly regarded because it teaches all the required skills to understand and manage money effectively.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Finance is the best career choice due to its high earning potential. However, it is also very competitive and needs strong skills such as financial modeling and accounting. Pursuing MSc in this course prepared students to meet the demands and requirements of the finance industry.
                </p>

                {/* Program Overview */}
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Program Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-#1a73e8 mb-2">1 Year</h4>
                      <p className="#1845B3">Program Duration</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-#1a73e8 mb-2">174</h4>
                      <p className="#1845B3">Universities Offering</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-#1a73e8 mb-2">High</h4>
                      <p className="#1845B3">Earning Potential</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Universities Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Universities in UK for Masters in Finance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Are you looking for the best universities in UK for Finance? Then, you are at the right place. Numerous international students choose to study Finance for a master's degree in the UK because it provides many job opportunities after graduation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The list of the best universities for Finance in UK is as follows:
                </p>

                {/* Universities Table */}
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Top Universities for Masters in Finance</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Sr. No</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Masters in Finance Best Universities</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">1</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">London Business School</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2">2</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">University of Oxford</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">3</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">University of Cambridge</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2">4</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">University of Leeds</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">5</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">University of Edinburgh</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2">6</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Cranfield University</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">7</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">University of Warwick</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-4 py-2">8</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">University of Manchester</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">9</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium">London School of Economics</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Eligibility Criteria Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Eligibility Criteria for MSc Finance in UK Universities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Remember that the eligibility requirements can vary from one university to the other. If you want to apply to the best university for Finance in UK, here are the eligibility criteria for you to check beforehand:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Key Requirements</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>A valid passport</span>
                    </li>
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>A UK student visa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>A graduation degree in Economics, Mathematics, Finance, Science, or Engineering with over sixty-percent marks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>Good GRE or GMAT test scores (if needed)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>Proof of English language skills, such as IELTS scores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>A-grade or equivalent in Mathematics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>Work experience (if required)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Documents Required Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Documents Required for UK Best Colleges for Masters in Finance</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  All documents that you will need to gather before applying for MSc in Finance UK are mentioned below:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Required Documents</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>Bachelor's degree</span>
                    </li>
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>All educational transcripts & grade cards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>A Statement of Purpose (SOP)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>An updated resume or CV showing your experience and skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>Letters of Recommendation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>Any certifications or awards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="#1845B3 mr-2">•</span>
                      <span>Work experience letters (if required)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Admission Process Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Admission Process of Master in Finance UK</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Here is a simple step-by-step guide for you to apply for a master of Finance at a UK university:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Application Steps</h3>
                  <ol className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-[#1565c0] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">1</span>
                      <span>First, go to the official website of the university and search for the MSc Finance program.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-[#1565c0] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">2</span>
                      <span>Press "Apply Now" and start filling out an online application form.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-[#1565c0] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">3</span>
                      <span>Provide all details correctly and then upload mandatory documents. These include academic transcripts, English proficiency scores, Letters of Recommendation, work experience, and SOP (Statement of Purpose).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-[#1565c0] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">4</span>
                      <span>Next, pay the charges for the application to complete the application process.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-[#1565c0] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">5</span>
                      <span>Once you have applied, you will get an email about the status of your application.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-[#1565c0] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">6</span>
                      <span>If accepted, you can start your UK student visa application process to travel to study abroad.</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Cost of Studying Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Average Fee to Study MSc Finance in UK</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The average fee to study for an MSc in Finance in UK is around GBP 32,000. However, the cost can be different based on the university as well as the specific program you choose.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In addition, the cost might vary depending on the details of the course and ranking of the university, so it is recommended to check the exact fee schedule for every university.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Cost Breakdown</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-#1a73e8 mb-2">Tuition Fees</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Average Cost: £32,000</li>
                        <li>• Top Universities: £35,000 - £50,000</li>
                        <li>• Mid-tier Universities: £25,000 - £35,000</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-#1a73e8 mb-2">Living Expenses</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Accommodation: £8,000 - £15,000</li>
                        <li>• Food & Utilities: £3,000 - £5,000</li>
                        <li>• Books & Supplies: £500 - £1,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scholarships Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Scholarships Available for UK Masters in Finance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  International students who are searching for the best finance masters programs in UK can also apply for different scholarship programs. These scholarships will help them with their tuition fees and reduce their living costs.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Some of the most popular scholarships for MS finance in UK are as follows:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Available Scholarships</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Clarendon Fund</li>
                        <li>• WMG Excellence Scholarships</li>
                        <li>• Gates Cambridge Scholarship</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• LSE Master's Awards</li>
                        <li>• UCL Global Masters Scholarships</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 border-l-4 border-gray-500 pl-4">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The United Kingdom is a popular choice among international students for studying for a Master of Finance in UK because of the presence of the best universities. It will provide you with deep knowledge in different areas, such as investment analysis, corporate finance, and financial risk management.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With 174 universities offering finance programs and the possibility to complete your degree in just one year, the UK provides excellent value and opportunities for career advancement. The skills you'll develop in financial modeling, accounting, and global financial analysis will prepare you for high-paying positions in the competitive finance industry.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Dunya Consultants, we help Pakistani students navigate the entire application process for Master of Finance programs in the UK. Our experienced counselors provide personalized guidance to help you choose the right university, prepare your application materials, and secure your student visa.
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-white border-l-4 #1D50C9 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Is doing a master's in Finance in the UK worth it?</h3>
                    <p className="text-gray-700">Yes, pursuing a Master's in Finance in the UK is definitely worth it. The UK offers world-class universities, one-year programs that save time and money, excellent career prospects, and high earning potential. The skills and knowledge gained prepare you for global finance careers.</p>
                  </div>

                  <div className="bg-white border-l-4 #1D50C9 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">What is the starting salary for MSc finance jobs?</h3>
                    <p className="text-gray-700">The starting salary for MSc Finance graduates in the UK typically ranges from £35,000 to £55,000 annually, depending on the employer, location, and your previous experience. Top financial institutions and investment banks may offer higher starting salaries of £60,000 to £80,000.</p>
                  </div>

                  <div className="bg-white border-l-4 #1D50C9 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Which university is best for masters of Finance in the UK?</h3>
                    <p className="text-gray-700">The best universities for Master's in Finance in the UK include London Business School, University of Oxford, University of Cambridge, London School of Economics, and University of Warwick. Each offers excellent programs with strong industry connections and career support.</p>
                  </div>

                  <div className="bg-white border-l-4 #1D50C9 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">What are the career opportunities after MSc Finance in UK?</h3>
                    <p className="text-gray-700">Career opportunities include Investment Banking, Financial Analysis, Risk Management, Corporate Finance, Asset Management, Financial Consulting, Portfolio Management, and Treasury Management roles in banks, investment firms, corporations, and government organizations.</p>
                  </div>

                  <div className="bg-white border-l-4 #1D50C9 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">How long does it take to complete MSc Finance in UK?</h3>
                    <p className="text-gray-700">Most MSc Finance programs in the UK are designed to be completed in one year (12 months) for full-time students. This makes it an efficient option compared to other countries where similar programs may take 18-24 months to complete.</p>
                  </div>

                  <div className="bg-white border-l-4 #1D50C9 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">What are the English language requirements for MSc Finance?</h3>
                    <p className="text-gray-700">Most universities require IELTS scores of 6.5-7.0 overall with minimum 6.0 in each band, or equivalent TOEFL/PTE scores. Some top universities may require higher scores. Check specific university requirements as they can vary.</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-[#1D50C9] to-teal-600 text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Start Your Journey to Master of Finance in UK</h3>
                <p className="text-lg mb-4">Let our expert counselors guide you through the entire application process for top UK universities. We'll help you choose the right program, prepare strong application materials, and secure your student visa for a successful finance career.</p>
                <div className="flex gap-4">
                  <a href="tel:+923041110947" className="bg-white #1845B3 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Call Now: (+92) 304 1110947
                  </a>
                  <a href="mailto:query@teamdunya.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-[#1845B3] transition-colors">
                    Get Free Consultation
                  </a>
                </div>
              </div>
              {/* Related Blogs Section */}
              <section className="mb-10">
                <h2 className="text-3xl font-bold mb-8 text-center text-[#1D50C9]">Related Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedBlogs.map((blog, index) => (
                    <div key={blog.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden group">
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="bg-[#1D50C9]/10 text-[#1D50C9] text-xs font-medium px-2.5 py-1 rounded-full">
                            {blog.category}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#1D50C9] transition-colors">
                          {blog.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {blog.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {blog.readTime}
                            </div>
                          </div>
                        </div>
                        
                        <a 
                          href={blog.href}
                          className="inline-flex items-center text-[#1D50C9] hover:text-[#1565c0] font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </article>
          </div>

          {/* Sidebar */}
          <div className="w-80">
            <ContactForm />
            
            {/* Search Bar */}
            <Card className="bg-white border border-gray-200 shadow-sm mb-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#1D50C9]">Search Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search blog posts..."
                    value={sidebarSearch}
                    onChange={(e) => setSidebarSearch(e.target.value)}
                    className="pl-10"
                  />
                  {sidebarSearch && (
                    <div className="mt-3 p-2 bg-gray-50 rounded text-sm text-gray-600">
                      <a href={`/blog?search=${encodeURIComponent(sidebarSearch)}`} className="text-[#1D50C9] hover:underline">
                        Search for "{sidebarSearch}" →
                      </a>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            {/* Share Buttons */}
            <Card className="bg-white border border-gray-200 shadow-sm mb-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#1D50C9] flex items-center">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share This Article
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="flex items-center justify-center p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center justify-center p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="flex items-center justify-center p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Link
                  </button>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Facts */}
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#1565c0]">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Program Duration</span>
                  <span className="text-sm font-bold text-#1a73e8">1 Year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Average Tuition</span>
                  <span className="text-sm font-bold text-#1a73e8">£32,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Universities Available</span>
                  <span className="text-sm font-bold text-#1a73e8">174</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Starting Salary</span>
                  <span className="text-sm font-bold text-#1a73e8">£35,000-£55,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Career Prospects</span>
                  <span className="text-sm font-bold text-#1a73e8">Excellent</span>
                </div>
              </div>
            </div>

            {/* Top Universities */}
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#1565c0]">Top 5 Universities</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>1. London Business School</li>
                <li>2. University of Oxford</li>
                <li>3. University of Cambridge</li>
                <li>4. University of Leeds</li>
                <li>5. London School of Economics</li>
              </ul>
            </div>

            {/* Scholarship Opportunities */}
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#1565c0]">Scholarship Opportunities</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Clarendon Fund</li>
                <li>• WMG Excellence Scholarships</li>
                <li>• Gates Cambridge Scholarship</li>
                <li>• LSE Master's Awards</li>
                <li>• UCL Global Masters Scholarships</li>
              </ul>
            </div>

            {/* Related Blogs */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#1D50C9]">Related Blogs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatedBlogs.slice(0, 3).map((blog, index) => (
                    <div key={blog.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow">
                      <div className="mb-2">
                        <span className="bg-[#1D50C9]/10 text-[#1D50C9] text-xs font-medium px-2 py-1 rounded-full">
                          {blog.category}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                        {blog.title}
                      </h4>
                      <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {blog.readTime}
                        </div>
                        <a 
                          href={blog.href}
                          className="text-[#1D50C9] hover:text-[#1565c0] font-medium text-xs flex items-center"
                        >
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </div>
      <Footer />
    
    </div>
  );
}