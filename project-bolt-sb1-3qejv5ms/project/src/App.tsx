import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destination from './components/Destination';
import Packages from './components/Packages';
import Features from './components/Features';
import Budget from './components/Budget';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Safari Adventures | Maasai Mara Luxury Experience";
    
    // Add smooth scrolling functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
    
    // Cleanup event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Destination />
      <Packages />
      <Features />
      <Budget />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;