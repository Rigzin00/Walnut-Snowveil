import { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function BookingWidget() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    arrivalDate: '',
    departureDate: '',
    guests: '2',
  });

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

  return (
    <div className="fixed bottom-6 left-0 right-0 z-20 w-full py-2 px-40" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
      <div 
        className="max-w-6xl mx-auto backdrop-blur-md bg-black/40 border border-white/20 rounded-lg p-3 shadow-2xl"
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(8px)',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 items-center">
          {/* Name Input */}
          <div className="lg:col-span-1">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/25 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all duration-300"
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
              className="w-full px-3 py-2 bg-white/10 border border-white/25 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all duration-300"
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
                className="w-full px-3 py-2 bg-white/10 border border-white/25 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all duration-300 [color-scheme:dark]"
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
                className="w-full px-3 py-2 bg-white/10 border border-white/25 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all duration-300 [color-scheme:dark]"
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
              className="w-full px-3 py-2 bg-white/10 border border-white/25 rounded text-white text-sm focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all duration-300"
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
              className="w-full px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold text-sm rounded transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
