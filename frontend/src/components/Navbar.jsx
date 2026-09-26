import React, { useState } from 'react';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Story', href: '#story' },
    { name: 'Solution', href: '#solution' },
    { name: 'Recipes & Stories', href: '#recipes' },
    { name: 'Contact us', href: '#' },
  ];

  const handleLinkClick = (e, link) => {
    if (link.name === 'Contact us') {
      e.preventDefault();
      setIsContactModalOpen(true);
      setIsOpen(false);
    }
  };

  return (
    <nav className="w-full z-50 bg-transparent absolute top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 sm:h-20 w-full relative">
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link)}
                className="text-[#2a3822] text-sm lg:text-base font-serif font-semibold tracking-wide hover:text-[#8a3020] transition-colors duration-300 uppercase cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4 flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#2a3822] hover:text-[#8a3020] focus:outline-none transition-colors cursor-pointer"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#e7dfd1] border-t border-[#d8cdb8] shadow-lg absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-3 text-base text-[#2a3822] font-serif font-bold tracking-wide hover:text-[#8a3020] hover:bg-[#d8cdb8]/40 rounded-md uppercase cursor-pointer"
                onClick={(e) => {
                  handleLinkClick(e, link);
                  if (link.name !== 'Contact us') setIsOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
