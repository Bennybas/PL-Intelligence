import React from 'react';
import { ArrowBigLeft, ArrowBigDownDash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeaderGlobal = () => {
const navigate = useNavigate();
  return (
    <div className='px-8 fixed top-[5rem] left-0 w-full z-10'> 
      <header className="bg-white text-gray-600 flex items-center justify-between py-2 border-2 border-gray-200 shadow-sm rounded-b-lg mx-auto -mt-2">
        <div className="flex px-4 space-x-4">
          
          <ArrowBigLeft className="text-[#c98b27] w-8 h-8
                 cursor-pointer 
                 transform transition-all duration-300 ease-in-out
                 hover:scale-110 hover:-translate-x-2
                 active:scale-90
                 hover:text-[#c98b27]
                 hover:drop-shadow-xl"
          onClick={() => navigate('/')}
          />
          <div className="flex items-center pl-4">
            <span
              className="text-lg font-large "
              style={{ fontFamily: 'Roboto, sans-serif', color: '#004567', fontSize:'16px'  }}
            >
              Global Launch Readiness Dashboard
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          
          <button className="p-2">
            <ArrowBigDownDash className="text-[#c98b27] w-8 h-8
                 cursor-pointer 
                 transform transition-all duration-300 ease-in-out
                 hover:scale-110 hover:-translate-x-2
                 active:scale-90
                 hover:text-[#c98b27]
                 hover:drop-shadow-xl" />
          </button>
          <div className="flex items-center">
            <span
              className="text-lg font-medium mr-4"
              style={{ fontFamily: 'Roboto, sans-serif', color: '#004567',fontSize:'16px' }}
            >
              Download
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderGlobal;
