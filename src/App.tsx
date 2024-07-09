import { useState } from 'react'
import './styles/App.css'
import SearchBar from './components/SearchBar'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <div className='home-background'>
        <SearchBar/>
      </div>
    </>
  )
}

export default App
