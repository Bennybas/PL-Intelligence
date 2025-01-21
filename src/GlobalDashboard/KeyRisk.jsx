import React from 'react';
import { Info } from 'lucide-react';

const KeyRisk = () => {
  const categories = ['Regulatory', 'Market Access', 'Supply Chain'];
  const regions = ['US', 'EU', 'APAC'];
  
  const statusData = {
    Regulatory: {
      US: 'high',
      EU: 'medium',
      APAC: 'high'
    },
    'Market Access': {
      US: 'medium',
      EU: 'high',
      APAC: 'high'
    },
    'Supply Chain': {
      US: 'high',
      EU: 'medium',
      APAC: 'medium'
    }
  };

  const StatusCircle = ({ status }) => {
    const getColor = (status) => {
      switch (status) {
        case 'high':
          return '#FF4D4D';
        case 'medium':
          return '#FFD700';
        default:
          return '#FF4D4D';
      }
    };

    return (
      <div
        className="w-4 h-4 rounded-full border-4 bg-white ml-12"
        style={{ borderColor: getColor(status) }}
      />
    );
  };

  return (
      <div 
        className="flex flex-col bg-white border border-gray-200 rounded-2xl p-2 shadow-sm" 
        style={{ width: '525px', height: '350px',minWidth:'525px' }}
      >
        <div className="flex justify-between w-full">
          <span className="text-gray-700 pl-4 text-md"style={{fontSize:"15px"}}>Key Risk Indicators</span>
          <Info className="w-3 h-3 " />
        </div>

        <div className="flex gap-4 justify-end mt-6 mb-6 mr-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-gray-600 text-sm" style={{fontSize:"12px"}}>High</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="text-gray-600 text-sm" style={{fontSize:"12px"}}>Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-gray-600 text-sm" style={{fontSize:"12px"}}>Low</span>
          </div>
        </div>

        <div className="flex-grow px-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 w-1/4 text-gray-600"></th>
                {regions.map(region => (
                  <th key={region} className="text-center p-4 w-1/4 text-gray-600 " style={{fontSize:"13px"}}>
                    {region}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map(category => (
                <tr key={category} className="border-t border-gray-200">
                  <td className="text-md font-bold text-grey-700 p-2" style={{fontSize:"13px"}}>{category}</td>
                  {regions.map(region => (
                    <td key={`${category}-${region}`} className="p-4">
                      <StatusCircle status={statusData[category][region]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default KeyRisk;