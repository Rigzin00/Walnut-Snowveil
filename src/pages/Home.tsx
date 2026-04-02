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
  return (
    <>
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