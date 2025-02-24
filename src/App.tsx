import { useState } from "react";
import { Facebook, Instagram, Waves, Palette, Flower2, X } from 'lucide-react';
import About from './About';

function App() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  const classInfo = {
    essence: {
      title: "Essence",
      description: `This classic form of painting is revamped and expanded to include
      modern and trending styles, and a variety of fun subjects. 
      Ranging in techniques from abstract to textured to realist - this
      class is suitable for everyone, from beginners to experts. You can
      choose to paint anything you see in front of you as we explore all
      the different ways we can translate reality onto a canvas. 
      It's the most diverse and unique class there is, with lots of room for
      creativity and self-expression.`
    },
    immersion: {
      title: "Immersion",
      description: `This ocean and beach painting class is our most laid back
      and easy going class there is! We will have you looking at
      the sea at every different angle, and appreciating the
      gentle beauty it bestows on us. 
      This class has emphasis on capturing the vibrancy and 
      beauty of a simple scene, with a practice of capturing
      movement and light through different brush strokes. This
      class is most suitable for beginners as well as our surfers
      and ocean lovers.`
    },
    nurturer: {
      title: "The Nurturer",
      description: `Paint some flowers to freshen your space. A 2 hour class
      where you look at a variety of styles and techniques to paint
      a beautiful floral arrangement. 
      Proteas are the key subject for this class, with focus on
      capturing texture and form. We'll learn to paint in an abstract
      expressionist style, with broad brush strokes of movement and
      colour. Perfect for your living room or quiet space.`
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showAbout) {
    return (
      <>
        <button
          onClick={() => setShowAbout(false)}
          className="fixed top-4 left-4 z-50 text-white hover:text-[#c89278] transition-colors bg-[#879983] px-4 py-2 rounded-lg shadow-lg"
        >
          Back to Home
        </button>
        <About />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#879983] to-[#c89278]">
      {/* About Button */}
      <div className="fixed top-0 left-0 z-50 p-4">
        <button
          onClick={() => setShowAbout(true)}
          className="text-white hover:text-[#c89278] transition-colors bg-[#879983] px-4 py-2 rounded-lg shadow-lg"
        >
          About Me
        </button>
      </div>

      {/* Class Info Modal */}
      {selectedClass && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full relative">
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute top-4 right-4 text-[#879983] hover:text-[#c89278] transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-[#879983] mb-4">{classInfo[selectedClass as keyof typeof classInfo].title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {classInfo[selectedClass as keyof typeof classInfo].description}
            </p>
            <button
              onClick={() => {
                setSelectedClass(null);
                scrollToContact();
              }}
              className="w-full bg-[#879983] text-white py-3 rounded-lg hover:bg-[#c89278] transition-colors text-lg font-semibold shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="src/paintingClass.jpg"
            alt="Deep ocean waves"
            className="w-full h-full object-cover " //opacity-30 removed
          />
        </div>
        <div className="relative text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">theDeep_ArtStudios</h1>
          <p className="text-xl text-white mb-8">Discover your artistic journey by the ocean</p>
          <button
            onClick={scrollToContact}
            className="bg-[#879983] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#c89278] transition-colors shadow-lg"
          >
            Book Now
          </button>
        </div>
      </header>

      {/* Classes Section */}
      <section className="py-20 bg-white/90">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#879983] text-center mb-16">Our Classes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Essence Class */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform border border-[#c89278]/20">
              <div className="text-[#879983] mb-4">
                <Palette size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#879983] mb-4">Essence</h3>
              <p className="text-gray-600 mb-6">Still life painting class.</p>
              <p className="text-3xl font-bold text-[#c89278] mb-4">$5pp</p>
              <button 
                onClick={() => setSelectedClass('essence')} 
                className="w-full bg-[#879983] text-white py-2 rounded-lg hover:bg-[#c89278] transition-colors shadow-md"
              >
                More Info
              </button>
            </div>

            {/* Immersion Class */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform border border-[#c89278]/20">
              <div className="text-[#879983] mb-4">
                <Waves size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#879983] mb-4">Immersion</h3>
              <p className="text-gray-600 mb-6">Ocean painting class</p>
              <p className="text-3xl font-bold text-[#c89278] mb-4">$15pp</p>
              <button 
                onClick={() => setSelectedClass('immersion')} 
                className="w-full bg-[#879983] text-white py-2 rounded-lg hover:bg-[#c89278] transition-colors shadow-md"
              >
                More Info
              </button>
            </div>

            {/* The Nurturer */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform border border-[#c89278]/20">
              <div className="text-[#879983] mb-4">
                <Flower2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#879983] mb-4">The Nurturer</h3>
              <p className="text-gray-600 mb-6">Floral painting class</p>
              <p className="text-3xl font-bold text-[#c89278] mb-4">$20pp</p>
              <button 
                onClick={() => setSelectedClass('nurturer')} 
                className="w-full bg-[#879983] text-white py-2 rounded-lg hover:bg-[#c89278] transition-colors shadow-md"
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#879983]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#ffffff] text-center mb-16">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="src/dfa6d526-76ac-4223-85d7-61f542a8cfa0.jpg" alt="Beach painting" className="rounded-lg hover:opacity-90 transition-opacity shadow-lg" />
            <img src="src/5f007a71-eb4c-486e-b02c-9370b0f2d283.jpg" alt="Ocean art" className="rounded-lg hover:opacity-90 transition-opacity shadow-lg" />
            <img src="src/3f01fa77-8760-4fc3-b73d-8f6c5d5b2d04.jpg" alt="Watercolor" className="rounded-lg hover:opacity-90 transition-opacity shadow-lg" />
            <img src="src/2d61721d-72fa-474e-8820-9d87609527ed.jpg" alt="Coastal art" className="rounded-lg hover:opacity-90 transition-opacity shadow-lg" />
            <img src="src/b8e17601-d32f-44ed-ac3d-812147bef109.jpg" alt="Seascape" className="rounded-lg hover:opacity-90 transition-opacity shadow-lg" />
            <img src="src/4c070121-e612-4394-8933-51ae1a062ee4.jpg" alt="Wave painting" className="rounded-lg hover:opacity-90 transition-opacity shadow-lg" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#879983] mb-8">Contact Us</h2>
          <p className="text-xl text-gray-600 mb-12">Message me on social media to make a booking & get in touch!</p>
          <div className="flex justify-center gap-8">
            <a href="https://www.instagram.com/thedeep_artstudios?igsh=Mmt6NnpxMGJ4eTFp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#879983] hover:text-[#c89278] transition-colors">
              <Instagram size={24} />
              <span>thedeep_artstudios</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#879983] hover:text-[#c89278] transition-colors">
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