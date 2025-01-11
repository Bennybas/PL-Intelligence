import React from 'react'
import { Info } from 'lucide-react';

const PayerMarket = () => {
  return (
    <div className='justify-end itemsp-end pl-4 w-full'>
        <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 shadow-md" 
            style={{ width: '715px', height:'390px' }}>
            <div className="flex justify-between w-full">
                <span className="text-gray-700 pl-4 text-lg">Payer and Market Access</span>
                <Info className='w-4 h-4'/>
            </div>
            <div className="flex gap-2 mb-6 w-full justify-end pr-4 pt-6">
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

            <div className="flex flex-col p-4 ml-4 justify-center">
            <div className="bg-[#edede8]/40 justify-start rounded-md shadow-md flex space-x-6 px-4 py-2 w-[580px]">
                <div className="px-4 ml-4">
                <span className="text-lg font-bold text-grey-700">US</span>
                </div>
            </div>
            </div>

            <div className="flex flex-col p-4 ml-4 justify-center">
            <div className="bg-[#edede8]/40 justify-start rounded-md shadow-md flex space-x-6 px-4 py-2 w-[580px]">
                <div className="px-4 ml-4">
                <span className="text-lg font-bold text-grey-700">EU</span>
                </div>
            </div>
            </div>

            <div className="flex flex-col p-4 ml-4 justify-center">
            <div className="bg-[#edede8]/40 justify-start rounded-md shadow-md flex space-x-6 px-4 py-2 w-[580px]">
                <div className="px-4 ml-4">
                <span className="text-lg font-bold text-grey-700">APAC</span>
                </div>
            </div>
            </div>

            <div className="relative">
            <div className='absolute flex justify-center space-x-4 ml-4 -mt-56 left-1/2 transform -translate-x-1/2'>
                <div className="flex flex-col bg-white border-2 rounded-2xl px-4 py-4 h-56 w-32 shadow-md  space-y-12">
                    <div className='flex justify-between items-center pt-2'>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-2"
                        style={{ borderColor: '#ed3939' }}></div>
                        <div className='mb-1'>
                            <span className='font-md 'style={{fontSize:'13px'}}>Commercial</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-4"
                        style={{ borderColor: '#ed3939' }}></div>
                        <div>
                        <span className='font-md 'style={{fontSize:'13px'}}>UK NHS</span>
                        </div>
                    </div>
                    <div className='flex items-center '>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-4"
                        style={{ borderColor: '#f8fc05' }}></div>
                        <div>
                        <span className='font-md 'style={{fontSize:'13px'}}>Japan</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-white border-2 rounded-2xl px-4 py-4 h-56 w-32 shadow-md  space-y-12">
                    <div className='flex justify-between items-center pt-2'>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-2"
                        style={{ borderColor: '#ed3939' }}></div>
                        <div className='mb-1'>
                            <span className='font-md mr-2'style={{fontSize:'13px'}}>Medicare</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-4"
                        style={{ borderColor: '#f8fc05' }}></div>
                        <div>
                        <span className='font-md 'style={{fontSize:'13px'}}>Germany</span>
                        </div>
                    </div>
                    <div className='flex items-center '>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-4"
                        style={{ borderColor: '#0aa311' }}></div>
                        <div>
                        <span className='font-md 'style={{fontSize:'13px'}}>China</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-white border-2 rounded-2xl px-4 py-4 h-56 w-32 shadow-md  space-y-12">
                    <div className='flex justify-between items-center pt-2'>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-2"
                        style={{ borderColor: '#f8fc05' }}></div>
                        <div className='mb-1'>
                            <span className='font-md 'style={{fontSize:'13px'}}>Medicaid</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-4"
                        style={{ borderColor: '#0aa311' }}></div>
                        <div>
                        <span className='font-md 'style={{fontSize:'13px'}}>France</span>
                        </div>
                    </div>
                    <div className='flex items-center '>
                        <div className="w-4 h-4 rounded-full border-4 bg-white mr-4"
                        style={{ borderColor: '#ed3939' }}></div>
                        <div>
                        <span className='font-md 'style={{fontSize:'13px'}}>Australia</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            
        </div>
        
    </div>
  )
}

export default PayerMarket