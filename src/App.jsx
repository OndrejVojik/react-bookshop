import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
import CurrencyContext from './CurrencyContext'
import Context from './Context'
import reducer from './reducer'

function App() {
  // const [count, setCount] = useState(0)
  const [page, setPage] = useState('')
  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'EUR');
  const [exchangeRate, setExchangeRate] = useState(1);

  const initialContextValue = {
    user: null,
    theme: "dark",
    language: "en",
    currency: "USD",
    exchangeRate: 1,
    authHash: null,
    shoppingCart: [],
    // ...
  };

  const [contextValue, setContextValue] = useReducer(reducer, initialContextValue);



  return (
    
    <Context.Provider value= {{
    context: contextValue,
    dispatch: setContextValue
}}>
    <CurrencyContext.Provider value= {{currency,setCurrency, exchangeRate, setExchangeRate}}>
      <div className="app">
        <Header setPage={setPage} page={page} />

        <MainContent page={page} />

        <Footer />
      </div>
    </CurrencyContext.Provider>
    </Context.Provider>
  );
}

export default App
