import React from "react";

const CoreValues = () => {
  const values = [
    "Authenticity Verification: Validated on the blockchain",
    "Utility-Centric Meme Coin: Linked to real-world use cases",
    "Meme × Tech Integration: Combining meme power with tangible value",
    "Meme coins as a key to a trusted digital society"
  ];

  return (
    <section className="py-16 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Core Values & Vision</h2>
      <ul className="space-y-3 text-lg text-gray-700 max-w-2xl mx-auto">
        {values.map((v, i) => (
          <li key={i}>🌟 {v}</li>
        ))}
      </ul>
    </section>
  );
};

export default CoreValues;
