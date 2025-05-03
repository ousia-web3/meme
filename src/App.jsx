// src/App.jsx
import React from 'react';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div>
      <HeroSection /> {/* ✅ 이와 같이 렌더링하는 컴포넌트가 있어야 */}
    </div>
  );
}

export default App;
