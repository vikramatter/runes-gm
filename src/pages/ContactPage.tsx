import { motion } from "framer-motion";
import Contact from "../components/Contact";
import { pageTransition } from "../lib/animations";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <div className="pt-24 pb-10 bg-gradient-to-br from-primary-50 to-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions or ready to get started? Get in touch with our team today.
          </p>
        </div>
      </div>

      <Contact />
    </motion.div>
  );
};

export default ContactPage;
