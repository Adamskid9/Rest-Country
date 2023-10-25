import { BrowserRouter, Route, Routes } from "react-router-dom";

// import CountryItem from "./Components/CountryItem"
// import Detail from "./Components/Detail"
// import ErrorPage from "./Pages/ErrorPage";
// import Currency from "./Pages/Currency";
// import Home from "./Pages/Home";

import { Suspense, lazy } from "react";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import Spinner from "./Components/Spinner";


const Home = lazy(()=>import("./Pages/Home"));
const Currency = lazy(()=>import("./Pages/Currency"));
const Detail = lazy(()=>import("./Components/Detail"));
const CountryItem = lazy(()=>import("./Components/CountryItem"));
const ErrorPage= lazy(()=>import("./Pages/ErrorPage"));


function App() {
 return <div>

    <BrowserRouter>
    <Suspense fallback={<Spinner/>}>
    <Routes>
        <Route index  element={<Home/>}/>
        <Route path="countries" element={<CountryItem>
            <Nav/>
           <Search/>
        </CountryItem>} />
        <Route path="detail" element={<Detail/>} />
        <Route path="currency" element={<Currency/>}/>
        <Route path="*" element={<ErrorPage/>} />
    </Routes>
    </Suspense>
    </BrowserRouter>
 </div>
}

export default App

