import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import teamPhoto from "@assets/Linkedin Cover_1750765339302.jpg";

export default function BusinessProposalsSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          

        </motion.div>

        {/* Team Photo */}
        <motion.div
          className="mb-16 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img 
            src={teamPhoto} 
            alt="Dunya Consultants Team" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        

        {/* Modern Contact Layout */}
        <div className="space-y-12">

          
        </div>
      </div>
    </section>
  );
}