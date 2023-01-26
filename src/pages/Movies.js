import React from "react"
import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer/Footer"
import BillBoard from "../component/BillBoard/BillBoard";
import Row from "../component/MovieList/Row";
import requests from '../helpers/Request';

function Movies() {
  return (
    <div>
      <BillBoard />
      <NavBar/>      
      <Row title='Now Playing' fetchURL = {requests.fetchNetflixOriginals}/>
      <Row title='Popular Movies' fetchURL = {requests.fetchPopularMovies}/>
      <Row title='Latest Movies' fetchURL = {requests.fetchNetflixOriginals}/>   
      <Footer />
    </div>
  )
}

export default Movies