import React from 'react';
import { motion } from 'framer-motion';

const NonVeg = () => {
  return (
    <div className="w-full h-auto lg:min-h-screen relative flex items-center justify-center py-6 lg:py-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between px-12 sm:px-16 md:px-20 lg:px-16 h-full relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif text-[#1e2917] font-bold leading-[1.1] tracking-tight uppercase mb-2">
            Oh Yes.<br />
            There's More.
          </h2>

          <div className="flex items-center justify-center w-full my-3">
            <div className="h-[2px] bg-[#2a3822] flex-grow max-w-[80px]"></div>
            <div className="text-[#782312] text-xl mx-4">
              ✽
            </div>
            <div className="h-[2px] bg-[#2a3822] flex-grow max-w-[80px]"></div>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#3a2d21] font-serif leading-relaxed mb-6 lg:mb-8">
            Chettinad has a rich non-vegetarian tradition too — from robust<br className="hidden md:block" />
            chicken curries to crab and fish preparations, layered with the<br className="hidden md:block" />
            unmistakable depth of Chettinad spices.
          </p>
        </motion.div>

        <motion.div
          className="w-full flex justify-center flex-grow items-center mb-6 relative"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-6xl">

            {/* Desktop/Tablet Image */}
            <img
              src="/images/cm-4.webp"
              alt="Chettinad Non-Vegetarian Dishes"
              className="hidden sm:block w-[95%] lg:w-[90%] mx-auto h-auto max-h-[45vh] drop-shadow-2xl object-contain relative z-10 transform translate-x-2 lg:translate-x-8"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, black 96%, transparent 100%)',
                maskImage: 'linear-gradient(to right, black 96%, transparent 100%)'
              }}
            />
            
            {/* Mobile Image */}
            <img
              src="/images/mobile-cm-3.webp"
              alt="Chettinad Non-Vegetarian Dishes Mobile"
              className="block sm:hidden w-[95%] mx-auto h-auto max-h-[45vh] drop-shadow-2xl object-contain relative z-10"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-12 w-full mt-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            <p className="text-lg md:text-xl lg:text-2xl text-[#782312] font-serif font-medium italic text-right">
              Veg or non-veg?<br />
              Why choose a side?
            </p>
            <div className="text-[#782312]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default NonVeg;
