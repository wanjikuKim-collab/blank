import {useState } from "react"
import NavBar from "../component/NavBar/NavBar";



function HomeScreen() {
  const [isScrolled, setIsScrolled]= useState(false);
  
  window.onscroll=()=>{
    // user at the top of the screen
    setIsScrolled(window.pageYOffset === 0 ? false :true);
    return ()=>(window.onscroll = null)
  }
 
  return (
    <div>
      <NavBar isScrolled ={isScrolled}/>
    </div>
  )
}

export default HomeScreen