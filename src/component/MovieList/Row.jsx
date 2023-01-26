import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Row.module.css'

function Row({title,fetchUrl}) {
  const [movie, setMovies]=useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results)
      return request;
    }

    fetchData()
  },[fetchUrl])

  console.log(movie)
  return (
    <div className={styles.row}>
      <h2>{title}</h2>
    </div>
  )
}

export default Row