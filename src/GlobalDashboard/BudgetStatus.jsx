import React from 'react';
import { Info,MessageSquare } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ReferenceLine, Cell } from 'recharts';

const BudgetStatus = () => {
  // Transform data for Recharts
  const data = [
    { region: 'US', value: 30, type: 'on-track' },
    { region: 'APAC', value: -20, type: 'underutilized' }, // Negative for left side
    { region: 'EU', value: 40, type: 'on-track' }
  ];

  
  const CustomLabel = (props) => {
    const { x, y, width, value, type } = props;
    const absValue = Math.abs(value);
  
    return (
    <g>
      
      <g
        transform={`translate(${type === 'underutilized' ? x - 10 : x + width - 10}, ${y-5})`}
      >
        
        <svg width={50} height={50}>
        <defs>
          <filter id="iconShadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="3"
              floodColor="#000000"
              floodOpacity="0.2"
            />
          </filter>
        </defs>
        <MessageSquare
          fill="white"
          color="white"
          width={40}
          height={40}
          filter="url(#iconShadow)" 
        />
      </svg>

        
        
      </g>

      {/* Text inside the icon */}
      <text
        x={type === 'underutilized' ? x + 3 : x + width + 8}
        y={y + 18}
        fill="#c98b27"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
      >
        ${absValue}M
      </text>
    </g>
    );
  };

  return (
    <div 
      className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 items-center h-82 shadow-md"
      style={{ width: '520px' }}
    >
      <div className="flex justify-between w-full">
        <span className="text-gray-700 pl-4 text-lg">Budget Status</span>
        <Info className="w-4 h-4"/>
      </div>
      
      <div className="flex gap-2 mb-6 w-full justify-end pr-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#c98b27]"></div>
          <span className="text-gray-600 text-sm">On Track</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#004567]"></div>
          <span className="text-gray-600 text-sm">Underutilized</span>
        </div>
      </div>

      <div className="w-full px-4">
        <BarChart
          width={480}
          height={200}
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
        >
          <XAxis
            type="number"
            domain={[-100, 100]}
            ticks={[-100, -90, -60, -30, 0, 30, 60, 90, 100]}
            tickFormatter={(value) => `$${Math.abs(value)}M`}
            tick={{ fontSize: 12, fill: '#666' }}
          />
          <YAxis type="category" dataKey="region" hide />
          <ReferenceLine x={0} stroke="#666" />
          <Bar
            dataKey="value"
            radius={[4, 4, 4, 4]}
            barSize={32}
            label={<CustomLabel />}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.type === 'on-track' ? '#c98b27' : '#004567'}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default BudgetStatus;