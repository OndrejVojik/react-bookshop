import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />

      <MainContent />

      <Footer />
    </div>
  );
}

export default App
