import { createContext, useContext, useEffect, useState } from "react"

const Detail = createContext();

function CountryDetail({children}) {
    const [select,setSelect] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    const [detail,setDetail] = useState([])

   
    useEffect(function(){
        async function countryDetail(){
            setIsLoading(true)
         try{
              
        if(!select.length) return ;
        

        const req = await fetch(`https://restcountries.com/v3.1/name/${select[0].name.common}`);
        if(!req.ok) throw new Error("Not found");
        const data = await req.json();


         setDetail(data);

         setIsLoading(false); 

         }catch(error){
            console.log(error.message)
         }
       
        }
        countryDetail();
    },[select])

    return <Detail.Provider value={{
        select,
        setSelect,
        detail,
        setDetail,
        isLoading,
    }}>
     {children}
    </Detail.Provider>
}

function useDetail(){
    const data = useContext(Detail);
    if (data==="undefine") throw new Error('You used this context provider outside');

    return data
}

export {CountryDetail,useDetail}