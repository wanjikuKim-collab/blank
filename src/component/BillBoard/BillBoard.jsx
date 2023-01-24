import React from 'react'
import styles from './BillBoard.module.css'
import billboardHeroImage from './assets/Arisu.webp'
import billboardHeroTitle from './assets/Title.webp'


function BillBoard() {
  return (
    <div className={styles.billboard}>
      <div className={styles.innerContainer}>
        <img src={billboardHeroImage} alt="Arisu in the middle of Tokyo which has skyscrapers covered in overgrown plants" />
        <div className={styles.info}>
          <img src={billboardHeroTitle} alt="Alice in Boderland" />
        </div>
      </div>
    </div>
  )
}

export default BillBoard