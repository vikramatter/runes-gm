import { Award, Star, Users, Laptop } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import aboutImg from "../assets/officespace.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section intro removed to avoid duplication */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <AnimatedSection delay={0.1} from="bottom">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="text-primary-600 text-4xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To empower our clients with the financial insights and strategic
                guidance they need to succeed, while enriching and nurturing a
                pool of talented resources and promoting leadership.
              </p>
            </div>
          </AnimatedSection>

          {/* Vision */}
          <AnimatedSection delay={0.2} from="bottom">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="text-primary-600 text-4xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Our Vision
              </h3>
              <p className="text-gray-700">
                Striving to be the most respected and forward-thinking business modelling and consulting firm,
                setting industry standards through excellence, innovation, and an unwavering commitment to client
                satisfaction.
              </p>
            </div>
          </AnimatedSection>

          {/* Values */}
          <AnimatedSection delay={0.3} from="bottom">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="text-primary-600 text-4xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Our Core Values
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span>
                    Integrity: We uphold the highest ethical standards in all
                    our endeavors.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span>
                    Client Focus: We are dedicated to building long-lasting
                    relationships with our clients.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span>
                    Excellence: We strive for perfection in every aspect of our
                    work.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span>
                    Innovation: We embrace new technologies and methodologies to
                    stay ahead of the curve.
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <AnimatedSection className="w-full md:w-1/2 mb-8 md:mb-0" from="left">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Why Choose Us?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary-100 rounded-full p-2 mr-4 text-primary-600">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Team</h4>
                  <p className="text-gray-700">
                    With over a decade of hands-on experience and a solid foundation built
                    within the Big 4 & Banking Industry, our team delivers expert business modelling solutions with
                    precision and insight.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-100 rounded-full p-2 mr-4 text-primary-600">
                  <Star size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Commitment to Quality
                  </h4>
                  <p className="text-gray-700">
                    Quality service and adhering to our commitments has always
                    been the forefront of what we do.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-100 rounded-full p-2 mr-4 text-primary-600">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Personalized Service
                  </h4>
                  <p className="text-gray-700">
                    We take the time to understand your unique needs and goals
                    to deliver tailored solutions in real time.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-100 rounded-full p-2 mr-4 text-primary-600">
                  <Laptop size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Cutting-Edge Technology
                  </h4>
                  <p className="text-gray-700">
                    We leverage the latest technology to streamline processes
                    and enhance efficiency.
                  </p>
                </div>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection
            className="w-full md:w-1/2 pl-0 md:pl-8"
            from="right"
          >
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={aboutImg}
                alt="Modern office space"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
