import React from "react";

const MissionUniverse = () => {
  return (
    <section id="mission" className="py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-8">Mission & Brand Universe</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-300">Proving real ownership through the power of memes. OUSIA is a Proof-of-Reality platform.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="text-4xl mb-4">😺</div>
          <h3 className="text-xl font-semibold mb-3">Brand Identity</h3>
          <p className="text-gray-300">In an era where reality is distorted, Reality OUSIA is a meme cat with an authenticity verification system.</p>
        </div>
      </div>
    </section>
  );
};

export default MissionUniverse;
