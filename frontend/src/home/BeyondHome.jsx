import React from 'react';
import { motion } from 'framer-motion';

const BeyondHome = () => {
  return (
    <div className="w-full min-h-screen lg:h-screen flex flex-col lg:flex-row items-stretch justify-between overflow-hidden bg-transparent">
      
      {/* Left Column: Content */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[45%] xl:w-[40%] flex flex-col items-center justify-center p-6 sm:p-10 lg:p-12 xl:p-16 h-full order-2 lg:order-1"
      >
        <div className="max-w-md mx-auto ml-10 sm:ml-16 lg:ml-24 xl:ml-32 flex flex-col items-center text-center w-full">
          
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

          {/* Icons Row */}
          <div className="flex flex-row items-start justify-center gap-4 sm:gap-6 w-full mb-4">
            
            {/* Icon 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#af5a3e] flex flex-col items-center justify-center p-2 mb-2">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <span className="text-white text-[9px] sm:text-[10px] font-bold leading-tight uppercase text-center">Speciality<br/>Counter</span>
              </div>
            </div>

            {/* Icon 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#af5a3e] flex flex-col items-center justify-center p-2 mb-2">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                <span className="text-white text-[9px] sm:text-[10px] font-bold leading-tight uppercase text-center">Live Food<br/>Experience</span>
              </div>
            </div>

            {/* Icon 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#af5a3e] flex flex-col items-center justify-center p-2 mb-2">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                <span className="text-white text-[9px] sm:text-[10px] font-bold leading-tight uppercase text-center">Kiosk</span>
              </div>
            </div>
            
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-[50%] xl:w-[55%] h-[50vh] lg:h-full relative order-1 lg:order-2 ml-auto"
      >
        <img 
          src="/images/Imagefor7.png" 
          alt="Chettinad Bites Food Court" 
          className="w-full h-full object-cover"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)' 
          }}
        />
      </motion.div>

    </div>
  );
};

export default BeyondHome;
