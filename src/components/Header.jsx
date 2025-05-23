import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Mission", href: "#mission" },
    { label: "Values", href: "#values" },
    { label: "Solution", href: "#solution" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <div className="text-xl font-bold">OUSIA</div>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </a>
          ))}
        </nav>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-br from-purple-800/90 via-pink-700/80 to-black/80 backdrop-blur-lg text-white px-4 pb-4 space-y-2 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 border-b border-white/20"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
