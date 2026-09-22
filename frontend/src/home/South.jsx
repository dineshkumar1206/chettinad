import React from 'react';
import { motion } from 'framer-motion';

const South = () => {
  return (
    <div className="w-full min-h-[100svh] lg:h-screen relative flex items-center py-12 lg:py-0 overflow-hidden bg-transparent">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 h-full gap-6 lg:gap-0">

        {/* Left side: Person image */}
        <motion.div
          className="w-full lg:w-4/12 flex justify-center lg:justify-start items-end z-10 h-auto lg:h-full lg:absolute lg:left-8 xl:left-16 lg:bottom-0 xl:bottom-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/second-component.png"
            alt="Chettinad Person Thinking"
            className="w-[45%] sm:w-[35%] md:w-[30%] lg:w-auto lg:h-[75%] max-h-[35vh] lg:max-h-none drop-shadow-xl object-contain object-bottom lg:object-left-bottom translate-y-4 lg:translate-y-0"
          />
        </motion.div>

        {/* Right side: Content */}
        <motion.div
          className="w-full lg:w-8/12 lg:ml-auto flex flex-col items-center text-center z-10 relative mt-4 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >

          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#4a3b2c] font-serif mb-1 leading-tight">
            Before we go any further,<br className="hidden sm:block" />
            let me ask you something...
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif text-[#2a3822] font-bold leading-[1.1] mb-1 tracking-tight">
            When you hear<br />
            'South Indian food',<br />
            <span className="text-xl sm:text-2xl lg:text-[30px] font-medium text-[#3a4a32] block">
              what comes to mind?
            </span>
          </h2>

          {/* Flower divider */}
          <div className="text-[#8a3020] text-base lg:text-lg my-0 lg:my-1">
            ✽
          </div>

          {/* Center Image (Food Items) */}
          <motion.img
            src="/images/cm-2.webp"
            alt="South Indian Food Items"
            className="w-[95%] sm:w-[85%] lg:w-full max-w-2xl mx-auto drop-shadow-md my-1 lg:my-2 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <h3 className="text-base sm:text-lg lg:text-[24px] font-serif text-[#2a3822] font-bold mt-1">
            But that's only one little corner of a very big table.
          </h3>

        </motion.div>
      </div>
    </div>
  );
};

export default South;
