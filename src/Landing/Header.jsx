import React from 'react';
import { FcBusinessman } from 'react-icons/fc';

const Header = () => {
  return (
    <div className="bg-gray-50">
      <header className="bg-white text-gray-600 flex items-center justify-between px-6 py-3 border-b border-gray-200 shadow-md">
        {/* Logo Section */}
        <img
          src="/chryselys.png"
          alt="Logo"
          className="h-16 w-auto"
        />

        {/* Right Side Section with User Info */}
        <div className="flex items-center space-x-4">
          <div className='flex items-center'>
            <span className="text-lg font-light">Hello,</span>
            <span className="text-lg font-medium ml-1">Benny</span>
          </div>

          <button className="p-1 bg-gray-200 rounded-full">
            <FcBusinessman className="text-5xl" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
