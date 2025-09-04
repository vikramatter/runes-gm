import { motion } from "framer-motion";
import { Briefcase, TrendingUp, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import modelling1 from "../assets/modelling1.png";
import modelling2 from "../assets/modelling2.png";
import modelling3 from "../assets/modelling3.png";
import businessModel from "../assets/businessModel.jpg";
import valuations from "../assets/valuations.jpg";

type ServiceProps = {
  selectedServiceId?: number; // 1: Financial Modelling, 2: Business Advisory, 3: Valuations
};

const Services = ({ selectedServiceId }: ServiceProps) => {
  const [location] = useLocation();
  const isServicesPage = location === '/services';
  const [activeServiceId, setActiveServiceId] = useState(selectedServiceId || 1);

  const consultingServices = [
    {
      id: 1,
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
              <li>NBFC's</li>
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
      id: 2,
      title: "Business Advisory",
      modalDescription: (
        <div className="space-y-4">
          <p>
            In today's fast-moving business landscape, clarity and agility are key. Our Business Advisory services are designed to help you navigate challenges, seize opportunities, and drive sustainable growth.
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
      id: 3,
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

  // Update active service when prop changes
  useEffect(() => {
    if (selectedServiceId) {
      setActiveServiceId(selectedServiceId);
    }
  }, [selectedServiceId]);

  const selectedService = consultingServices.find(s => s.id === activeServiceId);

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        {isServicesPage && selectedService ? (
          // Detailed service view for services page
          <div className="max-w-6xl mx-auto">
            {/* Circular Navigation */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4">
                {consultingServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm transition-all duration-300 hover:scale-110 ${activeServiceId === service.id
                      ? 'bg-primary shadow-lg ring-4 ring-primary/20'
                      : 'bg-gray-400 hover:bg-gray-500'
                      }`}
                    title={service.title}
                  >
                    {service.id}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-2xl">
                      {selectedService.icon}
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">{selectedService.title}</h1>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    {selectedService.modalDescription}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  {selectedService.title === "Financial Modelling and Analysis" ? (
                    <div className="w-full max-w-md">
                      <div className="space-y-4">
                        <div className="overflow-hidden rounded-lg shadow-md">
                          <img
                            src={modelling1}
                            alt="Financial Modelling Example 1"
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-md">
                          <img
                            src={modelling2}
                            alt="Financial Modelling Example 2"
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-md">
                          <img
                            src={modelling3}
                            alt="Financial Modelling Example 3"
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full max-w-md">
                      <img
                        src={selectedService.title === "Business Advisory" ? businessModel : valuations}
                        alt={`${selectedService.title} image`}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Service cards for homepage
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
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => window.location.href = `/services/${service.id}`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") window.location.href = `/services/${service.id}` }}
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
        )}

        {/* Other Services Section - only show on services page */}
        {isServicesPage && (
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
        )}
      </div>
    </section>
  );
};

export default Services;
