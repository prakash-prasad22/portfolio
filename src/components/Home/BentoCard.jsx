import React, { useRef, useState } from 'react';

const BentoCard = ({ children, colorClass, borderHoverColor, title, icon }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-8 rounded-2xl bg-[#080808] border border-white/10 overflow-hidden group min-h-[270px]"
    >
      {/* 1. The Idle Center Glow (Always present but subtle) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at 50% 50%, ${borderHoverColor}, transparent 100%)`,
          opacity: isHovered ? 0.2 : 0.7 , // Dims when following mouse, brightens when idle
        }}
      />

      {/* 2. The Dynamic Mouse-Follow Glow (Only bright on hover) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${borderHoverColor}, transparent 40%)`,
          opacity: isHovered ? 0.7 : 0, 
        }}
      />
      
      <div className="relative z-10 flex flex-col gap-6 itmes-center justify-center">
        <div className={`${colorClass}`}>{icon}</div>
        <h3 className={`${colorClass} font-[secondary] text-xl`}>{title}</h3>
        <div className="flex flex-wrap gap-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;