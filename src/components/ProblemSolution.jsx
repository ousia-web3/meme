import React from "react";

const ProblemSolution = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Problems & Solutions</h2>
      <div className="max-w-2xl mx-auto text-left text-gray-200 space-y-4">
        <div>
          <h3 className="font-semibold">🌟 Problems</h3>
          <ul className="list-disc list-inside">
            <li>Fake listings and fraudulent transactions</li>
            <li>Inability to verify true ownership</li>
            <li>Centralized systems lack transparency and fair rewards</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">🌟 Solutions</h3>
          <ul className="list-disc list-inside">
            <li>Upload contracts → generate transaction NFTs</li>
            <li>Enable mutual contract verification</li>
            <li>Provide OUSIA reward tokens + DAO participation rights</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
