import React from 'react'
import { NotebookText, ListCheck, ShieldX } from 'lucide-react';

const MarketAccessView = () => {
  return (
    <div className="grid grid-cols-2 gap-6 w-full pt-4">
          <div className="p-6 bg-white rounded-xl shadow-md mb-12">
            <h2 className="text-lg font-semibold mb-8">Formulary Status</h2>
            <div className="space-y-6">
              <div className="flex flex-col justify-between">
                <span className="font-medium">Tier 1</span>
                <div className="flex items-center gap-2">
                  <div className="w-80 bg-gray-200 rounded-full h-4">
                    <div className="bg-[#c98b27] h-4 rounded-full" style={{width: '45%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">45%</span>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <span className="font-medium pb-4">Tier 2</span>
                <div className="flex items-center gap-2">
                  <div className="w-80 bg-gray-200 rounded-full h-4">
                    <div className="bg-[#c98b27] h-4 rounded-full" style={{width: '35%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">35%</span>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-2">
                <span className="font-medium">Tier 3</span>
                <div className="flex items-center gap-2">
                  <div className="w-80 bg-gray-200 rounded-full h-4">
                    <div className="bg-[#c98b27] h-4 rounded-full" style={{width: '20%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">20%</span>
                </div>
              </div>
            </div>
          </div>
    
          <div className="p-6 bg-white rounded-xl shadow-md mb-12">
            <h2 className="text-lg font-semibold mb-6">Payer Coverage Status</h2>
            <div className="space-y-6">
                <div className="flex items-center justify-end space-x-8 mr-2"> 
                    <span style={{fontSize:'10px'}}>Aprroved</span>
                    <span style={{fontSize:'10px'}}>Pending</span>
                    <span style={{fontSize:'10px'}}>Queries</span>
                </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Commercial</span>
                <div className="bg-[#edede8] justify-between rounded-md shadow-md flex space-x-6 px-4 py-2">
                  <ListCheck className="text-gray-400" size={28} />
                  <div className='bg-yellow-500 shadow-md rounded-md px-4 py-0.5'>
                    <NotebookText className="text-white" size={28} />
                  </div>
                  <ShieldX className="text-gray-400" size={28} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Medicare</span>
                <div className="flex gap-4">
                <div className="bg-[#edede8] rounded-md shadow-md flex space-x-6 px-4 py-2">
                <div className='bg-green-500 shadow-md rounded-md px-4 py-0.5'>
                    <ListCheck className="text-white" size={28} />
                </div>
                    <NotebookText className="text-gray-400" size={28} />
                 
                  <ShieldX className="text-gray-400" size={28} />
                </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Medicaid</span>
                <div className="bg-[#edede8] rounded-md shadow-md flex space-x-6 px-4 py-2">
                  <ListCheck className="text-gray-400" size={28} />
                    <NotebookText className="text-gray-400" size={28} />
                 
                  <div className='bg-red-500 shadow-md rounded-md px-4 py-0.5'>
                  <ShieldX className="text-white" size={28} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default MarketAccessView