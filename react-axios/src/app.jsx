import React, { useState } from 'react';
import Axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log('response:', response);
        const data = response.data;
        setUsers(data);
      });
  };

  console.log('users:', users);

  return (
    <>
      <h1>Hello Axios!</h1>
      <button onClick={getUsers}>Make API Request</button>
    </>
  );
}
