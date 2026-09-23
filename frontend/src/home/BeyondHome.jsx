import React from 'react';
import { motion } from 'framer-motion';

const BeyondHome = () => {
  return (
    <div className="w-full min-h-screen lg:h-screen flex flex-col lg:flex-row items-stretch justify-between overflow-hidden bg-transparent">

      {/* Left Column: Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[45%] xl:w-[40%] flex flex-col items-center justify-center p-6 sm:p-10 lg:p-12 xl:p-16 h-auto lg:h-full order-2 lg:order-1"
      >
        <div className="max-w-md mx-auto lg:ml-16 xl:ml-24 flex flex-col items-center text-center w-full">

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#1e2917] font-bold leading-[1.1] tracking-tight uppercase mb-2">
            TAKING<br />
            CHETTINAD<br />
            BEYOND HOME.
          </h2>

          <div className="flex items-center justify-center w-full mb-3">
            <div className="text-[#782312] text-xl">
              ✽
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#1e2917] font-serif leading-snug mb-4 px-4">
            Chettinad Bites brings the flavours<br />
            of the Chettinad region to<br />
            contemporary food spaces.
          </p>

          {/* Icons Image */}
          <div className="flex justify-center w-full mb-4">
            <img src="/images/beyond-1.webp" alt="Chettinad Bites Features" className="w-full max-w-sm h-auto object-contain" />
          </div>

          <p className="text-sm sm:text-base text-[#1e2917] font-serif leading-snug mb-4 px-4">
            A focused regional cuisine concept,<br />
            designed for the places where people<br />
            eat, work and gather.
          </p>

          <h3 className="text-lg sm:text-xl font-serif text-[#1e2917] font-bold uppercase mb-2">
            FOR ENTERPRISES,<br />
            CORPORATES & INSTITUTIONS
          </h3>

          <p className="text-sm sm:text-base text-[#1e2917] font-serif leading-snug mb-3 px-2">
            From everyday corporate dining to curated<br />
            food experiences, we bring a taste of Chettinad<br />
            closer to where people are.
          </p>

          <p className="text-sm sm:text-base text-[#1e2917] font-serif leading-snug">
            Already serving Chettinad<br />
            at corporate food courts.
          </p>

        </div>
      </motion.div>

      {/* Right Column: Full Bleed Image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-[50%] xl:w-[55%] h-[50vh] lg:h-full relative order-1 lg:order-2 ml-auto flex items-center justify-center lg:justify-end py-4 lg:py-10 px-4 lg:pl-10 lg:pr-0"
      >
        <img
          src="/images/Chettinad.png"
          alt="Chettinad Bites Food Court"
          className="w-full h-auto max-h-full object-contain object-center lg:object-right"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 100%)',
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect'
          }}
        />
      </motion.div>

    </div>
  );
};

export default BeyondHome;
