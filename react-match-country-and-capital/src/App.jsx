import { useState } from 'react'
import './App.css'
import CountryCapitalGame from './CountryCapitalGame'

function App() {
  return (
    <>
      <CountryCapitalGame data={{ Germany: "Berlin", Azerbaijan: "Baku" }} />
    </>
  )
}


export default App
