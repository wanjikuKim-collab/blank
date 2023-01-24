import React from 'react'
import SecondaryNAvigation from '../SecondaryNavigation/SecondaryNAvigation'
import styles from "./NavBar.module.css"

function NavBar() {
  const navItems = [
    'Home',
    'TV Shows',
    'Movies',
    'New & Popular',
    'My List',
    'Browse by Languages'

  ]
  return (
    <div className={styles.nav}>
      <div className={styles.mainNav}>
        <img className={styles.logo} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo"/>      
        <ul className={styles.navItems}>
          {
            navItems.map(item=><li key={item}>{item}</li>)
          }
        </ul>       
      </div>
      <SecondaryNAvigation />
    </div>
  )
}

export default NavBar