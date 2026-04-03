import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ConnectSection from '../components/ConnectSection';

const blogPosts = [
  {
    id: 1,
    category: "EXPERIENCES",
    date: "JAN 12, 2025",
    title: "Exclusive experiences only luxury resorts offer",
    image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "VACATION GUIDES",
    date: "DEC 2, 2024",
    title: "Ultimate packing guide for a luxurious resort getaway",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "ECO-FRIENDLY",
    date: "NOV 29, 2024",
    title: "Eco-friendly resorts that redefine high-end travel",
    image: "https://images.unsplash.com/photo-1542315147-75d1fdef6bd6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "EXPERIENCES",
    date: "NOV 12, 2024",
    title: "How to get the best perks & upgrades at lodges",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "ECO-FRIENDLY",
    date: "OCT 12, 2024",
    title: "Top 10 luxury lodges for an unforgettable getaway",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    category: "ECO-FRIENDLY",
    date: "OCT 12, 2024",
    title: "The future of luxury travel: sustainability, and personalization",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop"
  }
];

const Blog = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="w-full flex-grow relative bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop"
            alt="Blog Hero - Resort"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center">
          <div className="flex flex-row items-center w-full justify-center overflow-hidden py-10">
            {/* Left Line */}
            <motion.div 
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="flex-1 max-w-[100px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] h-[1px] bg-white hidden sm:block"
            ></motion.div>
            
            {/* Title */}
            <motion.h1 
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-white text-5xl md:text-8xl lg:text-[10rem] font-serif mx-4 md:mx-12 leading-none" 
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Blog
            </motion.h1>

            {/* Right Line */}
            <motion.div 
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="flex-1 max-w-[100px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] h-[1px] bg-white hidden sm:block"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="relative group overflow-hidden cursor-pointer aspect-[3/4] flex flex-col justify-end bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute top-0 right-0 bg-white text-gray-800 text-[10px] md:text-xs font-sans font-semibold py-2 px-4 shadow-sm tracking-widest z-20">
                {post.category}
              </div>
              
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end text-left h-full">
                <span className="text-white/90 text-xs md:text-sm font-sans font-bold mb-2 md:mb-3">
                  {post.date}
                </span>
                <h2 
                  className="text-white text-2xl md:text-[1.75rem] leading-tight" 
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {post.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <button className="text-[#a18276] uppercase text-sm font-sans font-bold tracking-widest border-b-2 border-[#a18276] pb-1 hover:text-black hover:border-black transition-colors">
            Load More
          </button>
        </div>
      </section>
      <ConnectSection />
    </main>
  );
};

export default Blog;
