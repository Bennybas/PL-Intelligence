import React from 'react'
import { Info } from 'lucide-react';

const OverallLaunch = () => {
    const percentage = 77; 
  const outerRadius = 80;
  const arcWidth = 30;
  return (
    <div>
        <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2  items-center h-82  shadow-md"
          style={{flexShrink: 1 }}>
            <div className="flex justify-between w-full">
              <span className="text-gray-700 pl-4 text-lg">Overall Launch Status</span>
              <Info className='w-4 h-4'/>
            </div>
            <div className='flex flex-row justify-between space-x-6'>
            <div className="flex flex-col justify-center items-center ustify-between pt-8">
              <svg viewBox="-10 -10 220 220" width="210" height="210">
                  {/* Grey Circle */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="73" 
                    fill="none" 
                    stroke="#d5ded9"
                    strokeWidth={arcWidth}
                  />
                  
                  {/* Gold Progress Bar with increased size and shadow */}
                  <path
                    d={`M 100,20
                        A 80 80 0 ${percentage > 50 ? 1 : 0} 1 
                        ${100 + 80 * Math.sin(2 * Math.PI * (percentage / 100))} 
                        ${100 - 80 * Math.cos(2 * Math.PI * (percentage / 100))}`}
                    fill="none"
                    stroke="#c98b27"
                    strokeWidth={arcWidth + 15} 
                    filter="url(#shadow)"
                  />

                  {/* Percentage text */}
                  <text
                    x="100"
                    y="100" 
                    textAnchor="middle"
                    fill="#000000"
                    fontSize="30" 
                    fontWeight="bold"
                    dominantBaseline="middle" 
                  >
                    {percentage}%
                  </text>

                  {/* Define the shadow filter */}
                  <defs>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="1" dy="1" stdDeviation="1" flood-color="rgba(0, 0, 0, 0.2)" />
                    </filter>
                  </defs>
              </svg>
              <div>
                <span className="text-gray-600 pl-4 text-sm font-bold" >
                  Overall Readiness
                </span>
              </div>
            </div>

            <div className="relative h-64">
              <svg className="absolute" width="200" height="200" style={{ top: '45px', left: '-70px' }}>
                <path 
                  d="M 10 20 L 105 65 Q 90 90 110 130 L 10 163 Q 70 100 10 20 Z" 
                  fill="#d5ded9"
                  opacity='0.7'
                />
              </svg>
            </div>

            
            {/* Second circle */}

            <div className="flex flex-col justify-center items-center ustify-between pt-8 -ml-4">
              <svg viewBox="-10 -10 220 220" width="170" height="170" >
                  {/* Grey Circle */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="73" 
                    fill="none" 
                    stroke="#d5ded9"
                    strokeWidth={arcWidth}
                  />
                  
                  {/* bLUE Progress Bar with increased size and shadow */}
                  <path
                    d={`M 100,20
                        A 80 80 0 ${80 > 50 ? 1 : 0} 1 
                        ${100 + 80 * Math.sin(2 * Math.PI * (80 / 100))} 
                        ${100 - 80 * Math.cos(2 * Math.PI * (80 / 100))}`}
                    fill="none"
                    stroke="#004567"
                    strokeWidth={arcWidth + 15} // Increased stroke width for the green progress bar
                    filter="url(#shadow)" // Add shadow
                  />

                  {/* Percentage text */}
                  <text
                    x="100"
                    y="100" // Adjusted y position for perfect centering
                    textAnchor="middle"
                    fill="#000000"
                    fontSize="30" // Increased font size for better visibility
                    fontWeight="bold"
                    dominantBaseline="middle" // Ensures text is vertically centered
                  >
                    85%
                  </text>

                  {/* Define the shadow filter */}
                  <defs>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="1" dy="1" stdDeviation="1" flood-color="rgba(0, 0, 0, 0.2)" />
                    </filter>
                  </defs>
              </svg>

              <div>
                <span className="text-gray-600 pl-4 text-sm font-bold" >
                  US
                </span>
              </div>
              
            </div>

            <div className="relative h-64">
              <svg 
                className="absolute" 
                width="100" 
                height="200" 
                style={{ top: '92px', left: '-42px', zIndex: 1 }} // Set z-index to -1 to ensure it's behind other elements
              >
                <path 
                  d="M 10 20 L 90 20 Q 80 40 90 67 L 10 67 Q 12 65 10 20 Z" 
                  fill="#d5ded9"
                  opacity="0.7"
                />
              </svg>
            </div>



            {/* Third circle */}

            <div className="flex flex-col justify-center items-center ustify-between pt-8">
              <svg  viewBox="-10 -10 220 220" width="170" height="170" style={{zIndex: 2 }}>
                  {/* Grey Circle */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="73" 
                    fill="none" 
                    stroke="#d5ded9"
                    strokeWidth={arcWidth}
                  />
                  
                  {/* bLUE Progress Bar with increased size and shadow */}
                  <path
                    d={`M 100,20
                        A 80 80 0 ${70 > 50 ? 1 : 0} 1 
                        ${100 + 80 * Math.sin(2 * Math.PI * (70 / 100))} 
                        ${100 - 80 * Math.cos(2 * Math.PI * (70 / 100))}`}
                    fill="none"
                    stroke="#004567"
                    strokeWidth={arcWidth + 15} // Increased stroke width for the green progress bar
                    filter="url(#shadow)" // Add shadow
                  />

                  {/* Percentage text */}
                  <text
                    x="100"
                    y="100" // Adjusted y position for perfect centering
                    textAnchor="middle"
                    fill="#000000"
                    fontSize="30" // Increased font size for better visibility
                    fontWeight="bold"
                    dominantBaseline="middle" // Ensures text is vertically centered
                  >
                    70%
                  </text>

                  {/* Define the shadow filter */}
                  <defs>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="1" dy="1" stdDeviation="1" flood-color="rgba(0, 0, 0, 0.2)" />
                    </filter>
                  </defs>
              </svg>
              <div>
                <span className="text-gray-600 pl-4 text-sm font-bold" >
                  EU
                </span>
              </div>
            </div>


            <div className="relative h-64">
              <svg 
                className="absolute" 
                width="100" 
                height="200" 
                style={{ top: '92px', left: '-42px' }} // Set z-index to -1 to ensure it's behind other elements
              >
                <path 
                  d="M 10 20 L 90 20 L 90,45 L 70,45  Q72,50 75,67 L 10 67 Q 12 65 10 20 Z" 
                  fill="#d5ded9"
                  opacity="0.7"
                />
              </svg>
            </div>

            {/* Fourth circle */}

            
            <div className="flex flex-col justify-center items-center ustify-between pt-8">
              <svg viewBox="-10 -10 220 220" width="170" height="170">
                  {/* Grey Circle */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="73" 
                    fill="none" 
                    stroke="#d5ded9"
                    strokeWidth={arcWidth}
                  />
                  
                  {/* bLUE Progress Bar with increased size and shadow */}
                  <path
                    d={`M 100,20
                        A 80 80 0 ${75 > 50 ? 1 : 0} 1 
                        ${100 + 80 * Math.sin(2 * Math.PI * (75 / 100))} 
                        ${100 - 80 * Math.cos(2 * Math.PI * (75 / 100))}`}
                    fill="none"
                    stroke="#004567"
                    strokeWidth={arcWidth + 15} // Increased stroke width for the green progress bar
                    filter="url(#shadow)" // Add shadow
                  />

                  {/* Percentage text */}
                  <text
                    x="100"
                    y="100" // Adjusted y position for perfect centering
                    textAnchor="middle"
                    fill="#000000"
                    fontSize="30" // Increased font size for better visibility
                    fontWeight="bold"
                    dominantBaseline="middle" // Ensures text is vertically centered
                  >
                    75%
                  </text>

                  {/* Define the shadow filter */}
                  <defs>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="1" dy="1" stdDeviation="1" flood-color="rgba(0, 0, 0, 0.2)" />
                    </filter>
                  </defs>
              </svg>
              <div>
                <span className="text-gray-600 pl-4 text-sm font-bold" >
                  APAC
                </span>
              </div>
            </div>
            
            </div>
            
          </div>
    </div>
  )
}

export default OverallLaunch