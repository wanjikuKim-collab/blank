import React, { useEffect, useState } from 'react'
import styles from './BillBoard.module.css'
// import billboardHeroImage from './assets/Arisu.webp'
import billboardHeroTitle from './assets/Title.webp'
import axios from 'axios';


function BillBoard() {
  const[movie, setMovie] = useState([]);

  useEffect(()=>{
    async function fetchMovieData(){
      const request = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=30d37017426bc7f99dc52b6e58ee8d63&with_networks=213");
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length -1)
        ]
      );
      return request
    }
    fetchMovieData()
  },[])

  console.log(movie)
  const truncate =(string,n)=>{
    return string?.length > n ? string.substr(0,n-1) + '...': string
  }

  return (
    
    <div className={styles.billboard}>      
      <div className={styles.innerContainer}>
        <div className={styles.imageWrapper}>
          {/* BILLBOARD IMAGE*/}
          <img className={styles.heroImage} src= {`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
           alt="..." />
          <div className={styles.billboard__fadeBottom}/>
        </div>
         {/* BILLBOARD DETAILS*/}
        <div className={styles.info} >           
          <img src={billboardHeroTitle} alt="Alice in Boderland" /> 
          <div className={styles.description}>
            {
              truncate(`An aimless gamer and his two friends find themselves in a paralle Tokyo, where they/'re forced to compete in a series of sadistic games to survive.`,150)
            }
            
          </div>

          <div className={styles.buttonLinks}>
            <a className='billboard_btn btn btn-light btn-lg' href='/'> 
            <i className="icon play" />
              <span>Play</span>               
            </a>
            <button className='billboard_btn btn btn-secondary btn-lg'>
            <i className="icon info circle" />
              More Info
              </button>
          </div>          
        </div>     
      </div>     
    </div>
  )
}

export default BillBoard