import React, { useEffect,useState } from 'react'
import './Row.css'
import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

const bas_url = "https://image.tmdb.org/t/p/original"

function Row({title,fetchURL, isLargeRow}) {
  const [movies, setMovies]=useState([]);
  //fetch request 
  useEffect(()=>{
    const fetchMovies = async()=>{
      const request = await instance.get(fetchURL)
      setMovies(request.data.results)
      return request
    }
    fetchMovies()
  },[fetchURL])

  //scroll event
  function scrollLeft(){
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  function scrollRight(){
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  console.log(movies)

  return (
    <div className='row'>
      {/* TITLE */}
      <h2>
        {title}
        <span className='doubleRight'>
          <i className="icon angle double right"/>
        </span>
      </h2>
     {/* SLIDER */}
      <div className='slider_items'>
        <div id="slider" className="row_posters">
          <button onClick={scrollLeft} className='handlePrev'>
            <i className="icon angle left"/>
          </button>
          {movies.map(
            (movie)=>((isLargeRow && movie.poster_path)||(!isLargeRow && movie.backdrop_path))&&(
                <img 
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${bas_url}${
                  isLargeRow? movie.poster_path : movie.backdrop_path
                }`} 
                alt={movie.name} />
              )
              )}                
          <button onClick={scrollRight} className='handleNext'>
            <i className="icon angle right"/>
          </button>
        </div> 
      </div>
    </div>
  )
}

export default Row


/*line 32: to prevent dead links from coming in: it checks if its a large movie and the poster card exists
or if its not a large row and if the backdrop_pathis present 
and if the image is present display*/