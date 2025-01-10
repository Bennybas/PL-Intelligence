import React from 'react'
import { CheckCircle2, Clock, HelpCircle } from 'lucide-react';

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
                    <div className="bg-[#558a41] h-4 rounded-full" style={{width: '45%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">45%</span>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <span className="font-medium pb-4">Tier 2</span>
                <div className="flex items-center gap-2">
                  <div className="w-80 bg-gray-200 rounded-full h-4">
                    <div className="bg-[#558a41] h-4 rounded-full" style={{width: '35%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">35%</span>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-2">
                <span className="font-medium">Tier 3</span>
                <div className="flex items-center gap-2">
                  <div className="w-80 bg-gray-200 rounded-full h-4">
                    <div className="bg-[#558a41] h-4 rounded-full" style={{width: '20%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">20%</span>
                </div>
              </div>
            </div>
          </div>
    
          <div className="p-6 bg-white rounded-xl shadow-md mb-12">
            <h2 className="text-lg font-semibold mb-6">Payer Coverage Status</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-medium">Commercial</span>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-gray-400" size={24} />
                  <Clock className="text-yellow-400" size={24} />
                  <HelpCircle className="text-gray-400" size={24} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Medicare</span>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-gray-400" size={24} />
                  <Clock className="text-gray-400" size={24} />
                  <HelpCircle className="text-orange-400" size={24} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Medicaid</span>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-green-400" size={24} />
                  <Clock className="text-gray-400" size={24} />
                  <HelpCircle className="text-gray-400" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default MarketAccessView