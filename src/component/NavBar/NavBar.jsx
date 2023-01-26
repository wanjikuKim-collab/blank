import React from 'react'
import SecondaryNAvigation from '../SecondaryNavigation/SecondaryNAvigation'
import styles from "./NavBar.module.css"
import { NavLink } from 'react-router-dom'
import logo from './assets/logo.png'

function NavBar() {
  const links = [
   { name:'Home', link:"/"},
   { name:'TV Shows', link:"/series"},
   { name:'Movies', link:"/movies"},
   { name:'New & Popular', link:"/new&popular"},
   { name:'My List', link:"/mylist"},
   { name:'Browse by Languages', link:"/languages"}
  ]

  return (
    <div className={styles.nav}>
      <div className={styles.mainNav}>
        <img className={styles.logo} src={logo} alt="Netflix Logo"/>      
        <ul className={styles.navItems}>
          {
            links.map((link)=>{
              return(<li key={link.name}>
                <NavLink className={styles.Link} to={link.link}>{link.name}</NavLink>
              </li>)
            })
          }       
        </ul>       
      </div>
      <SecondaryNAvigation />
    </div>
  )
}

export default NavBar