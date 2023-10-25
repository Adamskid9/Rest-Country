import { createContext, useContext, useEffect, useState } from "react";



const CountriesData = createContext();

function GetCountriesContext({children}) {
    const [countries,setCountries] = useState([]);
    const [isLoading,setIsLoading] = useState(false);




    useEffect(function(){
      
        async function getRestCountries (){
          try{
        setIsLoading(true)
        const req = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
        const data = await req.json();
        setCountries(data)
        setIsLoading(false)
      }
      catch(e){
        console.log(e.message)
      }
    }
      
      getRestCountries();
    },[]);

    return <CountriesData.Provider value={{
        countries,
        setCountries,
        isLoading
    }}>
     {children}
    </CountriesData.Provider>
}

function useCountries(){
    const Data = useContext(CountriesData);
    if (Data==="undefine") throw new Error("You used this context provider outside");

    return Data
}

export {GetCountriesContext,useCountries}
