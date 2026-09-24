import React from 'react';
import { motion } from 'framer-motion';

const StoryBegins = () => {
  return (
    <div className="w-full h-auto lg:min-h-[100svh] relative flex items-center justify-center py-12 lg:py-16 overflow-hidden bg-transparent">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col-reverse lg:flex-row items-stretch justify-between px-4 sm:px-8 md:px-12 h-full relative z-10">
        
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[70%] flex flex-col items-center lg:items-center justify-center py-4 h-full"
        >
          <div className="max-w-2xl flex flex-col items-center text-center lg:mr-8 xl:mr-12">
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif text-[#1e2917] font-bold leading-[1.1] tracking-tight uppercase mb-2">
              AND THAT'S WHERE<br />
              OUR STORY BEGINS.
            </h2>

            <div className="flex items-center justify-center w-full my-2">
              <div className="h-[2px] bg-[#2a3822] flex-grow max-w-[40px]"></div>
              <div className="text-[#782312] text-xl mx-4">
                ✽
              </div>
              <div className="h-[2px] bg-[#2a3822] flex-grow max-w-[40px]"></div>
            </div>

            <p className="text-sm sm:text-base text-[#1e2917] font-serif leading-snug mb-3">
              We lived away from Chettinad for years —<br className="hidden sm:block" />
              in Mumbai and elsewhere.<br className="hidden sm:block" />
              But our hearts never really left home.
            </p>

            <p className="text-sm sm:text-base text-[#1e2917] font-serif leading-snug mb-4">
              Every time we went back, our daughters<br className="hidden sm:block" />
              Shrilakshmi and Suvarnalakshmi would ask us,
            </p>

            <img 
              src="/images/story-1.webp" 
              alt="Story quote" 
              className="w-full max-w-md mx-auto mb-4 object-contain" 
            />

            <p className="text-sm sm:text-base text-[#1e2917] font-serif leading-snug mb-4">
              It was a simple question.<br />
              But it stayed with us.
            </p>

            <p className="text-base sm:text-lg text-[#1e2917] font-serif font-bold leading-snug mb-3">
              Perhaps people simply hadn't<br />
              discovered them yet.
            </p>

            <p className="text-sm sm:text-base text-[#1e2917] font-serif leading-snug mb-3">
              Chettinad is more than idli and dosa.<br />
              More than spice.
            </p>

            <p className="text-sm sm:text-base text-[#1e2917] font-serif leading-snug mb-4">
              So we decided to share the flavours<br />
              we grew up with.
            </p>

            <p className="text-base sm:text-lg text-[#782312] font-serif font-bold tracking-wide">
              And that's how Chettinad Bites began.
            </p>
            
          </div>
        </motion.div>
        
        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[30%] flex items-center justify-center lg:justify-end mb-6 lg:mb-0 lg:mt-10 relative top-[2%]"
        >
          <img
            src="/images/ShriSuvarna.png"
            alt="Family eating Chettinad food"
            className="w-full h-auto object-contain max-h-[85vh] lg:max-h-none transform scale-100 lg:scale-95 translate-x-0 lg:-translate-x-32 translate-y-0 lg:-translate-y-12"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 93%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 93%, transparent 100%)' 
            }}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default StoryBegins;
