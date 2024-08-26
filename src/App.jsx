
import HeroSection from "./components/heroSection/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import question from "./assets/question.svg"
import meeting from "./assets/calendar.svg"
import Noticebar from "./components/Noticebar"


function App() {
 

  return (
    <>
    <Navbar/>
    <div className="">  
<Sidebar/>
    </div>
    <Noticebar/>
   
    <div className="hero">
      <HeroSection/>
    </div>
    <div className=" fixed  bottom-0 right-0 flex flex-col space-y-3">
      <a href=""><img className="w-8" src={question} alt="doubt"/></a>
      <a href=""><img src={meeting}  className="w-8" alt="meeting"/></a>
      <a href=""><img src={question} className="w-8" alt="calendar"/></a>
    </div>
    
    </>
  )
}

export default App
