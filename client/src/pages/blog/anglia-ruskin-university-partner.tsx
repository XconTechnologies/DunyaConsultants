import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Clock, User, Eye, Share2, Facebook, Twitter, Linkedin, Calendar, ExternalLink, Phone, Mail, MapPin, FileText, Award, Globe, GraduationCap, Users, BookOpen, TrendingUp, CheckCircle } from 'lucide-react';

export default function AngliaRuskinUniversityPartner() {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = "Anglia Ruskin University – A Trusted Partner of Dunya Consultants";
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };
    
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">University Partnership</span>
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> March 19, 2025</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 12 min read</span>
            <span className="flex items-center"><Eye className="w-4 h-4 mr-1" /> 2,847 views</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white">
              {/* Hero Image */}
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Anglia Ruskin University Campus"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-4xl font-bold mb-2">Anglia Ruskin University – A Trusted Partner of Dunya Consultants</h1>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center"><User className="w-4 h-4 mr-2" /> Dunya Consultants</span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> March 19, 2025</span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
                  <p className="text-lg text-gray-700 mb-0">
                    Anglia Ruskin University (ARU) is one of the most popular public universities located in East Anglia, UK, with a history of around 162 years. Named "University of the Year" in 2023, ARU offers exceptional education opportunities for international students through its partnership with Dunya Consultants.
                  </p>
                </div>

                {/* ARU Overview */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 border-l-4 border-blue-500 pl-4">About Anglia Ruskin University</h2>
                  <p className="text-gray-700 mb-4">
                    Anglia Ruskin University is a prestigious institution that has been providing quality education for over 162 years. Located in East Anglia, UK, ARU was awarded the "University of the Year" title in 2023 for its innovative and student-friendly approach to education.
                  </p>
                  <p className="text-gray-700 mb-6">
                    The university offers a wide range of courses across various disciplines including Finance, Acting, Accounting, Drama, Art, Computer Science, Architecture, Data Science, Education, Environment, Marketing, Medicine, Law, Music, and Nursing.
                  </p>

                  {/* Key Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center">
                      <Award className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">162+</div>
                      <div className="text-sm">Years of History</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg text-center">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">2023</div>
                      <div className="text-sm">University of the Year</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg text-center">
                      <GraduationCap className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">Gold</div>
                      <div className="text-sm">Teaching Excellence</div>
                    </div>
                  </div>
                </section>

                {/* Why Choose ARU */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 border-l-4 border-green-500 pl-4">Why Choose Anglia Ruskin University?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                      <h3 className="text-lg font-semibold mb-2">Gold-Rated Teaching</h3>
                      <p className="text-gray-600">ARU has been awarded a Gold rating for teaching excellence and won Times Higher Education University of the Year 2023.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <Users className="w-8 h-8 text-blue-500 mb-3" />
                      <h3 className="text-lg font-semibold mb-2">Student Support</h3>
                      <p className="text-gray-600">Comprehensive student support services with flexible study options to help balance education with personal life.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <Globe className="w-8 h-8 text-purple-500 mb-3" />
                      <h3 className="text-lg font-semibold mb-2">Global Recognition</h3>
                      <p className="text-gray-600">Ranked among the top universities in the UK and worldwide by Times Higher Education.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <BookOpen className="w-8 h-8 text-orange-500 mb-3" />
                      <h3 className="text-lg font-semibold mb-2">Practical Learning</h3>
                      <p className="text-gray-600">Learn through practical experiences including internships, live projects, and comprehensive online resources.</p>
                    </div>
                  </div>
                </section>

                {/* University Rankings */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 border-l-4 border-purple-500 pl-4">ARU Rankings & Recognition</h2>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">UK Rankings</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• 115th in Times University Guide 2024</li>
                          <li>• 102nd in Guardian University Guide 2024</li>
                          <li>• Top 40 universities in UK (THE World Rankings)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Global Rankings</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• 301-350 range globally (THE World Rankings)</li>
                          <li>• #814 worldwide (US News Best Global Universities)</li>
                          <li>• #1412 out of 20,966 universities (CWUR)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Partnership with Dunya Consultants */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 border-l-4 border-orange-500 pl-4">Partnership with Dunya Consultants</h2>
                  <div className="bg-orange-50 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 mb-4">
                      Anglia Ruskin University London works closely with Dunya Consultants to guide and support Pakistani students in their journey to study in the United Kingdom. This partnership ensures students receive the best advice and a smooth application process.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">What We Provide:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Complete application guidance</li>
                          <li>• Visa processing support</li>
                          <li>• Scholarship assistance</li>
                          <li>• Pre-departure preparation</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">ARU Benefits:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Quality education programs</li>
                          <li>• Industry connections</li>
                          <li>• Career opportunities</li>
                          <li>• International recognition</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Admission Requirements */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 border-l-4 border-red-500 pl-4">Admission Requirements</h2>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">English Language Requirements</h3>
                    <p className="text-gray-700 mb-4">
                      International students need to meet the following English language requirements:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-red-600">5.5</div>
                        <div className="text-sm text-gray-600">IELTS Minimum</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-red-600">72</div>
                        <div className="text-sm text-gray-600">TOEFL iBT</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-red-600">59</div>
                        <div className="text-sm text-gray-600">PTE Academic</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Application Process */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 border-l-4 border-teal-500 pl-4">How to Apply</h2>
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">1</div>
                        <h3 className="font-semibold mb-2">Choose Your Course</h3>
                        <p className="text-sm text-gray-600">Select from ARU's wide range of programs across various disciplines.</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">2</div>
                        <h3 className="font-semibold mb-2">Submit Application</h3>
                        <p className="text-sm text-gray-600">Complete your online application with all required documents.</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">3</div>
                        <h3 className="font-semibold mb-2">Meet Requirements</h3>
                        <p className="text-sm text-gray-600">Fulfill academic and English language requirements for your chosen program.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 border-l-4 border-blue-500 pl-4">Conclusion</h2>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      Anglia Ruskin University provides specialized courses in various fields including land-based studies, animal sciences, and sports. It's renowned for its excellent programs in arts, health, education, and social care, along with popular courses in psychology, engineering, and life sciences.
                    </p>
                    <p className="text-gray-700">
                      As a trusted partner of Dunya Consultants, ARU provides Pakistani students with high-quality education and career opportunities. Our partnership ensures students receive comprehensive support throughout the entire admission and visa process, making their dream of studying at ARU a reality.
                    </p>
                  </div>
                </section>

                {/* Share Buttons */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Share this article:</span>
                    <button onClick={() => handleShare('facebook')} className="text-blue-600 hover:text-blue-800">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleShare('twitter')} className="text-blue-400 hover:text-blue-600">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="text-blue-700 hover:text-blue-900">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Eye className="w-4 h-4" />
                    <span>2,847 views</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Contact Form */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Get Free Consultation</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <select className="w-full px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option value="">Select Country</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="USA">United States</option>
                  </select>
                  <textarea
                    placeholder="Your Message"
                    rows={3}
                    className="w-full px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>

              {/* Quick Contact */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Call Us</div>
                      <div className="text-sm text-gray-600">+92 304 1110947</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-gray-600">info@dunyaconsultants.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Head Office</div>
                      <div className="text-sm text-gray-600">Sargodha, Pakistan</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <Link href="/blog/study-in-uk" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">Complete Guide to Study in UK</div>
                    <div className="text-xs text-gray-500">March 15, 2025</div>
                  </Link>
                  <Link href="/blog/uk-student-visa" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">UK Student Visa Requirements</div>
                    <div className="text-xs text-gray-500">March 12, 2025</div>
                  </Link>
                  <Link href="/blog/uk-universities" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">Top Universities in UK</div>
                    <div className="text-xs text-gray-500">March 10, 2025</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}