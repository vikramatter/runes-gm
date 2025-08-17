import { motion } from "framer-motion";
import { Briefcase, TrendingUp, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import AnimatedSection from "./AnimatedSection";

const Services = () => {
  const consultingServices = [
    {
      title: "Financial Modelling and Analysis",
      description: "Comprehensive financial models and analysis to support decision-making, growth strategies, and capital raising.",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Business Advisory",
      description: "Strategic guidance to help your business grow, improve operations, and achieve your goals through actionable insights.",
      icon: <Briefcase size={24} />
    },
    {
      title: "Valuations",
      description: "Professional business and asset valuations to support mergers, acquisitions, financial reporting, and strategic planning.",
      icon: <ShieldCheck size={24} />
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        {/* Section intro removed to avoid duplication */}

        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary text-center">Consulting Services</h3>
          <div className="section-divider-secondary"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {consultingServices.map((service, index) => (
              <AnimatedSection
                key={index}
                className="h-full"
                delay={0.3 + index * 0.1}
                from="bottom"
              >
                <motion.div
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-2xl mb-4">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h4>
                    <p className="text-gray-700">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Other Services Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-primary text-center">Other Services</h3>
          <div className="section-divider-secondary"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Risk Management",
              "Model Reviews",
              "Scenario Analysis & Simulations",
              "Reviews & Certifications",
              "Sales Tax Returns",
              "Payroll Tax Returns",
              "Business Valuations",
              "Personal Financial Planning",
              "Retirement Planning",
              "Estate Planning",
              "Other related Accounting & Financial Services"
            ].map((service, index) => (
              <AnimatedSection
                key={index}
                delay={0.1 + index * 0.05}
                from="bottom"
              >
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow text-center">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-gray-900 text-sm">{service}</h5>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
