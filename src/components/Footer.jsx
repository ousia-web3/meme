import React from "react";

const Footer = () => {
  return (
    <footer className="text-white text-center py-6 bg-black/30 backdrop-blur-md flex flex-col items-center gap-2">
      <p>&copy; {new Date().getFullYear()} OUSIA Project. All rights reserved.</p>
      <a href="https://x.com/ousia_meme" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gray-300 hover:text-yellow-300 transition-colors text-sm">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        <span>@ousia_meme</span>
      </a>
    </footer>
  );
};

export default Footer;
