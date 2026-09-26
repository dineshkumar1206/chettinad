import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="w-full h-[100svh] lg:h-screen relative flex items-center overflow-hidden pt-6 sm:pt-12 lg:pt-0 bg-transparent">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 h-full gap-2 sm:gap-6 lg:gap-0">
        {/* Left side: Person image */}
        <motion.div 
          className="w-full lg:w-5/12 flex justify-center lg:justify-start items-end lg:items-end relative z-10 lg:self-end h-auto lg:h-full pb-0 lg:pb-0 min-h-[30vh]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center w-[45%] sm:w-[40%] md:w-[35%] lg:w-[60%] lg:max-w-none translate-x-2 lg:translate-x-20 xl:translate-x-28">
            <motion.img 
              src="/images/hero-3.webp" 
              alt="Hi I am Alagappa" 
              className="h-10 sm:h-12 lg:h-14 object-contain mb-2 lg:mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
            <img 
              src="/images/first-component.webp" 
              alt="Chettinad Person" 
              className="w-full max-h-[35svh] lg:max-h-none h-auto drop-shadow-2xl object-contain object-bottom" 
            />
          </div>
        </motion.div>

        {/* Right side: Content */}
        <motion.div 
          className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:pl-8 xl:pl-16 pb-4 lg:pb-0 mt-6 sm:mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.img 
            src="/images/chettinad-logo.png" 
            alt="Chettinad Bites" 
            className="w-24 sm:w-28 md:w-32 lg:w-28 mt-10 sm:mt-0 mb-4 lg:mb-6" 
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
          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-[#4a4036] mb-3 lg:mb-5 font-serif leading-[1.25] max-w-xl px-10 sm:px-0">
            A journey into the flavours of Chettinad —<br className="hidden sm:block" />
            where food is generous, spices have stories,<br className="hidden sm:block" />
            and the familiar is only the beginning.
          </p>

          {/* Small Text Area */}
          <div className="w-full flex justify-center lg:justify-start mb-4 lg:mb-6 mt-2 lg:pl-16 xl:pl-24">
            <img src="/images/cm-1.webp" alt="Vanakkam. Come in." className="h-20 lg:h-28 object-contain" />
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
