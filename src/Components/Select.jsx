import useCountry from '../Hooks/useCountry';
import styles from './Select.module.css';



function Select({setValue,value}) {
    const {Data} = useCountry();
    

    return (
    <select className={styles.select} onChange={(e)=>setValue(e.target.value)} value={value}>
       {Data.map((value,i)=><option key={i+1} className={styles.option} value={value.CODE}>{value.NAME}</option>)}
    </select>
    )
}

export default Select
