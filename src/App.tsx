//import React, { useState } from 'react';
import { useState } from "react";
import { Facebook, Instagram, Waves, Palette, Star, Menu, X } from 'lucide-react';

import Chloe_potrait from "./PXL_20231002_003018329.MP.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-900">
      {/* Navigation */}
      <div className="fixed top-0 left-0 z-50 p-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-blue-300 transition-colors"
        >
          <Menu size={32} />
        </button>
        
        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 bg-blue-950 rounded-lg shadow-xl p-4 min-w-[200px] border border-blue-400/20">
            <button
              onClick={() => {
                setIsAboutModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full text-left text-white hover:text-blue-300 py-2 px-4 rounded transition-colors"
            >
              About Me
            </button>
            <button
              onClick={scrollToContact}
              className="w-full text-left text-white hover:text-blue-300 py-2 px-4 rounded transition-colors"
            >
              Socials
            </button>
          </div>
        )}
      </div>

      {/* About Modal */}
      {isAboutModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-blue-950 rounded-xl shadow-2xl p-8 max-w-2xl w-full relative">
            <button
              onClick={() => setIsAboutModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-blue-300 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img
                  src={Chloe_potrait}
                  alt="Artist portrait"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Hi! I'm Chloe, and I blend traditional painting techniques with the serene influence 
                  of our coastal surroundings. Join me in discovering your inner artist by the ocean.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513553404607-988bf2703777"
            alt="Deep ocean waves"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-6">theDeep_ArtStudios</h1>
          <p className="text-xl text-blue-100 mb-8">Discover your artistic journey by the ocean</p>
          <button
            onClick={scrollToContact}
            className="bg-blue-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-500 transition-colors"
          >
            Book Now
          </button>
        </div>
      </header>

      {/* Classes Section */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Classes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Essence Class */}
            <div className="bg-blue-950 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform border border-blue-400/20">
              <div className="text-blue-400 mb-4">
                <Waves size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Essence</h3>
              <p className="text-blue-100 mb-6">Perfect for beginners. Discover the basics of painting in a relaxed environment.</p>
              <p className="text-3xl font-bold text-blue-400 mb-4">$5</p>
              <button onClick={scrollToContact} className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors">
                Book Now
              </button>
            </div>

            {/* Immersion Class */}
            <div className="bg-blue-950 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform border border-blue-400/20">
              <div className="text-blue-400 mb-4">
                <Palette size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Immersion</h3>
              <p className="text-blue-100 mb-6">Intermediate level class with personalized guidance and advanced techniques.</p>
              <p className="text-3xl font-bold text-blue-400 mb-4">$25</p>
              <button onClick={scrollToContact} className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors">
                Book Now
              </button>
            </div>

            {/* Artists Retreat */}
            <div className="bg-blue-950 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform border border-blue-400/20">
              <div className="text-blue-400 mb-4">
                <Star size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Artists Retreat</h3>
              <p className="text-blue-100 mb-6">Food, Wine & Paint. Can't get much better than that.</p>
              <p className="text-3xl font-bold text-blue-400 mb-4">$50</p>
              <button onClick={scrollToContact} className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8" alt="Beach painting" className="rounded-lg hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1579965342575-16428a7c8881" alt="Ocean art" className="rounded-lg hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1584448141569-69f342da535c" alt="Watercolor" className="rounded-lg hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1590452224879-867e8012a828" alt="Coastal art" className="rounded-lg hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1565799515768-2dcfd834625c" alt="Seascape" className="rounded-lg hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1579965342537-508c0325c043" alt="Wave painting" className="rounded-lg hover:opacity-90 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Make A Booking With theDeep_ArtStudios</h2>
          <p className="text-xl text-blue-100 mb-12">Message me on social media to make a booking & get in touch!</p>
          <div className="flex justify-center gap-8">
            <a href="https://www.instagram.com/thedeep_artstudios?igsh=Mmt6NnpxMGJ4eTFp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-300 transition-colors text-white">
              <Instagram size={24} />
              <span>thedeep_artstudios</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-300 transition-colors text-white">
              <Facebook size={24} />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;