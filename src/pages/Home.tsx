import { Helmet } from "react-helmet";

import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import RoomsAndSuites from "../components/RoomsSection";
import TrustedSection from "../components/Trustedsection";
import CoreValuesSection from "../components/CoreValuesSection";
import ServicesSection from "../components/ServicesSection";
import QuoteSection from "../components/QuoteSection";
import EnvironmentSection from "../components/EnvironmentSection";
import ConnectSection from "../components/ConnectSection";

export default function Home() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Walnut Snowveil Residency",
    url: "https://walnutsnowveil.in",
    description:
      "Walnut Snowveil Residency is a peaceful hotel located in Sumoor Village, Nubra Valley, Ladakh offering comfortable rooms, stunning mountain views, and authentic Ladakhi hospitality.",
    image: "https://walnutsnowveil.in/images/Logo_walnut.png",
    telephone: "+91-6006672711",
    checkinTime: "11:00",
    checkoutTime: "09:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sumoor Village",
      addressLocality: "Nubra Valley",
      addressRegion: "Ladakh",
      postalCode: "194404",
      addressCountry: "IN"
    }
  };

  return (
    <>
      <Helmet>

        {/* Primary SEO */}
        <title>Walnut Snowveil Residency | Hotel in Nubra Valley, Sumoor Ladakh</title>

        <meta
          name="description"
          content="Walnut Snowveil Residency is a beautiful hotel in Sumoor, Nubra Valley Ladakh. Stay near Samstanling Monastery with comfortable rooms, scenic mountain views and authentic Ladakhi hospitality."
        />

        <meta
          name="keywords"
          content="hotel in Nubra Valley, hotel in Sumoor Ladakh, stay in Nubra Valley, guest house Nubra Valley, Samstanling Monastery hotel, Sumoor hotel Nubra"
        />

        <link
          rel="canonical"
          href="https://walnutsnowveil.in"
        />

        {/* Open Graph for social & Google preview */}
        <meta property="og:title" content="Walnut Snowveil Residency | Hotel in Nubra Valley Ladakh" />
        <meta property="og:description" content="Stay at Walnut Snowveil Residency in Sumoor Nubra Valley Ladakh with mountain views and authentic hospitality." />
        <meta property="og:url" content="https://walnutsnowveil.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://walnutsnowveil.in/images/Logo_walnut.png" />

        {/* Twitter Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Walnut Snowveil Residency | Hotel in Nubra Valley" />
        <meta name="twitter:description" content="Peaceful stay in Sumoor Nubra Valley Ladakh near Samstanling Monastery." />

        {/* Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>

      </Helmet>

      <Hero />
      <Introduction />
      <RoomsAndSuites />
      <TrustedSection />
      <CoreValuesSection />
      <ServicesSection />
      <QuoteSection />
      <EnvironmentSection />
      <ConnectSection />

    </>
  );
}