import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { slideInFromBottom, slideInFromLeft } from "../lib/animations";
import caAuditImg from "../assets/homepage.jpg";

const Hero = () => {
  return (
    <section
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary-50 to-white"
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${caAuditImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative container flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] text-center z-10">
        <motion.div
          className="w-full md:w-2/3 mx-auto"
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight drop-shadow-lg">
            <span className="text-white font-bold">Business Modelling and Consulting</span>
          </h1>

          {/* Feature Description */}
          <motion.div
            className="bg-white/80 p-6 rounded-lg shadow-md mb-8 backdrop-blur-sm"
            variants={slideInFromBottom}
          >
            <p className="text-gray-700 mb-4">
              With over a decade of hands-on experience and a solid foundation built
              within the Big 4 & Banking Industry, our team delivers expert business modelling solutions with
              precision and insight.
            </p>
            <p className="text-gray-700 mb-4">
              We offer a wide range of services including <span className="font-bold">Risk Management, Model Reviews, Scenario Analysis & Simulations</span> for both domestic and international clients.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services">
              <Button className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white">
                Explore Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full sm:w-auto text-secondary border-secondary bg-white/80">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
