import { useState } from 'react'
import './App.css'

export default function App() {
  const [inputText, setInputText] = useState('')
  const [allCities, setAllCities] = useState([])


  const addCities = (e) => {
    e.preventDefault();
    if (!inputText || allCities.includes(inputText)) return;
    setAllCities((prev) => [...prev, inputText])
    setInputText('');
  };

  const handleRemoveCity = (removeCity) => {
    console.log('removeCity:', removeCity)
    console.log('before delete...allCities:', allCities)
    const updatedCities = allCities.filter((city) => {
      console.log('city:', city)
      return city !== removeCity
    });
    console.log('updatedCities:', updatedCities)
    setAllCities(updatedCities);
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
        <button type='submit'>Add</button>
      </form>
      <div>
        <h1>Cities added:</h1>
        <ul>
          {allCities.map((city) => (
              <li key={city}>
                {city} <button onClick={() => handleRemoveCity(city)}>X</button>
              </li>


          ))}
        </ul>
      </div>
    </div>
  );
}
