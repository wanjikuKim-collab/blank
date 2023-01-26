import React from "react"
import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer/Footer"
import BillBoard from "../component/BillBoard/BillBoard";
import Row from "../component/MovieList/Row";
import requests from '../helpers/Request';
import './HomeScreen.css'



function HomeScreen() { 
  return (
    <div>
      <BillBoard />
      <NavBar/>
      <div className="titles">
        <Row title='Top Rated' isLargeRow fetchURL = {requests.fetchNowPlaying}/>
        <Row title='Netflix Originals' fetchURL = {requests.fetchNetflixOriginals}/>
        <Row title='Trending Now' fetchURL = {requests.fetchTrending}/>
        <Row title='Comedy ' fetchURL = {requests.fetchComedy}/>   
        <Row title='Action & Adventure' fetchURL = {requests.fetchAction}/>
        <Row title='Documentaries' fetchURL = {requests.fetchDocumentaries}/> 
        <Row title='Horror' fetchURL = {requests.fetchHorror}/>
      </div>
      <Footer />
    </div>
  )
}

export default HomeScreen