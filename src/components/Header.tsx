import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import IconOnly from "../assets/IconOnly.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("overflow-hidden", "md:overflow-auto");
    } else {
      document.body.classList.remove("overflow-hidden", "md:overflow-auto");
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden", "md:overflow-auto");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },

    { name: "Contact", path: "/contact" },
  ];

  const headerClasses = `fixed w-full  z-50 transition-all duration-300 ${isScrolled ? "bg-gray-50 shadow-sm bg-blur py-2" : "bg-gray-50 py-4"
    }`;

  return (
    <header className={headerClasses}>
      <div className="container flex justify-between  items-center">
        <div className="flex items-center">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center cursor-pointer gap-3"
            >
              <img
                src={IconOnly}
                alt="Runes Globemark Logo"
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-primary font-bold text-2xl md:text-3xl leading-tight">
                  RUNES GLOBEMARK LLP
                </span>

              </div>
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <div
                className={`font-medium transition-colors py-2 cursor-pointer ${location === link.path
                  ? "text-secondary"
                  : "text-gray-600 hover:text-secondary"
                  }`}
              >
                {link.name}
              </div>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white absolute w-full shadow-md"
          >
            <motion.div
              className="container py-3 flex flex-col space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, staggerChildren: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={link.path} onClick={closeMenu}>
                    <div
                      className={`font-medium py-2 block border-b border-gray-100 last:border-b-0 cursor-pointer ${location === link.path
                        ? "text-secondary"
                        : "text-gray-600 hover:text-secondary"
                        }`}
                    >
                      {link.name}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
