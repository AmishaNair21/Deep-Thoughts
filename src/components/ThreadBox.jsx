import React from 'react'

const ThreadBox = ({title,inp,tit}) => {
  return (
    <div className={`${tit}`}>
    <div className={` bg-gray-100 shadow-lg text-xs border-x-2 border-t-2 rounded-tl-lg rounded-tr-md p-1 `}>
      <h2 className="">{title}</h2>
    </div>
   
      <input
        type="text"
        className={`h-16 shadow-md w-full text-xs p-2 rounded-lg border border-gray-300 ${inp}`}
        placeholder="Enter Text here"
      />
   
  </div>
  
  )
}

export default ThreadBox
