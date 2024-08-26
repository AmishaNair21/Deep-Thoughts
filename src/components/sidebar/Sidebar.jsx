
import React, { useState } from 'react';
import arrow from '../../assets/arrow.svg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex">
     
      <div
        className={`fixed z-20 rounded-xl left-0 h-80 bg-white shadow-lg text-black transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-[-80%]'} w-64 overflow-hidden`}
      >
        <div className="bg-black flex rounded-t-xl justify-between  items-center p-2">
  
          
          <h2 className="text-xs font-poppins text-white flex-grow ml-2">
            Journey Board
          </h2>
          <div className="ml-auto pr-2">
            <img
              src={arrow}
              alt="arrow"
              className="h-5 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </div>
          {/* Square Cell with Number */}
          {!isOpen && (
          <div className="absolute top-12 right-[-1px] mr-4 h-8 w-8 bg-white text-black border border-black rounded-md flex items-center justify-center">
            1
          </div>
        )}
       {isOpen && (
         <ul className="list-disc pl-6 text-xs ml-4">
         <li className="text-black font-bold">Explore the world of management</li>
         <li className="text-gray-700 mt-3">Technical Project Management</li>
         <li className="text-gray-700">Threadbuild</li>
         <li className="text-gray-700">Structure your pointers</li>
         <li className="text-gray-700">4SA Method</li>
       </ul>
       )}
      </div>


    </div>
  );
};

export default Sidebar;

