import React from 'react';
import { Info,MessageSquare } from 'lucide-react';

const BudgetStatus = () => {
  const data = [
    { region: 'US', value: 30, type: 'on-track' },
    { region: 'APAC', value: 20, type: 'underutilized' },
    { region: 'EU', value: 40, type: 'on-track' }
  ];

  const getBarColor = (type) => {
    return type === 'on-track' ? '#c98b27' : '#004567';
  };

  return (
    
      <div 
        className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 items-center h-82 shadow-md" 
        style={{ width: '520px' }}
      >
        <div className="flex justify-between w-full">
          <span className="text-gray-700 pl-4 text-lg">Budget Status</span>
          <Info className='w-4 h-4'/>
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

        <div className="w-full px-4 mt-4">
          {data.map((item) => (
            <div key={item.region} className="relative mb-6">
              <div className="flex items-center justify-between mb-2">
                
                <span className="text-sm font-medium text-gray-700">${item.value}M</span>
              </div>
              <div className="relative w-full h-8">
                <div 
                  className="absolute h-full rounded-lg transition-all duration-300 px-4"
                  style={{
                    width: `${item.value}%`,
                    backgroundColor: getBarColor(item.type),
                    right: item.type === 'underutilized' ? '50%' : 'auto',
                    left: item.type === 'on-track' ? '50%' : 'auto'
                  }}
                >
                    <span className="text-sm font-medium text-white">{item.region}</span>
                    <div style={{font:getBarColor(item.type)}}>
                        <MessageSquare />
                    </div>
                    
                </div>
                
              </div>
            </div>
          ))}
        </div>

        <div className="w-full px-4 mt-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>$100M</span>
            <span>$90M</span>
            <span>$60M</span>
            <span>$30M</span>
            <span>0</span>
            <span>$30M</span>
            <span>$60M</span>
            <span>$90M</span>
            <span>$100M</span>
          </div>
        </div>
      </div>
    
  );
};

export default BudgetStatus;