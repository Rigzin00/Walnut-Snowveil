import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ConnectSection from '../components/ConnectSection';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const location = useLocation();
  const [activePost, setActivePost] = useState(blogPosts[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="w-full flex-grow relative bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="blog/blog3.jpg"
            alt="Blog Hero - Resort"
            className="w-full h-full object-fit brightness-[0.7]"
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

      {/* Blog Feed Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 uppercase tracking-wider" style={{ fontFamily: '"Playfair Display", serif' }}>Things To Do</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            To make the most of your trip to Nubra Valley, Ladakh, read and research our expert bloggers' tips and tricks about what to do and what not to do.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Main Content */}
          <div className="lg:w-[70%]">
              <div className="mb-20 pb-16 border-b border-gray-200 last:border-b-0">
                {/* Image */}
                <div className="relative mb-8 w-full h-[300px] md:h-[500px] bg-gray-100 flex items-center justify-center text-gray-400 overflow-hidden">
                  {/* Load the current post image dynamically */}
                  <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" />
                  
                  {/* Date Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-center border shadow-sm">
                    <span className="block text-gray-500 font-bold text-sm tracking-wider uppercase border-b border-gray-300 pb-1 mb-1">{activePost.month}</span>
                    <span className="block text-gray-800 font-serif text-2xl">{activePost.day}</span>
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-3">{activePost.category}</p>
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                  {activePost.title}
                </h2>
                
                <div className="prose prose-lg text-gray-600 max-w-none">
                  {/* Split the long description by periods and map to paragraphs for better reading if needed, or simply render normally. */}
                  {activePost.description.split(/(?<=\.)(?=[A-Z])/).map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ))}
                  
                  {/* Highlights/Bullet Points from the second image style */}
                  <h3 className="text-xl font-serif text-gray-800 mb-4 mt-8">Things to Know</h3>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li><strong className="text-gray-800">Distance:</strong> {activePost.distance}</li>
                    {activePost.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:w-[30%]">
            <div className="bg-[#f8f7f5] p-8 sticky top-32">
              <h3 className="text-2xl font-serif text-gray-900 mb-8 border-b pb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                Recent Posts
              </h3>
              
              <div className="space-y-6">
                {blogPosts.filter(post => post.title !== activePost.title).map((recent, idx) => (
                  <div 
                    key={idx} 
                    className="flex gap-4 group cursor-pointer"
                    onClick={() => {
                        setActivePost(recent);
                        // Optional: slide view up so user sees the newly selected post
                        window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
                    }}
                  >
                    <div className="w-20 h-16 bg-gray-200 flex-shrink-0 overflow-hidden flex items-center justify-center">
                      <img src={recent.image} alt={recent.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-gray-500 transition-colors line-clamp-2">
                        {recent.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <ConnectSection />
    </main>
  );
};

export default Blog;
