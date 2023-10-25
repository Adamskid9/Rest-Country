import styles from './Currency.module.css'

import { useCurrency } from "../Contexts/CurrencyContext";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Select from "../Components/Select";
import SmallSpinner from "../Components/SmallSpinner"



function Currency() {
const {to,from,setFrom,setTo,setAmount,amount,reqData,isLoading} = useCurrency(); 


    return (
        <div style={{display:"flex",flexDirection:"column"}}>

            <Nav/>

           <div className={styles.currency}>
              { isLoading ? <SmallSpinner/>
              : <div className={styles.value}>Value: {amount?reqData:""}</div>
               }

            <div className={styles.amount_contain}>
                <label>Amount:</label>
                <input type="number" onChange={(e)=>setAmount(e.target.value)}  value={amount} className={styles.amount} placeholder="Amount to convert..."/>
            </div>

            <div className={styles.select_contain}>
              <div className={styles.from}>
              <label>From:</label>
               <Select setValue={setFrom} value={from} />
              </div>

             <div className={styles.to}>
             <label>To:</label>
                <Select setValue={setTo} value={to}/>
             </div>

            </div>
          
         
           </div>

           <Footer/>
        </div>
    )
}

export default Currency
