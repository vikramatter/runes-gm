import { motion } from "framer-motion";
import Team from "../components/Team";
import CTA from "../components/CTA";
import { pageTransition } from "../lib/animations";
import { useEffect } from "react";

const TeamPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet our team of experienced professionals passionate about helping
            businesses thrive.
          </p>
        </div>
      </div>

      <Team />
      <CTA />
    </motion.div>
  );
};

export default TeamPage;
