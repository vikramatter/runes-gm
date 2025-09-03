import { motion } from "framer-motion";
import { Briefcase, TrendingUp, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import type { ReactNode } from "react";
import ServiceModal from "./ServiceModal";

const Services = () => {
  const consultingServices = [
    {
      title: "Financial Modelling and Analysis",
      modalDescription: (
        <div className="space-y-4">
          <p>
            We transform complex financial data into clear, actionable insights. Our models are built to support strategic planning, investment decisions, and performance optimization. Whether you're forecasting growth, evaluating new ventures, or preparing for fundraising, our analysis delivers clarity, confidence, and control.
          </p>
          <div>
            <p className="font-semibold mb-2">Industry experience includes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Energy & Renewables</li>
              <li>Telecom</li>
              <li>Mobility</li>
              <li>Construction</li>
              <li>NBFC’s</li>
            </ul>
          </div>
          <p>
            Having worked across varied geographies such as APAC, MENA, The Americas & Europe has enabled us to develop deep insights of global functions and processes which reinforces our unwavering commitment to delivering utmost quality work on time.
          </p>
        </div>
      ),
      description: "Comprehensive financial models and analysis to support decision-making, growth strategies, and capital raising.",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Business Advisory",
      modalDescription: (
        <div className="space-y-4">
          <p>
            In today’s fast-moving business landscape, clarity and agility are key. Our Business Advisory services are designed to help you navigate challenges, seize opportunities, and drive sustainable growth.
          </p>
          <p>
            We help businesses navigate complexity with clarity and confidence. Whether you're launching a new venture, scaling up, or repositioning in the market, we bring deep industry insight and practical solutions tailored to your goals. From financial structuring and market entry to performance improvement and risk management, we offer the guidance you need to make confident, informed decisions.
          </p>
        </div>
      ),
      description: "Strategic guidance to help your business grow, improve operations, and achieve your goals through actionable insights.",
      icon: <Briefcase size={24} />
    },
    {
      title: "Valuations",
      modalDescription: (
        <div className="space-y-4">
          <p>
            Accurate valuation is the cornerstone of sound financial decisions. We provide comprehensive business valuation services tailored for mergers and acquisitions, fundraising, compliance, and strategic planning. Our approach combines industry benchmarks, financial analysis, and market dynamics to deliver credible, defensible valuations that reflect true business worth.
          </p>
          <p>
            Whether you're preparing for a transaction or assessing shareholder value, we help you understand what your business is really worth—and why.
          </p>
        </div>
      ),
      description: "Professional business and asset valuations to support mergers, acquisitions, financial reporting, and strategic planning.",
      icon: <ShieldCheck size={24} />
    }
  ];

  const [selectedService, setSelectedService] = useState<{ title: string; description: ReactNode } | null>(null);

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
                  onClick={() => setSelectedService({ title: service.title, description: service.modalDescription ?? service.description })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedService({ title: service.title, description: service.modalDescription ?? service.description }) }}
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
      <ServiceModal
        open={!!selectedService}
        onOpenChange={(open) => { if (!open) setSelectedService(null) }}
        title={selectedService?.title ?? ""}
        description={selectedService?.description ?? ""}
      />
    </section>
  );
};

export default Services;
