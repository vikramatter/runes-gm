import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Managing Partner",
      bio: "With over 20 years of experience in accounting and consulting, Sarah leads our team with vision and expertise.",
      image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Michael Chen",
      position: "Tax Director",
      bio: "Michael specializes in complex tax planning strategies for businesses and high-net-worth individuals.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Rebecca Martinez",
      position: "Audit Manager",
      bio: "Rebecca leads our audit team, ensuring the highest quality standards in all our assurance services.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "David Wilson",
      position: "Advisory Consultant",
      bio: "David provides strategic business advice to help clients optimize operations and drive growth.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section intro removed to avoid duplication */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 0.1} 
              from="bottom"
              className="h-full"
            >
              <motion.div 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow text-center h-full"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-64 bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h4>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-700 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
