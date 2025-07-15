import React from 'react';
import { Plane, FileText, DollarSign, Clock, MapPin, CheckCircle, AlertCircle, Star } from 'lucide-react';

export default function CyprusVisaPakistan() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cyprus Visa for Pakistan</h1>
              <p className="mt-2 text-gray-600">Complete Student Visa Guide for Pakistani Students</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Plane className="w-4 h-4 mr-1" />
                Study in Cyprus
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
                  src="https://images.unsplash.com/photo-1539650116574-75c0c6d8d3b3?auto=format&fit=crop&w=1200&q=80"
                  alt="Cyprus Visa for Pakistan"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Key Information */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Visa Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Duration: Up to 3 months (extendable)</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Fee: €60-€90</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Processing: 1 month</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Residence permit required for long stay</span>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Cyprus is becoming an increasingly popular destination for Pakistani students due to its affordable education, 
                  quality universities, and rich cultural heritage. The country offers study programs in various fields including 
                  arts, music, business, medicine, and more, making it an attractive option for international students.
                </p>
                
                <p className="text-gray-700 leading-relaxed mt-4">
                  One of the biggest advantages of studying in Cyprus is the opportunity to enter medical programs without entrance exams. 
                  Both public and private universities provide higher education with government support for funding and scholarships.
                </p>
              </div>

              {/* What is Cyprus Study Visa */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  What is a Cyprus Study Visa?
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    A Cyprus study visa is a special visa that allows students from outside the European Union to enter and stay in Cyprus for their studies. 
                    This visa permits students to stay in the country for up to three months initially.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-blue-900">Important Note</h3>
                        <p className="text-sm text-blue-800 mt-1">
                          For longer stays, students must apply for a temporary residence permit, which allows them to continue 
                          their studies in Cyprus for up to four years.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Required Documents */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Required Documents
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Academic Documents</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Transcript of previous courses and grades</li>
                      <li>• High school or bachelor's degree certificate</li>
                      <li>• Test scores (if required by university)</li>
                      <li>• 2-3 recommendation letters</li>
                      <li>• Portfolio or writing samples (if required)</li>
                    </ul>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Personal Documents</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Valid passport and birth certificate</li>
                      <li>• Updated CV (resume)</li>
                      <li>• Proof of scholarship or financial support</li>
                      <li>• Health insurance documentation</li>
                      <li>• Medical examination results</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Application Process */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Application Process
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">1</div>
                      <h3 className="text-lg font-semibold">Get Accepted into a University</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Apply and secure admission at a recognized university in Cyprus. 
                      You'll receive an official acceptance letter, crucial for your visa application.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">2</div>
                      <h3 className="text-lg font-semibold">Collect Your Documents</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Gather all required documents including valid passport, acceptance letter, 
                      proof of financial means (€5,000-€7,000 per year), and health insurance.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">3</div>
                      <h3 className="text-lg font-semibold">Apply for the Visa</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Book appointment at Cypriot Embassy in Pakistan, fill out visa application form, 
                      and submit with required documents. May include interview.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">4</div>
                      <h3 className="text-lg font-semibold">Wait for Approval</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Processing usually takes about one month. Apply as early as possible to avoid delays.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">5</div>
                      <h3 className="text-lg font-semibold">Apply for Residence Permit</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Upon arrival, apply for temporary residence permit at Civil Registry and Migration Department 
                      to extend stay beyond initial visa period.
                    </p>
                  </div>
                </div>
              </section>

              {/* Visa Fees */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Visa Fees
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Visa Application Fees</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Short-stay visa (Category C):</span>
                          <span className="font-semibold">€90</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Long-stay visa (Category D):</span>
                          <span className="font-semibold">€60</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Temporary residence permit:</span>
                          <span className="font-semibold">€70</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Additional Costs</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Living expenses per year:</span>
                          <span className="font-semibold">€5,000-€7,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Health insurance:</span>
                          <span className="font-semibold">Varies</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Document translation:</span>
                          <span className="font-semibold">As required</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Study Programs */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Study Programs Available
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Degree Programs</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Bachelor's degree (4 years)</li>
                      <li>• Master's degree (1-2 years)</li>
                      <li>• Doctorate degree (3-4 years)</li>
                      <li>• Professional certifications</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-900 mb-2">Popular Fields</h3>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Medicine (no entrance exam required)</li>
                      <li>• Business and Management</li>
                      <li>• Arts and Music</li>
                      <li>• Engineering and Technology</li>
                      <li>• Computer Science</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Scholarships */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Scholarships for Pakistani Students
                </h2>
                <div className="bg-yellow-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-yellow-600 mr-3" />
                    <h3 className="text-lg font-semibold text-yellow-900">Available Scholarships</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Merit-Based Scholarships</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cyprus International University scholarships</li>
                        <li>• University of Nicosia scholarships</li>
                        <li>• Cyprus West University scholarships</li>
                        <li>• Academic excellence awards</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Government Scholarships</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cyprus State Scholarship Foundation</li>
                        <li>• Erasmus Mundus Joint Master Degrees</li>
                        <li>• EU-funded programs</li>
                        <li>• Research scholarships</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits of Studying in Cyprus */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Benefits of Studying in Cyprus
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Education Quality</h3>
                    <p className="text-sm text-blue-800">
                      High-quality European education system with programs in English, 
                      making it accessible for international students.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Affordable Costs</h3>
                    <p className="text-sm text-green-800">
                      Lower tuition fees compared to other European countries, 
                      with scholarship opportunities available.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-900 mb-2">Cultural Diversity</h3>
                    <p className="text-sm text-purple-800">
                      Multicultural environment with students from around the world, 
                      rich Mediterranean culture and history.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-900 mb-2">Medical Programs</h3>
                    <p className="text-sm text-orange-800">
                      Direct entry into medical programs without entrance exams, 
                      making it attractive for aspiring doctors.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">What is the Cyprus study visa success rate from Pakistan?</h3>
                    <p className="text-gray-600">
                      The success rate is generally high for students who meet all requirements and provide complete documentation. 
                      Having a university acceptance letter and proof of funds significantly improves approval chances.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Can I apply for a Cyprus work visa from Pakistan?</h3>
                    <p className="text-gray-600">
                      Students can work part-time during their studies with proper permits. 
                      After graduation, you may be eligible for work permits depending on your qualifications and job offers.
                    </p>
                  </div>
                </div>
              </section>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cyprus Visa Assistance</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get expert help with your Cyprus student visa application
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
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-4">
                  Get Consultation
                </button>
              </div>

              {/* Cyprus Quick Facts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cyprus at a Glance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Mediterranean</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">EU Member:</span>
                    <span className="font-medium">Yes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-medium">Greek/Turkish/English</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Currency:</span>
                    <span className="font-medium">Euro (€)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Climate:</span>
                    <span className="font-medium">Mediterranean</span>
                  </div>
                </div>
              </div>

              {/* Document Checklist */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Document Checklist</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Valid passport</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>University acceptance letter</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Financial proof</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Health insurance</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Academic transcripts</span>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-3">
                  <a href="/blog/turkey-best-choice-pakistani-students" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">Study in Turkey</h4>
                    <p className="text-xs text-gray-600 mt-1">Best choice for Pakistani students</p>
                  </a>
                  <a href="/blog/anglia-ruskin-university" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">Anglia Ruskin University</h4>
                    <p className="text-xs text-gray-600 mt-1">Trusted partner guide</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}