import { useEffect, useState } from 'react'

export default function CurrencySelection() {

    const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'EUR')
    const [exchangeRate, setExchangeRate] = useState(1)

    const handleSelect = (event) => {
        setCurrency(event.target.value);
    }

    const loadExchangeRate = async () => {
        const response = await fetch(
          "https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rates.php"
        );
        const data = await response.json();

        const exchange_rate = data.find((rate) => {
            return rate.currency === currency;
        });

        setExchangeRate(exchange_rate.rate);
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