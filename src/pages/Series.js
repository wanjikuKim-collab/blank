import React from 'react'
import Row from '../component/MovieList/Row'
import BillBoard from '../component/BillBoard/BillBoard'
import NavBar from '../component/NavBar/NavBar'
import Footer from '../component/Footer/Footer'
import requests from '../helpers/Request';

function Series() {
  return (
    <div>
      <BillBoard />
      <NavBar/>
      <Row title='Top Rated' fetchURL = {requests.fetchTopTvRated}/>
      <Row title='Latest Tv Shows' fetchURL = {requests.fetchTrending}/>
      <Row title='Comedy ' fetchURL = {requests.fetchComedy}/>
      <Row title='Top Rated' fetchURL = {requests.fetchTopRated} isLargeRow/>
      <Row title='Action & Adventure' fetchURL = {requests.fetchAction}/>
      <Row title='Documentaries' fetchURL = {requests.fetchDocumentaries}/> 
      <Row title='Horror' fetchURL = {requests.fetchHorror}/>       
      <Footer />
    </div>
  )
}

export default Series