import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [highlightCards, setHighlightCards] = useState(false);

  const cards = [
    {
      title: 'Executive Launch Dashboard',
      Icon: '/svg/businessman-svgrepo-com.svg',
      path: '/executive-dashboard',
      shouldHighlight: true
    },
    {
      title: 'Global Launch Dashboard',
      Icon: '/svg/rocket-svgrepo-com.svg',
      path: '/global-dashboard',
      shouldHighlight: true
    },
    {
      title: 'Market Launch Dashboard',
      Icon: '/svg/spacecraft-rocket-svgrepo-com.svg',
      path: '/',
      shouldHighlight: false
    },
  ];

  // Handle click outside cards
  useEffect(() => {
    const handleClick = (e) => {
      // Check if click target is outside any card
      const isOutsideCards = !e.target.closest('.card-container');
      setHighlightCards(isOutsideCards);
      
      // Reset highlight after 1 second
      if (isOutsideCards) {
        setTimeout(() => {
          setHighlightCards(false);
        }, 1000);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="flex justify-center space-x-8 mt-6 flex-wrap pt-12">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => navigate(card.path)}
          className={`card-container w-72 h-80 bg-white shadow-lg rounded-sm p-8 cursor-pointer transition-all duration-200 relative
            ${highlightCards && card.shouldHighlight 
              ? 'ring-4 bg-blue-400 shadow-xl transform scale-105' 
              : 'hover:shadow-lg'}
              
              hover:shadow-xlg`}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-[#004567] to-[#c98b27] p-3 rounded-full">
              <img src={card.Icon} alt={card.title} className="w-32 h-36" />
            </div>
          </div>
          <div className="text-center text-lg font-medium text-[#004567] p-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {card.title}
          </div>

          {/* Blue SVG for the first card */}
          {index === 0 && (
            <div className="absolute -bottom-20 -left-40">
              <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M120,10 Q180,70 210,80 L210,150 L120,150 Z"
                  fill="#004567"
                  opacity="0.7"
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
                  fill="#c98b27"
                  opacity="0.7"
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