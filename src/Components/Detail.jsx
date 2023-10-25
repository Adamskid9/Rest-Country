import styles from './Detail.module.css';

import { useNavigate, useSearchParams } from "react-router-dom";

import Spinner from "./BigSpinner";
import { useEffect, useState } from 'react';
import Footer from './Footer';

function Detail() {
   const [persist,setPersist] = useState();


      const [searrchParams] = useSearchParams();
      const value = JSON.parse(searrchParams.get("name"));
      const navigate = useNavigate();
     
      useEffect(function(){
        async function Api(){
            try{  
        const req = await fetch(`https://restcountries.com/v3.1/name/${value}`);
        if(!req.ok) throw new Error("Not found");
       const data = await req.json();
         
        setPersist(data)

            }catch(e){
               console.log(e.message)
            }
        }
        Api()
      },[value])

if (!persist) return <Spinner/>

const {population,timezones:[zones],subregion,area,status,capital:[capita],flags:{png},region,currencies,independent,name:{common}} = persist[0];


const currency = currencies?.EUR||currencies?.USD||
currencies?.BRL||currencies?.NPR||currencies?.NOK||currencies?.KPW||
currencies?.TRY||currencies?.NGN||currencies?.AED||currencies?.SAR||
currencies?.CAD||currencies?.PHP||currencies?.QAR||currencies?.SGD
||currencies?.SOS||currencies?.TND||currencies?.TTD||currencies?.PLN
||currencies?.AED||currencies?.ZMK||currencies?.ZWD||currencies?.VND
||currencies?.MAD||currencies?.KES||currencies?.IRR||currencies?.ISK
||currencies?.HKD||currencies?.BDT||currencies?.IQD||currencies?.IRR
||currencies?.HUF||currencies?.GYD||currencies?.GIP||currencies?.ETB
||currencies?.DKK||currencies?.CNY||currencies?.KHR||currencies?.BIF
||currencies?.BYR||currencies?.AMD||currencies?.DZD||currencies?.AMD
||currencies?.BAM||"Dollar";



    return (
        <div className={styles.container} >
            <div className={styles.navigateBack} onClick={()=>navigate(-1)}>back</div>

         <section className={styles.section_1}>
            <img className={styles.png} src={png} alt=''/>

            <div className={styles.content_1} >

                <div className={styles.firstDetail}>

                <span className={styles.name}>{common}</span>
                <span>Region:<span className={styles.marginLeft}>{region}</span></span>
                <span>Population:<span className={styles.marginLeft}>{population}</span></span>
                <span>Currency:<span className={styles.marginLeft}>{currency.name?currency.name:currency}</span></span>
                <span>Independent:<span className={styles.marginLeft}>{independent?"true":"false"}</span></span>
                <span>Capital:<span className={styles.marginLeft}>{capita}</span></span>
                {/* <span>Border:<span className={styles.marginLeft}>{borders[0]?borders:"null"}</span></span> */}
               

                </div>

                <div className={styles.secondDetail}>
                <span>Status:<span className={styles.marginLeft}>{status}</span></span>
                <span>Area:<span className={styles.marginLeft}>{area}</span></span>
                <span>Subregion:<span className={styles.marginLeft}>{subregion}</span></span>
                <span>TimeZones:<span className={styles.marginLeft}>{zones}</span></span>
                </div>

            </div>

         </section>

         <section className={styles.section_2}></section>
         <section className={styles.section_3}></section>

         <Footer/>
        </div>
    )   
}

export default Detail;