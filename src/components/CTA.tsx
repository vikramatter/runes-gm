import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-primary-800 text-black">
      <div className="container text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let's work together to achieve your financial goals
        </motion.h2>

        <motion.p
          className="text-lg mb-8 max-w-3xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Ready to take the next step? Contact us today to schedule a
          consultation with one of our experts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary-800 hover:bg-blue-100 border-blue-600 hover:border-blue-700"
            >
              Get Started Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
