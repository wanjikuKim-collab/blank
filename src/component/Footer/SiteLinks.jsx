import React from 'react'
import styles from './SiteLinks.module.css'

function SiteLinks() {
  const footerSiteLinks =[
    "Audio Description",
    "Investor Relations",
    "Legal Notices",
    "Help Center",
    "Jobs",
    "Cookie Preferences",
    "Gift Cards",
    "Terms of Use",
    "Corporate INformation",
    "Media Center",
    "Privacy",
    "Contact Us"
  ]

  return (
    <div>
      <ul className={styles.linksList}>
        {
          footerSiteLinks.map(link=><li key={link} className={styles.link}>{link}</li>)
        }
      </ul>
    </div>
   
  )
}

export default SiteLinks