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

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full flex-grow relative bg-[#FDFBF9]">
      <Helmet>
        <title>Terms &amp; Conditions | Walnut Snowveil Residency</title>
        <meta name="description" content="Terms and conditions for booking and staying at Walnut Snowveil Residency in Sumoor, Nubra Valley Ladakh." />
        <link rel="canonical" href="https://walnutsnowveil.in/terms" />
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
            Terms &amp; Conditions
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 font-sans text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-light"
        >
          <p className="mb-4">Welcome to Walnut Snowveil Residency. By making a reservation or using our website and services, you agree to the following terms and conditions.</p>
        </motion.div>

        <PolicySection title="1. Check-In and Check-Out" delay={0.2}>
          <ul className="space-y-3 mb-6">
            <ListItem>Check-in time: 11:00 AM</ListItem>
            <ListItem>Check-out time: 09:00 AM</ListItem>
            <ListItem>Early check-in and late check-out are subject to availability and may incur additional charges.</ListItem>
            <ListItem>For arrivals before 07:00 AM, the room must be reserved from the previous night.</ListItem>
            <ListItem>Rooms will be held until 04:00 PM on the day of arrival unless prior information about late arrival is provided.</ListItem>
          </ul>
        </PolicySection>

        <PolicySection title="2. Reservation Guarantee" delay={0.1}>
          <p className="mb-4">Reservations can be guaranteed through:</p>
          <ul className="space-y-3 mb-6">
            <ListItem>Advance payment</ListItem>
            <ListItem>Valid credit card or debit card details</ListItem>
          </ul>
          <p className="mb-4">Providing card details ensures that the reservation will be held until the guest arrives on the scheduled date.</p>
          <p>Walnut Snowveil Residency reserves the right to cancel reservations if incorrect or misleading booking information is provided.</p>
        </PolicySection>

        <PolicySection title="3. Room Occupancy" delay={0.1}>
          <ul className="space-y-3 mb-6">
            <ListItem>Maximum 2 adults and 1 child below 5 years are allowed per room.</ListItem>
            <ListItem>One extra mattress or rollaway bed may be provided upon request with additional charges.</ListItem>
          </ul>
        </PolicySection>

        <PolicySection title="4. Identification Requirements" delay={0.1}>
          <p className="mb-4">All guests must present valid identification during check-in.</p>
          
          <p className="mb-2 font-medium text-[#2b1207]">For Indian nationals:</p>
          <ul className="space-y-3 mb-6">
            <ListItem>A valid government-issued photo ID is required.</ListItem>
          </ul>
          
          <p className="mb-2 font-medium text-[#2b1207]">For foreign nationals / NRIs:</p>
          <ul className="space-y-3 mb-6">
            <ListItem>A valid passport must be presented at the time of check-in.</ListItem>
          </ul>
          
          <p>The hotel reserves the right of admission.</p>
        </PolicySection>

        <PolicySection title="5. Pricing and Taxes" delay={0.1}>
          <ul className="space-y-3 mb-6">
            <ListItem>Room rates and prices may change without prior notice.</ListItem>
            <ListItem>Applicable GST and government taxes will be charged according to the regulations of the Government of India.</ListItem>
            <ListItem>Any future increase in taxes or government levies will be applicable to the final bill.</ListItem>
          </ul>
        </PolicySection>

        <PolicySection title="6. Credit Card Booking Policy" delay={0.1}>
          <p className="mb-4">To prevent credit card misuse, guests must comply with the following requirements:</p>
          
          <p className="mb-2 font-medium text-[#2b1207]">When booking with your own credit card</p>
          <ul className="space-y-3 mb-6">
            <ListItem>The same credit card used for booking must be presented during check-in.</ListItem>
          </ul>

          <p className="mb-2 font-medium text-[#2b1207]">When booking for another guest</p>
          <p className="mb-4">If the credit card holder is not staying at the hotel, the following must be provided at check-in:</p>
          <ul className="space-y-3 mb-6">
            <ListItem>A self-attested copy of the credit card (front and back)</ListItem>
            <ListItem>A signed authorization letter from the credit card holder</ListItem>
          </ul>

          <p className="mb-4">The authorization letter must include:</p>
          <ul className="space-y-3 mb-6">
            <ListItem>Guest names</ListItem>
            <ListItem>Travel dates</ListItem>
            <ListItem>Property name (Walnut Snowveil Residency)</ListItem>
            <ListItem>Room type booked</ListItem>
          </ul>

          <p className="mb-4 italic text-[#8E5E4D]">For security reasons, the CVV number on the card copy must be blacked out.</p>
          <p>Failure to provide the required documents may result in the reservation being denied.</p>
        </PolicySection>

        <PolicySection title="7. Deposit Policy" delay={0.1}>
          <p className="mb-4">To confirm reservations:</p>
          <ul className="space-y-3 mb-6">
            <ListItem>100% advance payment or</ListItem>
            <ListItem>A valid credit/debit card guarantee</ListItem>
          </ul>
          <p>may be required.</p>
        </PolicySection>

        <PolicySection title="8. Cancellation and Refund Policy" delay={0.1}>
          <ul className="space-y-3 mb-6">
            <ListItem>If a booking is cancelled, the refund will be processed according to the applicable cancellation policy.</ListItem>
            <ListItem>Refunds will be processed within 7–10 working days from the date of cancellation.</ListItem>
            <ListItem>Bank transaction charges may be deducted from the refundable amount.</ListItem>
            <ListItem>For credit card payments, refunds will be processed only to the same credit card used for the transaction.</ListItem>
          </ul>
        </PolicySection>

        <PolicySection title="9. Website Information" delay={0.1}>
          <p className="mb-4">Walnut Snowveil Residency strives to ensure that all information on the website is accurate. However, the hotel reserves the right to modify:</p>
          <ul className="space-y-3 mb-6">
            <ListItem>Prices</ListItem>
            <ListItem>Offers</ListItem>
            <ListItem>Policies</ListItem>
            <ListItem>Services</ListItem>
          </ul>
          <p>without prior notice.</p>
        </PolicySection>

        <PolicySection title="10. Contact Information" delay={0.1}>
            <p className="-mb-40">For any questions or concerns regarding these terms and conditions, please contact us:</p>
        </PolicySection>
      </section> 
      <ConnectSection />
    </main>
  );
};

export default Terms;