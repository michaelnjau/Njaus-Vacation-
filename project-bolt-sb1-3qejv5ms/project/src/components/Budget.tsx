import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const Budget: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  const budgetItems = [
    "Accommodation at Emaiyan Luxury Camp (Full Board/All-Inclusive camp services)",
    "Transport to and from Maasai Mara (In a 4x4 Land Cruiser)",
    "Park Entry Fees for all family members",
    "Guided game drives",
    "Stop over snacks and drinks",
    "Small boutique shopping",
    "Tips and miscellaneous expenses"
  ];
  
  return (
    <section 
      id="budget" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-orange-50"
    >
      <div className="tear-top"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className={`lg:w-1/2 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="rounded-xl overflow-hidden shadow-xl bg-white p-8 relative">
              <div className="absolute top-0 right-0 -mt-6 -mr-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9H9V15H15V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 15L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-2 text-gray-800">KSH 200,000</h2>
              <p className="text-gray-600 mb-6">
                We've set a clear budget for our 3-day, 2-night family adventure for all four of us.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800">This budget covers:</h3>
              
              <ul className="space-y-3">
                {budgetItems.map((item, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start gap-3 transition-all duration-500 transform ${
                      isInView 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 flex justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <span>Book Within Budget</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className={`lg:w-1/2 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative mb-4">
              <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                Travel Budget
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Our <span className="text-orange-500">Budget</span> Planning
            </h2>
            <p className="text-gray-600 mb-8">
              We carefully planned our budget to ensure we get the best safari experience without breaking the bank. Our all-inclusive package provides excellent value for money with no hidden costs.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Budget Breakdown</h3>
              <div className="space-y-4">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-orange-500 h-4 rounded-full" style={{ width: '45%' }}>
                    <span className="block text-xs text-white text-center pt-0.5">Accommodation: 45%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-orange-400 h-4 rounded-full" style={{ width: '25%' }}>
                    <span className="block text-xs text-white text-center pt-0.5">Transport: 25%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-orange-300 h-4 rounded-full" style={{ width: '15%' }}>
                    <span className="block text-xs text-white text-center pt-0.5">Park Fees: 15%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-orange-200 h-4 rounded-full" style={{ width: '15%' }}>
                    <span className="block text-xs text-black text-center pt-0.5">Misc: 15%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-1 p-4 bg-orange-100 rounded-lg text-center">
                <h4 className="text-xl font-bold text-orange-600 mb-1">3</h4>
                <p className="text-gray-700 text-sm">Days</p>
              </div>
              <div className="flex-1 p-4 bg-orange-100 rounded-lg text-center">
                <h4 className="text-xl font-bold text-orange-600 mb-1">2</h4>
                <p className="text-gray-700 text-sm">Nights</p>
              </div>
              <div className="flex-1 p-4 bg-orange-100 rounded-lg text-center">
                <h4 className="text-xl font-bold text-orange-600 mb-1">4</h4>
                <p className="text-gray-700 text-sm">People</p>
              </div>
              <div className="flex-1 p-4 bg-orange-100 rounded-lg text-center">
                <h4 className="text-xl font-bold text-orange-600 mb-1">6</h4>
                <p className="text-gray-700 text-sm">Game Drives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Budget;