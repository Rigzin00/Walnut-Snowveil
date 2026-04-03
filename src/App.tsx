import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loader */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Website */}
      {!loading && (
        <div className="min-h-screen overflow-x-hidden w-full flex flex-col relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/room/:id" element={<RoomDetails />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;