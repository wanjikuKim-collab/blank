import React, { useEffect, useState } from 'react'
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

  console.log(movies)

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map(movie=>{

          /*to prevent dead links from coming in: it checks if its a large movie and the poster card exists
          or if its not a large row and if the backdrop_pathis present 
          and if the image is present display*/

          return(
            (isLargeRow && movie.poster_path)|| (!isLargeRow && movie.backdrop_path &&(
              <img 
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              key={movie.id}
              src={`${bas_url}${
                isLargeRow? movie.poster_path : movie.backdrop_path
              }`} 
              alt={movie.name} />
            ))
        )
        })}
      </div>
    </div>
  )
}

export default Row