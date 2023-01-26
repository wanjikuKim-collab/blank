import React from "react"
import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer/Footer"
import BillBoard from "../component/BillBoard/BillBoard";
import Row from "../component/MovieList/Row";
import requests from '../helpers/Request';



function HomeScreen() { 
  return (
    <div>
      <BillBoard />
      <NavBar/>
      <Row title='Netflix Originals' fetchURL = {requests.fetchNetflixOriginals}/>
      <Row title='Trending Now' fetchURL = {requests.fetchTrending}/>
      <Row title='Comedy ' fetchURL = {requests.fetchComedyMovies}/>
      <Row title='Top Rated' fetchURL = {requests.fetchTopRated} isLargeRow/>
      <Row title='Action & Adventure' fetchURL = {requests.fetchActionMovies}/>
      <Row title='Documentaries' fetchURL = {requests.fetchDocumentaries}/>   
      
      <Footer />
    </div>
  )
}

export default HomeScreen