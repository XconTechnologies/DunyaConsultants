import React, { useState } from 'react';
import { Calendar, Clock, User, FileText, GraduationCap, CheckCircle, Users, AlertCircle, BookOpen, DollarSign, MapPin, Search, Share2, Facebook, Twitter, Linkedin, Copy, Eye, ArrowRight } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ConsultationFormPopup from '@/components/consultation-form-popup';
import { Button } from '@/components/ui/button';
import { getBlogUrl } from '@/lib/blog-utils';

export default function StudyInCanadaCompleteGuide() {
  const [sidebarSearch, setSidebarSearch] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'Study in Canada Complete Guide - Dunya Consultants';

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
      excerpt: 'Comprehensive guide covering everything Pakistani students need to know about studying in the UK, from admission requirements to visa processes and living costs.',
      category: 'Study Guides',
      readTime: '12 min',
      href: getBlogUrl('study-in-uk-complete-guide')
    },
    {
      id: 'study-in-australia-guide',
      title: 'Study in Australia Guide',
      excerpt: 'Complete information about studying in Australia, including university requirements, visa processes, and living costs for Pakistani students.',
      category: 'Study Guides', 
      readTime: '10 min',
      href: getBlogUrl('study-in-australia-guide')
    },
    {
      id: 'study-in-finland-guide',
      title: 'Study in Finland Guide',
      excerpt: 'Everything about studying in Finland, known for world-class education system and exceptional quality of life for international students.',
      category: 'Study Guides',
      readTime: '9 min',
      href: getBlogUrl('study-in-finland-guide')
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
              <span className="#1D50C9 text-white px-4 py-2 rounded-full text-sm font-medium">
                Study Destination
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Study in Canada: Complete Guide for Pakistani Students
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Everything Pakistani students need to know about studying in Canada including visa requirements, admission process, costs, and pathway to permanent residence.
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
                <span>14 min read</span>
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
                  Canada stands as one of the world's premier destinations for international education, offering exceptional opportunities for Pakistani students. With 223 public and private universities and 213 public colleges offering over 8,000 programs, Canada provides diverse educational pathways for international students.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  What makes Canada particularly attractive is its pathway to permanent residence, excellent quality of life, and welcoming multicultural environment. Canadian education is globally recognized, and the country consistently ranks high in quality of life indexes.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This comprehensive guide covers everything Pakistani students need to know about studying in Canada, from admission requirements to post-graduation opportunities.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="hidden md:block bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#why-study-canada" className="hover:bg-[#1845B3]">Why Choose to Study in Canada?</a></li>
                  <li><a href="#education-system" className="hover:bg-[#1845B3]">Canadian Education System</a></li>
                  <li><a href="#visa-requirements" className="hover:bg-[#1845B3]">Study Visa Requirements</a></li>
                  <li><a href="#english-requirements" className="hover:bg-[#1845B3]">English Language Requirements</a></li>
                  <li><a href="#tuition-costs" className="hover:bg-[#1845B3]">Tuition Fees and GIC</a></li>
                  <li><a href="#documents-checklist" className="hover:bg-[#1845B3]">Required Documents</a></li>
                  <li><a href="#application-process" className="hover:bg-[#1845B3]">Application Process</a></li>
                  <li><a href="#faqs" className="hover:bg-[#1845B3]">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Canada Overview */}
              <div className="bg-blue-50 border-l-4 #1D50C9 p-6 mb-8">
                <h3 className="text-xl font-semibold text-[#1565c0] mb-4">Study in Canada at a Glance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Universities:</strong> 223 institutions</p>
                    <p className="text-gray-700 mb-2"><strong>Colleges:</strong> 213 public colleges</p>
                    <p className="text-gray-700 mb-2"><strong>Programs:</strong> 8,000+ courses</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Quality Ranking:</strong> 3rd in Life Quality Index</p>
                    <p className="text-gray-700 mb-2"><strong>Work Permit:</strong> Available after graduation</p>
                    <p className="text-gray-700"><strong>PR Pathway:</strong> Within 3 years</p>
                  </div>
                </div>
              </div>

              {/* Why Study in Canada Section */}
              <section id="why-study-canada" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Why Choose to Study in Canada?</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Canada offers unique advantages that make it an ideal destination for Pakistani students seeking quality education and future opportunities.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Identical Facilities as Residents
                      </h3>
                      <p className="text-gray-700">International students enjoy the same facilities and rights as Canadian residents.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        3rd Rank in Life Quality Index
                      </h3>
                      <p className="text-gray-700">Canada consistently ranks among the top countries for quality of life.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        Top-Ranked Universities
                      </h3>
                      <p className="text-gray-700">7 Canadian universities rank among the top 200 universities worldwide.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Work Permit After Graduation
                      </h3>
                      <p className="text-gray-700">Automatic work permit eligibility right after graduation.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        No Language Barrier
                      </h3>
                      <p className="text-gray-700">English-speaking environment eliminates communication challenges.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        Permanent Residence Pathway
                      </h3>
                      <p className="text-gray-700">Eligible to apply for permanent residence within 3 years.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <DollarSign className="w-5 h-5 mr-2" />
                        GIC Financial Security
                      </h3>
                      <p className="text-gray-700">GIC (CAD 20,635) provides financial security and peace of mind.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Lower Cost of Living
                      </h3>
                      <p className="text-gray-700">Affordable living costs ranging from CAD 750-1637 monthly.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <FileText className="w-5 h-5 mr-2" />
                        Spouse Work Rights
                      </h3>
                      <p className="text-gray-700">Spouses can work full-time while the main applicant studies.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Gateway to USA & Europe
                      </h3>
                      <p className="text-gray-700">Pathway access to USA, France, and Yukon Territory.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Visa Requirements Section */}
              <section id="visa-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Study Visa Requirements for Pakistani Students</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pakistani students need a study permit to study in Canada. Total visa costs are approximately 80-90 lacs PKR.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Official Transcripts</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• High school transcripts</li>
                      <li>• Transcripts from all post-secondary institutions</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">GIC (Guaranteed Investment Certificate)</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Amount:</strong> CAD 20,635</p>
                      <p><strong>Purpose:</strong> Proof of funds for living expenses</p>
                      <ul className="mt-2 space-y-1">
                        <li>• Proof of student loan (if any)</li>
                        <li>• Bank statement for the last four months</li>
                        <li>• Bank draft convertible to CAD</li>
                        <li>• Proof of paid housing and tuition fees</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Photos and Documentation</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 2 recent passport-size photos (date of birth written on back)</li>
                      <li>• Marriage License (photocopy if applicable)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Medical & Biometric Information</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Medical Certificate</li>
                      <li>• Biometric Information</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* English Requirements Section */}
              <section id="english-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">English Language Requirements</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">IELTS Requirements</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Undergraduate:</h4>
                        <p className="text-gray-700">6.0 - 6.5 overall</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Postgraduate:</h4>
                        <p className="text-gray-700">6.0 - 6.5 overall</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">PTE Requirements</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Undergraduate:</h4>
                        <p className="text-gray-700">60 overall</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Postgraduate:</h4>
                        <p className="text-gray-700">60 - 65 overall</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tuition Costs Section */}
              <section id="tuition-costs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Tuition Fees</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Undergraduate Programs</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold #1845B3 mb-2">CAD $36,100</div>
                      <p className="text-gray-700 text-sm">per year (average)</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Graduate Programs</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold #1845B3 mb-2">CAD $21,100</div>
                      <p className="text-gray-700 text-sm">per year (average)</p>
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
                      Original Passport
                    </h3>
                    <p className="text-gray-700">Valid passport for the duration of your studies.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      All Attested Educational Documents
                    </h3>
                    <p className="text-gray-700">Complete academic transcripts and certificates, properly attested.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Degree & Transcript Attested Copies
                    </h3>
                    <p className="text-gray-700">Official copies of degrees and transcripts, properly attested.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      IELTS / PTE / TOEFL Score Card
                    </h3>
                    <p className="text-gray-700">Valid English proficiency test scores.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Supporting Documents
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Experience Certificate</li>
                      <li>• 2 Recommendation Letters</li>
                      <li>• GRE / GMAT (Optional)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What is GIC and why is it required?</h3>
                    <p className="text-gray-700">GIC (Guaranteed Investment Certificate) worth CAD 20,635 proves you have funds for living expenses and provides financial security during studies.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Can my spouse work while I study in Canada?</h3>
                    <p className="text-gray-700">Yes, spouses of full-time students in Canada can obtain an open work permit and work full-time.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">How can I apply for permanent residence after graduation?</h3>
                    <p className="text-gray-700">You can apply for permanent residence within 3 years through various programs like Express Entry, Provincial Nominee Program, or Canadian Experience Class.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What are the living costs in Canada?</h3>
                    <p className="text-gray-700">Living costs range from CAD 750-1637 monthly, depending on the city and lifestyle choices.</p>
                  </div>
                </div>
              </section>

              {/* Related Blogs Section */}
              <section className="mb-10">
                <h2 className="text-3xl font-bold mb-8 text-center text-[#1D50C9]">Related Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedBlogs.map((blog, index) => (
                    <div key={blog.id} className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="bg-[#1D50C9]/10 text-[#1D50C9] text-xs font-medium px-2.5 py-1 rounded-full">
                            {blog.category}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-3">
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
                          className="inline-flex items-center text-[#1D50C9] font-medium text-sm"
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
                <h3 className="text-2xl font-bold text-[#1565c0] mb-4">Ready to Start Your Canada Study Journey?</h3>
                <p className="text-gray-700 mb-6">Dunya Consultants provides comprehensive guidance for Canadian university applications, visa processes, and GIC arrangements. Contact us for expert assistance.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-[#1845B3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a73e8] transition-colors">
                    Get Free Consultation
                  </a>
                  <Button 
                    onClick={() => setIsPopupOpen(true)}
                    className="bg-white text-[#1845B3] border-2 border-[#1845B3] hover:bg-[#1845B3] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Connect now
                  </Button>
                  <a href="tel:+923041110947" className="border border-[#1845B3] text-[#1845B3] px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
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
                  <div className="flex justify-start gap-3">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] bg-[#1D50C9] text-white rounded-full hover:bg-[#1845B3] transition-colors border-0 p-0 overflow-hidden"
                      style={{ borderRadius: '50%', aspectRatio: '1/1' }}
                    >
                      <Facebook className="w-4 h-4 text-white fill-white" style={{ color: 'white', fill: 'white' }} />
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] bg-[#1D50C9] text-white rounded-full hover:bg-[#1845B3] transition-colors border-0 p-0 overflow-hidden"
                      style={{ borderRadius: '50%', aspectRatio: '1/1' }}
                    >
                      <Twitter className="w-4 h-4 text-white fill-white" style={{ color: 'white', fill: 'white' }} />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] bg-[#1D50C9] text-white rounded-full hover:bg-[#1845B3] transition-colors border-0 p-0 overflow-hidden"
                      style={{ borderRadius: '50%', aspectRatio: '1/1' }}
                    >
                      <Linkedin className="w-4 h-4 text-white fill-white" style={{ color: 'white', fill: 'white' }} />
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] bg-[#1D50C9] text-white rounded-full hover:bg-[#1845B3] transition-colors border-0 p-0 overflow-hidden"
                      style={{ borderRadius: '50%', aspectRatio: '1/1' }}
                    >
                      <Copy className="w-4 h-4 text-white fill-white" style={{ color: 'white', fill: 'white' }} />
                    </button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Info */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-[#1565c0]">Quick Study Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">GIC Required:</span>
                    <span className="font-medium">CAD 20,635</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Universities:</span>
                    <span className="font-medium">223</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Colleges:</span>
                    <span className="font-medium">213</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">PR Pathway:</span>
                    <span className="font-medium">Within 3 years</span>
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
                  <p><strong>Address:</strong> Dunya Consultant 106 Sadium Road, Opposite Bajwa Trauma Centre, Sargodha.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Consultation Form Popup */}
      <CompactConsultationForm 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}