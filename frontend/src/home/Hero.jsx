import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="w-full h-screen relative flex items-center overflow-hidden pt-8 pb-0 lg:py-0">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 h-full">
        {/* Left side: Person image */}
        <motion.div 
          className="w-full lg:w-5/12 flex justify-center lg:justify-start items-end lg:items-center relative z-10 lg:self-end h-full mt-4 lg:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src="/images/first-component.webp" 
            alt="Chettinad Person" 
            className="w-[60%] sm:w-[45%] lg:w-[85%] lg:max-w-none h-auto drop-shadow-2xl object-contain object-bottom translate-y-10 lg:translate-y-20" 
          />
        </motion.div>

        {/* Right side: Content */}
        <motion.div 
          className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left mt-4 lg:mt-0 z-10 lg:pl-12 xl:pl-16 pb-2 lg:pb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.img 
            src="/images/chettinad-logo.png" 
            alt="Chettinad Bites" 
            className="w-32 sm:w-40 md:w-48 mb-4 lg:mb-6" 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          {/* Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[46px] font-serif text-[#2a2a1a] font-medium leading-[1.15] mb-3 lg:mb-6 tracking-tight">
            There is a side of<br />South Indian food<br />you may not have<br />discovered yet.
          </h1>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-xl lg:text-[22px] text-[#4a4036] mb-4 lg:mb-8 font-serif leading-[1.4] max-w-xl">
            A journey into the flavours of Chettinad —<br className="hidden sm:block" />
            where food is generous, spices have stories,<br className="hidden sm:block" />
            and the familiar is only the beginning.
          </p>

          {/* Small Text Area */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-2 sm:gap-4 lg:gap-6 mb-4 lg:mb-12 text-[#4a2016] font-serif">
            <div className="font-bold text-base sm:text-lg lg:text-2xl italic leading-tight text-center sm:text-right">
              "Vanakkam.<br />Come in."
            </div>
            
            <div className="hidden sm:block w-[1px] h-16 bg-[#8a7060]"></div>
            
            <div className="text-xs sm:text-sm lg:text-[15px] not-italic leading-tight text-center sm:text-left text-[#5a4036]">
              And yes,<br />we have idli<br />and dosa too. <span className="inline-block translate-y-[2px]">😊</span>
            </div>
          </div>

          {/* Call to Action Button */}
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#5a1b0a" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#782312] text-white rounded-full px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 text-xs md:text-sm lg:text-base font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 lg:gap-3 shadow-lg"
          >
            Come, I'll show you <span className="text-lg lg:text-xl">&rarr;</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
