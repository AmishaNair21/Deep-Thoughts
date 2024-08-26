import React from 'react'
import logo from "../../assets/deeplogo.png"
import homeicon from "../../assets/homeicon.svg"
import alarm from "../../assets/alarm.svg"
import profile from "../../assets/profiles.svg"
import options from "../../assets/options.svg"
import settings from "../../assets/settings.svg"
const Navbar = () => {
  return (
  
  <nav className=' flex h-90 w-full justify-between items-center shadow-lg px-4'>
  <div>
    <a>
      <img className=' h-7 cursor-pointer ml-7' src={logo} alt="logo"/>
    </a>
  </div>
  <div className="flex-grow flex justify-end">
    <ul className='flex gap-3 list-none p-2'>
      <li><a href='#'><img className='w-30 h-7 cursor-pointer' src={homeicon} alt="home"/></a></li>
      <li><a href='#'><img className='w-30 h-7 cursor-pointer' src={settings} alt="settings"/></a></li>
      <li><a href='#'> <img className='w-30 h-7 cursor-pointer' src={alarm} alt="alarm"/></a></li>
      <li><a href='#'><img className='w-30 h-7 cursor-pointer' src={profile} alt="profile"/></a></li>
      <li><a href='#'><img className='w-30 h-7.5 py-1 px-1 cursor-pointer' src={options} alt="options"/></a></li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar
