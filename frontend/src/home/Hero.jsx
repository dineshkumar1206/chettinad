import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="w-full h-[100svh] lg:h-screen relative flex items-center overflow-hidden pt-16 lg:pt-0 bg-transparent">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 h-full gap-4 lg:gap-0">
        {/* Left side: Person image */}
        <motion.div 
          className="w-full lg:w-5/12 flex justify-center lg:justify-start items-end lg:items-center relative z-10 lg:self-end h-auto lg:h-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src="/images/first-component.webp" 
            alt="Chettinad Person" 
            className="w-[45%] sm:w-[35%] md:w-[30%] lg:w-[75%] lg:max-w-none h-auto drop-shadow-2xl object-contain object-bottom translate-y-8 lg:translate-y-20 xl:translate-y-24 translate-x-2 lg:translate-x-12 xl:translate-x-16" 
          />
        </motion.div>

        {/* Right side: Content */}
        <motion.div 
          className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:pl-8 xl:pl-16 pb-4 lg:pb-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.img 
            src="/images/chettinad-logo.png" 
            alt="Chettinad Bites" 
            className="w-24 sm:w-28 md:w-32 lg:w-40 mb-4 lg:mb-6" 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-serif text-[#2a2a1a] font-bold leading-[1.05] mb-2 lg:mb-3 tracking-tight">
            There is a side of<br />South Indian food<br />you may not have<br />discovered yet.
          </h1>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-[#4a4036] mb-3 lg:mb-5 font-serif leading-[1.25] max-w-xl">
            A journey into the flavours of Chettinad —<br className="hidden sm:block" />
            where food is generous, spices have stories,<br className="hidden sm:block" />
            and the familiar is only the beginning.
          </p>

          {/* Small Text Area */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 lg:gap-8 mb-4 lg:mb-6 text-[#4a2016]">
            <div className="flex flex-col items-center mt-3">
              <img src="/images/cm-1.webp" alt="Vanakkam" className="h-20 lg:h-24 object-contain" />
            </div>
            
            <div className="hidden sm:block w-[1px] h-12 bg-[#8a7060]/40"></div>
            
            <div className="text-xs sm:text-sm lg:text-[16px] not-italic leading-tight text-center sm:text-left text-[#5a4036] font-serif relative top-2">
              And yes,<br />we have idli<br />and dosa too. 
            </div>
          </div>

          {/* Call to Action Button */}
          {/* <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#5a1b0a" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#782312] text-white rounded-full px-4 py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2.5 text-[10px] md:text-xs lg:text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            Come, I'll show you <span className="text-sm lg:text-base">&rarr;</span>
          </motion.button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
