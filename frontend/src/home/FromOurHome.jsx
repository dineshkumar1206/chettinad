import React from 'react';
import { motion } from 'framer-motion';

const FromOurHome = () => {
  return (
    <div className="w-full min-h-screen lg:h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden bg-transparent relative p-6 sm:p-10 lg:p-0">
      
      {/* Left Column: Image */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-[50%] h-[50vh] lg:h-full flex items-end justify-center relative"
      >
        <img 
          src="/images/Alagappa.png" 
          alt="Alagappa" 
          className="w-auto h-[70%] lg:h-[65%] object-contain object-bottom"
        />
      </motion.div>

      {/* Right Column: Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full lg:w-[50%] flex flex-col items-center justify-center pt-10 pb-6 lg:py-0 h-full z-10"
      >
        <div className="max-w-xl flex flex-col items-center text-center w-full px-4 sm:px-8 lg:-translate-x-24 xl:-translate-x-40">
          
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#0e2417] font-semibold leading-[1.1] tracking-tight uppercase mb-3 text-center">
            FROM OUR HOME.<br />
            TO YOUR TABLE.
          </h2>
          
          <div className="flex items-center justify-center w-full mb-4">
            <div className="text-[#8c3a21] text-2xl">
              ✽
            </div>
          </div>
          
          <div className="w-16 h-[1px] bg-black mb-4"></div>

          <h3 className="text-lg sm:text-xl font-serif text-[#0e2417] font-medium uppercase tracking-wider mb-6">
            BRING CHETTINAD TO YOUR SPACE.
          </h3>

          <button className="bg-[#8c3a21] hover:bg-[#7a311c] transition-colors duration-300 text-white font-serif uppercase tracking-wider text-base sm:text-lg py-2.5 px-8 rounded-full flex items-center justify-center gap-2 mb-8 shadow-md">
            LET'S TALK <span className="text-2xl leading-none">&rsaquo;</span>
          </button>

          {/* Divider: Enterprise Dining & Catering */}
          <div className="w-full flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] bg-gray-400 flex-1 max-w-[80px]"></div>
            <p className="text-[#2b2b2b] font-serif text-base sm:text-lg lg:text-xl whitespace-nowrap">Enterprise Dining & Catering</p>
            <div className="h-[1px] bg-gray-400 flex-1 max-w-[80px]"></div>
          </div>

          {/* Divider: House of Brands */}
          <div className="w-full flex items-center justify-center gap-4 mb-5">
            <div className="h-[1px] bg-gray-400 flex-1 max-w-[60px]"></div>
            <p className="text-[#2b2b2b] font-sans font-medium text-[10px] sm:text-xs tracking-widest uppercase">HOUSE OF BRANDS</p>
            <div className="h-[1px] bg-gray-400 flex-1 max-w-[60px]"></div>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-6 w-full">
            <img 
              src="/images/idlish-logo.png" 
              alt="iDlish" 
              className="h-10 sm:h-12 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={() => window.open('https://idlish.shop/', '_blank')}
            />
            <img 
              src="/images/2-states.png" 
              alt="2 States" 
              className="h-12 sm:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={() => window.open('https://www.2states.co.in/', '_blank')}
            />
            <img 
              src="/images/idaily-logo.webp" 
              alt="Chettinad Bites" 
              className="h-12 sm:h-16 object-contain hover:scale-110 transition-transform duration-300"
            />
            <img 
              src="/images/naanstop-logo.png" 
              alt="Naanstop Kitchen" 
              className="h-16 sm:h-20 object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Footer Text */}
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-4 w-full justify-center">
              <div className="h-[1px] bg-gray-400 w-12"></div>
              <p className="text-[#2b2b2b] font-serif text-xs sm:text-sm font-bold">4S Hospitality LLP</p>
              <div className="h-[1px] bg-gray-400 w-12"></div>
            </div>
            <p className="text-[#4a4a4a] text-[10px] sm:text-xs mt-1 font-serif font-semibold">
              Operating partners: WeTreat INC. & Bombay Bytes Co.
            </p>
          </div>

        </div>
      </motion.div>

    </div>
  );
};

export default FromOurHome;
