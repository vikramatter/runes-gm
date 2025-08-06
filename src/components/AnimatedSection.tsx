import { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  from?: "bottom" | "left" | "right" | "top";
  distance?: number;
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
  from = "bottom",
  distance = 50,
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, isInView, once]);

  // Set initial animation properties based on "from" direction
  const getInitialProps = () => {
    switch (from) {
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
      case "top":
        return { x: 0, y: -distance };
      case "bottom":
      default:
        return { x: 0, y: distance };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getInitialProps(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
