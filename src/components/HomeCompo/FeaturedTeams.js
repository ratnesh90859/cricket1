import React from "react";
import { motion } from "framer-motion";

const FeaturedTeams = () => {
  const teams = [
    { name: 'Team A', description: 'Description for Team A', logo: 'https://www.shutterstock.com/image-vector/cricket-sport-team-club-logo-600nw-2156607285.jpg', points: 120 },
    { name: 'Team B', description: 'Description for Team B', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfObvcZio7M90JvyCWytrh7McQu_m8J0j1Bg&s', points: 95 },
    { name: 'Team C', description: 'Description for Team C', logo: 'https://t4.ftcdn.net/jpg/04/26/13/71/360_F_426137121_u2zwsANOFCMcAZyAKAA9jJu1GCWxWaLG.jpg', points: 88 },
    { name: 'Team D', description: 'Description for Team D', logo: 'https://w7.pngwing.com/pngs/812/694/png-transparent-logo-sports-association-cricket-team-cricket-purple-text-sport.png', points: 110 }
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-12">
      <h2 className="font-semibold mb-6 text-center text-[#316685] text-[3.0rem]">Featured Teams</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {teams.map((team, index) => (
          <motion.div
            key={team.name}
            className="bg-gradient-to-br from-purple-300 to-indigo-400 border border-gray-300 rounded-xl shadow-lg p-6 text-center flex flex-col items-center w-64 transform hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img
              src={team.logo}
              alt={`${team.name} Logo`}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-4 object-cover rounded-full shadow-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{team.name}</h3>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-2">{team.description}</p>
            <p className="text-yellow-400 text-sm sm:text-base md:text-lg font-semibold">Total Points: {team.points}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTeams;
