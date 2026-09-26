import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = React.useState({ loading: false, error: null, success: false });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch('https://amigowebster.in/chettinad/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, error: null, success: true });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          onClose();
          setStatus({ loading: false, error: null, success: false });
        }, 3000);
      } else {
        setStatus({ loading: false, error: data.message || 'Something went wrong', success: false });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ loading: false, error: 'Could not connect to server', success: false });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#1e2917] mb-2 uppercase tracking-tight">Let's Connect</h2>
              <p className="text-sm text-gray-500 font-sans">Reach out to us and we'll get back to you shortly.</p>
            </div>

            {status.success ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 text-green-800 p-4 rounded-xl border border-green-200 text-center font-serif"
              >
                <p className="font-bold mb-1">Message Sent!</p>
                <p className="text-sm">We'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {status.error && (
                  <div className="text-red-500 text-sm font-semibold text-center">{status.error}</div>
                )}
                {/* Name Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-widest text-[#5c6e75] uppercase font-sans">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f8f9fa] focus:bg-white focus:border-[#dcb546] focus:ring-2 focus:ring-[#dcb546]/20 outline-none transition-all duration-300 font-sans text-[#2b3a41] placeholder:text-[#9ba7ad]"
                  />
                </div>

                {/* Email & Phone Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold tracking-widest text-[#5c6e75] uppercase font-sans">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f8f9fa] focus:bg-white focus:border-[#dcb546] focus:ring-2 focus:ring-[#dcb546]/20 outline-none transition-all duration-300 font-sans text-[#2b3a41] placeholder:text-[#9ba7ad]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold tracking-widest text-[#5c6e75] uppercase font-sans">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f8f9fa] focus:bg-white focus:border-[#dcb546] focus:ring-2 focus:ring-[#dcb546]/20 outline-none transition-all duration-300 font-sans text-[#2b3a41] placeholder:text-[#9ba7ad]"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-widest text-[#5c6e75] uppercase font-sans">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell Us How We Can Work Together And Create Better Dining Experiences..." 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f8f9fa] focus:bg-white focus:border-[#dcb546] focus:ring-2 focus:ring-[#dcb546]/20 outline-none transition-all duration-300 font-sans text-[#2b3a41] placeholder:text-[#9ba7ad] resize-none text-sm capitalize"
                  />
                </div>

                {/* Submit Button */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status.loading}
                  className="w-full mt-2 bg-[#dfb941] hover:bg-[#d0ab35] text-[#1e2917] font-bold uppercase tracking-wider text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 shadow-md shadow-[#dfb941]/20 disabled:opacity-70"
                >
                  {status.loading ? 'SENDING...' : 'SEND MESSAGE'} 
                  {!status.loading && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
