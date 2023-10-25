import { createContext, useContext, useState } from "react"

const Searched = createContext();

function SearchContext({children}) {
    const [searchByName,setSearchByName] = useState("");

    console.log(searchByName,"content")

    return <Searched.Provider value={{
        setSearchByName,
        searchByName
    }}>
       {children}
    </Searched.Provider>
}

function useSearch(){
    const Data = useContext(Searched);
    if(Data==="undefined") throw new Error("you have used this context outside of it");

    return Data;
}


export { SearchContext,useSearch }