import React from 'react';
import { motion } from 'framer-motion';

const South = () => {
  return (
    <div className="w-full h-screen relative flex items-center pt-8 pb-0 lg:py-0 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 h-full gap-4 lg:gap-0">

        {/* Left side: Person image */}
        <motion.div
          className="w-full lg:w-4/12 flex justify-center lg:justify-start items-end relative z-10 h-full lg:self-end"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/second-component.png"
            alt="Chettinad Person Thinking"
            className="w-[60%] sm:w-[50%] lg:w-[115%] lg:max-w-none h-auto drop-shadow-xl object-contain object-bottom translate-y-0 lg:-translate-y-4"
          />
        </motion.div>

        {/* Right side: Content */}
        <motion.div
          className="w-full lg:w-8/12 flex flex-col items-center text-center z-10 lg:pl-8 xl:pl-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >

          <div className="text-sm sm:text-base md:text-xl lg:text-[22px] text-[#4a3b2c] font-serif mb-1 lg:mb-2">
            Before we go any further,<br className="hidden sm:block" />
            let me ask you something...
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-serif text-[#2a3822] font-bold leading-[1.15] mb-2 lg:mb-4 tracking-tight">
            When you hear<br />
            'South Indian food',<br />
            <span className="text-xl sm:text-2xl lg:text-[32px] font-medium text-[#3a4a32] mt-1 lg:mt-2 block">
              what comes to mind?
            </span>
          </h2>

          {/* Flower divider */}
          <div className="text-[#8a3020] text-lg lg:text-xl my-1">
            ✽
          </div>

          {/* Center Image (Food Items) */}
          <motion.img
            src="/images/image-items-2.png"
            alt="South Indian Food Items"
            className="w-full max-w-2xl mx-auto mt-1 mb-3 lg:mt-2 lg:mb-6 drop-shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Bottom Text */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-[#5a4036] font-serif text-xs sm:text-base lg:text-xl mb-2 lg:mb-4">
            <span className="font-bold text-[#6a1b0a] italic text-base sm:text-xl lg:text-2xl">"Exactly."</span>
            <span className="hidden sm:block text-[#a09080]">|</span>
            <span>And there's absolutely nothing wrong with that.</span>
          </div>

          <h3 className="text-base sm:text-xl lg:text-[28px] font-serif text-[#2a3822] font-bold mt-1 mb-4 lg:mb-8">
            But that's only one little corner of a very big table.
          </h3>

          {/* Call to Action Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#5a1b0a" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#782312] text-white rounded-full px-5 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 text-[10px] md:text-sm lg:text-base font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 lg:gap-3 shadow-lg"
          >
            Come. There's more. <span className="text-base lg:text-xl">&rarr;</span>
          </motion.button>

        </motion.div>
      </div>
    </div>
  );
};

export default South;
