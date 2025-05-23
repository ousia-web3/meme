import React from "react";

const CoreValues = () => {
  const values = [
    {
      icon: "🔐",
      title: "Authenticity Verification",
      description: "Validated on the blockchain"
    },
    {
      icon: "💡",
      title: "Utility-Centric Meme Coin",
      description: "Linked to real-world use cases"
    },
    {
      icon: "🚀",
      title: "Meme × Tech Integration",
      description: "Combining meme power with tangible value"
    },
    {
      icon: "🌐",
      title: "Digital Society Vision",
      description: "Meme coins as a key to a trusted digital society"
    }
  ];

  return (
    <section id="values" className="py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-8">Core Values & Vision</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {values.map((value, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
            <p className="text-gray-300">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
