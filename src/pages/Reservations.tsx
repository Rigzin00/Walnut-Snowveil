import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ConnectSection from "../components/ConnectSection";
const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer: "Check-in starts from 12:00 PM, and check-out is by 10:00 AM. Early check-in or late check-out may be available depending on availability."
  },
  {
    question: "Where is Walnut Snowveil Residency located?",
    answer: "Walnut Snowveil Residency is located in Sumoor Village, Nubra Valley, Ladakh, close to popular attractions like Samstanling Monastery, Onpo Gompa, and the Sumoor Sand Dunes."
  },
  {
    question: "How far is the property from Leh?",
    answer: "The residency is approximately 120 km from Leh, and the journey takes around 4–5 hours via the famous Khardung La Pass."
  },
  {
    question: "Do you provide meals at the residency?",
    answer: "Yes, guests can enjoy fresh home-style meals and traditional Ladakhi dishes prepared with locally sourced ingredients."
  },
  {
    question: "Is parking available at the property?",
    answer: "Yes, free parking is available for guests traveling by car or motorcycle."
  },
  {
    question: "Do you help arrange local sightseeing?",
    answer: "Yes, we can assist guests in planning visits to nearby attractions such as Samstanling Monastery, Sumoor Sand Dunes, and other scenic spots in Nubra Valley."
  },
  {
    question: "Is Wi-Fi available at the residency?",
    answer: "Yes, Wi-Fi is available, although connectivity may vary due to the remote mountain location."
  }
];

const Reservations = () => {
  const location = useLocation();
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="w-full flex-grow relative bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Room */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2000&auto=format&fit=crop"
            alt="Reservations Hero - Room"
            className="w-full h-full object-cover brightness-[0.4]"
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
              Reservations
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
            Book Your Stay
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-sans">
            Fill out the form below to check availability and get a quick response. Let us know your preferred date and details, and we'll get back to you shortly!
          </p>
        </div>

        <form className="w-full font-sans">
          {/* Booking details */}
          <div className="mb-10">
            <h3 className="text-2xl text-[#8E5E4D] mb-6 flex items-center gap-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Booking details
              <div className="flex-1 h-[1px] bg-gray-100"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-2" htmlFor="checkin">Check-in</label>
                <input type="date" id="checkin" className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors text-gray-500" required />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-2" htmlFor="checkout">Check-out</label>
                <input type="date" id="checkout" className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors text-gray-500" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-2" htmlFor="adults">Guest (adult)</label>
                <select id="adults" className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors text-gray-500 bg-white appearance-none">
                  <option value="">Select adults</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-2" htmlFor="children">Guest (child)</label>
                <select id="children" className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors text-gray-500 bg-white appearance-none">
                  <option value="">Select children</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3+">3+</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-2" htmlFor="rooms">Select rooms</label>
                <select id="rooms" className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors text-gray-500 bg-white appearance-none">
                  <option value="">Select number of rooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-2" htmlFor="roomType">Room type</label>
                <select id="roomType" className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors text-gray-500 bg-white appearance-none">
                  <option value="">Select room type</option>
                  <option value="standard">Standard Room</option>
                  <option value="double">Double Room</option>
                  <option value="family">Family Room</option>
                  <option value="deluxe">Deluxe Room</option>
                </select>
              </div>
            </div>
          </div>

          {/* Personal details */}
          <div className="mb-10">
            <h3 className="text-2xl text-[#8E5E4D] mb-6 flex items-center gap-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Personal details
              <div className="flex-1 h-[1px] bg-gray-100"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-2" htmlFor="resFirstName">First name</label>
                <input type="text" id="resFirstName" className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors" required />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-2" htmlFor="resLastName">Last name</label>
                <input type="text" id="resLastName" className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-2" htmlFor="resEmail">Email address</label>
                <input type="email" id="resEmail" className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors" required />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-2" htmlFor="resPhone">Phone number</label>
                <input type="tel" id="resPhone" className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-2" htmlFor="resAddress">Address</label>
                <input type="text" id="resAddress" className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors" />
              </div>
              
            </div>
          </div>

          {/* Extra details */}
          <div className="mb-10">
            <h3 className="text-2xl text-[#8E5E4D] mb-6 flex items-center gap-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Extra details
              <div className="flex-1 h-[1px] bg-gray-100"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-2" htmlFor="hearAbout">Special Requests</label>
                <input type="text" id="hearAbout" className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-2" htmlFor="extraRequest">Arrival Time</label>
                <input type="text" id="extraRequest" className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors" />
              </div>
            </div>
            <div className="flex flex-col mb-8">
              <label className="text-gray-600 text-sm mb-2" htmlFor="resMessage">How did you hear about us?</label>
              <textarea 
                id="resMessage" 
                rows={6}
                className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors resize-y"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-[#4A3021] hover:bg-[#342217] text-white font-sans text-sm tracking-wider uppercase py-4 transition-colors rounded-sm"
          >
           Send Booking Request
          </button>
        </form>
      </section>
   
      {/* FAQ Section */}
      <section className="w-full bg-[#f8f5f0] py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl text-[#8E5E4D] mb-12"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openFAQIndex === index;
              return (
                <div key={index} className="border-b border-[#e5dcd1] last:border-b-0 py-5">
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left py-2 hover:opacity-80 transition-opacity"
                  >
                    <span 
                      className={`text-lg md:text-xl font-medium tracking-wide transition-colors ${isOpen ? 'text-[#8E5E4D]' : 'text-[#8E5E4D]'}`} 
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {faq.question}
                    </span>
                    <span className="text-[#8E5E4D] ml-4 flex-shrink-0">
                      <motion.svg 
                        animate={{ rotate: isOpen ? 180 : 0 }} 
                        transition={{ duration: 0.3 }}
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </motion.svg>
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="py-4 pl-4 relative">
                          <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-[#d1bfae]"></div>
                          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-sans">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
     <ConnectSection />
    </main>
  );
};

export default Reservations;
