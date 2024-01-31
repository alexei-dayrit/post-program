import { useState } from 'react'
import './App.css'

// sample data = {{ Germany: "Berlin", Azerbaijan: "Baku" }}

// destructuring data to make it simpler to work with
function CountryCapitalGame({ data }) {
  const [buttonColorMap, setButtonColorMap] = useState({})

  const countries = Object.keys(data)
  const capitals = Object.values(data);
  const options = [...countries, ...capitals]
  // randomize button order
  const randomizedOptions = options.sort(() => Math.random() - 0.5)

  function handleButtonClick(option) {

    setButtonColorMap({
      ...buttonColorMap,
      [option]: 'blue'
    })
  }

  // using map to remove repetitive code
  return (<>
    {/* <div>{JSON.stringify(pairs)}</div> */}
    <div>
      {randomizedOptions.map((option) => (
        <button
          onClick={() => handleButtonClick(option)}
          key={option}
          style={{backgroundColor: buttonColorMap[option] === 'blue' ? 'blue' : ''}}
        >
          {option}
        </button>


      ))}
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
