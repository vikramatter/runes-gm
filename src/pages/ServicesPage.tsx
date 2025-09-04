import { motion } from "framer-motion";
import Services from "../components/Services";
import CTA from "../components/CTA";
import { pageTransition } from "../lib/animations";
import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  // Get serviceId from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = urlParams.get('serviceId') ? parseInt(urlParams.get('serviceId')!) : undefined;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <div className="pt-24 pb-10 bg-gradient-to-br from-primary-50 to-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive accounting, tax, and consulting services tailored to meet your specific needs.
          </p>
        </div>
      </div>

      <Services selectedServiceId={serviceId} />
      <CTA />
    </motion.div>
  );
};

export default ServicesPage;
