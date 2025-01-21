import React from 'react'
import { Info } from 'lucide-react';

const PayerMarket = () => {
  return (
    
    <div className="flex flex-col bg-white border border-grey-200 rounded-2xl p-2 shadow-sm h-[21rem] w-full" >
        <div className="flex justify-between w-full">
                <span className="text-gray-700 pl-4 text-md" style={{fontSize:"15px"}}>Payer and Market Access</span>
                <Info className='w-3 h-3'/>
            </div>
            <div className="flex gap-2 mb-6 w-full justify-end pr-4 pt-6">
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

            <div className="flex flex-col p-2 ml-4 justify-center">
            <div className="bg-[#edede8]/40 justify-start rounded-md shadow-md flex space-x-6 px-4 py-2 max-w">
                <div className="px-4">
                <span className="text-lg font-bold text-grey-700" style={{fontSize:"13px"}}>US</span>
                </div>
            </div>
            </div>

            <div className="flex flex-col p-2 ml-4 justify-center">
            <div className="bg-[#edede8]/40 justify-start rounded-md shadow-md flex space-x-6 px-4 py-2 max-w">
                <div className="px-4 ">
                <span className="text-lg font-bold text-grey-700" style={{fontSize:"13px"}}>EU</span>
                </div>
            </div>
            </div>

            <div className="flex flex-col  p-2 ml-4 justify-center">
            <div className="bg-[#edede8]/40 justify-start rounded-md shadow-md flex space-x-6 px-4 py-2 max-w">
                <div className="px-4 ">
                <span className="text-lg font-bold text-grey-700" style={{fontSize:"13px"}}>APAC</span>
                </div>
            </div>
            </div>

            <div className="relative">
            <div className='absolute flex justify-center space-x-4 ml-4 -mt-48 left-1/2 transform -translate-x-1/2'>
                <div className="flex flex-col bg-white border-2 rounded-2xl px-4 py-4 h-48 w-30 shadow-md  space-y-10 mt-1">
                    <div className='flex justify-between items-center '>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-2"
                        style={{ borderColor: '#ed3939' }}></div>
                        <div className='mb-1'>
                            <span className='font-md 'style={{fontSize:'12px'}}>Commercial</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-4"
                        style={{ borderColor: '#ed3939' }}></div>
                        <div>
                        <span className='font-md 'style={{fontSize:'12px'}}>UK NHS</span>
                        </div>
                    </div>
                    <div className='flex items-center '>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-4"
                        style={{ borderColor: '#f8fc05' }}></div>
                        <div>
                        <span className='font-md 'style={{fontSize:'12px'}}>Japan</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-white border-2 rounded-2xl px-4 py-4 h-48 w-30 shadow-md  space-y-10 mt-1">
                    <div className='flex justify-between items-center'>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-2"
                        style={{ borderColor: '#ed3939' }}></div>
                        <div className='mb-1'>
                            <span className='font-md mr-2'style={{fontSize:'12px'}}>Medicare</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-4"
                        style={{ borderColor: '#f8fc05' }}></div>
                        <div>
                        <span className='font-md 'style={{fontSize:'12px'}}>Germany</span>
                        </div>
                    </div>
                    <div className='flex items-center '>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-4"
                        style={{ borderColor: '#0aa311' }}></div>
                        <div>
                        <span className='font-md 'style={{fontSize:'12px'}}>China</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-white border-2 rounded-2xl px-4 py-4 h-48 w-30 shadow-md  space-y-10 mt-1">
                    <div className='flex justify-between items-center'>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-2"
                        style={{ borderColor: '#f8fc05' }}></div>
                        <div className='mb-1'>
                            <span className='font-md 'style={{fontSize:'12px'}}>Medicaid</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-4"
                        style={{ borderColor: '#0aa311' }}></div>
                        <div>
                        <span className='font-md 'style={{fontSize:'12px'}}>France</span>
                        </div>
                    </div>
                    <div className='flex items-center '>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-4"
                        style={{ borderColor: '#ed3939' }}></div>
                        <div>
                        <span className='font-md 'style={{fontSize:'12px'}}>Australia</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        
    </div>
        
  )
}

export default PayerMarket