import React from 'react'
import i from "../../assets/i.svg"

const Cards = ({heading,para,children}) => {
  return (
    <div className='card  h-96  w-80 border  rounded-xl shadow-lg bg-white'>
  <div className="bg-black flex rounded-t-xl justify-center items-center p-2">
  <h2 className="font-sans text-xs text-white flex-grow text-center">
    {heading}
  </h2>
  <div className="ml-auto pr-2">
    <img src={i} alt="information" className="h-3" />
  </div>
</div>

      <div className="description h-14 text-[0.65rem] border  font-sans mt-3">
        <span className='font-medium'>Description: </span><span>{para}</span>
      </div>
    
      <div className="content">
      {children}
      </div>
    </div>
  )
}

export default Cards
