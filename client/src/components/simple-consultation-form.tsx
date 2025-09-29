import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import CalendlyButton from "@/components/calendly-button";

export default function SimpleConsultationForm() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
        >
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Study Abroad Journey?
          </h2>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our expert consultants are here to provide 
            personalized guidance for your unique situation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CalendlyButton
              url="https://calendly.com/d/cw4q-ymv-8wh"
              text="Get Free Consultation"
              className="bg-[#1D50C9] hover:bg-[#1845B3] text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              size="lg"
              showIcon={false}
              data-testid="btn-get-consultation"
            />
            <Link href="/blog">
              <Button
                variant="outline"
                className="px-8 py-3 text-lg font-semibold rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                size="lg"
                data-testid="btn-view-articles"
              >
                View All Articles
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}