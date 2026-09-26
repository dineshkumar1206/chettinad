import React from 'react';
import { motion } from 'framer-motion';

const Speciality = () => {
  return (
    <div className="w-full h-auto py-4 lg:py-6 flex flex-col lg:flex-row items-stretch justify-between overflow-hidden bg-transparent px-12 sm:px-16 lg:px-0">

      {/* Left Column: Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[45%] xl:w-[45%] flex flex-col justify-center p-4 sm:p-6 lg:p-8 xl:p-10 h-full order-2 lg:order-1"
      >
        <div className="max-w-xl ml-6 sm:ml-12 lg:ml-28 xl:ml-40 flex flex-col items-start w-full pr-4">

          <div className="text-center w-full mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-serif text-[#1e2917] font-bold leading-[1.1] tracking-tight uppercase mb-3 lg:whitespace-nowrap">
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

          <div className="flex flex-col gap-4 w-full mt-2 lg:pl-8 xl:pl-12">

            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <img loading="lazy" src="/images/icon-1.png" alt="Authentic Regional Flavours" className="w-[46px] h-[46px] sm:w-[48px] sm:h-[48px] object-contain flex-shrink-0" />
              <div className="flex flex-col pt-1">
                <h4 className="text-[#1e2917] font-serif font-bold uppercase text-sm sm:text-base mb-1">AUTHENTIC REGIONAL FLAVOURS</h4>
                <p className="text-[#1e2917] font-serif text-xs sm:text-sm leading-snug">Rooted in the food and traditions<br className="hidden sm:block" /> of Chettinad.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <img loading="lazy" src="/images/icon-2.png" alt="Focused Menu" className="w-[46px] h-[46px] sm:w-[48px] sm:h-[48px] object-contain flex-shrink-0" />
              <div className="flex flex-col pt-1">
                <h4 className="text-[#1e2917] font-serif font-bold uppercase text-sm sm:text-base mb-1">FOCUSED MENU</h4>
                <p className="text-[#1e2917] font-serif text-xs sm:text-sm leading-snug">A curated range designed for<br className="hidden sm:block" /> efficient operations.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <img loading="lazy" src="/images/icon-3.png" alt="Live & Batch Cooked Fresh" className="w-[46px] h-[46px] sm:w-[48px] sm:h-[48px] object-contain flex-shrink-0" />
              <div className="flex flex-col pt-1">
                <h4 className="text-[#1e2917] font-serif font-bold uppercase text-sm sm:text-base mb-1">LIVE & BATCH COOKED FRESH</h4>
                <p className="text-[#1e2917] font-serif text-xs sm:text-sm leading-snug">Food prepared live and in fresh<br className="hidden sm:block" /> batches through the day.</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-4">
              <img loading="lazy" src="/images/icon-4.png" alt="Veg & Non-Veg" className="w-[46px] h-[46px] sm:w-[48px] sm:h-[48px] object-contain flex-shrink-0" />
              <div className="flex flex-col pt-1">
                <h4 className="text-[#1e2917] font-serif font-bold uppercase text-sm sm:text-base mb-1">VEG & NON-VEG</h4>
                <p className="text-[#1e2917] font-serif text-xs sm:text-sm leading-snug">A regional experience with<br className="hidden sm:block" /> something for everyone.</p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-start gap-4">
              <img loading="lazy" src="/images/icon-5.png" alt="Designed for Everyday Dining" className="w-[46px] h-[46px] sm:w-[48px] sm:h-[48px] object-contain flex-shrink-0" />
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
        className="w-full lg:w-[45%] xl:w-[45%] h-[50vh] lg:h-[65vh] relative order-1 lg:order-2 ml-auto lg:mr-24 xl:mr-32 lg:my-auto flex items-center"
      >
        <img
loading="lazy" 
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


