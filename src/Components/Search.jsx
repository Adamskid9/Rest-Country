import styles from "./Search.module.css"

import { memo, useState } from "react";
import { useSearch } from "../Contexts/SearchContext";


function Search() {

    const [search,setSearch] = useState();
    const {setSearchByName} = useSearch()

    
    setSearchByName(search);

    return (
        <div className={styles.container} >
            <input type="text" placeholder="Search country by name..." onChange={(e)=>setSearch(e.target.value)} className={styles.value}/>
        </div>
    )
}

export default memo(Search);