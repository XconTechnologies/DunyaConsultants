import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  FileText, 
  BookOpen, 
  Users, 
  MapPin, 
  Plane,
  CheckCircle,
  Star,
  Clock,
  Award
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Admission Guidance",
    description: "Expert guidance for university applications and admissions process",
    icon: GraduationCap,
    features: [
      "University selection assistance",
      "Application strategy planning",
      "Profile evaluation and enhancement",
      "Deadline management and tracking"
    ],
    duration: "2-3 months",
    price: "Starting from $150",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Visa Filing",
    description: "Complete visa application support and documentation",
    icon: FileText,
    features: [
      "Visa application preparation",
      "Document verification and review",
      "Interview preparation and coaching",
      "Visa status tracking and updates"
    ],
    duration: "1-2 months",
    price: "Starting from $200",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 3,
    title: "SOP & Documentation Support",
    description: "Professional assistance with statements and documentation",
    icon: BookOpen,
    features: [
      "Statement of Purpose writing",
      "Letter of Recommendation guidance",
      "Essay writing and editing",
      "Document formatting and review"
    ],
    duration: "2-4 weeks",
    price: "Starting from $100",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 4,
    title: "IELTS/PTE Coaching",
    description: "Comprehensive English language test preparation",
    icon: Users,
    features: [
      "Personalized study plans",
      "Mock tests and practice sessions",
      "Speaking and writing workshops",
      "Score improvement strategies"
    ],
    duration: "1-3 months",
    price: "Starting from $120",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 5,
    title: "Pre-departure Briefing",
    description: "Essential guidance for your journey abroad",
    icon: Plane,
    features: [
      "Cultural orientation sessions",
      "Academic system briefing",
      "Practical tips and guidelines",
      "Emergency contact information"
    ],
    duration: "1 week",
    price: "Complimentary",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 6,
    title: "Accommodation & Travel",
    description: "Support with housing and travel arrangements",
    icon: MapPin,
    features: [
      "Accommodation search assistance",
      "Travel booking guidance",
      "Airport pickup arrangements",
      "Local area orientation"
    ],
    duration: "2-3 weeks",
    price: "Starting from $80",
    color: "from-blue-500 to-blue-600"
  }
];

export default function ServicesOverview() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end support for your international education journey, from admission to arrival
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Service Details */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-semibold text-blue-600">
                        <Award className="w-4 h-4" />
                        <span>{service.price}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className={`w-full mt-4 bg-gradient-to-r ${service.color} hover:opacity-90 transition-all duration-300 text-white border-0`}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get personalized guidance from our expert counselors and take the first step towards your dream education abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold"
              >
                Book Free Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}