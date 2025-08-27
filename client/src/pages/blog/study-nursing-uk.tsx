import React, { useState } from 'react';
import { Heart, GraduationCap, FileText, Clock, DollarSign, MapPin, Users, CheckCircle, Search, Share2, Facebook, Twitter, Linkedin, Copy, ArrowRight } from 'lucide-react';
import ContactSection from '@/components/blog/ContactSection';
import ContactForm from '@/components/blog/ContactForm';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function StudyNursingUK() {
  const [sidebarSearch, setSidebarSearch] = useState("");

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'Study Nursing in UK Guide - Dunya Consultants';

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
      id: 'mbbs-in-australia-for-pakistani-students',
      title: 'MBBS in Australia for Pakistani Students',
      excerpt: 'Complete guide to pursuing medical studies in Australia, including admission requirements, costs, and career opportunities for Pakistani students.',
      category: 'Medical Studies', 
      readTime: '10 min',
      href: '/blog/mbbs-in-australia-for-pakistani-students'
    },
    {
      id: 'ielts-preparation-tips-and-tricks',
      title: 'IELTS Preparation Tips and Tricks',
      excerpt: 'Expert tips and strategies to achieve your target IELTS score for UK university admissions and healthcare professional registration.',
      category: 'Test Preparation',
      readTime: '8 min',
      href: '/blog/ielts-preparation-tips-and-tricks'
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Study Nursing in the UK</h1>
              <p className="mt-2 text-gray-600">Complete Guide for International Students</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-[#1565c0]">
                <Heart className="w-4 h-4 mr-1" />
                Healthcare Education
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80"
                  alt="Study Nursing in the UK"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Quick Facts */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-#1e3a8a mb-4">Program Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 #1845B3 mr-2" />
                    <span className="text-sm">Duration: 4 years</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 #1845B3 mr-2" />
                    <span className="text-sm">Cost: £14,000-£30,000/year</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 #1845B3 mr-2" />
                    <span className="text-sm">IELTS: 7.0 overall, 6.5 each</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 #1845B3 mr-2" />
                    <span className="text-sm">Includes practical placements</span>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Nursing is a highly respected and in-demand profession worldwide, making it an excellent career choice for students. 
                  The UK is particularly popular among international students seeking quality nursing education. To work as a nurse in the UK, 
                  international students must complete the Overseas Nursing Programme (ONP), which allows them to register as nurses with the NMC.
                </p>
                
                <p className="text-gray-700 leading-relaxed mt-4">
                  Once registered, nurses can work in hospitals, clinics, or private healthcare settings. A nursing degree in the UK typically 
                  takes four years to complete and includes both theoretical learning and practical training through hospital placements.
                </p>
              </div>

              {/* Best Universities */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 #1D50C9 pl-4">
                  Top 10 UK Universities for Nursing
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { rank: 1, name: "University of Dundee", location: "Scotland" },
                    { rank: 2, name: "University of Glasgow", location: "Scotland" },
                    { rank: 3, name: "University of Edinburgh", location: "Scotland" },
                    { rank: 4, name: "University of Liverpool", location: "England" },
                    { rank: 5, name: "Kingston University London", location: "England" },
                    { rank: 6, name: "University of York", location: "England" },
                    { rank: 7, name: "Manchester Metropolitan University", location: "England" },
                    { rank: 8, name: "Cardiff University", location: "Wales" },
                    { rank: 9, name: "University of Sheffield", location: "England" },
                    { rank: 10, name: "University of Northampton", location: "England" }
                  ].map((uni, index) => (
                    <div key={index} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{uni.rank}. {uni.name}</h3>
                          <p className="text-sm text-gray-600 flex items-center mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {uni.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="#1845B3 font-bold text-sm">{uni.rank}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Eligibility Criteria */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 #1D50C9 pl-4">
                  Eligibility Criteria for International Students
                </h2>
                <div className="bg-white rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Academic Requirements</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 #1D50C9 mr-2 mt-0.5" />
                          <span className="text-sm">Qualifications equal to UK A-levels or relevant bachelor's degree</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 #1D50C9 mr-2 mt-0.5" />
                          <span className="text-sm">Strong background in sciences (Biology, Chemistry)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Other Requirements</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 #1D50C9 mr-2 mt-0.5" />
                          <span className="text-sm">IELTS 7.0 overall, 6.5 in each section</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 #1D50C9 mr-2 mt-0.5" />
                          <span className="text-sm">Pass character and health checks</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 #1D50C9 mr-2 mt-0.5" />
                          <span className="text-sm">Criminal record check (DBS)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Required Documents */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 #1D50C9 pl-4">
                  Required Documents
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Academic Documents</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Academic transcripts</li>
                      <li>• Certificates of graduation</li>
                      <li>• English language proficiency (IELTS/TOEFL)</li>
                      <li>• Personal statement</li>
                      <li>• Letters of recommendation</li>
                    </ul>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Personal Documents</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Valid passport</li>
                      <li>• CV/Resume</li>
                      <li>• Proof of funds</li>
                      <li>• DBS check</li>
                      <li>• Medical check</li>
                      <li>• NMC account (if applicable)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Application Process */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 #1D50C9 pl-4">
                  Application Process
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center #1845B3 font-semibold mr-3">1</div>
                      <h3 className="text-lg font-semibold">Choose Your University & Program</h3>
                    </div>
                    <p className="text-gray-600 ml-11">Research nursing programs (Adult Nursing, Mental Health Nursing, etc.) and check entry requirements</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center #1845B3 font-semibold mr-3">2</div>
                      <h3 className="text-lg font-semibold">Apply Through UCAS</h3>
                    </div>
                    <p className="text-gray-600 ml-11">Create UCAS account, write personal statement, and submit references</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center #1845B3 font-semibold mr-3">3</div>
                      <h3 className="text-lg font-semibold">Prove English Proficiency</h3>
                    </div>
                    <p className="text-gray-600 ml-11">Take IELTS or equivalent test and check each university's specific requirements</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center #1845B3 font-semibold mr-3">4</div>
                      <h3 className="text-lg font-semibold">Complete Additional Requirements</h3>
                    </div>
                    <p className="text-gray-600 ml-11">Health checks, DBS check, immunization records, and possible interview</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center #1845B3 font-semibold mr-3">5</div>
                      <h3 className="text-lg font-semibold">After Applying</h3>
                    </div>
                    <p className="text-gray-600 ml-11">Track UCAS application, accept offer, arrange accommodation, and prepare for studies</p>
                  </div>
                </div>
              </section>

              {/* Cost Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 #1D50C9 pl-4">
                  Cost for International Students
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Tuition Fees</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Standard Universities:</span>
                          <span className="font-semibold">£14,000-£30,000/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Private Institutions:</span>
                          <span className="font-semibold">Up to £35,000/year</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Financial Support</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 #1D50C9 mr-2" />
                          <span>Scholarships available</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 #1D50C9 mr-2" />
                          <span>Financial aid programs</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 #1D50C9 mr-2" />
                          <span>NHS bursaries (for some programs)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Career Prospects */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 #1D50C9 pl-4">
                  Career Prospects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-#1e3a8a mb-2">Work Settings</h3>
                    <ul className="text-sm text-[#1565c0] space-y-1">
                      <li>• NHS hospitals and clinics</li>
                      <li>• Private healthcare facilities</li>
                      <li>• Community health centers</li>
                      <li>• Residential care homes</li>
                      <li>• Mental health services</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-#1e3a8a mb-2">Specializations</h3>
                    <ul className="text-sm text-[#1565c0] space-y-1">
                      <li>• Adult nursing</li>
                      <li>• Mental health nursing</li>
                      <li>• Children's nursing</li>
                      <li>• Learning disability nursing</li>
                      <li>• Midwifery</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* NHS Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 #1D50C9 pl-4">
                  NHS Career Pathway
                </h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 #1845B3 mr-3" />
                    <h3 className="text-lg font-semibold text-#1e3a8a">NHS Employment</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The National Health Service (NHS) offers structured career progression with standardized pay scales. 
                    Nurses advance through different bands based on experience and qualifications.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Band 5</h4>
                      <p className="text-sm text-gray-600">Newly qualified nurses</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Band 6</h4>
                      <p className="text-sm text-gray-600">Experienced nurses, team leaders</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Band 7+</h4>
                      <p className="text-sm text-gray-600">Senior nurses, managers</p>
                    </div>
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
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
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

              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Guidance?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get expert advice on nursing programs in the UK
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Phone:</span>
                    <span className="ml-2">+92 304 1110947</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Email:</span>
                    <span className="ml-2">info@dunyaconsultants.com</span>
                  </div>
                </div>
                <button className="w-full #1845B3 text-white py-2 px-4 rounded-lg hover:bg-#1a73e8 transition-colors mt-4">
                  Get Consultation
                </button>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="#universities" className="block text-sm text-gray-600 hover:bg-[#1845B3]">Top Universities</a>
                  <a href="#eligibility" className="block text-sm text-gray-600 hover:bg-[#1845B3]">Eligibility</a>
                  <a href="#documents" className="block text-sm text-gray-600 hover:bg-[#1845B3]">Documents</a>
                  <a href="#application" className="block text-sm text-gray-600 hover:bg-[#1845B3]">Application Process</a>
                  <a href="#cost" className="block text-sm text-gray-600 hover:bg-[#1845B3]">Cost Information</a>
                  <a href="#career" className="block text-sm text-gray-600 hover:bg-[#1845B3]">Career Prospects</a>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to pursue nursing studies in the UK? Contact our expert team for personalized guidance and comprehensive support throughout your application journey.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}