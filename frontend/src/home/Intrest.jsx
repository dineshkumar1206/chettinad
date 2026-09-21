import React from 'react';
import { motion } from 'framer-motion';

const Intrest = () => {
  return (
    <div className="w-full min-h-screen relative flex items-center justify-center pt-8 pb-12 lg:py-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 h-full relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="text-sm sm:text-base md:text-xl lg:text-[22px] text-[#4a3b2c] font-serif mb-2 lg:mb-4">
            So... shall we see what else is on the table?
          </div>

          <div className="text-[#8a3020] text-lg lg:text-xl mb-2 lg:mb-4">
            ✽
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-serif text-[#2a3822] font-bold leading-[1.15] mb-8 lg:mb-12 tracking-tight uppercase">
            This is where<br />
            Chettinad gets interesting.
          </h2>
        </motion.div>

        <motion.div
          className="w-full flex justify-center mb-10 lg:mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="/images/Imagefor3.png"
            alt="Chettinad Interesting Dishes"
            className="w-full max-w-5xl h-auto drop-shadow-xl object-contain"
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#5a1b0a" }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#782312] text-white rounded-full px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 text-xs md:text-sm lg:text-base font-bold tracking-widest transition-all duration-300 flex items-center gap-2 lg:gap-3 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          And that's just the beginning. <span className="text-lg lg:text-xl">&rarr;</span>
        </motion.button>
        
      </div>
    </div>
  );
};

export default Intrest;
