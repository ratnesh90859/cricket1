import React from 'react';
import { motion } from 'framer-motion';

// Define animation variants
const containerVariants = {
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const Tourna = () => {
  const tournaments = [
    { name: 'T20 Blast', date: 'June 15-30, 2023', teams: 8 },
    { name: 'ODI Championship', date: 'July 10-25, 2023', teams: 10 },
    { name: 'Test Series', date: 'August 5-30, 2023', teams: 4 },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-center w-full mb-20"
        >
          <h2 className="text-3xl font-semibold title-font mb-4 text-[#004d99]">Featured Tournaments</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            Check out our upcoming cricket tournaments and join the excitement on the field!
          </p>
        </motion.div>

        {/* Tournament cards with colors and effects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap -m-4"
        >
          {tournaments.map((tournament, index) => (
            <motion.div key={index} variants={itemVariants} className="p-4 md:w-1/3">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)' }}
                className="flex rounded-xl h-full bg-gradient-to-br from-blue-100 to-indigo-200 p-8 flex-col transform transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-bold text-indigo-900">{tournament.name}</h2>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-800 text-base font-semibold">{tournament.date}</p>
                  <p className="text-gray-700 text-base mb-3">{tournament.teams} Teams</p>
                  
                  <motion.a
                    whileHover={{ x: 7, color: '#22c55e' }} // Move to the right on hover
                    className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer font-medium"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tourna;
