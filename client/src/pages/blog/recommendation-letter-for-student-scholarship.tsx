import React from 'react';
import { Calendar, Clock, User, FileText, CheckCircle, BookOpen, Target, Users } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function RecommendationLetterStudentScholarship() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#124FD3] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Study Tips
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              How to Write a Recommendation Letter for a Student?
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Complete guide to writing effective recommendation letters for university applications and scholarships, including format, tips, and common mistakes to avoid.
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
                <span>10 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Studying abroad requires a lot of paperwork. One of the most important documents that you must have is the Letter of Recommendation (LOR). This letter is needed when applying to universities or scholarships in other countries. A recommendation letter for student can play a big role in deciding whether you get accepted into a university or not.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A strong recommendation can give you an advantage over other applicants, especially if you are looking for financial support or an early decision. A letter of recommendation helps to show your hard work, skills, or academic performance. It is a letter that highlights your strengths as well as achievements.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Often, when you apply for study abroad, you will need to request a reference letter for university from a teacher. A good LOR can make you prominent and improve your chances of success in the application process.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#what-is-lor" className="hover:text-blue-600">What is a Letter of Recommendation?</a></li>
                  <li><a href="#format" className="hover:text-blue-600">Recommendation Letter Format</a></li>
                  <li><a href="#writing-tips" className="hover:text-blue-600">Writing Tips and Guidelines</a></li>
                  <li><a href="#sample-template" className="hover:text-blue-600">Sample Template</a></li>
                  <li><a href="#common-mistakes" className="hover:text-blue-600">Common Mistakes to Avoid</a></li>
                  <li><a href="#faqs" className="hover:text-blue-600">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Why Recommendation Letters Matter */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Why Recommendation Letters Matter</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    Essential for university and scholarship applications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    Highlights your academic performance and character
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    Provides third-party validation of your abilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    Can differentiate you from other applicants
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    Required by universities and immigration authorities
                  </li>
                </ul>
              </div>

              {/* What is LOR Section */}
              <section id="what-is-lor" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">What is a Letter of Recommendation for Student?</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  A reference letter for student from teacher is a letter that includes the student's skills, qualities, school performance, and talents. It is usually written by a school principal or teacher to show the abilities of students and support their goals for further education.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  A recommendation letter for student from professor is very important if a student wants to study abroad in another country. In addition, immigration authorities also ask to see these letters to understand more about the background and abilities of students.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Key Components of a Strong LOR</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Academic Performance:</strong> Grades, class participation, projects</p>
                      <p className="text-gray-700 mb-2"><strong>Character Traits:</strong> Leadership, teamwork, dedication</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Specific Examples:</strong> Real achievements and accomplishments</p>
                      <p className="text-gray-700"><strong>Future Potential:</strong> Predicted success in chosen field</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Format Section */}
              <section id="format" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Recommendation Letter Format</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  A recommendation letter for university usually has three to four paragraphs. Let's discuss about letter of recommendation format in detail below:
                </p>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      First Paragraph - Introduction
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Explain how the teacher knows the student</li>
                      <li>• Mention how long the teacher has known the student and in what capacity</li>
                      <li>• Include the teacher's job title or area of expertise</li>
                      <li>• State the purpose of the recommendation</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Second Paragraph - Specific Examples
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Highlight the student's academic achievements</li>
                      <li>• Provide specific examples of outstanding work or behavior</li>
                      <li>• Mention leadership qualities and extracurricular activities</li>
                      <li>• Discuss the student's character and personal qualities</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Third Paragraph - Future Potential
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Express confidence in the student's future success</li>
                      <li>• Relate their qualities to the program they're applying for</li>
                      <li>• Mention any special skills or talents relevant to their goals</li>
                      <li>• Provide a strong endorsement for admission</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-orange-800 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Closing Paragraph
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Summarize the main points of recommendation</li>
                      <li>• Restate your strong endorsement of the student</li>
                      <li>• Offer to provide additional information if needed</li>
                      <li>• Include professional closing and signature</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Writing Tips Section */}
              <section id="writing-tips" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Writing Tips and Guidelines</h2>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">1. Be Specific and Detailed</h3>
                    <p className="text-gray-700">Use concrete examples and specific achievements rather than generic praise. Quantify accomplishments whenever possible.</p>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">2. Maintain Professional Tone</h3>
                    <p className="text-gray-700">Use formal language and professional formatting. Avoid casual expressions or overly emotional language.</p>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">3. Focus on Relevance</h3>
                    <p className="text-gray-700">Highlight qualities and experiences most relevant to the program or opportunity the student is pursuing.</p>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">4. Be Honest and Authentic</h3>
                    <p className="text-gray-700">Provide genuine assessment based on actual interactions and observations. Avoid exaggeration or false claims.</p>
                  </div>
                </div>
              </section>

              {/* Sample Template Section */}
              <section id="sample-template" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Sample Letter Template</h2>
                
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="font-mono text-sm space-y-4 text-gray-800">
                    <div>
                      <p className="font-semibold">Header Section:</p>
                      <p>[Your Name]</p>
                      <p>[Your Title/Position]</p>
                      <p>[Institution Name]</p>
                      <p>[Contact Information]</p>
                      <p>[Date]</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Salutation:</p>
                      <p>Dear Admissions Committee / To Whom It May Concern,</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Introduction:</p>
                      <p>I am writing to provide my highest recommendation for [Student Name] for admission to [Program/University]. As [Student Name]'s [your relationship to student] for [time period], I have had the opportunity to observe their exceptional [qualities/skills].</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Body Paragraphs:</p>
                      <p>[Specific examples of student's achievements, character, and potential]</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Conclusion:</p>
                      <p>I recommend [Student Name] without reservation. Please feel free to contact me if you need any additional information.</p>
                      <p>Sincerely,</p>
                      <p>[Your Signature]</p>
                      <p>[Your Name and Title]</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Mistakes Section */}
              <section id="common-mistakes" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Common Mistakes to Avoid</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Avoid These Common Errors</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">Using generic templates without personalization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">Being too brief or lacking specific examples</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">Exceeding one page in length</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">Including negative comments or weaknesses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">Using informal language or casual tone</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">Failing to proofread for grammar and spelling errors</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* FAQs Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: How to write a recommendation letter for admission in university?</h3>
                    <p className="text-gray-700">In one sentence, explain how you know the student, highlight their strengths, and share specific examples or stories that show their character. Use real examples instead of general statements.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: What should be the starting sentence for a recommendation letter application?</h3>
                    <p className="text-gray-700">Start by saying that you recommend the student. You should also briefly mention who you are and your area of expertise. Then, give an overview of the student's main skills.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: How to end a recommendation letter for student scholarship?</h3>
                    <p className="text-gray-700">In the ending, briefly write the main points and clearly say that you recommend the student for the program they want. The letter should be simple, clear, and direct.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Who should write a recommendation letter for students?</h3>
                    <p className="text-gray-700">Teachers, professors, supervisors, employers, or mentors who know the student well and can speak to their abilities, character, and potential for success.</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Conclusion</h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a student, it is important to ask a mentor, supervisor, teacher, or manager for a recommendation letter. This recommendation letter for student helps the university admission officers to know you better and understand your abilities. It shows your skills as well as strengths through what your referee says about you.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  A letter of recommendation for student from a teacher can make you stand out from other applicants when applying to a university or job. Learning how to write a good recommendation letter is essential for both teachers and students in the academic journey.
                </p>
              </section>

              {/* Call to Action */}
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Need Help with Recommendation Letters?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants on obtaining strong recommendation letters for your university applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+923041110947" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Call Now: +92 304 1110947
                  </a>
                  <a 
                    href="mailto:info@dunyaconsultants.com" 
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-500" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Length:</span>
                    <span className="font-medium">1 Page</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">Formal Letter</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Paragraphs:</span>
                    <span className="font-medium">3-4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tone:</span>
                    <span className="font-medium">Professional</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best From:</span>
                    <span className="font-medium">Teachers/Professors</span>
                  </div>
                </div>
              </div>

              {/* Letter Components */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                  Essential Components
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Header & Contact Info</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Required</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Introduction</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Required</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Specific Examples</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Critical</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Strong Endorsement</span>
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">Essential</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}