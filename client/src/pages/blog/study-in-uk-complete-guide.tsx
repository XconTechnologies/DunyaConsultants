import React, { useState } from 'react';
import { Calendar, Clock, User, FileText, GraduationCap, CheckCircle, Users, AlertCircle, BookOpen, DollarSign, MapPin, Search, Share2, Facebook, Twitter, Linkedin, Copy, Eye, ArrowRight } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function StudyInUKCompleteGuide() {
  const [sidebarSearch, setSidebarSearch] = useState("");

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'Study in UK Complete Guide - Dunya Consultants';

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
      id: 'study-in-canada-guide',
      title: 'Study in Canada Complete Guide',
      excerpt: 'Comprehensive guide covering everything Pakistani students need to know about studying in Canada, from admission requirements to post-graduation opportunities.',
      category: 'Study Guides',
      readTime: '12 min',
      href: '/blog/study-in-canada-complete-guide'
    },
    {
      id: 'study-in-australia-guide',
      title: 'Study in Australia Guide',
      excerpt: 'Complete information about studying in Australia, including university requirements, visa processes, and living costs for Pakistani students.',
      category: 'Study Guides', 
      readTime: '10 min',
      href: '/blog/study-in-australia-guide'
    },
    {
      id: 'master-of-finance-in-uk',
      title: 'Master of Finance in UK',
      excerpt: 'Detailed guide about pursuing Masters in Finance in UK, including top universities, admission requirements, and career prospects.',
      category: 'Study Programs',
      readTime: '8 min',
      href: '/blog/master-of-finance-in-uk'
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-[#1D50C9] text-white px-4 py-2 rounded-full text-sm font-medium">
                Study Destination
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Study in UK: Complete Guide for Pakistani Students
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Everything Pakistani students need to know about studying in the United Kingdom including visa requirements, admission process, costs, and university information.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>January 28, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-4">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The United Kingdom remains one of the most prestigious destinations for higher education, attracting students from around the world. With 166 public and private universities offering over 50,000 programs, the UK provides exceptional educational opportunities for Pakistani students.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The UK education system is renowned for its academic excellence, research opportunities, and shorter degree programs. British universities consistently rank among the world's best, offering internationally recognized qualifications that open doors to global career opportunities.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This comprehensive guide covers everything Pakistani students need to know about studying in the UK, from admission requirements to visa processes and living costs.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#why-study-uk" className="hover:bg-[#1845B3]">Why Choose to Study in UK?</a></li>
                  <li><a href="#education-system" className="hover:bg-[#1845B3]">UK Education System</a></li>
                  <li><a href="#visa-requirements" className="hover:bg-[#1845B3]">Study Visa Requirements</a></li>
                  <li><a href="#english-requirements" className="hover:bg-[#1845B3]">English Language Requirements</a></li>
                  <li><a href="#tuition-costs" className="hover:bg-[#1845B3]">Tuition Fees and Living Costs</a></li>
                  <li><a href="#documents-checklist" className="hover:bg-[#1845B3]">Required Documents</a></li>
                  <li><a href="#application-process" className="hover:bg-[#1845B3]">Application Process</a></li>
                  <li><a href="#faqs" className="hover:bg-[#1845B3]">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* UK Overview */}
              <div className="bg-blue-50 border-l-4 border-l-[#1D50C9] p-6 mb-8">
                <h3 className="text-xl font-semibold text-[#1565c0] mb-4">Study in UK at a Glance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Universities:</strong> 166 institutions</p>
                    <p className="text-gray-700 mb-2"><strong>Programs:</strong> 50,000+ courses</p>
                    <p className="text-gray-700 mb-2"><strong>Visa Success:</strong> Highest for Pakistani students</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Language:</strong> English</p>
                    <p className="text-gray-700 mb-2"><strong>Student Visa:</strong> Student Route Visa</p>
                    <p className="text-gray-700"><strong>Work Rights:</strong> 20 hours/week</p>
                  </div>
                </div>
              </div>

              {/* Why Study in UK Section */}
              <section id="why-study-uk" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-l-[#1D50C9] pl-4">Why Choose to Study in UK?</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The UK offers numerous advantages for international students, making it a top choice for quality education.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <DollarSign className="w-5 h-5 mr-2" />
                        Cost-effective Education
                      </h3>
                      <p className="text-gray-700">Competitive tuition fees and shorter program durations make UK education affordable.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Shorter Programs
                      </h3>
                      <p className="text-gray-700">Intensive undergraduate and postgraduate programs save time and money.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        No Language Barrier
                      </h3>
                      <p className="text-gray-700">English-taught programs eliminate language learning challenges.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Highest Visa Ratio
                      </h3>
                      <p className="text-gray-700">UK has the highest visa success rate for Pakistani students.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Work-Study Programs
                      </h3>
                      <p className="text-gray-700">Opportunity to work part-time while studying to gain experience.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Cultural Diversity
                      </h3>
                      <p className="text-gray-700">Experience rich cultural diversity and historical heritage.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        Quality of Life
                      </h3>
                      <p className="text-gray-700">Safe, supportive environment with excellent quality of life.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        Simple Visa Process
                      </h3>
                      <p className="text-gray-700">Relatively straightforward visa application process.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Visa Requirements Section */}
              <section id="visa-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-l-[#1D50C9] pl-4">Study Visa Requirements for Pakistani Students</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pakistani students must obtain a Student Route visa to study in the UK. Here are the essential requirements:
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Original Passport</h3>
                    <p className="text-gray-700">Valid passport required for visa application.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">CAS (Confirmation of Acceptance for Study)</h3>
                    <p className="text-gray-700">Confirmation letter from your UK university accepting you for study.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Medical Certificate</h3>
                    <p className="text-gray-700">Tuberculosis (TB) test results required for Pakistani applicants. Must be from UKVI approved TB test centers:</p>
                    <ul className="mt-2 text-gray-700 space-y-1">
                      <li>• AMC</li>
                      <li>• Dr. Arshad Health Associates</li>
                      <li>• IOM</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Proof of Relationship</h3>
                    <p className="text-gray-700">Birth Certificate or Family Registration Certificate if applicable.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Proof of Finances</h3>
                    <p className="text-gray-700">Bank statements and financial documents showing ability to pay tuition and living expenses.</p>
                  </div>
                </div>
              </section>

              {/* English Requirements Section */}
              <section id="english-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-l-[#1D50C9] pl-4">English Language Requirements</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  UK universities require proof of English proficiency through standardized tests.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">IELTS Requirements</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Undergraduate:</h4>
                        <p className="text-gray-700">6.0 overall with no less than 5.5 in any band</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Postgraduate:</h4>
                        <p className="text-gray-700">6.5 overall with no less than 6.0 in any band</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">PTE Requirements</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Undergraduate:</h4>
                        <p className="text-gray-700">59 minimum in each section (varies by university)</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Postgraduate:</h4>
                        <p className="text-gray-700">59 minimum in each section</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tuition Costs Section */}
              <section id="tuition-costs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-l-[#1D50C9] pl-4">Tuition Fees</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  UK tuition fees are competitive and offer excellent value for money.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Undergraduate Programs</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold #1845B3 mb-2">£11,000 - £17,000</div>
                      <p className="text-gray-700 text-sm">per year</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Graduate Programs</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold #1845B3 mb-2">£11,000 - £17,000</div>
                      <p className="text-gray-700 text-sm">per year</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Documents Checklist Section */}
              <section id="documents-checklist" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Required Documents Checklist</h2>
                
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      All Educational Documents
                    </h3>
                    <p className="text-gray-700">Transcripts and certificates from all levels of education.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Statement of Purpose
                    </h3>
                    <p className="text-gray-700">Personal statement explaining your academic goals and motivation.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      IELTS Score (if applicable)
                    </h3>
                    <p className="text-gray-700">Valid IELTS or equivalent English proficiency test scores.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      2 Recommendation Letters
                    </h3>
                    <p className="text-gray-700">Academic or professional references supporting your application.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Experience Certificate
                    </h3>
                    <p className="text-gray-700">Work experience documentation if applicable.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Europass CV
                    </h3>
                    <p className="text-gray-700">European format CV detailing your education and experience.</p>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What is the success rate for UK student visas for Pakistani students?</h3>
                    <p className="text-gray-700">The UK has the highest visa success rate for Pakistani students compared to other study destinations.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Can I work while studying in the UK?</h3>
                    <p className="text-gray-700">Yes, international students can work up to 20 hours per week during their studies.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Are UK degrees shorter than other countries?</h3>
                    <p className="text-gray-700">Yes, UK undergraduate programs are typically 3 years and master's programs are 1 year, making them more time and cost-effective.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What TB test centers are approved for UK visa applications?</h3>
                    <p className="text-gray-700">UKVI approved centers include AMC, Dr. Arshad Health Associates, and IOM.</p>
                  </div>
                </div>
              </section>

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

              {/* CTA Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-[#1565c0] mb-4">Ready to Start Your UK Study Journey?</h3>
                <p className="text-gray-700 mb-6">Dunya Consultants provides expert guidance for UK university applications and visa processes. Contact us for personalized assistance.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="#1845B3 text-white px-6 py-3 rounded-lg font-medium hover:bg-#1a73e8 transition-colors">
                    Get Free Consultation
                  </a>
                  <a href="tel:+923041110947" className="border #1845B3 #1845B3 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Call Now: +92 304 111 0947
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Contact Form */}
              <ContactForm />
              
              {/* Search Bar */}
              <Card className="bg-white border border-gray-200 shadow-sm">
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
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-[#1D50C9] flex items-center">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share This Article
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center justify-center w-12 h-12 min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] bg-[#1D50C9] text-white rounded-full hover:bg-[#1845B3] transition-colors border-0 p-0 overflow-hidden"
                      style={{ borderRadius: '50%', aspectRatio: '1/1' }}
                    >
                      <Facebook className="w-5 h-5 text-white fill-white" style={{ color: 'white', fill: 'white' }} />
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex items-center justify-center w-12 h-12 min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] bg-[#1D50C9] text-white rounded-full hover:bg-[#1845B3] transition-colors border-0 p-0 overflow-hidden"
                      style={{ borderRadius: '50%', aspectRatio: '1/1' }}
                    >
                      <Twitter className="w-5 h-5 text-white fill-white" style={{ color: 'white', fill: 'white' }} />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center justify-center w-12 h-12 min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] bg-[#1D50C9] text-white rounded-full hover:bg-[#1845B3] transition-colors border-0 p-0 overflow-hidden"
                      style={{ borderRadius: '50%', aspectRatio: '1/1' }}
                    >
                      <Linkedin className="w-5 h-5 text-white fill-white" style={{ color: 'white', fill: 'white' }} />
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="flex items-center justify-center w-12 h-12 min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] bg-[#1D50C9] text-white rounded-full hover:bg-[#1845B3] transition-colors border-0 p-0 overflow-hidden"
                      style={{ borderRadius: '50%', aspectRatio: '1/1' }}
                    >
                      <Copy className="w-5 h-5 text-white fill-white" style={{ color: 'white', fill: 'white' }} />
                    </button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Info */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-[#1565c0]">Quick Study Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Student Visa:</span>
                    <span className="font-medium">Student Route</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Universities:</span>
                    <span className="font-medium">166</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Programs:</span>
                    <span className="font-medium">50,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Hours:</span>
                    <span className="font-medium">20/week</span>
                  </div>
                </div>
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

              {/* Contact Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Dunya Consultants</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Phone:</strong> +92 304 111 0947</p>
                  <p><strong>Email:</strong> info@dunyaconsultants.com</p>
                  <p><strong>Address:</strong> Alif Tower, Buhadur Shah Zafar Road, Sargodha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}