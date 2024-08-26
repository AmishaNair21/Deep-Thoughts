import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Selection = ({ title, children, classname }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border w-20 h-5 py-1 ${classname}`}>
      <button
        className="flex items-center justify-between w-full px-1 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-[0.57rem] font-semibold">{title}</span>
        <span className="ml-1 text-black">
          {isOpen ? <FaChevronUp className='h-2' /> : <FaChevronDown className='h-2' />}
        </span>
      </button>
      {isOpen && (
        <div className="bg-white text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};

export default Selection;
