import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState('')

  return (
    <div className="app">
      <Header 
      setPage = {setPage}
      page = {page}
      />

      <MainContent 
      page = {page}
      />

      <Footer />
    </div>
  );
}

export default App
