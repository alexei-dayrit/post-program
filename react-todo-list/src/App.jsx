import { useState } from 'react'
import './App.css'

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [inputText, setInputText] = useState('')
  const [allCities, setAllCities] = useState([])


  const addCities = (e) => {
    //Complete function
    e.preventDefault();
    setAllCities((prev) => [...prev, inputText])
  };

  return (
    <div className="app">
      <form onSubmit={addCities}>
        <input
          type="text"
          id="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button>Add</button>
      </form>
      <div>
        <h1>Cities added:</h1>
        <ul>
          {allCities.map((city) => (
            <div key={city} className='list-item'>
              <li >{city}</li>
              <button>X</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
