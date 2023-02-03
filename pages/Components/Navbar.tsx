import React from 'react'
import styles from '../../styles/navbar.module.css'

const Navbar = () => {

  const [navbar_active, setnavbar_active] = React.useState("Home")

  React.useEffect(() => {

    const handleShadow = () => {
      if (window.scrollY === 0) {
        setnavbar_active("Home")
      }
      else if (window.scrollY <= screen.height)
      {
        setnavbar_active("Services")
      }
      else if (window.scrollY <= 2*screen.height)
      {
        setnavbar_active("Aboutus")
      }
      else{
        setnavbar_active("Contactus")
      }

      console.log(screen.height)
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  
  const [shadow, setShadow] = React.useState(false);

  React.useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 20 ) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={shadow ? styles.nav_wrap : styles.nav_wrap_active} >

      <div className={styles.nav_icon_title}>
        <img className={styles.nav_icon} src="/assets/navbar/nav_icon_lab.png" alt="LAB" />
        <div className={styles.nav_title}>Darwin Lab</div>
      </div>

      <ul className={styles.nav_links_wrap} >
        <li  className={navbar_active == "Home" ? styles.nav_links_active : styles.nav_links}>
          <a className={styles.nav_link_text} href='/#'>
            Home
          </a>
        </li>
        <li  className={navbar_active == "Services" ? styles.nav_links_active : styles.nav_links}>
          <a className={styles.nav_link_text} href='/#services'>
            Services
          </a>
        </li>
        <li  className={navbar_active == "Aboutus" ? styles.nav_links_active : styles.nav_links}>
          <a className={styles.nav_link_text} href='/#aboutus'>
            About us
          </a>
        </li>
        <li  className={navbar_active == "Contactus" ? styles.nav_links_active : styles.nav_links}>
          <a className={styles.nav_link_text} href='/#contactus'>Contact us</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar