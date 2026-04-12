import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ConnectSection from "../components/ConnectSection";

const Contact = () => {
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(form);
    // Be sure to use your valid Web3Forms access key
    formData.append("access_key", "7fff8ca0-b3a7-4850-bb0c-0258462dcecf");
    
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        console.error("Web3Forms error details:", result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Form submission catch error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="w-full flex-grow relative bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[450px] md:h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Map */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="features-2.jpg"
            alt="Contact Map Reference"
            className="w-full h-full object-cover object-[75%_center] md:object-center brightness-[0.6]"
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
        <form className="w-full font-sans" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-2" htmlFor="firstName">First name*</label>
              <input 
                type="text" 
                id="firstName" 
                name="First Name"
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
                name="Last Name"
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
                name="Phone Number"
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
                name="Email Address"
                className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          {/* Select Rooms / Message */}
          <div className="flex flex-col mb-8">
            <label className="text-gray-600 text-sm mb-2" htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              name="Message"
              rows={8}
              className="border border-gray-200 rounded-sm px-4 py-3 outline-none focus:border-[#8E5E4D] transition-colors resize-y"
              placeholder="Tell us more about your request..."
              required
            ></textarea>
          </div>

          {/* Form Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-sm border border-green-200">
              Thank you! Your message has been sent successfully. We will get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-sm border border-red-200">
              There was an error sending your message. Please try again later.
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#4A3021] hover:bg-[#342217] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-sans text-sm tracking-wider uppercase py-4 transition-colors rounded-sm"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>

      {/* Google Map - Full Width */}
      <section className="w-full h-[50vh] md:h-[60vh] my-16 md:my-24">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2701.881508712242!2d77.6254068!3d34.6218824!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fc3507cf39f2ad%3A0x1056feacd7dcb5b5!2sWalnut%20Snowveil%20Residency!5e1!3m2!1sen!2sin!4v1775743736698!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </section>

      <ConnectSection />
    </main>
  );
};

export default Contact;
