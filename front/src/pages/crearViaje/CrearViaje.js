import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './../../context/UserContext';
import { useForm } from './../../hooks/useForm';
import './CrearViaje.scss';

import { Map } from '../../components/Map/Map';
import { Button, Modal } from 'react-bootstrap';
import { Navigate } from 'react-router';

export const CrearViaje = () => {

  const { user } = useContext(UserContext);
  console.log(user)
  //const url = 'v1/users/'+user.username+'/trips';
  const url = 'v1/users/'+user+'/trips';

  const [formValues, handleInputChange] = useForm({
  });

  const [checked, setChecked] = useState(false);

  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  const { flexible, localidadO, localidadD, direccionO, direccionD, cupos, precio, ruta,fecha, hora } = formValues;

  useEffect(() => {
    console.log('flexible cambió');
  }, [flexible]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    formValues.flexible=checked
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

      return(<Navigate to="/home" />);
  };

  return (
    <div className='crearViaje-container'>
      <form className='crearViaje-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='localidadO' className='form-label'>
            Localidad Origen:
          </label>
          <select 
            id="localidadO" 
            className="form-control"
            name='Localidad origen'
            value={localidadO}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
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

        <div className='form-group'>
          <label htmlFor='hora' className='form-label'>
            Hora:
          </label>
          <input
            type='time'
            name='hora'
            className='form-control'
            value={hora}
            onChange={handleInputChange}
          />
        </div>

        <button type='submit' className='btn btn-primary' onClick={() =>handleShow()}>
          Crear
        </button>
      </form>
      <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Viaje creado</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Se creo el viaje exitosamente</Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Close
                        </Button>             
                    </Modal.Footer>
                </Modal>
      {/* <Map></Map> */}
    </div>
    
  );
};
