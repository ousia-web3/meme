import React from "react";

const TokenInfo = () => {
  return (
    <section id="token" className="py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">🪙 Token Information</h2>
      <p className="mb-4 text-pink-200 italic text-sm text-center">"Not just a meme. It's utility with a punch!"</p>
      <div className="max-w-2xl mx-auto text-left text-gray-200 space-y-2">
        <p>🌟 Token Name: <strong>OUSIA</strong></p>
        <p>🌟 Ticker: <strong>OSIA</strong></p>
        <p>🌟 Blockchain: <strong>Solana</strong></p>
        <p>🌟 Standard: <strong>SPL</strong></p>
        <p>🌟 Total Supply: <strong>1,000,000,000</strong> (1 Billion)</p>
        <p>🌟 Linked to real-world verification</p>
        <p>🌟 Usable for rewards in finance, travel, shopping</p>
        <p>🌟 Meme IP designed for viral marketing</p>
      </div>
    </section>
  );
};

export default TokenInfo;
