import React, { useEffect, useState } from 'react'
import styles from './Row.module.css'
import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

function Row({title,fetchURL}) {
  const [movies, setMovies]=useState([]);

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
    <div className={styles.row}>
      <h2>{title}</h2>
    </div>
  )
}

export default Row