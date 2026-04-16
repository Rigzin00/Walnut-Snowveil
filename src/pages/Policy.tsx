import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ConnectSection from '../components/ConnectSection';

const PolicySection = ({ title, children, delay }: { title: string, children: React.ReactNode, delay: number }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
    className="mb-12 md:mb-16"
  >
    <h2 
      className="text-2xl md:text-3xl text-[#2b1207] mb-6 md:mb-8 border-b border-[#E8E2D9] pb-4"
      style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.01em' }}
    >
      {title}
    </h2>
    <div className="font-sans text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-light">
      {children}
    </div>
  </motion.section>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-6 md:pl-8">
    <span className="absolute left-0 top-0 text-[#8E5E4D] font-serif transition-colors">—</span>
    {children}
  </li>
);

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full flex-grow relative bg-[#FDFBF9]">
      <Helmet>
        <title>Hotel Policies | Walnut Snowveil Residency</title>
        <meta name="description" content="Read the hotel policies, cancellation rules, and guidelines for your stay at Walnut Snowveil Residency, Sumoor Nubra Valley Ladakh." />
        <link rel="canonical" href="https://walnutsnowveil.in/policy" />
      </Helmet>
      {/* Elegant Hero Section */}
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-32 flex items-center justify-center border-b border-[#E8E2D9] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#F3EFEA] to-transparent opacity-50 pointer-events-none"></div>
        <div className="relative z-10 text-center px-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-xs md:text-sm uppercase tracking-[0.2em] text-[#8E5E4D] mb-6 font-semibold"
          >
            Walnut Snowveil Residency
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl text-[#2b1207] font-serif max-w-4xl mx-auto leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Payment &amp; Cancellation Policy
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
        
        <PolicySection title="Cancellation & Refund Summary" delay={0.1}>
          <ul className="space-y-4">
            <ListItem>Cancellation charges will be 100% of the booking amount if cancelled within 7 days of check-in.</ListItem>
            <ListItem>No show, No refund.</ListItem>
          </ul>
        </PolicySection>

        <PolicySection title="Other Policies" delay={0.2}>
          <ul className="space-y-4">
            <ListItem>Each guest has to carry a valid ID proof at the time of check-in.</ListItem>
            <ListItem>Customer has to carry a copy of the booking voucher at the time of check-in.</ListItem>
          </ul>
        </PolicySection>

        <PolicySection title="Payment Policy" delay={0.3}>
          <ul className="space-y-4">
            <ListItem>Total amount payable to Walnut Snowveil Residency is the Net payable after GST.</ListItem>
            <ListItem>We prefer 100% advance payment for confirmed booking.</ListItem>
          </ul>
        </PolicySection>

        <PolicySection title="Detailed Cancellation Policy" delay={0.4}>
          <p className="mb-8 text-[#8E5E4D] italic uppercase tracking-wider text-xs md:text-sm">
            Please note, cancellations shall only be entertained when confirmed by email.
          </p>
          <ul className="space-y-5">
            <ListItem>Cancellation requests coming in <strong>more than 30 days</strong> prior to arrival shall be entertained with a <span className="text-[#2b1207] font-medium">100% refund</span>.</ListItem>
            <ListItem>Cancellation requests coming in <strong>between 30 days to 15 days</strong> prior to arrival shall be entertained with a <span className="text-[#2b1207] font-medium">50% refund</span>.</ListItem>
            <ListItem>Cancellation requests coming in <strong>between 14 days to 7 days</strong> prior to arrival shall be entertained with a <span className="text-[#2b1207] font-medium">25% refund</span>.</ListItem>
            <ListItem>Cancellation requests coming in <strong>less than 7 days</strong> prior to arrival shall <span className="text-[#2b1207] font-medium">not be entertained</span> for any refund.</ListItem>
            <ListItem>For a refund request to be processed, please allow 14-21 days from the date of cancellation request.</ListItem>
          </ul>
        </PolicySection>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 md:mt-24 pt-8 border-t border-[#E8E2D9] text-center"
        >
          <p className="text-gray-400 text-sm">Last updated: April 2026</p>
        </motion.div>

      </section>
       <ConnectSection />
    </main>
  );
};

export default Policy;
