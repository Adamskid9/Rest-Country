import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.homeContainer}>
            <Nav/>
          <div className={styles.mainSection} >

            <img className={styles.img} src={"/traveling.jpg"} alt=""/>

            <div className={styles.text}>
                <div className={styles.headText}>How Many Countries Are There In The World?</div>
                <div className={styles.about}>
                If you were to ask ten people how many countries are in the world, you would probably hear ten different answers. Here at Worldatlas.com, we state 195 countries based on the 193 that belong to the United Nations (UN) plus the Holy See (Vatican) and the State of Palestine, which are non-member observer states. Countries span all six populated continents, and although several nations claim Antarctica, no international body legitimizes those efforts. Africa has the highest number of countries with 54, followed by Asia with 48, and Europe with 44. North America has 23 countries, Australia/Oceania has 14, and South America has only 12. However, determining the exact number of countries can be complicated. The Holy See (Vatican), for example, is a sovereign entity that is not considered a country by some but is recognized as an independent state by others. Similarly, international bodies do not always recognize Palestine; currently, it is only recognized by 138 of the 193 United Nations member states, and countries like the United States and Canada do not recognize it. 
                </div>

            </div>
          </div>  

          <Footer/>

        </div>
    )
}

export default Home
