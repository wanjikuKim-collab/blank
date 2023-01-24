import React from 'react'
import styles from './SecondaryNavigation.module.css'
import Search from '../Search/Search'

function SecondaryNAvigation() {
  return (
    <div className={styles.SecNav}>
        <Search />
        {/* <Notification />
        <Profiles /> */}
    </div>
  )
}

export default SecondaryNAvigation