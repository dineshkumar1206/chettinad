import React from 'react';
import { motion } from 'framer-motion';

const NonVeg = () => {
  return (
    <div className="w-full min-h-screen relative flex items-center justify-center py-10 lg:py-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 h-full relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif text-[#1e2917] font-bold leading-[1.1] tracking-tight uppercase mb-2">
            Oh Yes.<br />
            There's More.
          </h2>

          <div className="flex items-center justify-center w-full my-3">
            <div className="h-[2px] bg-[#2a3822] flex-grow max-w-[80px]"></div>
            <div className="text-[#782312] text-xl mx-4">
              ✽
            </div>
            <div className="h-[2px] bg-[#2a3822] flex-grow max-w-[80px]"></div>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#3a2d21] font-serif leading-relaxed mb-6 lg:mb-8">
            Chettinad has a rich non-vegetarian tradition too — from robust<br className="hidden md:block" />
            chicken curries to crab and fish preparations, layered with the<br className="hidden md:block" />
            unmistakable depth of Chettinad spices.
          </p>
        </motion.div>

        <motion.div
          className="w-full flex justify-center flex-grow items-center mb-6 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-6xl">
            
            {/* Dish 1: Chicken Chettinad */}
            <div className="absolute top-[-5%] sm:top-0 left-0 sm:left-[8%] flex flex-col items-center transform -rotate-3 z-20">
              <span className="text-[#3a2d21] font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-1" style={{fontFamily: "'Just Another Hand', 'Comic Sans MS', cursive"}}>Chicken Chettinad</span>
              <svg width="60" height="40" viewBox="0 0 100 60" className="hidden sm:block opacity-80" style={{ transform: 'rotate(15deg)' }}>
                <path d="M 10 10 Q 40 40 80 50" fill="transparent" stroke="#3a2d21" strokeWidth="2" strokeLinecap="round" />
                <polygon points="80,50 72,44 75,55" fill="#3a2d21" />
              </svg>
            </div>
            
            {/* Dish 2: Mutton Kolaurundai */}
            <div className="absolute top-[-10%] sm:top-[-8%] left-[25%] sm:left-[32%] flex flex-col items-center transform -rotate-1 z-20">
              <span className="text-[#3a2d21] font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-1" style={{fontFamily: "'Just Another Hand', 'Comic Sans MS', cursive"}}>Mutton Kolaurundai</span>
              <svg width="40" height="50" viewBox="0 0 60 80" className="hidden sm:block opacity-80">
                <path d="M 30 10 Q 40 50 35 70" fill="transparent" stroke="#3a2d21" strokeWidth="2" strokeLinecap="round" />
                <polygon points="35,70 30,60 42,62" fill="#3a2d21" />
              </svg>
            </div>

            {/* Dish 3: Nandu Curry */}
            <div className="absolute top-[-10%] sm:top-[-8%] right-[25%] sm:right-[32%] flex flex-col items-center transform rotate-1 z-20">
              <span className="text-[#3a2d21] font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-1" style={{fontFamily: "'Just Another Hand', 'Comic Sans MS', cursive"}}>Nandu Curry</span>
              <svg width="40" height="50" viewBox="0 0 60 80" className="hidden sm:block opacity-80" style={{ transform: 'scaleX(-1)' }}>
                <path d="M 30 10 Q 40 50 35 70" fill="transparent" stroke="#3a2d21" strokeWidth="2" strokeLinecap="round" />
                <polygon points="35,70 30,60 42,62" fill="#3a2d21" />
              </svg>
            </div>

            {/* Dish 4: Meen Kuzhambu */}
            <div className="absolute top-[-5%] sm:top-0 right-0 sm:right-[8%] flex flex-col items-center transform rotate-3 z-20">
              <span className="text-[#3a2d21] font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-1" style={{fontFamily: "'Just Another Hand', 'Comic Sans MS', cursive"}}>Meen Kuzhambu</span>
              <svg width="60" height="40" viewBox="0 0 100 60" className="hidden sm:block opacity-80" style={{ transform: 'rotate(-15deg) scaleX(-1)' }}>
                <path d="M 10 10 Q 40 40 80 50" fill="transparent" stroke="#3a2d21" strokeWidth="2" strokeLinecap="round" />
                <polygon points="80,50 72,44 75,55" fill="#3a2d21" />
              </svg>
            </div>

            <img
              src="/images/imagefor4.png"
              alt="Chettinad Non-Vegetarian Dishes"
              className="w-full h-auto max-h-[45vh] drop-shadow-2xl object-contain relative z-10"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-12 w-full mt-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <p className="text-lg md:text-xl lg:text-2xl text-[#782312] font-serif font-medium italic text-right">
              Veg or non-veg?<br />
              Why choose a side?
            </p>
            <div className="text-[#782312]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
          </div>
          
          <div className="hidden sm:block h-16 w-[1px] bg-[#782312]/30"></div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#5a1b0a" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#782312] text-white rounded-full px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 text-sm md:text-base font-bold tracking-widest transition-all duration-300 flex items-center gap-2 lg:gap-3 shadow-lg"
          >
            Come. There's more. <span className="text-lg lg:text-xl">&rarr;</span>
          </motion.button>
        </motion.div>
        
      </div>
    </div>
  );
};

export default NonVeg;
