import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <div className="w-full min-h-screen relative flex items-center justify-center py-12 lg:py-20 overflow-hidden">
      
      {/* Left side image restored */}
      {/* <motion.img
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        src="/images/Image5_1.png"
        alt="Chettinad Spices"
        className="hidden lg:block absolute left-36 xl:left-44 bottom-0 w-[16%] max-w-[240px] object-contain z-10"
      /> */}

      {/* Right side image - absolutely positioned */}
      <motion.img
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        src="/images/Image5_2.png"
        alt="Chettinad Story"
        className="hidden lg:block absolute lg:right-28 xl:right-36 bottom-0 w-[22%] max-w-[300px] object-contain z-10"
      />

      {/* Top right side image - absolutely positioned */}
      <motion.img
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src="/images/cm-5-2.webp"
        alt="Chettinad Story Elements"
        className="hidden lg:block absolute lg:right-24 xl:right-32 top-[35%] w-[18%] max-w-[280px] object-contain z-10"
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center max-w-4xl mx-auto"
        >
          <img src="/images/cm-5-1.webp" alt="Now you're probably wondering" className="h-16 sm:h-20 md:h-24 object-contain mb-4" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-serif text-[#1e2917] font-bold leading-[1.1] tracking-tight uppercase mb-2">
            BUT WHAT MAKES<br />
            IT CHETTINAD?
          </h2>

          {/* Mobile image version if needed */}
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/images/Image5_2.png"
            alt="Chettinad Story Person"
            className="block lg:hidden w-full max-w-[200px] mx-auto my-4 object-contain"
          />

          <div className="flex items-center justify-center w-full my-2">
            <div className="h-[2px] bg-[#2a3822] flex-grow max-w-[60px]"></div>
            <div className="text-[#782312] text-xl mx-4">
              ✽
            </div>
            <div className="h-[2px] bg-[#2a3822] flex-grow max-w-[60px]"></div>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl text-[#1e2917] font-serif mt-1 mb-1">
            It isn't simply the heat of the chilli.
          </p>
          
          <p className="text-3xl sm:text-4xl md:text-5xl text-[#1e2917] font-serif font-bold mb-2">
            It's the layers.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl text-[#782312] font-serif font-medium mb-3">
            Flavours that build, rather than shout.
          </p>

          {/* Stacked layout for the bottom text */}
          <div className="flex flex-col items-center justify-center gap-6 text-center w-full mt-2 px-4 sm:px-12 md:px-24">
            
            <div className="flex flex-col max-w-md mx-auto text-center">
              <h3 className="font-bold text-[#1e2917] text-lg sm:text-xl mb-2 font-serif">
                Chettinad's flavours didn't grow in isolation.
              </h3>
              <p className="text-[#3a2d21] text-sm sm:text-base leading-relaxed font-serif">
                The Chettiar community travelled widely for trade,
                encountered ingredients and culinary influences
                along the way, and brought those experiences home.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-sm mt-2">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#782312" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <h3 className="font-bold text-[#1e2917] text-sm sm:text-lg uppercase tracking-wider font-serif text-center md:text-left">
                WE TRAVELLED THE WORLD.<br />
                THE FLAVOURS CAME HOME
              </h3>
            </div>

          </div>

          {/* Mobile image version for leaves (cm-5-2.webp) at the bottom */}
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/images/cm-5-2.webp"
            alt="Chettinad Story Elements Mobile"
            className="block lg:hidden w-[60%] max-w-[200px] mx-auto mt-8 mb-4 object-contain"
          />

        </motion.div>

      </div>
    </div>
  );
};

export default Story;
