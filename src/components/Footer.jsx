import React from "react";

const Footer = () => {
  return (
    <footer className="text-white text-center py-6 bg-black/30 backdrop-blur-md">
      <p>&copy; {new Date().getFullYear()} OUSIA Project. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
