import React from "react";

const HeroSection = () => {
  return (
    <section className="text-white py-28 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <span className="text-5xl md:text-6xl animate-bounce">😺</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Welcome to <span className="text-yellow-300">OUSIA</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Meme-powered proof of ownership for the Web3 era.<br/>
          <span className="text-purple-300 font-semibold">Real-world verification meets decentralized identity.</span>
        </p>
        <p className="text-base text-pink-200 italic font-mono">"In memes we trust. Reality is the new alpha."</p>
      </div>
    </section>
  );
};

export default HeroSection;
