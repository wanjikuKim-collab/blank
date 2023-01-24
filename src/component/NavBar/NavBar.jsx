import React from 'react'
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
      <div>
        <img src="" alt=""/>      
        <ul>
          {
            navItems.map(item=><li>{item}</li>)
          }
        </ul>
      </div>
      <div>
        
      </div>

    </div>
  )
}

export default NavBar