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

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showAbout) {
    return (
      <>
        <button
          onClick={() => setShowAbout(false)}
          className="fixed top-4 left-4 z-50 text-white hover:text-[#c89278] transition-colors bg-[#879983] px-4 py-2 rounded-lg shadow-lg font-['DM_Sans']"
        >
          Back to Home
        </button>
        <About />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#879983] to-[#c89278] font-['DM_Sans']">
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
          <div className="bg-white rounded-xl shadow-2xl p-4 md:p-8 max-w-2xl w-full relative mx-4">
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute top-4 right-4 text-[#879983] hover:text-[#c89278] transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl md:text-3xl font-bold text-[#879983] mb-4">{classInfo[selectedClass as keyof typeof classInfo].title}</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
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
      <header className="relative h-screen flex items-end justify-end overflow-hidden p-4 md:p-6">
        <div className="absolute inset-0">
          <img
            src="/theDeep_artStudios/edit.jpg"
            alt="Deep ocean waves"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative text-left px-4 md:px-8 py-8 md:py-12 rounded-xl bg-black/20 w-full md:w-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">TheDeep_ArtStudios</h1>
          <p className="text-lg md:text-xl text-white mb-6 md:mb-8 font-bold">"Express yourself—your way, your colors, your story."</p>
          <button
            onClick={scrollToBooking}
            className="bg-[#879983] text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-[#c89278] transition-colors shadow-lg w-full md:w-auto"
          >
            Book Now
          </button>
        </div>
      </header>

      {/* Classes Section */}
      <section className="py-12 md:py-20 bg-white/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#879983] text-center mb-8 md:mb-16">Our Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Essence Class */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transform hover:scale-105 transition-transform border border-[#c89278]/20">
              <div className="text-[#879983] mb-4">
                <Palette size={40} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#879983] mb-4">Essence</h3>
              <p className="text-gray-600 mb-6">Still life painting class.</p>
              <p className="text-2xl md:text-3xl font-bold text-[#c89278] mb-4">$25pp</p>
              <button 
                onClick={() => setSelectedClass('essence')} 
                className="w-full bg-[#879983] text-white py-2 rounded-lg hover:bg-[#c89278] transition-colors shadow-md"
              >
                More Info
              </button>
            </div>

            {/* Immersion Class */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transform hover:scale-105 transition-transform border border-[#c89278]/20">
              <div className="text-[#879983] mb-4">
                <Waves size={40} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#879983] mb-4">Immersion</h3>
              <p className="text-gray-600 mb-6">Ocean painting class</p>
              <p className="text-2xl md:text-3xl font-bold text-[#c89278] mb-4">$15pp</p>
              <button 
                onClick={() => setSelectedClass('immersion')} 
                className="w-full bg-[#879983] text-white py-2 rounded-lg hover:bg-[#c89278] transition-colors shadow-md"
              >
                More Info
              </button>
            </div>

            {/* The Nurturer */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transform hover:scale-105 transition-transform border border-[#c89278]/20">
              <div className="text-[#879983] mb-4">
                <Flower2 size={40} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#879983] mb-4">The Nurturer</h3>
              <p className="text-gray-600 mb-6">Floral painting class</p>
              <p className="text-2xl md:text-3xl font-bold text-[#c89278] mb-4">$30pp</p>
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
      <section className="py-12 md:py-20 bg-[#AF957C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] text-center mb-8 md:mb-16">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/theDeep_artStudios/dfa6d526-76ac-4223-85d7-61f542a8cfa0.jpg" alt="Floral painting" className="w-full rounded-lg hover:opacity-90 transition-opacity shadow-lg" />
            <img src="/theDeep_artStudios/5f007a71-eb4c-486e-b02c-9370b0f2d283.jpg" alt="Ocean art" className="w-full rounded-lg hover:opacity-90 transition-opacity shadow-lg" />
            <img src="/theDeep_artStudios/3f01fa77-8760-4fc3-b73d-8f6c5d5b2d04.jpg" alt="Painting Class" className="w-full rounded-lg hover:opacity-90 transition-opacity shadow-lg" />
            <img src="/theDeep_artStudios/2d61721d-72fa-474e-8820-9d87609527ed.jpg" alt="Coastal art" className="w-full rounded-lg hover:opacity-90 transition-opacity shadow-lg" />
            <img src="/theDeep_artStudios/b8e17601-d32f-44ed-ac3d-812147bef109.jpg" alt="Proteas" className="w-full rounded-lg hover:opacity-90 transition-opacity shadow-lg" />
            <img src="/theDeep_artStudios/4c070121-e612-4394-8933-51ae1a062ee4.jpg" alt="Beach painting" className="w-full rounded-lg hover:opacity-90 transition-opacity shadow-lg" />
          </div>
        </div>
      </section>

      {/* Bookings Section */}
      <section id='booking' className="py-12 md:py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-['Dancing_Script'] text-[#879983] text-center mb-8">Make a Booking</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#879983] mb-2">Gather your friends</h3>
                <p className="text-gray-600">Find a crew that you would like to paint with, around 5-10 people works best for the class! But feel free to message if you have something different in mind - I'm sure we'll be able to make your vision work!</p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#879983] mb-2">Message your interest</h3>
                <p className="text-gray-600">Let me know you are keen, and I will send through some potentially available time slots.</p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#879983] mb-2">Choose a time, date and location</h3>
                <p className="text-gray-600">Chat to your friends to choose a place to paint (remember I come to you!) and a date & time that works for everyone. I'll need to know what kind of space you have, your suburb, and the names of all your friends (and any other info you think I should know!).</p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#879983] mb-2">Choose a class</h3>
                <p className="text-gray-600">There are a variety of classes on offer for you to try! Look through the classes with your friends and choose which one you would like to do.</p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#879983] mb-2">Come and paint!</h3>
                <p className="text-gray-600">On the day of our class, I will come 30 mins earlier to set up the space and make sure we are ready to go. You set up your own drinks and food, and we will make sure we have a great time! Classes will go for 2 hours each.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/theDeep_artStudios/b6234e13-98ae-456d-8e1c-93e54a234423.jpg')", height: "300px" }}
      >
        <div className="w-full h-full flex justify-end">
          <div className="bg-[#c89278] bg-opacity-100 p-6 md:p-10 w-full md:w-5/12 text-center flex flex-col justify-center md:rounded-l-lg h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4 md:mb-8">Contact Us</h2>
            <p className="text-lg md:text-xl text-[#fafafa] mb-8 md:mb-12">
              Message me on social media to make a booking & get in touch!
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
              <a
                href="https://www.instagram.com/thedeep_artstudios?igsh=Mmt6NnpxMGJ4eTFp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[#ffffff] hover:text-black transition-colors"
              >
                <Instagram size={24} />
                <span>thedeep_artstudios</span>
              </a>
              <a
                href="https://facebook.com/share/12Jz1xnjo8D/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[#ffffff] hover:text-black transition-colors"
              >
                <Facebook size={24} />
                <span>Chloe_Tarasenko</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;