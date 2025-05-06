import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-indigo-600 text-white py-20 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to OUSIA</h1>
      <p className="text-lg sm:text-xl mb-8">
        Prove real ownership through memes. Built for the Web3 era.
      </p>
      <a
        href="#overview"
        className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
      >
        Get Started
      </a>
    </section>
  );
};

export default HeroSection;
