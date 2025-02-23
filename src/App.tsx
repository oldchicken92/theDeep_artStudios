import { useState } from "react";
import { Facebook, Instagram, Waves, Palette, Flower2, X } from 'lucide-react';
import Chloe_potrait from "./PXL_20231002_003018329.MP.jpg";

function App() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-900">
      {/* About Button */}
      <div className="fixed top-0 left-0 z-50 p-4">
        <button
          onClick={() => setIsAboutModalOpen(true)}
          className="text-white hover:text-blue-300 transition-colors bg-blue-950 px-4 py-2 rounded-lg"
        >
          About Me
        </button>
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
                <h2 className="text-4xl font-bold text-white mb-4">About the studio</h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                The Deep Art Studios was born out of the
                desire to see people of all ages, skill levels, and walks of life find the simple joy that is painting. To give all people a moment to restand reflect, and to focus on what matters most. A momentary breath of fresh airfrom a life of hurry and exacerbating pace.Everyone can be a painter. In these classes I will show you techniques to elevateyour work and create something YOU love. You get to choose the colours, the art style, the composition - based on yourpreferences and personal taste. You create for your spaces. We will get to look at some different examples ofart styles, and you will create whatever you most resonate with. Whether you cameto do some deep self-expression, or just to yap with your bestie - I am here tosupport you to get out of the class what you came for. One of the key things we focus on is the importance of colour in the creation ofpainting pieces, and how it contributes to the overall tone and mood of your finalpainting. We look at movement, texture, and light - think Impressionism andabstract expressionism. The costs are kept as low as possible to make this class accessible. The paintingjourney is about you finding joy and grounding in the present moment. It's ametaphor for trusting the process and accepting your authentic expression asbeautiful and sacred as it is. There is no pressure to create a specific result orreceive a certain outcome - it's about trying something new and curiously engagingwith the experience of painting. It's about authentic connection, self-expression, and grounding in the present.I can't wait to paint with you.Chloe x
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Class Info Modal */}
      {selectedClass && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-blue-950 rounded-xl shadow-2xl p-8 max-w-2xl w-full relative">
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute top-4 right-4 text-white hover:text-blue-300 transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-white mb-4">{classInfo[selectedClass as keyof typeof classInfo].title}</h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              {classInfo[selectedClass as keyof typeof classInfo].description}
            </p>
            <button
              onClick={() => {
                setSelectedClass(null);
                scrollToContact();
              }}
              className="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-500 transition-colors text-lg font-semibold"
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
                <Palette size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Essence</h3>
              <p className="text-blue-100 mb-6">Still life painting class.</p>
              <p className="text-3xl font-bold text-blue-400 mb-4">$5</p>
              <button 
                onClick={() => setSelectedClass('essence')} 
                className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors"
              >
                More Info
              </button>
            </div>

            {/* Immersion Class */}
            <div className="bg-blue-950 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform border border-blue-400/20">
              <div className="text-blue-400 mb-4">
                <Waves size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Immersion</h3>
              <p className="text-blue-100 mb-6">Ocean painting class</p>
              <p className="text-3xl font-bold text-blue-400 mb-4">$25</p>
              <button 
                onClick={() => setSelectedClass('immersion')} 
                className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors"
              >
                More Info
              </button>
            </div>

            {/* The Nurturer */}
            <div className="bg-blue-950 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform border border-blue-400/20">
              <div className="text-blue-400 mb-4">
                <Flower2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Nurturer</h3>
              <p className="text-blue-100 mb-6">Floral painting class</p>
              <p className="text-3xl font-bold text-blue-400 mb-4">$50</p>
              <button 
                onClick={() => setSelectedClass('nurturer')} 
                className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors"
              >
                More Info
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