import React from 'react'
import { Info, FileSpreadsheet, Network, KeySquare } from 'lucide-react'
import HeaderExecutive from './HeaderExecutive'
import FinancialChart from './FinancialOverview';
import KeyDomain from './KeyDomain';

const ExecutiveDashboard = () => {
  const percentage = 75; 
  const outerRadius = 80;
  const arcWidth = 30;
  return (
    <div >
       <div >
        <HeaderExecutive />
       </div>

       <div className='px-8 w-full pt-[7.5rem]'>
          <div className='flex flex-row pt-4 gap-2 justify-between items-center'>
            <div
              className="flex flex-col bg-white border-gray-200 border rounded-2xl p-2 items-center shadow-sm w-full"
              style={{  height: '17rem' }} >
                <div className="flex justify-between w-full">
                  <span className="text-gray-700 pl-4 text-md">Overall Readiness Score</span>
                  <Info className='w-3 h-3'/>
                </div>
                <div className="flex justify-center items-center ustify-between pt-8">
                  <svg viewBox="-10 -10 220 220" width="175" height="175">
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
                        strokeWidth={arcWidth + 15} // Increased stroke width for the green progress bar
                        filter="url(#shadow)" // Add shadow
                      />

                      {/* Percentage text */}
                      <text
                        x="100"
                        y="100" // Adjusted y position for perfect centering
                        textAnchor="middle"
                        fill="#000000"
                        fontSize="33" // Increased font size for better visibility
                        fontWeight="bold"
                        dominantBaseline="middle" // Ensures text is vertically centered
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
                </div>
            </div>

            {/* Second Card */}
            <div className='flex flex-col gap-2 w-full' style={{ height: '16rem' }} >
              <div className='flex flex-row gap-4'>
                <div className="flex flex-col bg-white border-gray-200 border rounded-2xl p-2 shadow-sm w-full" style={{height:'8rem'}}>
                  <div className="flex justify-between w-full pb-4">
                      <span className="text-gray-700 pl-4 text-md" style={{fontSize:"15px"}}>
                        Days to<br />Launch
                      </span>
                      <Info className='w-3 h-3'/>
                  </div>

                  <div className='px-4'>
                    <span style={{fontSize:"26px",fontWeight:"bold"}}>80</span>
                  </div>
                </div>
                <div className="flex flex-col bg-white border-gray-200 border rounded-2xl p-2 shadow-sm w-full" style={{height:'8rem'}}>
                    <div className="flex justify-between w-full pb-4">
                      <span className="text-gray-700 pl-4 text-md" style={{fontSize:"15px"}}>
                        Launch<br />Budget Used
                      </span>
                      <Info className='w-3 h-3'/>
                    </div>

                    <div className='px-4 -mt-2'>
                      <span style={{fontSize:"26px",fontWeight:"bold"}}>45%</span>
                    </div>

                    <div className="px-4 -mt-6">
                      <svg width="140" height="40" viewBox="0 0 140 40">
                        <defs>
                          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#c98b27" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#c98b27" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0,25 C 10,28 20,22 30,24 S 50,28 60,25 S 80,22 90,24 S 110,28 120,25 S 130,22 140,24"
                          fill="none"
                          stroke="#c98b27"
                          strokeWidth="2"
                        />
                        <path
                          d="M 0,25 C 10,28 20,22 30,24 S 50,28 60,25 S 80,22 90,24 S 110,28 120,25 S 130,22 140,24 L 140,40 L 0,40 Z"
                          fill="url(#gradient)"
                        />
                      </svg>
                    </div>


                </div>


              </div>
              <div className='flex flex-row gap-4'>
                <div className="flex flex-col bg-white border  border-grey-200 rounded-2xl p-2 shadow-sm w-full" style={{height:'8rem'}}>
                  <div className="flex justify-between w-full pb-4">
                      <span className="text-gray-700 pl-4 text-md" style={{fontSize:"15px"}}>
                        Forcasted <br />Peak Sales
                      </span>
                      <Info className='w-3 h-3'/>
                  </div>

                  <div className='px-4'>
                    <span style={{fontSize:"26px",fontWeight:"bold"}}>100M</span>
                  </div>
                  
                </div>
                <div className="flex flex-col bg-white border border-grey-200 rounded-2xl p-2 shadow-sm w-full" style={{height:'8rem'}}>
                  <div className="flex justify-between w-full pb-4">
                    <span className="text-gray-700 pl-4 text-md" style={{fontSize:"15px"}}>
                      Market Share <br />Projections
                    </span>
                    <Info className='w-3 h-3'/>
                  </div>

                  <div className='px-4 -mt-2'>
                    <span style={{fontSize:"26px",fontWeight:"bold"}}>100M</span>
                  </div>

                  <div className="px-4 -mt-6">
                    <svg width="140" height="40" viewBox="0 0 140 40">
                      <defs>
                        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,38 C 10,35 20,32 30,30 S 50,28 60,27 S 80,26 90,28 S 110,29 120,27 S 130,22 140,24"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                      />
                      <path
                        d="M 0,38 C 10,35 20,32 30,30 S 50,28 60,27 S 80,26 90,28 S 110,29 120,27 S 130,22 140,24 L 140,40 L 0,40 Z"
                        fill="url(#gradient)"
                      />
                    </svg>
                  </div>

                </div>

              </div>


            </div>
            <div
              className="flex flex-col bg-white border border-gray-200 rounded-2xl p-2 items-center shadow-sm w-full"
              style={{ height: '17rem' }} >

                <div className="flex justify-between w-full">
                  <span className="text-gray-700 pl-4 text-md" style={{fontSize:"15px"}}>Key Risk and Mitigations</span>
                  <Info className='w-3 h-3'/>
                </div>
                <div className="flex gap-2 mb-6 w-full justify-end pr-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-600 text-sm" style={{fontSize:"12px"}}>High</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <span className="text-gray-600 text-sm" style={{fontSize:"12px"}}>Medium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <span className="text-gray-600 text-sm" style={{fontSize:"12px"}}>Low</span>
                  </div>
                </div>


                <div className="space-y-2 pl-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <FileSpreadsheet className="w-5 h-5 text-[#c98b27]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <h3 className="text-gray-900 font-medium" style={{fontSize:"14px"}}>Regulatory</h3>
                      </div>
                      <p className="text-gray-600 text-sm" style={{fontSize:"12px"}}>FDA has requested additional clinical data on long-term efficacy.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <Network className="w-5 h-5 text-[#c98b27]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <h3 className="text-gray-900 font-medium" style={{fontSize:"14px"}}>Supply Chain</h3>
                      </div>
                      <p className="text-gray-600 text-sm" style={{fontSize:"12px"}}>Potential disruption due geopolitical tensions affecting raw material supply</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <KeySquare className="w-5 h-5 text-[#c98b27] text-lg" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <h3 className="text-gray-900 font-medium" style={{fontSize:"14px"}}>Market Access</h3>
                      </div>
                      <p className="text-gray-600 text-sm" style={{fontSize:"12px"}}>Payers expressing concerns over cost-effectiveness.</p>
                    </div>
                  </div>
                </div>
            </div>
          

        </div>
        

        {/* second Row */}
        <div className='flex flex-row pt-12 gap-2 justify-between w-full'>
          <FinancialChart />

          <KeyDomain />
        </div>

        {/* Empty Space */}
        <div className='mt-8'>

        </div>
      </div>
    </div>
  )
}

export default ExecutiveDashboard