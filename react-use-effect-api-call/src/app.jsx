import React, { useState, useEffect } from 'react';

export default function App() {
  const [resource, setResource] = useState('users');
  const [listItems, setListItems] = useState([]);

  /*
    - Second arg (array) = if these change then run what's in the function (1st arg)
    - if empty array then works like componentDidMount()
  */

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response => response.json())
      .then(json => {
        setListItems(json);
      });
  }, [resource]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ margin: 0 }}>FETCH..</h1>
      <div>
        <button
          onClick={() => setResource('posts')}
          style={{ padding: '0.5rem', margin: '0.5rem' }}
        >Posts
        </button>
        <button
          onClick={() => setResource('comments')}
          style={{ padding: '0.5rem', margin: '0.5rem' }}
        >Comments
        </button>
        <button
          onClick={() => setResource('users')}
          style={{ padding: '0.5rem', margin: '0.5rem' }}
        >Users
        </button>
      </div>
      <h1>
        Resource = &#39;{resource}&#39;
      </h1>
      {listItems.map(listItem => {
        return (
          <div key={listItem.id}>
            <h3>Test: {listItem.name || listItem.title}</h3>
            {JSON.stringify(listItem)}
          </div>
        );
      })}
    </div>
  );
}
