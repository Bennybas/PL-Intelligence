import React from 'react'
import { NotebookText, ListCheck, ShieldX } from 'lucide-react';

const MarketAccessView = () => {
  return (
    <div className="grid grid-cols-2 gap-6 w-full h-full pt-2">
      <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm mb-12 w-full">
        <h2 className="text-md font-semibold mb-8" style={{fontSize:'15px'}}>Formulary Status</h2>

        <div className="space-y-4">
              <div className="flex flex-col justify-between">
                <span className="font-medium" style={{fontSize:'12px'}}>Tier 1</span>
                <div className="flex items-center gap-2">
                  <div className="w-80 bg-gray-200 rounded-full h-4">
                    <div className="bg-[#c98b27] h-4 rounded-full" style={{width: '45%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">45%</span>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <span className="font-medium pb-4" style={{fontSize:'12px'}}>Tier 2</span>
                <div className="flex items-center gap-2">
                  <div className="w-80 bg-gray-200 rounded-full h-4">
                    <div className="bg-[#c98b27] h-4 rounded-full" style={{width: '35%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">35%</span>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-2">
                <span className="font-medium" style={{fontSize:'12px'}}>Tier 3</span>
                <div className="flex items-center gap-2">
                  <div className="w-80 bg-gray-200 rounded-full h-4">
                    <div className="bg-[#c98b27] h-4 rounded-full" style={{width: '20%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">20%</span>
                </div>
              </div>
            </div>

        
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm mb-12 w-full">
        <h2 className="text-lg font-semibold mb-6" style={{fontSize:'15px'}}>Payer Coverage Status</h2>
        <div className="space-y-3">
                <div className="flex items-center justify-end space-x-8 mr-2"> 
                    <span style={{fontSize:'10px'}}>Aprroved</span>
                    <span style={{fontSize:'10px'}}>Pending</span>
                    <span style={{fontSize:'10px'}}>Queries</span>
                </div>
              <div className="flex items-center justify-between">
                <span className="font-medium" style={{fontSize:'12px'}}>Commercial</span>
                <div className="bg-[#edede8] justify-between rounded-md shadow-md flex space-x-7 px-4 py-2">
                  <ListCheck className="text-gray-400" size={22} />
                  <div className='bg-yellow-500 shadow-md rounded-md px-4 py-0.5'>
                    <NotebookText className="text-white" size={22} />
                  </div>
                  <ShieldX className="text-gray-400" size={22} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium" style={{fontSize:'12px'}}>Medicare</span>
                <div className="flex gap-4">
                <div className="bg-[#edede8] rounded-md shadow-md flex space-x-7 px-4 py-2">
                <div className='bg-green-500 shadow-md rounded-md px-4 py-0.5'>
                    <ListCheck className="text-white" size={22} />
                </div>
                    <NotebookText className="text-gray-400" size={22} />
                 
                  <ShieldX className="text-gray-400" size={22} />
                </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium" style={{fontSize:'12px'}}> Medicaid</span>
                <div className="bg-[#edede8] rounded-md shadow-md flex space-x-7 px-4 py-2">
                  <ListCheck className="text-gray-400" size={22} />
                    <NotebookText className="text-gray-400" size={22} />
                 
                  <div className='bg-red-500 shadow-md rounded-md px-4 py-0.5'>
                  <ShieldX className="text-white" size={22} />
                  </div>
                </div>
              </div>
            </div>
      </div>
      
          
    </div>
  )
}

export default MarketAccessView