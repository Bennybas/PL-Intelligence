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
import KeyDomain from '../ExecutiveDashboard/KeyDomain';

const GlobalDashboard = () => {
  
  return (
    <div>
       <div>
        <HeaderGlobal />
       </div>

       <div className='px-8 w-full pt-[8rem]'>
          <div className='flex flex-row pt-4 gap-3 justify-between items-center w-full'>
            <OverallLaunch />

            <BudgetStatus />
          </div>

          <div className='w-full justify-between items-center pt-4'>

          <div className='flex gap-3 '>
            <div className="flex flex-col bg-white border border-grey-200 rounded-2xl p-2  shadow-sm w-full" 
                  style={{ width: '650px' }}>
                <div className="flex justify-between w-full">
                      <span className="text-gray-700 pl-4 text-md" style={{fontSize:"15px"}}>No of Days Launch</span>
                      <Info className='w-3 h-3'/>
                </div>

                <div className="flex flex-col justify-start items-start p-4">
                  <span className="font-medium p-2" style={{fontSize:"13px"}}>US</span>
                  <div className="flex items-center gap-2 space-x-4">
                    <div className="w-[520px] bg-gray-200 rounded-full h-3">
                      <div className="bg-[#c98b27] h-3 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <div className="flex justify-end items-end">
                      <span className="text-lg font-bold text-gray-600" style={{fontSize:"15px"}}>120</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-start items-start p-4">
                  <span className="font-medium p-2" style={{fontSize:"13px"}}>EU</span>
                  <div className="flex items-center gap-2 space-x-4">
                    <div className="w-[520px] bg-gray-200 rounded-full h-3">
                      <div className="bg-[#c98b27] h-3 rounded-full" style={{width: '50%'}}></div>
                    </div>
                    <div className="flex justify-end items-end">
                      <span className="text-lg font-bold text-gray-600" style={{fontSize:"15px"}}>300</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-start items-start p-4">
                  <span className="font-medium p-2" style={{fontSize:"13px"}}>APAC</span>
                  <div className="flex items-center gap-2 space-x-4">
                    <div className="w-[520px] bg-gray-200 rounded-full h-3">
                      <div className="bg-[#c98b27] h-3 rounded-full" style={{width: '40%'}}></div>
                    </div>
                    <div className="flex justify-end items-end">
                      <span className="text-lg font-bold text-gray-600" style={{fontSize:"15px"}}>400</span>
                    </div>
                  </div>
                </div>
                
            </div>
            {/* SECOND ROW SECOND CARD */}
            <PayerMarket />


             
          </div>

          <div className='flex gap-3 pt-4'>
            <KeyRisk />

            <KeyDomainReadiness />
          </div>


          <div className='flex gap-3 pt-4'>
            <Sales />

            <MarketShare />
          </div>

          {/* Empty space */}
          <div className='flex gap-3 pt-8'>

          </div>
        </div>
          
      </div>
    </div>
  )
}

export default GlobalDashboard