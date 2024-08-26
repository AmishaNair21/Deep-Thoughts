import React, { Children, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing icons from react-icons


const Accordion = ({ title, children,classname}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border ${classname}`}>
      <button
        className="flex gap-3 items-center  w-full py-2 px-4 text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        
        <span className="text-gray-500">
          {isOpen ? <FaChevronUp className='h-3' /> : <FaChevronDown className='h-3'/>}
        </span>
        <span className="text-xs font-medium">{title}</span>
      </button>
      {isOpen && (
        <div className="px-2 bg-white text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};


export default Accordion;
