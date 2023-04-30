import { useState } from 'react'
import './Header.scss'
import TopMenu from './TopMenu'
import CurrencySelection from './CurrencySelection'

export default function Header({setPage, page}){

    const [testValue, setTestValue] = useState( null );

    return (
    <header className="header">
      <div className="header__sitename">Flourish and Blotts</div>


    <CurrencySelection/>
    
    <TopMenu 
    currentItem = { page }
    setTestValue = { setTestValue }
    setPage = { setPage }
    />
    </header>
    )
}