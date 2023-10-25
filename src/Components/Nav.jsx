import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'
import Logo from './Logo'


function Nav() {
    return (
        <div className={styles.navContainer}>
    
        <div className={styles.navLogo}>
            <Logo/>
            {/* <img src={"/Globel.jpg"} styl   e={{height:"50px"}} alt=''/> */}
        </div>
  
        <ul className={styles.ul} >
            <NavLink to={"/"} className={styles.nav}>
                <li>Home</li>
            </NavLink>

            <NavLink to={"/countries"} className={styles.nav}>
                <li>Countries</li>
            </NavLink>

            <NavLink to={"/currency"} className={styles.nav}>
                <li>Convert</li>
            </NavLink>
             
            {/* <NavLink className={styles.nav}>
                <li>About</li>
            </NavLink> */}
        </ul>
        
        </div>
    )
}

export default Nav
