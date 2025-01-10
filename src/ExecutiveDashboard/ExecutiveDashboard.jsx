import React from 'react'
import { Info, FileSpreadsheet, Network, KeySquare } from 'lucide-react'
import HeaderExecutive from './HeaderExecutive'

const ExecutiveDashboard = () => {
  const percentage = 75; 
  const outerRadius = 80;
  const arcWidth = 30;
  return (
    <div>
      <HeaderExecutive />
      <div className='h-screen px-8 overflow-x-hidden'>
        <div className='flex justify-between gap-1 pt-4'>
          <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 items-center h-80 shadow-md"
            style={{ width: '460px', flexShrink: 0 }}>
            <div className="flex justify-between w-full">
              <span className="text-gray-700 pl-4 text-lg">Overall Readiness Score</span>
              <Info className='w-4 h-4'/>
            </div>

            {/* CircularBar */}
            <div className="flex justify-center items-center justify-between pt-8">
            <svg viewBox="-10 -10 220 220" width="220" height="220">
                {/* Grey Circle */}
                <circle 
                  cx="100" 
                  cy="100" 
                  r="73" 
                  fill="none" 
                  stroke="#d5ded9"
                  strokeWidth={arcWidth}
                />
                
                {/* Green Progress Bar */}
                <path
                  d={`M 100,20
                      A 80 80 0 ${percentage > 50 ? 1 : 0} 1 
                      ${100 + 80 * Math.sin(2 * Math.PI * (percentage / 100))} 
                      ${100 - 80 * Math.cos(2 * Math.PI * (percentage / 100))}`}
                  fill="none"
                  stroke="#558a41"
                  strokeWidth={arcWidth + 15} 
                  filter="url(#shadow)" 
                />

                {/* Percentage text */}
                <text
                  x="100"
                  y="100" 
                  textAnchor="middle"
                  fill="#000000"
                  fontSize="33"
                  fontWeight="bold"
                  dominantBaseline="middle" 
                >
                  {percentage}%
                </text>
                
                <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="1" dy="1" stdDeviation="1" flood-color="rgba(0, 0, 0, 0.2)" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          
          <div className="flex flex-col bg-white justify-between gap-3"
            style={{ width: '400px', flexShrink: 0 }}>
              <div className='flex flex-row space-x-4  justify-between gap-1'>
                {/* Middle-1 */}
                <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 h-44 w-52 shadow-md">
                  <div className="flex justify-between w-full pb-4">
                    <span className="text-gray-900 pl-4 text-md">
                      Days to<br />Launch
                    </span>
                    <Info className='w-4 h-4'/>
                  </div>
                  <div className='px-4'>
                    <span style={{fontSize:"33px",fontWeight:"bold"}}>80</span>
                  </div>
                </div>

                {/* Middle-2 */}
                <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 h-44 w-52 shadow-md">
                  <div className="flex justify-between w-full pb-2">
                      <span className="text-gray-900 pl-4 text-md">
                        Launch<br />Budget used
                      </span>
                      <Info className='w-4 h-4'/>
                  </div>

                  <div className='px-4'>
                    <span style={{fontSize:"33px",fontWeight:"bold"}}>45%</span>
                  </div>
                  <div className="px-4 -mt-4">
                    <svg width="140" height="40" viewBox="0 0 140 40">
                      <defs>
                        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,25 C 10,28 20,22 30,24 S 50,28 60,25 S 80,22 90,24 S 110,28 120,25 S 130,22 140,24"
                        fill="none"
                        stroke="#22c55e"
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
              

              {/* Middle 3 and 4 */}
              <div className='flex flex-row space-x-4 justify-between gap-1'>
                <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 h-44 w-52 shadow-md">
                  <div className="flex justify-between w-full pb-4">
                      <span className="text-gray-900 pl-4 text-md">
                        Forecasted<br />Peak sales
                      </span>
                      <Info className='w-4 h-4'/>
                  </div>

                  <div className='px-4'>
                    <span style={{fontSize:"33px",fontWeight:"bold"}}>$100M</span>
                  </div>
                </div>

                <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 h-44 w-52 shadow-md">
                  <div className="flex justify-between w-full pb-4">
                      <span className="text-gray-900 pl-4 text-md">
                        Market Share<br />Projection
                      </span>
                      <Info className='w-4 h-4'/>
                  </div>
                  <div className='px-4'>
                  <span style={{fontSize:"33px",fontWeight:"bold"}}>30%</span>
                </div>
                <div className="px-4 -mt-4">
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
          <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 items-center h-80 shadow-md"
            style={{ width: '490px', flexShrink: 0 }}>
              <div className="flex justify-between w-full">
                  <span className="text-gray-700 pl-4 text-lg">Key Risk and Mitigations</span>
                  <Info className='w-4 h-4'/>
                </div>
                <div className="flex gap-2 mb-6 w-full justify-end pr-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-600 text-sm">High</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-gray-600 text-sm">Medium</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span className="text-gray-600 text-sm">Low</span>
                </div>
              </div>

              <div className="space-y-6 pl-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <FileSpreadsheet className="w-5 h-5 text-green-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <h3 className="text-gray-900 font-medium">Regulatory</h3>
                    </div>
                    <p className="text-gray-600 text-sm">FDA has requested additional clinical data on long-term efficacy.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Network className="w-5 h-5 text-green-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <h3 className="text-gray-900 font-medium">Supply Chain</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Potential disruption due geopolitical tensions affecting raw material supply</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <KeySquare className="w-5 h-5 text-green-700 text-lg" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <h3 className="text-gray-900 font-medium">Market Access</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Payers expressing concerns over cost-effectiveness.</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExecutiveDashboard