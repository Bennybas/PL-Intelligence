import React from 'react';
import { ArrowBigLeft, ArrowBigDownDash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeaderExecutive = () => {
const navigate = useNavigate();
  return (
    <div className='px-8'> 
      <header className="bg-white text-gray-600 flex items-center justify-between py-3 border-b border-gray-200 shadow-sm rounded-b-lg mx-auto -mt-2">
        <div className="flex px-4 space-x-4">
          {/* Green Icon */}
          <ArrowBigLeft className="text-green-500 w-10 h-10
                 cursor-pointer 
                 transform transition-all duration-300 ease-in-out
                 hover:scale-110 hover:-translate-x-2
                 active:scale-90
                 hover:text-green-400
                 hover:drop-shadow-xl"
          onClick={() => navigate('/')}
          />
          <div className="flex items-center pl-4">
            <span
              className="text-lg font-large "
              style={{ fontFamily: 'Roboto, sans-serif', color: '#6487e8', fontSize:'19px' }}
            >
              Executive Launch Dashboard
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          
          <button className="p-1">
            <ArrowBigDownDash className="text-green-500 w-8 h-8
                 cursor-pointer 
                 transform transition-all duration-300 ease-in-out
                 hover:scale-110 hover:-translate-x-2
                 active:scale-90
                 hover:text-green-400
                 hover:drop-shadow-xl" />
          </button>
          <div className="flex items-center">
            <span
              className="text-lg font-medium mr-4"
              style={{ fontFamily: 'Roboto, sans-serif', color: '#6487e8' }}
            >
              Download
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderExecutive;
