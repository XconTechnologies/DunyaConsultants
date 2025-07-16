import Navigation from '@/components/navigation';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Footer from '@/components/footer';

export default function IndustrialEngineeringManagement() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Bachelors in Industrial Engineering and Management</h1>
          <p className="text-2xl opacity-90">Complete Guide to Industrial Engineering Programs Worldwide</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                Are you interested in studying Industrial Engineering and Management? Do you want to know what an industrial engineer does? This Bachelor's program teaches you how to combine business and technology. You will learn how companies work, how they manage people, and how they improve production processes. The program helps you understand modern businesses and the challenges they face.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                In just three years, you will get problem-solving skills and hands-on experience. You will also develop the ability to keep learning and improving throughout your career. This degree gives you the knowledge to work in different industries or even start your own business. It prepares you for a successful future by providing both technical and business skills. If you enjoy solving problems and making businesses run better, this program could be the right choice for you!
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Universities Offering Industrial Engineering and Management</h2>
              <p className="text-lg text-gray-700 mb-4">Many universities in the world provide Industrial Management degree. Some of these are in the United States, Finland, the United Kingdom, and Germany. Let's discuss about these universities below:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-blue-800">Europe</h3>
                  <ul className="text-gray-700 mt-2 space-y-1">
                    <li>• Karelia University Finland</li>
                    <li>• Germany Deggendorf Institute of Technology</li>
                    <li>• Eindhoven University of Technology</li>
                    <li>• RWTH Aachen University</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-blue-800">Worldwide</h3>
                  <ul className="text-gray-700 mt-2 space-y-1">
                    <li>• Carnegie Mellon University</li>
                    <li>• Polytechnic University of Milan</li>
                    <li>• University of Cambridge</li>
                    <li>• Imperial College London</li>
                    <li>• University of Hong Kong</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-green-900">Eligibility Criteria for Industrial Engineering and Management</h2>
              <p className="text-lg text-gray-700 mb-4">To apply for an Industrial Engineering and Management program, you may need:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• At least 55-60% marks in FSc. Pre Engineering or ICS.</li>
                <li>• A required scores on exams like IELTS 6 or PTE 55 overall.</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-purple-900">Documents Required for Industrial Engineering and Management</h2>
              <p className="text-lg text-gray-700 mb-4">To apply for an industrial management course, you need these documents:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-gray-700 space-y-2">
                  <li>• Your original mark sheet from the qualifying exam</li>
                  <li>• Transfer Certificate from your previous school or college</li>
                  <li>• Proof of English language proficiency</li>
                  <li>• Motivation letter</li>
                  <li>• Curriculum Vitae</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Recommendation letters (if required)</li>
                  <li>• Proof of your date of birth</li>
                  <li>• Conduct Certificate</li>
                  <li>• Migration Certificate</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-orange-900">How to Apply for an Industrial Engineering and Management Program?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <p className="text-gray-700">Go to the official website and search for Industrial Engineering and Management programs.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <p className="text-gray-700">Search what qualifications you need, like English language skills, a bachelor's degree, and any entrance exams.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <p className="text-gray-700">Prepare Your Documents like Academic transcripts, Recommendation letters (if needed), etc.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                  <p className="text-gray-700">Submit Your Application and Pay the Application Fee. Some programs may ask for a small fee.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                  <p className="text-gray-700">Keep checking the portal for updates on your admission status.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">What is industrial engineering and management?</h3>
                  <p className="text-gray-700">Industrial Engineering and Management is a field that uses engineering and business ideas to improve how companies work. It helps make processes more efficient and organized.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">How can I apply to an industrial management course?</h3>
                  <p className="text-gray-700">To apply for a BS Industrial Management course, find universities that offer it, check their requirements, and fill out an online application form.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
              <p className="text-lg leading-relaxed">
                Industrial Engineering and Management is an important field that helps businesses work better by improving efficiency and productivity. It uses engineering ideas to manage people, processes, and systems, making operations smoother and reducing costs. This helps companies maintain high quality and stay competitive in a fast-changing world. It is a valuable area of study for creating better business performance and long-term growth.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <ContactForm />
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">3 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium">Bachelor's</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Requirements:</span>
                    <span className="font-medium">55-60% marks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">English Test:</span>
                    <span className="font-medium">IELTS 6.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection 
        title="Need Help with Industrial Engineering Applications?"
        description="Our expert counselors can guide you through the application process for Industrial Engineering and Management programs worldwide. Contact us for personalized assistance."
      />

      <Footer />
    </div>
  );
}