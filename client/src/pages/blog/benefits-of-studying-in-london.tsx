import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ContactForm from '../../components/blog/ContactForm';
import ContactSection from '../../components/blog/ContactSection';

export default function BenefitsOfStudyingInLondon() {
  return (
    <>
      <Navigation />
      <div className="w-[1440px] mx-auto">
        {/* Hero Section */}
        <div className="relative h-[500px] bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 flex items-center justify-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
            }}
          />
          <div className="relative z-10 text-center px-8">
            <h1 className="text-5xl font-bold mb-4">Top Reasons to Study in London</h1>
            <p className="text-2xl font-light">Discover why London is the ultimate destination for international students</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8 p-8">
          {/* Main Article */}
          <div className="flex-1">
            <article className="prose prose-lg max-w-none">
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
                  London also provides many opportunities for students and graduates, such as internships, job fairs, apprenticeship programs, and mentorships. With so many options, it is the best place to polish your skills and find your dream job.
                </p>
              </div>

              {/* Best Nightlife */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 border-l-4 border-red-500 pl-4">Best Nightlife</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  London is full of entertainment, from theatre shows to live music events. The city has more than seven thousand bars and pubs, five- thousand restaurants, and more than 350 music venues.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can find affordable fun in beautiful London at night. Many theatres provide discounted tickets on the day of the performance, so you can enjoy a great show without spending too much. Music events are also budget-friendly, with lots of free options or tickets under ten pounds every day.
                </p>
              </div>

              {/* Student Accommodation */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 border-l-4 border-teal-500 pl-4">Student Accommodation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Moving to London is a big step, and choosing the right place to stay is extremely important. Student accommodation plays a big role in your experience. You need a place that fits your budget, helps with your studies, as well as supports your social life.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  London provides a high standard of living, and its student accommodation is the best. This makes it easy to find a comfortable and suitable place to call home while you study.
                </p>
              </div>

              {/* Key Benefits Summary */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 border-l-4 border-indigo-500 pl-4">Key Benefits of Studying in London</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3 text-blue-800">Academic Excellence</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 40+ universities to choose from</li>
                      <li>• World-class education standards</li>
                      <li>• Diverse program options</li>
                      <li>• Globally recognized degrees</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3 text-green-800">Career Development</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Major financial hub location</li>
                      <li>• Hundreds of Europe's biggest businesses</li>
                      <li>• Internship and job opportunities</li>
                      <li>• Professional networking events</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3 text-purple-800">Cultural Experience</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 382,000+ diverse student community</li>
                      <li>• Rich cultural heritage</li>
                      <li>• International student groups</li>
                      <li>• Multicultural environment</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3 text-orange-800">Lifestyle & Entertainment</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 7,000+ bars and pubs</li>
                      <li>• 5,000+ restaurants</li>
                      <li>• 350+ music venues</li>
                      <li>• Affordable entertainment options</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 border-l-4 border-gray-500 pl-4">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  London is a lively city with something for everyone. It is home to some of the best universities in the world. London provides students the chance to study at top universities and be part of a global community. You will meet people from all over the world, get new experiences, and have opportunities to grow academically as well as professionally.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For those who wonder is London a good place to live, it is the best place to live and study with exciting city life to the rich culture. Each year, hundreds of international students choose London to study abroad and get a high-quality education.
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-purple-500 pl-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Is studying abroad worth it in London?</h3>
                    <p className="text-gray-700">Studying in London is a dream for many students. The city is full of exciting opportunities, from top universities to lively city life which makes it a great place to learn and grow.</p>
                  </div>

                  <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Why you choose University of East London?</h3>
                    <p className="text-gray-700">The University of East London is known for its career-focused programs as well as its huge community. It is the best place to study and prepare for your future.</p>
                  </div>

                  <div className="bg-white border-l-4 border-purple-500 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">What makes London universities special?</h3>
                    <p className="text-gray-700">London universities offer world-class education with more than 40 institutions to choose from. They provide diverse programs, globally recognized degrees, and excellent career opportunities in a major financial hub.</p>
                  </div>

                  <div className="bg-white border-l-4 border-orange-500 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">How diverse is the student population in London?</h3>
                    <p className="text-gray-700">London has over 382,000 students from around the world, creating a vibrant and diverse student community. The city offers numerous student groups, societies, and clubs catering to different cultures and interests.</p>
                  </div>

                  <div className="bg-white border-l-4 border-red-500 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">What career opportunities are available in London?</h3>
                    <p className="text-gray-700">London is home to hundreds of Europe's biggest businesses, offering excellent career opportunities including internships, job fairs, apprenticeship programs, and mentorships for students and graduates.</p>
                  </div>

                  <div className="bg-white border-l-4 border-teal-500 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Is London expensive for students?</h3>
                    <p className="text-gray-700">While London can be expensive, there are affordable options available. Many theatres offer discounted tickets, music events have budget-friendly options, and student accommodation provides good value for the quality of life.</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your London Study Journey?</h3>
                <p className="text-lg mb-4">Our experts at Dunya Consultants can help you choose the right university and program in London. Get personalized guidance for your study abroad journey.</p>
                <div className="flex gap-4">
                  <a href="tel:+923041110947" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Call Now: (+92) 304 1110947
                  </a>
                  <a href="mailto:query@teamdunya.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                    Email Us
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="w-80">
            <ContactForm />
            
            {/* Quick Facts */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Population:</strong> 8 million people</li>
                <li><strong>Students:</strong> 382,000+ international students</li>
                <li><strong>Universities:</strong> 40+ institutions</li>
                <li><strong>Restaurants:</strong> 5,000+ dining options</li>
                <li><strong>Entertainment:</strong> 7,000+ bars & pubs</li>
                <li><strong>Music Venues:</strong> 350+ live music spots</li>
              </ul>
            </div>

            {/* Top Universities */}
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Top London Universities</h3>
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
        <ContactSection 
          title="Ready to Study in London?"
          description="Get expert guidance from Dunya Consultants to choose the perfect university and program in London for your academic journey."
        />
      </div>
      <Footer />
    </>
  );
}