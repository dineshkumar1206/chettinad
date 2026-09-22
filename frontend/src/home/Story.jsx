import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <div className="w-full min-h-screen relative flex items-center justify-center py-12 lg:py-20 overflow-hidden">
      
      {/* Left side image - absolutely positioned */}
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        src="/images/Image5_1.png"
        alt="Chettinad Spices"
        className="hidden lg:block absolute -left-4 xl:-left-8 bottom-0 w-[30%] max-w-[450px] object-contain z-10"
      />

      {/* Right side image - absolutely positioned */}
      <motion.img
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        src="/images/Image5_2.png"
        alt="Chettinad Story"
        className="hidden lg:block absolute right-0 xl:right-4 bottom-0 w-[22%] max-w-[300px] object-contain z-10"
      />

      {/* Top right side image - absolutely positioned */}
      <motion.img
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src="/images/cm-5-2.webp"
        alt="Chettinad Story Elements"
        className="hidden lg:block absolute right-16 xl:right-32 top-[35%] w-[18%] max-w-[280px] object-contain z-10"
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

          <div className="flex items-center justify-center w-full my-3">
            <div className="h-[1px] bg-[#a89b8c] flex-grow max-w-[120px]"></div>
            <div className="text-[#782312] text-sm mx-4">
              ✽
            </div>
            <div className="h-[1px] bg-[#a89b8c] flex-grow max-w-[120px]"></div>
          </div>

          {/* Two column layout for the bottom text */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-10 text-left w-full mt-3">
            
            <div className="flex-1 flex flex-col max-w-sm ml-16 md:ml-24 lg:ml-32">
              <h3 className="font-bold text-[#1e2917] text-lg sm:text-xl mb-2 font-serif">
                Chettinad's flavours didn't grow in isolation.
              </h3>
              <p className="text-[#3a2d21] text-sm sm:text-base leading-relaxed font-serif">
                The Chettiar community travelled widely for trade,
                encountered ingredients and culinary influences
                along the way, and brought those experiences home.
              </p>
            </div>

            <div className="hidden md:block w-[1px] h-20 bg-[#a89b8c]"></div>
            <div className="block md:hidden h-[1px] w-full bg-[#a89b8c] my-2"></div>

            <div className="flex-1 flex items-center gap-4 max-w-sm">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#782312" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <h3 className="font-bold text-[#1e2917] text-base sm:text-lg uppercase tracking-wider font-serif">
                THE WORLD TRAVELLED.<br />
                THE FLAVOURS CAME HOME.
              </h3>
            </div>

          </div>



        </motion.div>
        
        {/* Mobile image version if needed */}
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src="/images/Image5_1.png"
          alt="Chettinad Story"
          className="block lg:hidden w-full max-w-[250px] mx-auto mt-10 object-contain"
        />

      </div>
    </div>
  );
};

export default Story;
