import React from "react";

const DisabledSection = () => (
  <section className="py-20 text-center text-gray-400">
    <div className="flex flex-col items-center gap-4">
      <span className="text-6xl">🚧</span>
      <h2 className="text-2xl font-bold">Coming Soon</h2>
      <p className="italic text-sm text-gray-500">This section is currently disabled.<br/>Stay tuned for more meme magic!</p>
    </div>
  </section>
);

export default DisabledSection; 