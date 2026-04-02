import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import RoomsAndSuites from "./components/RoomsSection";
import TrustedSection from "./components/Trustedsection";
import CoreValuesSection from "./components/CoreValuesSection";
import ServicesSection from "./components/ServicesSection";
import QuoteSection from "./components/QuoteSection";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loader */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Website */}
      {!loading && (
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <Introduction />
          <RoomsAndSuites />
          <TrustedSection />
          <CoreValuesSection />
          <ServicesSection />
          <QuoteSection />
           <Footer />
        </div>
      )}
    </>
  );
}

export default App;