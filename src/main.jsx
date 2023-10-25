import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GetCountriesContext } from './Contexts/GetCountriesContext.jsx'
import { CountryDetail } from './Contexts/CountryDetail.jsx'
import { SearchContext } from './Contexts/SearchContext.jsx'
import { CurrencyContext } from './Contexts/CurrencyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchContext>
    <GetCountriesContext>
      <CountryDetail>
        <CurrencyContext>
         <App />
      </CurrencyContext>
      </CountryDetail>
    </GetCountriesContext>
    </SearchContext>
  </React.StrictMode>
);