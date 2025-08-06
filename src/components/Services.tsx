import { motion } from "framer-motion";
import { Briefcase, TrendingUp, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import AnimatedSection from "./AnimatedSection";

const Services = () => {
  const accountingServices = [
    {
      title: "Tax Planning and Preparation",
      description: "Strategic tax planning and preparation for individuals and businesses to minimize tax liability and ensure compliance.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Auditing & Assurance",
      description: "Comprehensive audit services to provide assurance on the accuracy and reliability of your financial information.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Bookkeeping and Reporting",
      description: "Accurate and timely financial reporting to help you make informed business decisions and satisfy stakeholder requirements.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const consultingServices = [
    {
      title: "Business Advisory",
      description: "Strategic guidance to help your business grow, improve operations, and achieve your goals through actionable insights.",
      icon: <Briefcase size={24} />
    },
    {
      title: "Financial Modelling and Analysis",
      description: "Comprehensive financial models and analysis to support decision-making, growth strategies, and capital raising.",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Risk Management",
      description: "Identify, assess, and mitigate financial and operational risks to protect your business and ensure long-term success.",
      icon: <ShieldCheck size={24} />
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        {/* Section intro removed to avoid duplication */}

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-4 text-primary text-center">Accounting and Tax Services</h3>
          <div className="section-divider-secondary"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accountingServices.map((service, index) => (
              <AnimatedSection 
                key={index} 
                className="h-full" 
                delay={index * 0.1}
                from={index % 2 === 0 ? "left" : "right"}
              >
                <motion.div 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="h-48 bg-primary-100">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h4>
                    <p className="text-gray-700 mb-4">
                      {service.description}
                    </p>
                    <Link href="/contact">
                      <a className="text-secondary hover:text-secondary/90 font-medium inline-flex items-center">
                        Learn More 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

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
