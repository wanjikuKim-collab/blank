import React from 'react'
import styles from './BillBoard.module.css'
import billboardHeroImage from './assets/Arisu.webp'
import billboardHeroTitle from './assets/Title.webp'


function BillBoard() {

  const truncate =(string,n)=>{
    return string?.length > n ? string.substr(0,n-1) + '...': string
  }

  return (
    
    <div className={styles.billboard}>      
      <div className={styles.innerContainer}>
        <div className={styles.imageWrapper}>
          {/* BILLBOARD IMAGE*/}
          <img className={styles.heroImage} src={billboardHeroImage} alt="Arisu in the middle of Tokyo which has skyscrapers covered in overgrown plants" />
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