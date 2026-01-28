import { Link } from "wouter";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },

    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Financial Modelling and Analysis", path: "/services?serviceId=1" },
    { name: "Business Advisory", path: "/services?serviceId=2" },
    { name: "Valuations", path: "/services?serviceId=3" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-white font-bold text-2xl">RUNES GLOBEMARK<span className="text-secondary">&nbsp;LLP</span></span>
            </div>

            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div> */}
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a className="text-gray-400 hover:text-secondary transition-colors">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <a className="text-gray-400 hover:text-secondary transition-colors">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>131 W 33RD ST 16TH FLR NEW YORK, NY 10001</span>
              </li>
              <li className="text-gray-400 flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>(+1) 7323224971</span>
              </li>
              <li className="text-gray-400 flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>team@devmkini.com</span>
              </li>
              <li className="text-gray-400 flex items-start">
                <Clock size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Mon-Fri: 8:00 AM-6 PM (EST)<br />Sat-Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Runes Globemark LLP. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
