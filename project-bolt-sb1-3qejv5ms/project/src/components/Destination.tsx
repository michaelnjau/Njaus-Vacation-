import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const Destination: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  return (
    <section 
      id="destination" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-white"
    >
      <div className="absolute top-0 right-0 -mt-24 -mr-24 text-orange-500/10">
        <svg width="200" height="200" viewBox="0 0 24 24">
          <path 
            fill="currentColor" 
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" 
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className={`lg:w-1/2 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              The Dream Destination: <span className="text-orange-500">Maasai Mara</span>
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Why the Maasai Mara?</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">Iconic Wildlife</h4>
                    <p className="text-gray-600">Home to the "Big Five" - lion, leopard, elephant, buffalo, and rhino - plus numerous other species.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">Breathtaking Landscapes</h4>
                    <p className="text-gray-600">Endless savanna plains, acacia-dotted horizons, and the dramatic Mara River.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">Unforgettable Experiences</h4>
                    <p className="text-gray-600">From sunrise game drives to cultural visits with local Maasai communities.</p>
                  </div>
                </li>
              </ul>
              
              <p className="mt-6 text-gray-700 italic">
                The Maasai Mara isn't just a destination; it's an experience that will touch all our hearts.
              </p>
            </div>
          </div>
          
          <div className={`lg:w-1/2 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-orange-500 rounded-xl"></div>
              <img 
                src="https://images.pexels.com/photos/259411/pexels-photo-259411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Zebra in Maasai Mara" 
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6">
                <img 
                  src="https://images.pexels.com/photos/1589197/pexels-photo-1589197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Acacia tree in savanna" 
                  className="w-48 h-48 object-cover rounded-xl shadow-xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 text-orange-500/10 transform rotate-45">
        <svg width="200" height="200" viewBox="0 0 24 24">
          <path 
            fill="currentColor" 
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Destination;