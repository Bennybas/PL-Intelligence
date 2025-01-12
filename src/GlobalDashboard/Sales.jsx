import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { Info } from 'lucide-react';

const Sales = () => {
  const [activeRegion, setActiveRegion] = useState('US');
  
  const marketData = {
    US: [
      { date: 'Jan 25', ourProduct: 0 },
      { date: 'Feb 25', ourProduct: 10 },
      { date: 'Mar 25', ourProduct: 10 },
      { date: 'Apr 25', ourProduct: 15 },
      { date: 'May 25', ourProduct: 20 },
      { date: 'Jun 25', ourProduct: 30 },
      { date: 'Jul 25', ourProduct: 35 },
      { date: 'Aug 25', ourProduct: 40 },
      { date: 'Sep 25', ourProduct: 45 },
      { date: 'Oct 25', ourProduct: 60 },
      { date: 'Nov 25', ourProduct: 75 },
      { date: 'Dec 25', ourProduct: 85 }
    ],
    EU: [
      { date: 'Jan 25', ourProduct: 0 },
      { date: 'Feb 25', ourProduct: 8 },
      { date: 'Mar 25', ourProduct: 12 },
      { date: 'Apr 25', ourProduct: 18 },
      { date: 'May 25', ourProduct: 25 },
      { date: 'Jun 25', ourProduct: 35 },
      { date: 'Jul 25', ourProduct: 40 },
      { date: 'Aug 25', ourProduct: 45 },
      { date: 'Sep 25', ourProduct: 50 },
      { date: 'Oct 25', ourProduct: 55 },
      { date: 'Nov 25', ourProduct: 60 },
      { date: 'Dec 25', ourProduct: 65 }
    ],
    APAC: [
      { date: 'Jan 25', ourProduct: 0 },
      { date: 'Feb 25', ourProduct: 5 },
      { date: 'Mar 25', ourProduct: 8 },
      { date: 'Apr 25', ourProduct: 12 },
      { date: 'May 25', ourProduct: 18 },
      { date: 'Jun 25', ourProduct: 25 },
      { date: 'Jul 25', ourProduct: 30 },
      { date: 'Aug 25', ourProduct: 35 },
      { date: 'Sep 25', ourProduct: 40 },
      { date: 'Oct 25', ourProduct: 45 },
      { date: 'Nov 25', ourProduct: 50 },
      { date: 'Dec 25', ourProduct: 55 }
    ]
  };

  const regions = ['US', 'EU', 'APAC'];

  return (
    <div className="pt-6 pr-2">
      <div 
        className="flex flex-col bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-md" 
        style={{ width: '675px', height: '415px' }}
      >
        <div className="flex justify-between items-center">
          <span className="text-gray-700 pl-4 text-lg">Sales</span>
          <Info className="w-4 h-4 text-gray-500" />
        </div>

        <div className="bg-[#edede8] rounded-xl shadow-md w-60 h-8 p-2 mt-4 ml-8">
          <div className="flex justify-between -mt-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 ${
                  activeRegion === region
                    ? 'rounded-xl text-sm font-medium transition-all duration-200 bg-[#c98b27] text-white shadow-md transform scale-105 h-12 -mt-1'
                    : 'rounded-md text-sm font-medium transition-all duration-200 bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-black  h-8'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex-1 w-full mt-8">
          <div className="absolute left-8 top-0 bottom-0 flex flex-col justify-between text-gray-700 text-sm">
            <span>$100M</span>
            <span>$50M</span>
            <span>$30M</span>
            <span>$10M</span>
            <span>0</span>
          </div>

          <LineChart 
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
            <Line
              type="monotone"
              dataKey="ourProduct"
              stroke="#c98b27"
              strokeWidth={2}
              dot={false}
            />
            <Tooltip />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Sales;
