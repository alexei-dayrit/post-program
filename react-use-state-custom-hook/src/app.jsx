import React from 'react';
import useForm from './use-form';

export default function App() {
  const [values, handleChange] = useForm({ username: '', password: '' });

  return (
    <div>
      <label htmlFor='username'>Username</label>
      <input
        id='username'
        name='username'
        value={values.username}
        onChange={handleChange}
      />
      <div style={{ padding: '0.3rem' }}>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          value={values.password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
