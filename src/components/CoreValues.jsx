import React from "react";

const CoreValues = () => {
  const values = [
    "Authenticity Verification: Validated on the blockchain",
    "Utility-Centric Meme Coin: Linked to real-world use cases",
    "Meme × Tech Integration: Combining meme power with tangible value",
    "Meme coins as a key to a trusted digital society"
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">Core Values & Vision</h2>
      <ul className="space-y-4 text-lg text-gray-200 max-w-2xl mx-auto">
        {values.map((v, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-yellow-300 text-xl">🌟</span>
            <span>{v}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CoreValues;
