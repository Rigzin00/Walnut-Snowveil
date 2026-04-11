import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Reservations from "./pages/Reservations";
import Policy from "./pages/Policy";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Loader */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Website */}
      {!loading && (
        <div className="min-h-screen w-full flex flex-col relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/room/:id" element={<RoomDetails />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;