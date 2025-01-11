import React from 'react'
import { Info } from 'lucide-react';

const KeyRisk = () => {
  return (
    <div className='pt-6'>
        <div className="flex flex-col bg-white border-2 border-grey-500 rounded-2xl p-2 shadow-md" 
            style={{ width: '600px', height:'390px' }}>
            <div className="flex justify-between w-full">
                <span className="text-gray-700 pl-4 text-lg">Key Risk Indicators</span>
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


            <div className='flex flex-col p-4 space-y-4'>
                <div className='flex flex-row justify-center items-center space-x-[83px]  w-full ml-8'>
                    <h4 className="text-gray-700 font-medium text-lg">
                        US
                    </h4>
                    <h4 className="text-gray-700 font-medium text-lg">
                    EU
                    </h4>
                    <div className='-ml-4'>
                    <h4 className="text-gray-700 font-medium text-lg">
                    APAC
                    </h4>
                    </div>
                    
                </div >

                <div className='flex flex-col-2'>
                    <div>
                    <h4 className="text-gray-700 font-medium text-lg">
                        Regulatory
                    </h4>
                    </div>
                    
                    <div className='flex flex-row space-x-[80px] ml-16 gap-2'>
                        <div
                            className="w-4 h-4 rounded-full border-4 bg-white mr-4 mt-2"
                            style={{ borderColor: '#ed3939' }}
                        ></div>

                        <div
                            className="w-4 h-4 rounded-full border-4 bg-white mr-4 mt-2"
                        style={{ borderColor: '#f5f75c' }}></div>

                        <div
                            className="w-4 h-4 rounded-full border-4 bg-white ml-2 mt-2"
                            style={{ borderColor: '#ed3939' }}
                        ></div>
                    </div>

                </div>
                <div className='flex flex-col-2'>
                    <div>
                    <h4 className="text-gray-700 font-medium text-lg">
                        Market Access
                    </h4>
                    </div>
                    
                    <div className='flex flex-row space-x-[80px] ml-16 gap-2'>
                        <div
                            className="w-4 h-4 rounded-full border-4 bg-white mr-4 mt-2"
                            style={{ borderColor: '#ed3939' }}
                        ></div>

                        <div
                            className="w-4 h-4 rounded-full border-4 bg-white mr-4 mt-2"
                        style={{ borderColor: '#f5f75c' }}></div>

                        <div
                            className="w-4 h-4 rounded-full border-4 bg-white ml-2 mt-2"
                            style={{ borderColor: '#ed3939' }}
                        ></div>
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default KeyRisk