import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import RoomsAndSuites from "./components/RoomsSection";
import TrustedSection from "./components/Trustedsection";


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
           <Footer />
        </div>
      )}
    </>
  );
}

export default App;