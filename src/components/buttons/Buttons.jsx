import React from 'react'

const Buttons = ({name,classname}) => {
  return (
<div>
  <button
    type="button"
    className={`flex items-center justify-center text-white  bg-custom-blue rounded-lg  text-center px-2 outline-none ${classname}`}
  >
    {name}
  </button>
</div>

  )
}

export default Buttons
