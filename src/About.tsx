import Chloe_potrait from "./PXL_20231002_003018329.MP.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl text-white mb-16 text-center font-['Dancing_Script']">
          About the Studio
        </h1>
        
        <div className="bg-blue-950/50 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:w-1/3 lg:w-1/4">
              <img
                src={Chloe_potrait}
                alt="Artist portrait"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-2/3 lg:w-3/4">
              <div className="text-lg text-blue-100 leading-relaxed space-y-6">
                <p>
                  The Deep Art Studios was born out of the desire to see people of all ages, skill levels, and walks of life find the simple joy that is painting. To give all people a moment to rest and reflect, and to focus on what matters most. A momentary breath of fresh air from a life of hurry and exacerbating pace.
                </p>
                <p>
                  Everyone can be a painter. In these classes I will show you techniques to elevate your work and create something YOU love. You get to choose the colours, the art style, the composition - based on your preferences and personal taste. You create for your spaces.
                </p>
                <p>
                  We will get to look at some different examples of art styles, and you will create whatever you most resonate with. Whether you came to do some deep self-expression, or just to yap with your bestie - I am here to support you to get out of the class what you came for.
                </p>
                <p>
                  One of the key things we focus on is the importance of colour in the creation of painting pieces, and how it contributes to the overall tone and mood of your final painting. We look at movement, texture, and light - think Impressionism and abstract expressionism.
                </p>
                <p>
                  The costs are kept as low as possible to make this class accessible. The painting journey is about you finding joy and grounding in the present moment. It's a metaphor for trusting the process and accepting your authentic expression as beautiful and sacred as it is.
                </p>
                <p>
                  There is no pressure to create a specific result or receive a certain outcome - it's about trying something new and curiously engaging with the experience of painting. It's about authentic connection, self-expression, and grounding in the present.
                </p>
                <p className="font-['Dancing_Script'] text-2xl text-blue-200">
                  I can't wait to paint with you,<br />
                  Chloe x
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}