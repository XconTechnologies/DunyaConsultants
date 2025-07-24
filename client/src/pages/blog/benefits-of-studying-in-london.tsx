import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';

export default function BenefitsOfStudyingInLondon() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Study Destinations
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Top Reasons to Study in London
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover why London is the ultimate destination for international students seeking world-class education and career opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="London skyline with Big Ben and Parliament"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  London is the capital of the United Kingdom and is home to around eight million people at present including more than 382,000 students. Undoubtedly, it is one of the best cities for international students to pursue their higher education. For those who are unsure about why UK for studies, remember that studying in London is not just an academic experience, instead it is a life-changing journey. The city is famous for welcoming people from all over the world to study, live, and work.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Moreover, students will not only receive a high-quality education but also improve their career opportunities by studying in one of the leading cities of the world. Studying in London helps you grow into a confident individual while building long-term friendships. There are many benefits of study in UK, especially London, like an exciting lifestyle, endless learning opportunities, and much more. If you are interested in studying abroad in London, our team at Dunya Consultants will guide you.
                </p>
              </div>

              {/* Why Study in London */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4">Why to Study in London?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  London is one of the top cities in the world as well as a major financial hub. This makes it the best place for building your future. The city provides numerous opportunities for professional growth to prepare you for life after university. Here are the top reasons why London is famous for studying abroad.
                </p>
              </div>

              {/* Top-Rated Universities */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 border-l-4 border-green-500 pl-4">Top-Rated Universities</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  There are some of the best inner London universities, such as London Metropolitan University, London South Bank University, and University of East London. Studying in London means you will get an education that is highly valued everywhere.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With more than forty universities, you can choose from a variety of programs. Don't worry if you did not follow the usual A-Level path, there are lots of options for you with different levels of education and backgrounds.
                </p>
              </div>

              {/* International Student Population */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 border-l-4 border-purple-500 pl-4">International Student Population</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most of you have already heard that is London good for Pakistani students? Obviously yes! London has more than 382,000 students which creates a lively and huge student community. The city also provides many student groups, societies, and clubs according to different cultures.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  No matter where you are from, you can find others with similar backgrounds and aims to connect with. This not only helps during your studies but also gives you the chance to make friendships and contacts from around the world.
                </p>
              </div>

              {/* Career Opportunities */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 border-l-4 border-orange-500 pl-4">Career Opportunities</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The majority of the graduates choose to start their careers in London compared to other cities. This is why students choose UK for study. London is home to several biggest companies, with more than hundreds of Europe's biggest businesses based here.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  From finance and technology to creative industries and healthcare, London offers unparalleled career opportunities. The city's status as a global financial center means exceptional prospects for business and finance graduates, while its thriving tech scene provides excellent opportunities for STEM students.
                </p>
              </div>

              {/* Vibrant Lifestyle */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 border-l-4 border-red-500 pl-4">Vibrant Lifestyle and Culture</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  London's nightlife is legendary, with over 7,000 bars, 5,000 restaurants, and 350 music venues offering something for everyone. Whether you're interested in world-class theater in the West End, cutting-edge art galleries, or historic museums, London has it all.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The city's diverse food scene reflects its multicultural population, with authentic cuisine from every corner of the world. From street food markets to Michelin-starred restaurants, London offers an incredible culinary adventure for students.
                </p>
              </div>

              {/* Student Accommodation */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 border-l-4 border-indigo-500 pl-4">Quality Student Accommodation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  London offers excellent student accommodation options, from university halls of residence to private student housing. Most accommodations are well-connected to universities via public transport, and many offer modern amenities including study spaces, gyms, and social areas.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The city's extensive public transport network makes it easy to get around, with student discounts available on buses, trains, and the famous London Underground. This connectivity ensures you can live in affordable areas while still accessing top universities and internship opportunities.
                </p>
              </div>

              {/* FAQ Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-500 pl-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Is London expensive for international students?</h4>
                    <p className="text-gray-700">While London can be expensive, there are many ways to manage costs. University accommodation is often more affordable than private housing, student discounts are widely available, and part-time work opportunities can help offset expenses.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">What are the entry requirements for London universities?</h4>
                    <p className="text-gray-700">Entry requirements vary by university and program. Generally, you'll need strong academic qualifications, English language proficiency (IELTS/TOEFL), and sometimes additional requirements like portfolios or entrance exams.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Can international students work while studying in London?</h4>
                    <p className="text-gray-700">Yes, international students on student visas can typically work up to 20 hours per week during term time and full-time during holidays. This provides valuable work experience and helps with living expenses.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">What support is available for international students?</h4>
                    <p className="text-gray-700">London universities offer comprehensive support including orientation programs, academic support, career services, counseling, and international student societies to help with integration and success.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">How safe is London for international students?</h4>
                    <p className="text-gray-700">London is generally very safe for students. Universities provide safety guidelines, most areas are well-policed, and student accommodations have security measures. The city has excellent emergency services and healthcare facilities.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">What makes London universities special?</h4>
                    <p className="text-gray-700">London universities are renowned for their academic excellence, research opportunities, diverse student body, and strong industry connections. Many are ranked among the world's top institutions and offer unique programs not available elsewhere.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Facts */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 40+ top-rated universities</li>
                <li>• 382,000+ international students</li>
                <li>• Major global financial center</li>
                <li>• 7,000+ bars and restaurants</li>
                <li>• 350+ music venues</li>
                <li>• Excellent public transport</li>
                <li>• Rich cultural heritage</li>
                <li>• Strong career prospects</li>
              </ul>
            </div>

            {/* Top Universities */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Top London Universities</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• London Metropolitan University</li>
                <li>• London South Bank University</li>
                <li>• University of East London</li>
                <li>• Imperial College London</li>
                <li>• University College London</li>
                <li>• King's College London</li>
              </ul>
            </div>

            {/* Related Articles */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Related Articles</h3>
              <div className="space-y-3">
                <a href="/blog/study-in-uk" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Study in UK: Complete Guide for Pakistani Students
                </a>
                <a href="/blog/top-10-universities-in-london" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Top 10 Universities in London
                </a>
                <a href="/blog/uk-student-dependent-visa-new-rules" className="block text-blue-600 hover:text-blue-800 text-sm">
                  UK Student Dependent Visa – New Rules 2024
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}