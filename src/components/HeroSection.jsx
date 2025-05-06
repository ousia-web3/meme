import React from "react";

const HeroSection = () => {
  return (
    <section className="py-24 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
          Welcome to <span className="text-yellow-300">OUSIA</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Meme-powered proof of ownership for the Web3 era.  
          Real-world verification meets decentralized identity.
        </p>
        <a
          href="#overview"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all shadow-lg"
        >
          Explore the Project
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
