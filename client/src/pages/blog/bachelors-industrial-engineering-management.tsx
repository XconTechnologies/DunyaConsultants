import { ArrowLeft, Clock, User, Share2, Download, Settings, TrendingUp, Building, Users, CheckCircle, FileText, BookOpen, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';

export default function BachelorsIndustrialEngineeringManagement() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="flex items-center text-gray-600 hover:text-blue-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>March 7, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>8 min read</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Hero Section */}
      <div className="relative w-full h-96 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
      }}>
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-red-600/80"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Bachelors in Industrial Engineering and Management</h1>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto">Complete Guide to Industrial Engineering Programs Worldwide</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm">
              <div className="p-8">
                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Are you interested in studying Industrial Engineering and Management? Do you want to know what an industrial 
                    engineer does? This Bachelor's program teaches you how to combine business and technology. You will learn how 
                    companies work, how they manage people, and how they improve production processes.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">What You'll Learn</h3>
                    <ul className="text-blue-800 space-y-1">
                      <li>• How to combine business and technology effectively</li>
                      <li>• Company operations and people management</li>
                      <li>• Production process improvement techniques</li>
                      <li>• Problem-solving and analytical skills</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Settings className="w-8 h-8 text-orange-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Technical Skills</h3>
                      </div>
                      <p className="text-gray-700">Learn modern production techniques, quality control, and process optimization to improve business efficiency.</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Business Acumen</h3>
                      </div>
                      <p className="text-gray-700">Develop management skills, understand business operations, and learn to make strategic decisions for companies.</p>
                    </div>
                  </div>

                  <p className="mb-6">
                    The program helps you understand modern businesses and the challenges they face. In just three years, you will 
                    get problem-solving skills and hands-on experience. You will also develop the ability to keep learning and 
                    improving throughout your career. This degree gives you the knowledge to work in different industries or even 
                    start your own business.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Universities Offering Industrial Engineering and Management
                  </h2>
                  <p className="mb-6">
                    Many universities worldwide provide Industrial Management degrees. Here are some top institutions across 
                    different countries:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Universities Worldwide:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Karelia University Finland</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Germany Deggendorf Institute of Technology</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Eindhoven University of Technology</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">RWTH Aachen University</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Carnegie Mellon University</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Polytechnic University of Milan</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">University of Cambridge</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Imperial College London</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">University of Hong Kong</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Eligibility Criteria for Industrial Engineering and Management
                  </h2>
                  <p className="mb-6">
                    To apply for an Industrial Engineering and Management program, you need to meet specific academic and 
                    language requirements:
                  </p>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">Academic Requirements:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-green-800">At least 55-60% marks in FSc. Pre Engineering or ICS</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-green-800">IELTS score of 6.0 overall or equivalent</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-green-800">PTE score of 55 overall or equivalent</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Documents Required for Industrial Engineering and Management
                  </h2>
                  <p className="mb-6">
                    To apply for an industrial management course, you need these essential documents:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    <div className="bg-white border rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <FileText className="w-5 h-5 text-blue-600 mr-2" />
                        <h4 className="font-medium text-gray-900">Academic Documents</h4>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Original mark sheet from qualifying exam</li>
                        <li>• Transfer Certificate from previous school</li>
                        <li>• Migration Certificate</li>
                        <li>• Conduct Certificate</li>
                      </ul>
                    </div>

                    <div className="bg-white border rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <FileText className="w-5 h-5 text-blue-600 mr-2" />
                        <h4 className="font-medium text-gray-900">Personal Documents</h4>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Proof of English language proficiency</li>
                        <li>• Motivation letter</li>
                        <li>• Curriculum Vitae</li>
                        <li>• Recommendation letters (if required)</li>
                        <li>• Proof of date of birth</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    How to Apply for an Industrial Engineering and Management Program?
                  </h2>
                  <p className="mb-6">
                    Follow these simple steps to apply for your Industrial Engineering and Management program:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                        <h3 className="text-lg font-semibold text-gray-900">Research Universities</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Go to the official website and search for Industrial Engineering and Management programs. Look for 
                        universities that offer this program in your preferred country.
                      </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                        <h3 className="text-lg font-semibold text-gray-900">Check Requirements</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Search what qualifications you need, like English language skills, a bachelor's degree, and any 
                        entrance exams required by the university.
                      </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                        <h3 className="text-lg font-semibold text-gray-900">Prepare Documents</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Prepare your documents like academic transcripts, recommendation letters (if needed), and all 
                        required certificates mentioned above.
                      </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                        <h3 className="text-lg font-semibold text-gray-900">Submit Application</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Submit your application and pay the application fee. Some programs may ask for a small fee during 
                        the application process.
                      </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-4">5</div>
                        <h3 className="text-lg font-semibold text-gray-900">Track Status</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Keep checking the portal for updates on your admission status and respond to any additional 
                        requirements promptly.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Why Choose Industrial Engineering and Management?</h3>
                    <p className="text-blue-800">
                      Industrial Engineering and Management is an important field that helps businesses work better by improving 
                      efficiency and productivity. It uses engineering ideas to manage people, processes, and systems, making 
                      operations smoother and reducing costs. This helps companies maintain high quality and stay competitive 
                      in a fast-changing world.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">What is industrial engineering and management?</h3>
                      <p className="text-gray-700">
                        Industrial Engineering and Management is a field that uses engineering and business ideas to improve 
                        how companies work. It helps make processes more efficient and organized by combining technical knowledge 
                        with management skills.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I apply to an industrial management course?</h3>
                      <p className="text-gray-700">
                        To apply for a BS Industrial Management course, find universities that offer it, check their requirements, 
                        and fill out an online application form. Make sure you have all the required documents and meet the 
                        eligibility criteria before applying.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#universities" className="block text-sm text-gray-600 hover:text-blue-600">Universities</a>
                  <a href="#eligibility" className="block text-sm text-gray-600 hover:text-blue-600">Eligibility Criteria</a>
                  <a href="#documents" className="block text-sm text-gray-600 hover:text-blue-600">Required Documents</a>
                  <a href="#application" className="block text-sm text-gray-600 hover:text-blue-600">Application Process</a>
                  <a href="#faqs" className="block text-sm text-gray-600 hover:text-blue-600">FAQs</a>
                </nav>
              </div>

              {/* Contact Form */}
              <ContactForm />

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-blue-600 mr-3" />
                    <span className="text-sm text-gray-600">(+92) 304 1110947</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-blue-600 mr-3" />
                    <span className="text-sm text-gray-600">query@teamdunya.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-600 mr-3" />
                    <span className="text-sm text-gray-600">110 Link Stadium Road Sargodha</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}