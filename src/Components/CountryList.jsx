import { useCountries } from '../Contexts/GetCountriesContext';
import styles from './CountryList.module.css';
import { useDetail } from '../Contexts/CountryDetail';
import { Link } from 'react-router-dom';

function CountryList({data}) {
    const {countries} = useCountries();
    const {setSelect} = useDetail("");

    
    const {flags,name} = data;
    const {png} = flags;
    const {common} = name;


    function handleClick(){
       setSelect(countries.filter(val=>val.name.common===common));
    }

    return (
        <Link className={styles.link} onClick={handleClick} to={`/detail?name=${JSON.stringify(common)}`}>
        <li className={styles.list} >
            <img className={styles.img} src={png} alt={""}/>
            <span className={styles.side} >
                <span>{common}</span>
            </span>
        </li>
        </Link>
    )
}


export default CountryList
