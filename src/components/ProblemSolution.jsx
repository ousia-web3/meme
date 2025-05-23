import React from "react";

const ProblemSolution = () => {
  return (
    <section id="solution" className="py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-8">Problems & Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold mb-3">Current Problems</h3>
          <ul className="text-gray-300 space-y-2 text-left">
            <li>• Fake listings and fraudulent transactions</li>
            <li>• Inability to verify true ownership</li>
            <li>• Centralized systems lack transparency and fair rewards</li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="text-4xl mb-4">✨</div>
          <h3 className="text-xl font-semibold mb-3">Our Solutions</h3>
          <ul className="text-gray-300 space-y-2 text-left">
            <li>• Upload contracts → generate transaction NFTs</li>
            <li>• Enable mutual contract verification</li>
            <li>• Provide OUSIA reward tokens + DAO participation rights</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
