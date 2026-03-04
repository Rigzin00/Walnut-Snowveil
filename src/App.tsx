import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

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

          <section
            className="h-screen bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920)",
              backgroundPosition: "center 40%",
            }}
          >
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
              <div className="text-white">
                <h1 className="text-5xl md:text-7xl font-serif mb-6">
                  Welcome to Luxury
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                  Experience unparalleled comfort and elegance
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-8">
              <h2 className="text-4xl font-serif text-[#2A1208] text-center mb-12">
                Our Premium Services
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-white rounded-lg shadow-sm">
                  <h3 className="text-2xl font-serif text-[#2A1208] mb-4">
                    Luxury Rooms
                  </h3>

                  <p className="text-gray-600">
                    Experience comfort in our beautifully designed rooms with
                    modern amenities.
                  </p>
                </div>

                <div className="text-center p-8 bg-white rounded-lg shadow-sm">
                  <h3 className="text-2xl font-serif text-[#2A1208] mb-4">
                    Fine Dining
                  </h3>

                  <p className="text-gray-600">
                    Savor exquisite cuisine prepared by our world-class chefs.
                  </p>
                </div>

                <div className="text-center p-8 bg-white rounded-lg shadow-sm">
                  <h3 className="text-2xl font-serif text-[#2A1208] mb-4">
                    Spa & Wellness
                  </h3>

                  <p className="text-gray-600">
                    Rejuvenate your body and mind with our premium spa services.
                  </p>
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