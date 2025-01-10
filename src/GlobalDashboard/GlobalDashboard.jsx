import React from 'react'
import HeaderGlobal from './HeaderGlobal'
import { Info } from 'lucide-react';

const GlobalDashboard = () => {
  const percentage = 77; 
  const outerRadius = 80;
  const arcWidth = 30;
  return (
    <div>
       <div>
        <HeaderGlobal />
       </div>

       <div className='px-8 h-screen overflow-y-auto overflow-x-auto'>
        <div className='flex pt-4 '>
          <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2  items-center h-82  shadow-md"
          style={{flexShrink: 1 }}>
            <div className="flex justify-between w-full">
              <span className="text-gray-700 pl-4 text-lg">Overall Launch Status</span>
              <Info className='w-4 h-4'/>
            </div>
            <div className='flex flex-row justify-between space-x-4'>
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
            
            {/* Second circle */}

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


            {/* Third circle */}

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

          {/* Second Card */}
          <div className='flex pl-6'>
            <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 flex items-center h-82 shadow-md" 
              style={{ width: '520px' }}>
                <div className="flex justify-between w-full">
                  <span className="text-gray-700 pl-4 text-lg">Budget Status</span>
                  <Info className='w-4 h-4'/>
                </div>
                <div className="flex gap-2 mb-6 w-full justify-end pr-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#004567]"></div>
                    <span className="text-gray-600 text-sm">On Track</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#c98b27]"></div>
                    <span className="text-gray-600 text-sm">Underutilized</span>
                  </div>
                </div>

              </div>
          </div>
        </div>

        <div className='flex pt-6'>
        <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 h-82 shadow-md" 
              style={{ width: '650px' }}>
            <div className="flex justify-between w-full">
                  <span className="text-gray-700 pl-4 text-lg">No of Days Launch</span>
                  <Info className='w-4 h-4'/>
            </div>

            <div className="flex flex-col justify-start items-start p-4">
              <span className="font-medium p-2">US</span>
              <div className="flex items-center gap-2 space-x-4">
                <div className="w-[520px] bg-gray-200 rounded-full h-4">
                  <div className="bg-[#c98b27] h-4 rounded-full" style={{width: '90%'}}></div>
                </div>
                <div className="flex justify-end items-end">
                  <span className="text-lg font-bold text-gray-600">120</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start p-4">
              <span className="font-medium p-2">EU</span>
              <div className="flex items-center gap-2 space-x-4">
                <div className="w-[520px] bg-gray-200 rounded-full h-4">
                  <div className="bg-[#c98b27] h-4 rounded-full" style={{width: '50%'}}></div>
                </div>
                <div className="flex justify-end items-end">
                  <span className="text-lg font-bold text-gray-600">300</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start p-4">
              <span className="font-medium p-2">APAC</span>
              <div className="flex items-center gap-2 space-x-4">
                <div className="w-[520px] bg-gray-200 rounded-full h-4">
                  <div className="bg-[#c98b27] h-4 rounded-full" style={{width: '40%'}}></div>
                </div>
                <div className="flex justify-end items-end">
                  <span className="text-lg font-bold text-gray-600">400</span>
                </div>
              </div>
            </div>
        </div>

        {/* SECOND ROW SECOND CARD */}
          <div className='justify-end itemsp-end pl-4 w-full'>
          <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 h-82 shadow-md" 
                style={{ width: '650px' }}>
              <div className="flex justify-between w-full">
                    <span className="text-gray-700 pl-4 text-lg">No of Days Launch</span>
                    <Info className='w-4 h-4'/>
              </div>

              <div className="flex flex-col p-4 justify-center">
                <div className="bg-[#edede8] justify-start rounded-md shadow-md flex space-x-6 px-4 py-2 w-[550px]">
                  <div className="px-4 ml-4">
                    <span className="text-lg font-bold text-grey-700">US</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-4 justify-center">
                <div className="bg-[#edede8] justify-start rounded-md shadow-md flex space-x-6 px-4 py-2 w-[550px]">
                  <div className="px-4 ml-4">
                    <span className="text-lg font-bold text-grey-700">EU</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-4 justify-center">
                <div className="bg-[#edede8] justify-start rounded-md shadow-md flex space-x-6 px-4 py-2 w-[550px]">
                  <div className="px-4 ml-4">
                    <span className="text-lg font-bold text-grey-700">APAC</span>
                  </div>
                </div>
              </div>


          </div>

          </div>
          
        </div>

        {/* EMPTY SPACE */}

        <div className='flex pt-12'>

        </div>
      </div>
    </div>
  )
}

export default GlobalDashboard