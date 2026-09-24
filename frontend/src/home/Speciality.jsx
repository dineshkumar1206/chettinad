import React from 'react';
import { motion } from 'framer-motion';

const Speciality = () => {
  return (
    <div className="w-full h-auto py-4 lg:py-6 flex flex-col lg:flex-row items-stretch justify-between overflow-hidden bg-transparent">

      {/* Left Column: Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[45%] xl:w-[45%] flex flex-col justify-center p-4 sm:p-6 lg:p-8 xl:p-10 h-full order-2 lg:order-1"
      >
        <div className="max-w-lg ml-6 sm:ml-12 lg:ml-32 xl:ml-48 flex flex-col items-start w-full pr-4">

          <div className="text-center w-full mb-6 lg:-translate-x-8 xl:-translate-x-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-serif text-[#1e2917] font-bold leading-[1.1] tracking-tight uppercase mb-3">
              A SPECIALITY.<br />
              NOT JUST ANOTHER COUNTER.
            </h2>
            <div className="flex items-center justify-center w-full mb-3">
              <div className="text-[#8c3a21] text-xl">
                ✽
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#1e2917] font-serif leading-snug">
              A focused regional cuisine concept, designed to add<br className="hidden sm:block" /> variety and character to everyday enterprise dining.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full mt-2">

            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#8c3a21] flex-shrink-0 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="text-[#1e2917] font-serif font-bold uppercase text-sm sm:text-base mb-1">AUTHENTIC REGIONAL FLAVOURS</h4>
                <p className="text-[#1e2917] font-serif text-xs sm:text-sm leading-snug">Rooted in the food and traditions<br className="hidden sm:block" /> of Chettinad.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#8c3a21] flex-shrink-0 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18h18" /><path d="M4 18a8 8 0 0 1 16 0" /><path d="M12 7V5" /><path d="M10 5h4" /></svg>
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="text-[#1e2917] font-serif font-bold uppercase text-sm sm:text-base mb-1">FOCUSED MENU</h4>
                <p className="text-[#1e2917] font-serif text-xs sm:text-sm leading-snug">A curated range designed for<br className="hidden sm:block" /> efficient operations.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#8c3a21] flex-shrink-0 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2" /><path d="M8 3v1" /><path d="M16 3v1" /><path d="M2 13a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9H2Z" /><path d="M4 14v2a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-2" /></svg>
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="text-[#1e2917] font-serif font-bold uppercase text-sm sm:text-base mb-1">LIVE & BATCH COOKED FRESH</h4>
                <p className="text-[#1e2917] font-serif text-xs sm:text-sm leading-snug">Food prepared live and in fresh<br className="hidden sm:block" /> batches through the day.</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-4">
              <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#8c3a21] flex-shrink-0 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 10l-4 4" /><path d="M18 6l-4 4" /><path d="M21 3a2.83 2.83 0 0 0-4 0l-7.5 7.5a2.83 2.83 0 0 0 0 4l1 1a2.83 2.83 0 0 0 4 0l7.5-7.5a2.83 2.83 0 0 0 0-4Z" /><path d="M4 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M2 22l2-2" /></svg>
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="text-[#1e2917] font-serif font-bold uppercase text-sm sm:text-base mb-1">VEG & NON-VEG</h4>
                <p className="text-[#1e2917] font-serif text-xs sm:text-sm leading-snug">A regional experience with<br className="hidden sm:block" /> something for everyone.</p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-start gap-4">
              <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#8c3a21] flex-shrink-0 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="text-[#1e2917] font-serif font-bold uppercase text-sm sm:text-base mb-1">DESIGNED FOR EVERYDAY DINING</h4>
                <p className="text-[#1e2917] font-serif text-xs sm:text-sm leading-snug">A speciality concept that fits seamlessly<br className="hidden sm:block" /> into corporate cafeterias and food courts.</p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Right Column: Full Bleed Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-[45%] xl:w-[45%] h-[50vh] lg:h-[75vh] relative order-1 lg:order-2 ml-auto lg:mr-16 xl:mr-32 lg:my-auto flex items-center"
      >
        <img
          src="/images/Imagefor8.png"
          alt="Chettinad Bites Speciality"
          className="w-full h-full object-cover rounded-xl"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect'
          }}
        />
      </motion.div>

    </div>
  );
};

export default Speciality;
