import React from 'react'
import HeaderGlobal from './HeaderGlobal'
import { Info } from 'lucide-react';
import OverallLaunch from './OverallLaunch';
import PayerMarket from './PayerMarket';
import KeyRisk from './KeyRisk';
import KeyDomainReadiness from './KeyDomainReadiness';
import MarketShare from './MarketShare';
import Sales from './Sales';
import BudgetStatus from './BudgetStatus';

const GlobalDashboard = () => {
  
  return (
    <div>
       <div>
        <HeaderGlobal />
       </div>

       <div className='px-8 h-screen overflow-y-auto overflow-x-auto'>
        <div className='flex pt-4 '>
          <OverallLaunch />

          {/* Second Card */}
          <div className='flex pl-6'>
            <BudgetStatus />
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
        <PayerMarket />

          
        </div>
        
        {/* Third Row */}
        <div className='flex pt-4 '>
          {/* KeyRisk Inidicators */}
          <KeyRisk />
          {/* Key DomainReadiness */}
          <KeyDomainReadiness />
        </div>
        

        {/* Fourth Row */}
        <div className='flex pt-4'>
          {/* Sales */}
          <Sales />
          {/* MarketShare */}
          <MarketShare />
        </div>



        {/* EMPTY SPACE */}

        <div className='pb-28'>

        </div>
      </div>
    </div>
  )
}

export default GlobalDashboard