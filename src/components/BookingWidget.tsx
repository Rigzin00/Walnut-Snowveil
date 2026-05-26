import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MessageCircle, X } from 'lucide-react';

export default function BookingWidget() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    arrivalDate: '',
    departureDate: '',
    guests: '2',
  });

  const [isEnquirePopupOpen, setIsEnquirePopupOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookNow = () => {
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.arrivalDate || !formData.departureDate) {
      alert('Please fill in all fields');
      return;
    }

    // Format dates for booking.com URL
    const arrivalDate = formData.arrivalDate;
    const departureDate = formData.departureDate;

    // Create booking.com URL with parameters
    // You can customize this URL based on your booking.com listing
    const bookingUrl = `https://www.booking.com/searchresults.html?ss=Walnut+Snowveil+Residency&checkin=${arrivalDate}&checkout=${departureDate}&group_adults=${formData.guests}`;

    // Open booking.com in new tab
    window.open(bookingUrl, '_blank');
  };

  const handleEnquireSubmit = () => {
    // Close popup and navigate to reservations page
    setIsEnquirePopupOpen(false);
    navigate('/Reservations');
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block fixed bottom-6 left-0 right-0 z-20 w-full py-2 px-40">
        <div 
          className="max-w-6xl mx-auto backdrop-blur-md bg-black/40 border border-white/20 rounded-lg p-3 shadow-2xl"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2.5 items-center">
            {/* Name Input */}
            <div className="lg:col-span-1">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 bg-white/10 border border-white/25 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all duration-300"
                style={{ fontFamily: "Anek Bangla, sans-serif" }}
              />
            </div>

            {/* Phone Input */}
            <div className="lg:col-span-1">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 bg-white/10 border border-white/25 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all duration-300"
                style={{ fontFamily: "Anek Bangla, sans-serif" }}
              />
            </div>

            {/* Arrival Date */}
            <div className="lg:col-span-1 relative">
              <div className="relative">
                <input
                  type="date"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 bg-white/10 border border-white/25 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all duration-300 [color-scheme:dark]"
                  style={{ fontFamily: "Anek Bangla, sans-serif" }}
                />
                <Calendar className="absolute right-2 top-2 text-yellow-500 pointer-events-none" size={16} />
              </div>
            </div>

            {/* Departure Date */}
            <div className="lg:col-span-1 relative">
              <div className="relative">
                <input
                  type="date"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 bg-white/10 border border-white/25 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all duration-300 [color-scheme:dark]"
                  style={{ fontFamily: "Anek Bangla, sans-serif" }}
                />
                <Calendar className="absolute right-2 top-2 text-yellow-500 pointer-events-none" size={16} />
              </div>
            </div>

            {/* Guests Selector */}
            <div className="lg:col-span-1">
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 bg-white/10 border border-white/25 rounded text-white text-sm focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all duration-300"
                style={{ fontFamily: "Anek Bangla, sans-serif" }}
              >
                <option value="1" className="bg-gray-900">1 Guest</option>
                <option value="2" className="bg-gray-900">2 Guests</option>
                <option value="3" className="bg-gray-900">3 Guests</option>
                <option value="4" className="bg-gray-900">4 Guests</option>
                <option value="5" className="bg-gray-900">5+ Guests</option>
              </select>
            </div>

            {/* Book Now Button */}
            <div className="lg:col-span-1">
              <button
                onClick={handleBookNow}
                className="w-full px-6 py-3 bg-[#5c3115] text-white font-semibold text-base rounded transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Compact Button Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20 w-full py-2 px-3" style={{ 
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div className="flex gap-2 max-w-md mx-auto">
          {/* Enquire Now Button */}
          <button
            onClick={() => handleEnquireSubmit()}
            className="flex-1 px-3 py-2 bg-[#7a4a23] hover:bg-[#6b3f1d] text-white font-bold text-xs rounded transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            onMouseEnter={() => setHoveredButton('enquire')}
            onMouseLeave={() => setHoveredButton(null)}
            onTouchStart={(e) => {
              e.preventDefault();
              setHoveredButton('enquire');
            }}
            onTouchEnd={() => setHoveredButton(null)}
          >
            <div className="flex items-center justify-center gap-2">
              <div
                style={{
                  height: '2px',
                  backgroundColor: '#ffffff',
                  width: hoveredButton === 'enquire' ? '16px' : 0,
                  transition: 'width 0.3s ease',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  transition: 'transform 0.3s ease',
                  transform: hoveredButton === 'enquire' ? 'translateX(4px)' : 'translateX(0)',
                }}
              >
                ENQUIRE NOW
              </span>
            </div>
          </button>

          {/* Book Now Button */}
          <button
            onClick={() => setIsEnquirePopupOpen(true)}
            className="flex-1 px-3 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-xs rounded transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            onMouseEnter={() => setHoveredButton('book')}
            onMouseLeave={() => setHoveredButton(null)}
            onTouchStart={(e) => {
              e.preventDefault();
              setHoveredButton('book');
            }}
            onTouchEnd={() => setHoveredButton(null)}
          >
            <div className="flex items-center justify-center gap-2">
              <div
                style={{
                  height: '2px',
                  backgroundColor: '#ffffff',
                  width: hoveredButton === 'book' ? '16px' : 0,
                  transition: 'width 0.3s ease',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  transition: 'transform 0.3s ease',
                  transform: hoveredButton === 'book' ? 'translateX(4px)' : 'translateX(0)',
                }}
              >
                BOOK NOW
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Form Popup - Full Screen Style */}
      {isEnquirePopupOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-black/30 lg:hidden transition-opacity duration-300"
            onClick={() => setIsEnquirePopupOpen(false)}
          />

          {/* Popup */}
          <div 
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden rounded-t-3xl overflow-hidden animate-[slideUp_0.4s_ease-out] max-h-[45vh]"
            style={{
              background: '#ffffff',
            }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white px-6 py-3 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-base font-normal text-gray-600 flex-1 text-center" style={{ fontFamily: "Anek Bangla, sans-serif", letterSpacing: '0.05em' }}>BOOK YOUR STAY</h3>
              <button
                onClick={() => setIsEnquirePopupOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-all absolute right-4"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-4 pb-6 overflow-y-auto max-h-[calc(45vh-140px)]">
              {/* Name Input */}
              <div className="mb-2">
                <label className="block text-xs font-normal text-gray-500 mb-1" style={{ fontFamily: "Anek Bangla, sans-serif" }}>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-300 transition-all bg-white"
                  style={{ fontFamily: "Anek Bangla, sans-serif" }}
                />
              </div>

              {/* Phone Input */}
              <div className="mb-2">
                <label className="block text-xs font-normal text-gray-500 mb-1" style={{ fontFamily: "Anek Bangla, sans-serif" }}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-300 transition-all bg-white"
                  style={{ fontFamily: "Anek Bangla, sans-serif" }}
                />
              </div>

              {/* Arrival Date */}
              <div className="mb-2">
                <label className="block text-xs font-normal text-gray-500 mb-1" style={{ fontFamily: "Anek Bangla, sans-serif" }}>Arrival Date</label>
                <div className="relative">
                  <input
                    type="date"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-gray-300 transition-all bg-white"
                    style={{ fontFamily: "Anek Bangla, sans-serif" }}
                  />
                  <Calendar className="absolute right-2 top-2 text-gray-400 pointer-events-none" size={14} />
                </div>
              </div>

              {/* Departure Date */}
              <div className="mb-2">
                <label className="block text-xs font-normal text-gray-500 mb-1" style={{ fontFamily: "Anek Bangla, sans-serif" }}>Departure Date</label>
                <div className="relative">
                  <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-gray-300 transition-all bg-white"
                    style={{ fontFamily: "Anek Bangla, sans-serif" }}
                  />
                  <Calendar className="absolute right-2 top-2 text-gray-400 pointer-events-none" size={14} />
                </div>
              </div>

              {/* Guests Selector */}
              <div className="mb-4">
                <label className="block text-xs font-normal text-gray-500 mb-1" style={{ fontFamily: "Anek Bangla, sans-serif" }}>Resolve: {formData.guests}</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-gray-300 transition-all bg-white"
                  style={{ fontFamily: "Anek Bangla, sans-serif" }}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>

              {/* Book Now Button */}
              <button
                onClick={handleBookNow}
                className="w-full px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-normal text-sm rounded transition-all duration-300 shadow"
                style={{ fontFamily: "Anek Bangla, sans-serif" }}
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
