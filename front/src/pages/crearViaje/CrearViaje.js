import React, { useEffect } from 'react';
import { useForm } from './../../hooks/useForm';
import './CrearViaje.scss';

import { Map } from './../../components/Map';

const url = 'v1/users/mv-garcia/trips/';

export const CrearViaje = () => {
  const [formValues, handleInputChange] = useForm({
    username: '',
    password: ''
  });

  const { flexible, localidadO, username, password } = formValues;

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
        <h2>Crear Viaje</h2>
        <hr />
        <div className='form-group'>
          <label htmlFor='localidadO' className='form-label'>
            Localidad Origen:
          </label>
          <select 
            id="localidadO" 
            className="form-control"
            name='Localidad origen'
            value={localidadO}
            >
            <option selected>Seleccione una opción...</option>
            <option>Uniandes</option>
            <option>Barrios Unidos</option>
            <option>Chapinero</option>
            <option>Engativá</option>
            <option>Fontibón</option>
            <option>Puente Aranda</option>
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <div >
            <input
              type='text'
              name='username'
              id='username'
              className='form-control'
              placeholder='Tu usuario'
              autoComplete='off'
              value={username}
              onChange={handleInputChange}
            />
          </div>
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

        <div className='form-group'>
          <label htmlFor='flexible' className='form-label'>
            Flexible
          </label>
          <input
            id='flexible'
            type='checkbox'
            name='flexible'
            className='form-check'
            label = 'Flexible'
            value={flexible}
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
