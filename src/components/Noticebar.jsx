import React from 'react'
import cross from "../assets/cross.svg"

const Noticebar = () => {
  return (
    <div className="fixed  shadow-lg border right-0 mt-2 flex flex-col items-end">
    <div className="flex ">
      <h1 className="bg-black w-7 rounded-s-lg items-center text-[0.30rem] space-y-2 p-2 flex flex-col text-white">
        <img src={cross} className='h-6' alt="cross"/>
        <span>N</span>
        <span>O</span>
        <span>T</span>
        <span>I</span>
        <span>C</span>
        <span>E</span>
        <span className="mt-2">B</span>
        <span>O</span>
        <span>A</span>
        <span>R</span>
        <span>D</span>
      </h1>
      <div className=" w-7  bg-white flex items-center justify-center ">
      
      </div>
    </div>
  </div>
  
  
  )
}

export default Noticebar

