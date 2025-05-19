import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">The Njau's <span className="text-orange-500">Vacation Trip</span></h3>
            <p className="text-gray-400 mb-6">
              Providing unforgettable safari experiences in Kenya's most iconic wildlife reserve. Our packages are designed to create lasting memories for families and adventure seekers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 15.22a.75.75 0 01-1.06 0l-5.25-5.25a.75.75 0 01-.22-.53V7.5a.75.75 0 01.75-.75h3.75a.75.75 0 01.53.22l5.25 5.25a.75.75 0 010 1.06l-3.75 3.75z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"></path>
                  <path fill="#292524" d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.98 4.88c1.38-1.88 4.3-1.88 5.68 0A1.5 1.5 0 0017.5 5c1.27.38 2.03 2.03 1.65 3.3-.38 1.27-1.14 2.3-1.65 2.3a1.5 1.5 0 00-1.65 1.35c0 1.27-.76 2.27-1.85 2.27-.76 0-1.27-.38-1.5-.76a1.5 1.5 0 00-2.65 0c-.23.38-.76.76-1.5.76-1.13 0-1.88-1-1.88-2.27a1.5 1.5 0 00-1.65-1.35c-.5 0-1.27-1.03-1.65-2.3-.38-1.27.38-2.92 1.65-3.3a1.5 1.5 0 001.85-1.12z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#destination" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Destination</a>
              </li>
              <li>
                <a href="#packages" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Packages</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Features</a>
              </li>
              <li>
                <a href="#budget" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Budget</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Other Destinations</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Amboseli National Park</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Tsavo National Park</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Lake Nakuru</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Mount Kenya</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Samburu Reserve</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and special offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border border-gray-700 px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button 
                  type="submit" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-lg transition-colors duration-300"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} The Njau's Vacation Trip. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-orange-500 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;