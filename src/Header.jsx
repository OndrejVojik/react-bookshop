import { useState } from 'react'
import './Header.scss'
import TopMenu from './TopMenu'

export default function Header({setPage, page}){

    const [testValue, setTestValue] = useState( null );

    return (
    <header className="header">
      <div className="header__sitename">Flourish and Blotts</div>

      <div>
        Last menu item clicked: { testValue }
      </div>
    
    <TopMenu 
    currentItem = { page }
    setTestValue = { setTestValue }
    setPage = { setPage }
    />
    </header>
    )
}