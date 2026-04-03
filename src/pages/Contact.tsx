import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ConnectSection from "../components/ConnectSection";
const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="w-full flex-grow relative bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Map */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
            alt="Contact Map Reference"
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center">
          <div className="flex flex-row items-center w-full justify-center overflow-hidden py-10">
            {/* Left Line */}
            <motion.div 
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="flex-1 max-w-[100px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] h-[1px] bg-white hidden sm:block"
            ></motion.div>
            
            {/* Title */}
            <motion.h1 
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-white text-5xl md:text-8xl lg:text-[9rem] font-serif mx-4 md:mx-12 leading-none whitespace-nowrap text-center" 
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Contact Us
            </motion.h1>

            {/* Right Line */}
            <motion.div 
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="flex-1 max-w-[100px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] h-[1px] bg-white hidden sm:block"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 
            className="text-4xl md:text-5xl text-[#8E5E4D] mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Get in touch with us
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-sans">
            Say Hello! - Whether you're planning a stay or just have a question, we'd love to hear from you.
          </p>
        </div>

        <form className="w-full font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-2" htmlFor="firstName">First name*</label>
              <input 
                type="text" 
                id="firstName" 
                className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors"
                placeholder="Enter your first name"
                required
              />
            </div>
            
            {/* Last Name */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-2" htmlFor="lastName">Last name*</label>
              <input 
                type="text" 
                id="lastName" 
                className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-2" htmlFor="phone">Phone number*</label>
              <input 
                type="tel" 
                id="phone" 
                className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors"
                placeholder="Enter your phone number"
                required
              />
            </div>
            
            {/* Email Address */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-2" htmlFor="email">Email address*</label>
              <input 
                type="email" 
                id="email" 
                className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          {/* Select Rooms / Message */}
          <div className="flex flex-col mb-8">
            <label className="text-gray-600 text-sm mb-2" htmlFor="message">Select rooms</label>
            <textarea 
              id="message" 
              rows={8}
              className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors resize-y"
              placeholder="Tell us more about your request..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-[#4A3021] hover:bg-[#342217] text-white font-sans text-sm tracking-wider uppercase py-4 transition-colors rounded-sm"
          >
            Send Message
          </button>
        </form>
      </section>
    <ConnectSection />
    </main>
  );
};

export default Contact;
