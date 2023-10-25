import { createContext, useContext, useEffect, useState } from "react"

const Currency = createContext()


function CurrencyContext({children}) {
const [to,setTo] = useState("USD");
const [from,setFrom] = useState("USD");
const [amount,setAmount] = useState("");

const [isLoading,setIsLoading] = useState(false);
const [reqData,setReqData] = useState(0);


      useEffect(function(){
      
      const controller = new AbortController();
      
      
      const requestData = async function (){
        
       try{
   
        if(!amount) return;
        setIsLoading(true);

        const req = await fetch(`https://api.frankfurter.app/latest?amount=${Number(amount)}&from=${from}&to=${to}`,
        {signal:controller.signal});

        if (!req.ok) throw new Error ("this is not found");
        const data= await req.json()


        setReqData(data.rates[to]);
        setIsLoading(false)
        
       }catch(e){
         console.log(e.message);
       }
      }
  
      if (from===to){setReqData(amount); setIsLoading(false)};
      requestData();
  
  return function(){
    controller.abort();}
    
    
},[amount,to,from])

    return (
        <Currency.Provider value={{
          to,
          from,
          setTo,
          setFrom,
          amount,
          setAmount,
          reqData,
          isLoading
        }}>
            {children}
        </Currency.Provider>
    )
}

function useCurrency(){
    const Data = useContext(Currency);

    if(Data==="undefined") throw new Error("this context was use outside of it");

    return Data
};

export { CurrencyContext,useCurrency}
