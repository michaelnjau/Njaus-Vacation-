import React, { useRef } from 'react';
import { Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const features = [
    {
      title: "Full Board Accommodation",
      description: "All delicious meals (breakfast, lunch, dinner) are covered."
    },
    {
      title: "Selected Beverages",
      description: "Includes soft drinks, water, and sometimes local beers and house wines."
    },
    {
      title: "On-site Game Drives",
      description: "Packages include game drives in the conservancy with 4×4 Land cruiser vehicle and guides."
    },
    {
      title: "Guided Nature Walks",
      description: "Personalized walks with armed rangers to explore the smaller ecosystems and learn about flora and fauna up close."
    }
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`lg:w-1/2 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <img 
              src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Safari Experience" 
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          
          <div className={`lg:w-1/2 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative mb-4">
              <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                Package Inclusions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Why Choose <span className="text-orange-500">Emaiyan?</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Our all-inclusive packages are designed to provide us with the ultimate safari experience without any hidden costs or unexpected expenses.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-700 transform ${
                    isInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-20'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                      <Check size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="mt-10 inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              Book The Safari
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 right-0 text-orange-500/10">
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

export default Features;
