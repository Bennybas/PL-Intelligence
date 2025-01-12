import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { Info } from 'lucide-react';

const MarketShare = () => {
  const [activeRegion, setActiveRegion] = useState('US');
  
  const marketData = {
    US: [
      { date: 'Jan 25', competitor1: 20, competitor2: 25, ourProduct: 0 },
      { date: 'Feb 25', competitor1: 30, competitor2: 45, ourProduct: 10 },
      { date: 'Mar 25', competitor1: 40, competitor2: 50, ourProduct: 10 },
      { date: 'Apr 25', competitor1: 42, competitor2: 50, ourProduct: 15 },
      { date: 'May 25', competitor1: 42, competitor2: 50, ourProduct: 20 },
      { date: 'Jun 25', competitor1: 45, competitor2: 52, ourProduct: 30 },
      { date: 'Jul 25', competitor1: 50, competitor2: 55, ourProduct: 35 },
      { date: 'Aug 25', competitor1: 55, competitor2: 52, ourProduct: 40 },
      { date: 'Sep 25', competitor1: 60, competitor2: 65, ourProduct: 45 },
      { date: 'Oct 25', competitor1: 65, competitor2: 75, ourProduct: 60 },
      { date: 'Nov 25', competitor1: 70, competitor2: 85, ourProduct: 75 },
      { date: 'Dec 25', competitor1: 75, competitor2: 90, ourProduct: 85 }
    ],
    EU: [
      { date: 'Jan 25', competitor1: 15, competitor2: 20, ourProduct: 0 },
      { date: 'Feb 25', competitor1: 25, competitor2: 35, ourProduct: 8 },
      { date: 'Mar 25', competitor1: 35, competitor2: 40, ourProduct: 12 },
      { date: 'Apr 25', competitor1: 38, competitor2: 45, ourProduct: 18 },
      { date: 'May 25', competitor1: 40, competitor2: 48, ourProduct: 25 },
      { date: 'Jun 25', competitor1: 42, competitor2: 50, ourProduct: 35 },
      { date: 'Jul 25', competitor1: 45, competitor2: 52, ourProduct: 40 },
      { date: 'Aug 25', competitor1: 50, competitor2: 55, ourProduct: 45 },
      { date: 'Sep 25', competitor1: 55, competitor2: 60, ourProduct: 50 },
      { date: 'Oct 25', competitor1: 60, competitor2: 65, ourProduct: 55 },
      { date: 'Nov 25', competitor1: 65, competitor2: 70, ourProduct: 60 },
      { date: 'Dec 25', competitor1: 70, competitor2: 75, ourProduct: 65 }
    ],
    APAC: [
      { date: 'Jan 25', competitor1: 10, competitor2: 15, ourProduct: 0 },
      { date: 'Feb 25', competitor1: 20, competitor2: 25, ourProduct: 5 },
      { date: 'Mar 25', competitor1: 30, competitor2: 35, ourProduct: 8 },
      { date: 'Apr 25', competitor1: 35, competitor2: 40, ourProduct: 12 },
      { date: 'May 25', competitor1: 38, competitor2: 42, ourProduct: 18 },
      { date: 'Jun 25', competitor1: 40, competitor2: 45, ourProduct: 25 },
      { date: 'Jul 25', competitor1: 42, competitor2: 48, ourProduct: 30 },
      { date: 'Aug 25', competitor1: 45, competitor2: 50, ourProduct: 35 },
      { date: 'Sep 25', competitor1: 48, competitor2: 52, ourProduct: 40 },
      { date: 'Oct 25', competitor1: 50, competitor2: 55, ourProduct: 45 },
      { date: 'Nov 25', competitor1: 52, competitor2: 58, ourProduct: 50 },
      { date: 'Dec 25', competitor1: 55, competitor2: 60, ourProduct: 55 }
    ]
  };

  const lines = [
    { key: 'competitor1', color: '#004567', label: 'Competitor A' },
    { key: 'competitor2', color: '#6168f2', label: 'Competitor B' },
    { key: 'ourProduct', color: '#c98b27', label: 'Our Product' }
  ];

  const regions = ['US', 'EU', 'APAC'];

  return (
    <div className="pt-4 pl-2">
      <div 
        className="flex flex-col bg-white border-2 border-gray-200 rounded-2xl p-4 shadow-md" 
        style={{ width: '675px', height: '415px' }}
      >
        <div className="flex justify-between w-full">
          <span className="text-gray-700 pl-4 text-lg">Market Share</span>
          <Info className="w-4 h-4" />
        </div>

        <div className="bg-[#edede8] rounded-xl shadow-md w-60 h-8 p-2 mt-6 ml-8">
            <div className="flex justify-between -mt-2">
                {regions.map((region) => (
                <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className={`px-4 py-2 ${
                    activeRegion === region
                        ? 'rounded-xl text-sm font-medium transition-all duration-200 bg-[#c98b27] text-white shadow-md transform scale-105 h-12 -mt-1'
                        : 'rounded-md text-sm font-medium transition-all duration-200 bg-gray-200 text-gray-700 hover:bg-[#c98b27] hover:text-black  h-8'
                    }`}
                >
                    {region}
                </button>
                ))}
            </div>
        </div>

        

        <div className="flex gap-4 justify-end mt-2">
          {lines.map(({ key, color, label }) => (
            <div key={key} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-gray-600 text-sm">{label}</span>
            </div>
          ))}
        </div>

        <div className="relative flex-1 w-full mt-4">
          <div className="absolute left-8 top-0 bottom-0 flex flex-col justify-between text-gray-700 text-sm">
            <span>$100M</span>
            <span>$50M</span>
            <span>$30M</span>
            <span>$10M</span>
            <span>0</span>
          </div>

          <LineChart 
            key={activeRegion}
            width={600} 
            height={250} 
            data={marketData[activeRegion]}
            margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
          >
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12, fill: '#666' }} 
            />
            <YAxis hide />
            {lines.map(({ key, color }) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            ))}
            <Tooltip />
          </LineChart>

          
        </div>
      </div>
    </div>
  );
};

export default MarketShare;