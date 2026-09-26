import React from 'react';
import { motion } from 'framer-motion';

const Intrest = () => {
  return (
    <div className="w-full h-auto lg:min-h-screen relative flex items-center justify-center py-8 lg:py-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 h-full relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="text-sm sm:text-base md:text-xl lg:text-[22px] text-[#2a3822] font-serif mb-2 lg:mb-4 mt-2 lg:mt-0">
            So... shall we see what else is on the table?
          </div>

          <div className="text-[#8a3020] text-lg lg:text-xl mb-2 lg:mb-4">
            ✽
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-serif text-[#2a3822] font-bold leading-[1.15] mb-2 lg:mb-12 tracking-tight uppercase">
            This is where<br />
            Chettinad gets interesting.
          </h2>
        </motion.div>

        <motion.div
          className="w-full flex justify-center mb-4 lg:mb-16"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Desktop/Tablet Image */}
          <imgloading="lazy" 
            src="/images/cm-3.webp"
            alt="Chettinad Interesting Dishes"
            className="hidden sm:block w-full lg:w-[80%] lg:max-w-4xl xl:max-w-5xl h-auto drop-shadow-xl object-contain mx-auto"
          />
          
          {/* Mobile Image */}
          <imgloading="lazy" 
            src="/images/mobile-cm-2.webp"
            alt="Chettinad Interesting Dishes Mobile"
            className="block sm:hidden w-[85%] h-auto drop-shadow-xl object-contain mx-auto"
          />
        </motion.div>


        
      </div>
    </div>
  );
};

export default Intrest;
