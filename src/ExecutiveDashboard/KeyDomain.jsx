import React from 'react'
import { Info } from 'lucide-react'

const KeyDomain = () => {
  return (
        <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-2 items-center shadow-sm w-full" 
             style={{height: '22rem'}}>
            <div className="flex justify-between w-full">
                <span className="text-gray-700 pl-4 text-md" style={{fontSize:"15px"}}>Key Domain Readiness</span>
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
            <div className='w-full p-4'>
                {[
                    { title: 'Regulatory Readiness', color: '#ed3939' },
                    { title: 'Manufacturing and Supply Chain', color: '#eddd28' },
                    { title: 'Marketing Access', color: '#ed3939' },
                    { title: 'Sales Force and Recruitment Training', color: '#0aa311' },
                    { title: 'Kol Engagement', color: '#faf734' }
                ].map((item, index) => (
                    <div key={index}>
                    <div className="flex flex-row items-start w-full p-2 mb-2 ml-4">
                        <div
                        className="w-4 h-4 rounded-full border-4 bg-white mr-4"
                        style={{ borderColor: item.color }}
                        ></div>
                        <h3 className="text-gray-700 font-medium text-md" style={{fontSize:"13px"}}>{item.title}</h3>
                    </div>
                    <div className="h-px max-w-full bg-gray-300"></div>
                    </div>
                ))}
            </div>

        </div>
  )
}

export default KeyDomain