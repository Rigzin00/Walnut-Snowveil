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

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full flex-grow relative bg-[#FDFBF9]">
      <Helmet>
        <title>Privacy Policy | Walnut Snowveil Residency</title>
        <meta name="description" content="Our privacy policy outlines how we protect and handle your personal information at Walnut Snowveil Residency, Nubra Valley Ladakh." />
        <link rel="canonical" href="https://walnutsnowveil.in/privacy" />
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
            Privacy Policy
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
          <p className="mb-4">Walnut Snowveil Residency values the privacy of our guests and visitors. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or use our services.</p>
          <p>By accessing or using our website, you agree to the terms of this Privacy Policy.</p>
        </motion.div>

        <PolicySection title="1. Information We Collect" delay={0.2}>
          <p className="mb-4">We may collect personal information that you voluntarily provide when you:</p>
          <ul className="space-y-3 mb-8">
            <ListItem>Make a reservation</ListItem>
            <ListItem>Submit a contact form</ListItem>
            <ListItem>Subscribe to updates</ListItem>
            <ListItem>Communicate with us through our website</ListItem>
          </ul>

          <p className="mb-4">The personal information we collect may include:</p>
          <ul className="space-y-3 mb-8">
            <ListItem>Name</ListItem>
            <ListItem>Phone number</ListItem>
            <ListItem>Email address</ListItem>
            <ListItem>Booking details</ListItem>
            <ListItem>Any information you provide in messages or inquiries</ListItem>
          </ul>

          <p className="mb-4">We may also automatically collect certain technical information such as:</p>
          <ul className="space-y-3 mb-8">
            <ListItem>IP address</ListItem>
            <ListItem>Browser type</ListItem>
            <ListItem>Device information</ListItem>
            <ListItem>Pages visited on our website</ListItem>
            <ListItem>Date and time of access</ListItem>
          </ul>
          <p>This information helps us improve our website and services.</p>
        </PolicySection>

        <PolicySection title="2. How We Use Your Information" delay={0.1}>
          <p className="mb-4">We use the collected information for the following purposes:</p>
          <ul className="space-y-3 mb-6">
            <ListItem>To process reservations and booking requests</ListItem>
            <ListItem>To respond to inquiries or customer support requests</ListItem>
            <ListItem>To improve our website and services</ListItem>
            <ListItem>To send updates or promotional offers (if you choose to receive them)</ListItem>
            <ListItem>To maintain security and prevent fraud</ListItem>
            <ListItem>To comply with legal obligations</ListItem>
          </ul>
          <p>Your information helps us provide a personalized experience for our guests.</p>
        </PolicySection>

        <PolicySection title="3. Cookies and Tracking Technologies" delay={0.1}>
          <p className="mb-4">Our website may use cookies and similar technologies to improve user experience. Cookies help us:</p>
          <ul className="space-y-3 mb-6">
            <ListItem>Recognize returning visitors</ListItem>
            <ListItem>Analyze website traffic</ListItem>
            <ListItem>Improve website performance</ListItem>
          </ul>
          <p>You can choose to disable cookies through your browser settings, though some features of the website may not function properly.</p>
        </PolicySection>

        <PolicySection title="4. Sharing of Information" delay={0.1}>
          <p className="mb-4">We do not sell or rent your personal information to third parties. However, we may share information with trusted service providers when necessary to:</p>
          <ul className="space-y-3 mb-6">
            <ListItem>Process reservations or payments</ListItem>
            <ListItem>Provide technical support</ListItem>
            <ListItem>Analyze website performance</ListItem>
          </ul>
          <p>These service providers are required to keep your information secure and confidential.</p>
        </PolicySection>

        <PolicySection title="5. Data Security" delay={0.1}>
          <p className="mb-4">We take appropriate technical and organizational measures to protect your personal information from:</p>
          <ul className="space-y-3 mb-6">
            <ListItem>Unauthorized access</ListItem>
            <ListItem>Loss</ListItem>
            <ListItem>Misuse</ListItem>
            <ListItem>Alteration</ListItem>
          </ul>
          <p>However, no method of online data transmission is completely secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
        </PolicySection>

        <PolicySection title="6. Third-Party Links" delay={0.1}>
          <ul className="space-y-3 mb-6">
            <ListItem>Our website may contain links to third-party websites.</ListItem>
            <ListItem>We are not responsible for the privacy practices or content of these external websites.</ListItem>
          </ul>
          <p>We recommend reviewing the privacy policies of those websites before providing any personal information.</p>
        </PolicySection>

        <PolicySection title="7. Your Privacy Rights" delay={0.1}>
          <p className="mb-4">Depending on your location, you may have the right to:</p>
          <ul className="space-y-3 mb-6">
            <ListItem>Request access to your personal information</ListItem>
            <ListItem>Request correction of incorrect information</ListItem>
            <ListItem>Request deletion of your personal data</ListItem>
            <ListItem>Withdraw consent for data processing</ListItem>
          </ul>
          <p>To exercise these rights, you can contact us using the details provided below.</p>
        </PolicySection>

        <PolicySection title="8. Data Retention" delay={0.1}>
          <p className="mb-4">We retain personal information only as long as necessary to:</p>
          <ul className="space-y-3 mb-6">
            <ListItem>Provide our services</ListItem>
            <ListItem>Fulfill legal obligations</ListItem>
            <ListItem>Resolve disputes</ListItem>
            <ListItem>Improve our services</ListItem>
          </ul>
          <p>Once the information is no longer required, it will be securely deleted.</p>
        </PolicySection>

        <PolicySection title="9. Updates to This Policy" delay={0.1}>
          <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.</p>
          <p>The updated version will be posted on this page with the revised date.</p>
        </PolicySection>

        <PolicySection title="10. Contact Us" delay={0.1}>
          <p className="-mb-40">If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact us:</p>
          
        </PolicySection>

      </section>
      <ConnectSection />
    </main>
  );
};

export default Privacy;
