import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import { pageTransition } from "../lib/animations";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Hero />
      <About />
      <Services />
      <CTA />
      <Contact />
    </motion.div>
  );
};

export default HomePage;
