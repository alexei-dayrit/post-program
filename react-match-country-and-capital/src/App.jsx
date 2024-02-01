import { useState } from 'react'
import './App.css'

// sample data = {{ Germany: "Berlin", Azerbaijan: "Baku" }}

// destructuring data to make it simpler to work with
function CountryCapitalGame({ data }) {
  const countries = Object.keys(data)
  const capitals = Object.values(data);
  // randomize button order
  const [options, setOptions] = useState(
    [...countries, ...capitals].sort(() => Math.random() - 0.5).map((value) => ({ value, state: 'DEFAULT' }))
  )
  console.log('options:', options)

  function handleButtonClick(clickedOption) {

    setOptions(
      options.map((option) => {
        return option === clickedOption ? { ...option, state: "SELECTED" } : option;
      })
    )
  }

  // using map to remove repetitive code
  return (<>
    <div>
      {options.map((option) => {
        console.log('option in render map:', option);
        return (
          <button
            onClick={() => handleButtonClick(option)}
            key={option.value}
            className={option.state === 'SELECTED' ? 'selected' : '' }
          >
            {option.value}
          </button>
        );
      })}
    </div>


  </>);
}


function App() {
  return (
    <>
      <CountryCapitalGame data={{ Germany: "Berlin", Azerbaijan: "Baku" }} />
    </>
  )
}


export default App
