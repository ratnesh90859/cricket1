import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Define animation variants
const containerVariants = {
  visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const textVariants = {
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5 }, 
    color: "#000000" 
  },
  hover: { 
    color: ["#ff4b2b", "#ff416c", "#ffc837", "#28a745"], // Gradient color effect
    textShadow: "0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(255, 0, 0, 0.8)",
    scale: 1.05, 
    transition: { duration: 0.5, repeat: Infinity, repeatType: "mirror" },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-gray-600 body-font pt-4 md:pt-8 pb-8 md:pb-12 mt-0 pt-0"
      style={{ marginTop: 0, paddingTop: 0 }}
    >
      <div className="container mx-auto flex px-4 py-4 md:py-8 md:flex-row flex-col items-center">
        <motion.div
          variants={itemVariants}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          {/* Glowing Title */}
          <motion.h1
            variants={textVariants}
            initial="visible"
            whileHover="hover"
            className="title-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 font-medium text-gray-900"
          >
            Experience the Thrill of Cricket
            <br className="hidden lg:inline-block" />
            with CRICKO Organization
          </motion.h1>

          {/* Glowing Paragraph */}
          <motion.p
            variants={textVariants}
            initial="visible"
            whileHover="hover"
            className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed"
          >
            Join us for exciting cricket tournaments in various formats. Whether you're a player or a fan, we've got something for everyone. Discover the passion, skill, and excitement of cricket with CRICKO Organization.
          </motion.p>

          <div className="flex justify-center space-x-4">
            {/* Explore Tournaments Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 1 }} // Animation on hover
              whileTap={{ scale: 0.95, rotate: -1 }}  // Animation on tap
              className="relative inline-flex text-white bg-custom-blue border-0 py-2 px-6 text-base md:text-lg focus:outline-none hover:bg-custom-blue/80 rounded-lg overflow-hidden glowing-button"
            >
              <span className="absolute inset-0 bg-gradient-to-t from-neutral-800 to-neutral-700 opacity-60"></span>
              <span className="relative z-10">Explore Tournaments</span>
            </motion.button>

            {/* Register Team Button */}
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.1, rotate: -1 }} // Animation on hover
                whileTap={{ scale: 0.95, rotate: 1 }}   // Animation on tap
                className="relative inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 text-base md:text-lg focus:outline-none hover:bg-gray-200 rounded-lg overflow-hidden glowing-button"
              >
                <span className="absolute inset-0 bg-gradient-to-t from-gray-100 to-gray-200 opacity-60"></span>
                <span className="relative z-10">Register Team</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-full"
        >
          <img
            className="object-cover object-center rounded-lg border border-gray-300"
            alt="Cricket Match"
            src="https://media4.giphy.com/media/FeBamTuuPUTnFrqfx0/giphy.gif?cid=6c09b952djjkt4561ci63tffwnza5oomjujkkxuegg10cmyc&ep=v1_stickers_related&rid=giphy.gif&ct=s"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
