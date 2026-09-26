import React from 'react';
import { motion } from 'framer-motion';

const FromOurHome = () => {
  return (
    <div id="contact" className="w-full h-auto lg:min-h-screen flex flex-col lg:flex-row items-stretch justify-between overflow-hidden bg-transparent relative p-6 sm:p-10 lg:p-0 lg:pt-12">
      
      {/* Left Column: Image */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-[50%] h-auto lg:h-auto flex items-end justify-center relative pt-8 lg:pt-0 lg:absolute lg:bottom-0 lg:left-0"
      >
        <img loading="lazy" 
          src="/images/Alagappa.png" 
          alt="Alagappa" 
          className="w-auto h-[35vh] sm:h-[40vh] lg:h-[65vh] object-contain object-bottom"
        />
      </motion.div>

      {/* Right Column: Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full lg:w-[50%] flex flex-col items-center justify-center pt-10 pb-6 lg:py-0 h-full z-10 lg:ml-auto"
      >
        <div className="max-w-xl flex flex-col items-center text-center w-full px-4 sm:px-8 lg:-translate-x-24 xl:-translate-x-40">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif text-[#0e2417] font-semibold leading-[1.1] tracking-tight uppercase mb-3 text-center">
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

          <button 
            onClick={() => window.open('https://wa.me/919833381022', '_blank')}
            className="bg-[#8c3a21] cursor-pointer hover:bg-[#7a311c] transition-colors duration-300 text-white font-serif uppercase tracking-wider text-base sm:text-lg py-2.5 px-8 rounded-full flex items-center justify-center gap-2 mb-8 shadow-md"
          >
            LET'S TALK <span className="text-2xl leading-none">&rsaquo;</span>
          </button>



          {/* Divider: House of Brands */}
          <div className="w-full flex items-center justify-center gap-4 mb-5">
            <div className="h-[1px] bg-[#5f0201] flex-1 max-w-[60px]"></div>
            <p className="text-[#2b2b2b] font-sans font-medium text-[10px] sm:text-xs tracking-widest uppercase">HOUSE OF BRANDS</p>
            <div className="h-[1px] bg-[#5f0201] flex-1 max-w-[60px]"></div>
          </div>

          {/* Logos */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-5 mb-6 w-full">
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-5 w-full lg:w-auto">
              <img loading="lazy" 
                src="/images/chettinad-logo.png" 
                alt="Chettinad Bites" 
                className="h-12 sm:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={() => window.open('https://chettinad.co.in/', '_blank')}
              />
              <img loading="lazy" 
                src="/images/idlish-logo.png" 
                alt="iDlish" 
                className="h-10 sm:h-12 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={() => window.open('https://idlish.shop/', '_blank')}
              />
              <img loading="lazy" 
                src="/images/2-states.png" 
                alt="2 States" 
                className="h-12 sm:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={() => window.open('https://www.2states.co.in/', '_blank')}
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-5 w-full lg:w-auto mt-2 sm:mt-4 lg:mt-0">
              <img loading="lazy" 
                src="/images/idaily-logo.webp" 
                alt="Chettinad Bites" 
                className="h-12 sm:h-16 object-contain hover:scale-110 transition-transform duration-300"
              />
              <img loading="lazy" 
                src="/images/naanstop-logo.png" 
                alt="Naanstop Kitchen" 
                className="h-16 sm:h-20 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Footer Text */}
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-4 w-full justify-center">
              <div className="h-[1px] bg-[#5f0201] w-12"></div>
              <p className="text-[#5f0201] font-serif text-xs sm:text-sm font-bold lining-nums">4S Hospitality LLP</p>
              <div className="h-[1px] bg-[#5f0201] w-12"></div>
            </div>
            <p className="text-[#4a4a4a] text-[10px] sm:text-xs mt-1 font-serif font-semibold">
              Operating partners: WeTreat INC. & Bombay Bytes Co.
            </p>
          </div>

          {/* Credits */}
          <div className="mt-8 mb-2 w-full flex items-center justify-center">
            <p className="text-[10px] sm:text-xs text-[#3a2d21] font-serif font-medium tracking-wider uppercase opacity-80 hover:opacity-100 transition-opacity duration-300">
              Designed and developed by <a href="https://amigowebster.com/" target="_blank" rel="noopener noreferrer" className="text-[#8c3a21] hover:text-[#782312] font-bold hover:underline underline-offset-4 decoration-[1px] transition-all duration-300">amigowebster</a>
            </p>
          </div>

        </div>
      </motion.div>

    </div>
  );
};

export default FromOurHome;


