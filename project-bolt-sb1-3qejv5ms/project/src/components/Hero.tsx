import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))'
      }}
    >
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4577790/pexels-photo-4577790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          transform: `translateY(${offsetY * 0.5}px)`,
          backgroundSize: '110% auto'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h5 className="text-orange-400 mb-3 md:text-lg animate-fadeIn opacity-0" style={{animation: 'fadeIn 1s ease-in-out forwards'}}>
            Experience The Wild Beauty
          </h5>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slideUp opacity-0" style={{animation: 'slideUp 1s ease-in-out 0.3s forwards'}}>
            At Emaiyan Luxury Camp
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slideUp opacity-0" style={{animation: 'slideUp 1s ease-in-out 0.6s forwards'}}>
            We embark on an unforgettable family adventure to the iconic wildlife reserve of Maasai Mara as we
            experience nature at its finest with premium all-inclusive packages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn opacity-0" style={{animation: 'fadeIn 1s ease-in-out 0.9s forwards'}}>
            <a 
              href="#packages" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              View Packages
            </a>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#destination" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
