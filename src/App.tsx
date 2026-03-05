import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Hero from "./components/Hero";

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
         <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-serif text-[#2A1208] text-center mb-12">
            Our Premium Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif text-[#2A1208] mb-4">Luxury Rooms</h3>
              <p className="text-gray-600">Experience comfort in our beautifully designed rooms with modern amenities.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif text-[#2A1208] mb-4">Fine Dining</h3>
              <p className="text-gray-600">Savor exquisite cuisine prepared by our world-class chefs.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif text-[#2A1208] mb-4">Spa & Wellness</h3>
              <p className="text-gray-600">Rejuvenate your body and mind with our premium spa services.</p>
            </div>
          </div>
        </div>
      </section>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;