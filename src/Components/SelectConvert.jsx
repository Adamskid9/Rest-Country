import styles from './SelectConvert.module.css';

import useCountry from '../Hooks/useCountry';



function SelectConvert({setValue,value}) {
    const {Data} = useCountry();
    

    return (
    <select className={styles.select} onChange={(e)=>setValue(e.target.value)} value={value}>
       {Data.map((value,i)=><option key={i+1} className={styles.option} value={value.code}>{value.name}</option>)}
    </select>
    )
}

export default SelectConvert
