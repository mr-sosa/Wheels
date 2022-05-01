import React, { useEffect } from 'react';
import { useForm } from './../../hooks/useForm';
import './CrearViaje.scss';

import { Map } from '../../components/Map/Map';

const url = 'v1/users/mv-garcia/trips';

export const CrearViaje = () => {
  const [formValues, handleInputChange] = useForm({
    username: '',
    password: ''
  });

  const { flexible, localidadO, localidadD, direccionO, direccionD, cupos, precio, ruta,fecha } = formValues;

  useEffect(() => {
    console.log('flexible cambió');
  }, [flexible]);

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
        //window.location.reload();
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
          <label htmlFor='localidadD' className='form-label'>
            Localidad Destino:
          </label>
          <select 
            id="localidadD" 
            className="form-control"
            name='Localidad destino'
            value={localidadD}
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
          <label htmlFor='direccionO' className='form-label'>
            Dirección origen:
          </label>
          <input
            type='text'
            name='direccionO'
            id='direccionO'
            className='form-control'
            placeholder='Dirección origen'
            autoComplete='off'
            value={direccionO}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='direccionD' className='form-label'>
            Dirección destino:
          </label>
          <input
            type='text'
            name='direccionD'
            className='form-control'
            placeholder='Dirección destino'
            autoComplete='off'
            value={direccionD}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='precio' className='form-label'>
            Precio:
          </label>
          <input
            type='text'
            name='precio'
            className='form-control'
            placeholder='4000'
            autoComplete='off'
            value={precio}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='cupos' className='form-label'>
            Cupos:
          </label>
          <input
            type='text'
            name='cupos'
            className='form-control'
            placeholder='4'
            autoComplete='off'
            value={cupos}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='ruta' className='form-label'>
            Ruta:
          </label>
          <input
            type='text'
            name='ruta'
            className='form-control'
            placeholder='Ruta'
            autoComplete='off'
            value={ruta}
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

        <div className='form-group'>
          <label htmlFor='fecha' className='form-label'>
            Fecha:
          </label>
          <input
            type='date'
            name='fecha'
            className='form-control'
            value={fecha}
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
