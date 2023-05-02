import { useContext, useEffect, useState } from 'react'
import CurrencyContext from './CurrencyContext'
import Context from './Context';

export default function CurrencySelection() {

    const { context: {currency, exchangeRate}, dispatch } = useContext(Context);

    // const {currency, setCurrency} = useContext(CurrencyContext);
    // const {exchangeRate, setExchangeRate} = useContext(CurrencyContext);


    const handleSelect = (event) => {
        // setCurrency(event.target.value);
        dispatch({
          type: 'currency/set',
          payload: event.target.value
        })
    }

    const loadExchangeRate = async () => {
        const response = await fetch(
          "https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rates.php"
        );
        const data = await response.json();

        const exchange_rate = data.find((rate) => {
            return rate.currency === currency;
        });

        // setExchangeRate(exchange_rate.rate);
        dispatch({
          type: "exchangeRate/set",
          payload: exchange_rate.rate
        });
    }

    useEffect(() => {
        console.log('Currency changed: ', currency);

        loadExchangeRate();

        localStorage.setItem('currency', currency)
    }, [currency]);

    return (
      <div className="currency-selection">
        Select currency:
        <select value={currency} onChange={handleSelect}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="CZK">CZK</option>
        </select>

        {
            currency!== 'EUR'
            ? <>Exchange rate: { exchangeRate }</>
            : ''
        }

        
      </div>
    );
}