import { useCountries } from "../Contexts/GetCountriesContext";
import CountryList from "./CountryList";

import styles from './CountryItem.module.css'
import { useSearch } from "../Contexts/SearchContext";
import Spinner from "./BigSpinner";
import Footer from "./Footer";


function CountryItem({children}) {
    const {countries,isLoading}= useCountries();
    const {searchByName} = useSearch()
  
    const searchCountries = countries.filter(country=>country.name.common.toLowerCase().includes(searchByName));
   
    const Data = searchCountries.length?searchCountries:countries;

    if(isLoading) return <Spinner/>

    return <div className={styles.country} >
           
           {children}

     <ul className={styles.item}>
         {Data.map((country,i)=> <CountryList key={i} data={country} />)}
    </ul>
    <Footer/>
    </div>
}

export default CountryItem;
