import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Revolutionizing Self-Improvement with AI & Tech</h1>
        <p className="text-lg mb-6">Unlock your full potential with cutting-edge AI-driven solutions.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">How Upliftech Enhances Self-Improvement</h2>
        <p className="text-lg max-w-3xl mx-auto">Our AI-driven tools help you stay accountable, automate progress tracking, and tailor self-improvement to your unique journey.</p>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "NovaNotes", desc: "Your AI-powered study assistant." },
            { name: "Posturizer", desc: "AI-based posture correction tool." },
            { name: "Alive", desc: "Meditation app with in-app purchases." },
            { name: "Hyperopta", desc: "A productivity mega-suite." },
          ].map((product) => (
            <div key={product.name} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="mt-2 text-gray-600">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Vision & Values</h2>
        <p className="text-lg max-w-3xl mx-auto">We believe in personalized self-improvement, free from external pressures, driven by automation and AI to help you grow on your terms.</p>
      </section>

      {/* CTA & Contact Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Join Upliftech Today</h2>
        <p className="text-lg mb-6">Sign up to stay updated on our latest tools and releases.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">Sign Up</button>
      </section>
    </div>
  );
};

export default Home;
