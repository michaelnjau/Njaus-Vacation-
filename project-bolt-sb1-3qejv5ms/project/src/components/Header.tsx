import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Destination', href: '#destination' },
    { name: 'Packages', href: '#packages' },
    { name: 'Features', href: '#features' },
    { name: 'Budget', href: '#budget' },
    { name: 'Book Now', href: '#contact', isButton: true }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            The Njau's <span className="text-orange-500">Vacation Trip</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            item.isButton ? (
              <a 
                key={index}
                href={item.href} 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                {item.name}
              </a>
            ) : (
              <a 
                key={index}
                href={item.href} 
                className={`font-medium hover:text-orange-500 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            )
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      } bg-white overflow-hidden`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            item.isButton ? (
              <a 
                key={index}
                href={item.href} 
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full transition-all duration-300 text-center"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ) : (
              <a 
                key={index}
                href={item.href} 
                className="text-gray-800 font-medium hover:text-orange-500 transition-colors duration-300 py-2"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            )
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;