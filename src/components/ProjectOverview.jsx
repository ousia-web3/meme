import React from "react";

const ProjectOverview = () => {
  return (
    <section id="overview" className="py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="text-4xl mb-4">🌐</div>
          <h3 className="text-xl font-semibold mb-3">Web3 Integration</h3>
          <p className="text-gray-300">Linking real-world real estate transactions with blockchain technology for transparency and trust.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="text-4xl mb-4">🔗</div>
          <h3 className="text-xl font-semibold mb-3">NFT Verification</h3>
          <p className="text-gray-300">Recording transaction reliability using NFTs and providing tangible rewards in return.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="text-4xl mb-4">💎</div>
          <h3 className="text-xl font-semibold mb-3">Value Creation</h3>
          <p className="text-gray-300">Building a transparent and trustworthy digital contract ecosystem for the future.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
