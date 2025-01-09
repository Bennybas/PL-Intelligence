// LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Executive Launch Dashboard',
      Icon: '/svg/businessman-svgrepo-com.svg',
      path: '/executive-dashboard'
    },
    {
      title: 'Global Launch Dashboard',
      Icon: '/svg/rocket-svgrepo-com.svg',
      path: '/global-dashboard'
    },
    {
      title: 'Market Launch Dashboard',
      Icon: '/svg/spacecraft-rocket-svgrepo-com.svg',
      path: '/market-dashboard'
    },
  ];

  return (
    <div className="flex justify-center space-x-8 mt-6 flex-wrap pt-12">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => navigate(card.path)}
          className="w-72 h-80 bg-white shadow-md rounded-sm p-8 cursor-pointer hover:shadow-lg transition-all duration-200 relative"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-full">
              <img src={card.Icon} alt={card.title} className="w-32 h-36" />
            </div>
          </div>
          <div className="text-center text-lg font-medium text-gray-800 p-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {card.title}
          </div>

          {/* Blue SVG for the first card */}
          {index === 0 && (
            <div className="absolute -bottom-20 -left-40">
              <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M120,10 Q180,70 210,80 L210,150 L120,150 Z"
                  fill="#2283f5"
                  opacity="0.5"
                />
              </svg>
            </div>
          )}

          {/* Green SVG for the third card */}
          {index === 2 && (
            <div className="absolute -top-8 -right-16">
              <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0,0 Q0,100 100,100 L100,0 Z"
                  fill="#3de03d"
                  opacity="0.5"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LandingPage;