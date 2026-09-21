import React from 'react';
import { motion } from 'framer-motion';

const StoryBegins = () => {
  return (
    <div className="w-full h-screen relative flex items-center justify-center py-4 lg:py-8 overflow-hidden bg-transparent">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-stretch justify-between px-4 sm:px-8 md:px-12 h-full relative z-10">
        
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center py-4 h-full"
        >
          <div className="max-w-xl flex flex-col items-center text-center lg:mr-16 xl:mr-24">
            
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

            <p className="text-lg sm:text-xl md:text-2xl text-[#782312] font-medium leading-tight mb-4 px-4" style={{fontFamily: "'Caveat', 'Just Another Hand', 'Comic Sans MS', cursive"}}>
              "Why do we get all these wonderful<br />
              dishes here... but not in Mumbai<br />
              and other cities?"
            </p>

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
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-10 lg:mt-10 relative top-[2%]"
        >
          <img
            src="/images/Imagefor6.png"
            alt="Family eating Chettinad food"
            className="w-full h-auto object-contain max-h-[85vh] lg:max-h-none"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)' 
            }}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default StoryBegins;
