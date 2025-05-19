import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const Packages: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      id="packages" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-orange-50"
    >
      <div className="tear-top"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            All-Inclusive <span className="text-orange-500">Package</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Kichakani Restaurant",
              image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Serves bush breakfast for every checkout guest with a view of the savanna."
            },
            {
              title: "The Warriors Bar",
              image: "https://images.pexels.com/photos/1267351/pexels-photo-1267351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Modern bar with an award-winning 'Mixologist' who creates authentic and creative drinks."
            },
            {
              title: "Big 5 Steakhouse",
              image: "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Offers a wide selection of fine dining cuisines including Gourmet, African, and European dishes."
            },
            {
              title: "Elephant Junior Suites",
              image: "https://images.pexels.com/photos/3375997/pexels-photo-3375997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Each tent features an outdoor jacuzzi and private dining options, blending wilderness with luxury."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 transform ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">{item.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{item.description}</p>
                <a 
                  href="#contact" 
                  className="mt-6 inline-block text-orange-500 font-medium hover:text-orange-600 transition-colors"
                >
                  Tuchangamkie
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
