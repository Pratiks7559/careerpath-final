import React from 'react';

const CareerPathLogo = ({ size = 220 }) => {
  return (
    <svg 
      width={size} 
      height={size * 0.6} 
      viewBox="0 0 250 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Red to Green gradient definition */}
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EF4444" />  {/* Vibrant red */}
          <stop offset="50%" stopColor="#F59E0B" /> {/* Amber */}
          <stop offset="100%" stopColor="#10B981" /> {/* Emerald green */}
        </linearGradient>

        {/* Glow effect filter */}
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Animated gradient for pulse effect */}
        <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EF4444">
            <animate attributeName="stop-color" values="#EF4444; #DC2626; #EF4444" dur="4s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#10B981">
            <animate attributeName="stop-color" values="#10B981; #059669; #10B981" dur="4s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>

      {/* Glowing background path */}
      <path 
        d="M20 60 L100 60 L120 40 L140 60 L230 60" 
        stroke="url(#pulseGradient)" 
        strokeWidth="12" 
        strokeLinecap="round"
        strokeOpacity="0.3"
        fill="none"
        filter="url(#glow)"
      />

      {/* Main arrow pathway */}
      <path 
        d="M20 60 L100 60 L120 40 L140 60 L230 60" 
        stroke="url(#gradient)" 
        strokeWidth="8" 
        strokeLinecap="round"
        fill="none"
      />

      {/* Arrowhead with glow */}
      <path 
        d="M230 60 L210 50 L210 70 Z" 
        fill="url(#gradient)" 
        filter="url(#glow)"
      />

      {/* Text with gradient */}
      <text 
        x="125" 
        y="100" 
        textAnchor="middle" 
        fontFamily="'Arial', sans-serif" 
        fontSize="24" 
        fontWeight="bold" 
        fill="url(#gradient)"
        filter="url(#glow)"
      >
        CareerPath
      </text>

      {/* Animated sparkles with golden tint */}
      <circle cx="50" cy="60" r="2" fill="#FDE68A"> {/* Light amber */}
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0s" />
      </circle>
      <circle cx="110" cy="50" r="2" fill="#FDE68A">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="170" cy="60" r="2" fill="#FDE68A">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
      </circle>
    </svg>
  );
};

export default CareerPathLogo;