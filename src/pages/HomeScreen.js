import React from "react"
import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer/Footer"
import BillBoard from "../component/BillBoard/BillBoard";
import MovieRows from "../component/MovieList/MovieRows";



function HomeScreen() {

 
  return (
    <div>
      <BillBoard />
      <NavBar/>  
      <MovieRows />  
      <Footer />
    </div>
  )
}

export default HomeScreen