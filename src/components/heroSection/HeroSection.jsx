import React from 'react'
import Buttons from '../buttons/Buttons'
import Cards from '../cards/Cards'
import ytimg from "../../assets/ytimg.png"
import AccordionExample from '../Accordian/AccordionExample'
import ThreadBox from '../ThreadBox'
import threadicons from "../../assets/threadicons.svg"
import Selection from '../Selection'
import lrarrow from "../../assets/l-r-arrow.svg"
import expand from "../../assets/expand.svg"
import more from "../../assets/more.svg"
const HeroSection = () => {
  return (<div className='flex flex-col w-3/4 mx-auto  justify-center'>
<div className="flex items-center justify-between p-2">
  <h1 className="font-poppins font-bold  text-custom-blue">
    Technical Project Management
  </h1>
  <Buttons classname="text-[0.80rem] p-1" name="Submit task" />
</div>


  <div className='p-2 h-20 text-xs font-poppins bg-slate-400 mt-3' >
    <h2 className='font-semibold'> Explore the world of management</h2>
    <p className='text-[0.65rem]'> As a project manager, you play an important reole in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</p>
  </div>
  <div className="flex flex-wrap justify-center gap-20  mt-4">
<Cards heading="Technical Project" para="Story of Alignment Scope of Agility Specific Accountable Staggering Approach" >
  <img src={ytimg} className='w-full object-cover ' alt="video"/>
</Cards>
<Cards heading="Threadbuild" para="Watch the video and threadbuild, and jot out key threads while watching the video ">
  <AccordionExample classname="w-full bg-yellow-50" title="Thread A" >
  <div className='flex justify-between'>
  <ThreadBox title="Sub thread 1" tit="px-2 mr-2"/>
  <ThreadBox title="Sub interpretation 1"/>
  </div>
  <div className='flex gap-4 justify-center items-center mt-5 ml-16'>
    <img src={threadicons} className="h-3" alt="icon"/>
    <div className='flex gap-2'>
  <Selection title="Select categ"/>
  <Selection title="Select proc"/>

    </div>
  </div>
  <div className='mt-2 mb-2'>
      <Buttons classname="h-6 text-[0.57rem]" name="+ Sub-thread"/>
    </div>
    <ThreadBox title="Summary for Thread A" />
    </AccordionExample>
  </Cards>
<Cards heading="Structure your Pointer" para="Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world " >
  <div>
    <span className='font-bold text-xs ml-2 '>Title</span><br/>
    <input type="text" className='w-72 border ml-4 shadow-lg'/>
  </div>
  <div className="content">
  <span className='font-bold text-xs ml-2 '>Content</span><br/>
  <div className='border w-72 h-48 ml-5 shadow-lg'>
    <nav className='border shadow-md'> 
      <div className=''>
        <ul className='text-custom-gray flex justify-evenly p-3 items-center text-[0.60rem]'>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Insert</li>
          <li>Format</li>
          <li>Tools</li>
          <li>Table</li>
          <li>Help</li>
        </ul>
      </div>
      <div className='flex  justify-evenly  items-center'>
        <img src={lrarrow} className='h-[0.60rem]' alt="left-arrow"/>
        
        <img src={expand} className='h-[0.60rem]' alt="expand"/>
        <p className='text-[0.65rem] w-16 bg-gray-200 text-custom-gray'>Paragraph</p>
        <img src={more} className='h-1' alt="options"/>
      </div>
    </nav>
  </div>
  </div>
</Cards>
 
  <Cards heading="4SA Method" para="To Explore more read more ">
    <AccordionExample classname="w-72 mt-2 bg-gray-100 my-3 ml-2 shadow-md" title="Introduction"><p className='text-gray text-xs ml-5  '>The 4SA Method , How to bring a idea into progress ?</p>
    <a className='text-xs relative left-56'><span>See more</span></a>
    
    </AccordionExample>
    <AccordionExample classname="w-72 mt-2  my-3 ml-2 shadow-md" title="Thread A" ><p className='text-gray text-xs ml-5  '>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
    <a className='text-xs relative left-56'><span>See more</span></a>
    
    </AccordionExample>
 
  </Cards>

</div>




  
  
  </div>
  )
}

export default HeroSection
