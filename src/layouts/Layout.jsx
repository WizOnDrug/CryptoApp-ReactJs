import React from 'react'
import styles from "./Layout.module.css"
function Layout({children}) {
  return <>
    <div className={styles.container}>
    <header className={styles.header}>
        <h1>Crypto App</h1>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed by WiZ On DruG</p>
    </footer>
    </div>
  </>
}

export default Layout