import React, { useEffect } from 'react';
import { useForm } from './../../hooks/useForm';
import './CrearViaje.scss';

import { Map } from './../../components/Map';

const url = '/api/auth/login';

export const CrearViaje = () => {
  const [formValues, handleInputChange] = useForm({
    username: '',
    password: ''
  });

  const { username, password } = formValues;

  useEffect(() => {
    console.log('username cambió');
  }, [username]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formValues);
    try {
        let res = await fetch(url, {
          method: "POST",
          headers:{
            "Accept": 'application/json',
            "Content-Type": "application/json"
            },
          body: JSON.stringify(formValues),
        });
        console.log(res)
        let resJson = await res.json();
        console.log(resJson)
        localStorage.setItem("token", resJson.token)
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
  };

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <hr />

        <div className='form-group'>
          <input
            type='text'
            name='username'
            className='form-control'
            placeholder='Tu usuario'
            autoComplete='off'
            value={username}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <input
            type='password'
            name='password'
            className='form-control'
            placeholder='Tu contrasenia'
            autoComplete='off'
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Ingresar
        </button>
      </form>
      <Map></Map>
    </div>
  );
};
