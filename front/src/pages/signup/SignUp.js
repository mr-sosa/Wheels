import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { UserContext } from './../../context/UserContext';
import { useForm } from './../../hooks/useForm';
import './SignUp.scss';
import logo from './../../data/logo.png';

export const SignUp = () => {
    const URL = '/v1/auth/register';

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { setUser, user } = useContext(UserContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [{ username, email, telephone, address, password }, handleInputChange, reset] = useForm({
        username: '',
        email: '',
        telephone: '',
        address: '',
        password: '',
    });

    const doSignUp = async (event) => {
        event.preventDefault();
        const response = await fetch(URL, {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, telephone, address, password, 'isDriver': false, 'cars': []}),
        }).then((resp) => resp.json());
        console.log(response);
        if (response && response.success) {
          setUser({
            name: response.data.username,
            token: response.token
          });
          setIsLoggedIn(true);
        }else if(response && !response.success){
            handleShow();
        };
    };

    if(isLoggedIn){
        return(<Navigate to="/home" />);
    }

    return (<>
        <div className='container sinup'>
            {!user && (
            <>
                <div className='container-wheels'>
                    <h1 className='title'>Wheels</h1>
                    <img className='logo' src={logo} />
                </div>
                <form onSubmit={doSignUp} className='container form'>
                    <h1 id='form-tittle'>Sign up</h1>
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>
                            Username   
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='username'
                            name='username'
                            aria-describedby='username'
                            value={username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>
                            Email   
                        </label>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            name='email'
                            aria-describedby='email'
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='phone' className='form-label'>
                            Telephone 
                        </label>
                        <input
                            type='tel'
                            className='form-control'
                            id='telephone'
                            name='telephone'
                            aria-describedby='telephone'
                            value={telephone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='address' className='form-label'>
                            Address
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='address'
                            name='address'
                            aria-describedby='address'
                            value={address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>
                            Password   
                        </label>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            name='password'
                            autoComplete='off'
                            value={password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='container buttons'>
                        <button type='submit' className='btn btn-warning'>
                            Sign up
                        </button>
                        <Link to={'/login'}>Log in</Link>
                    </div>
                </form>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>User is already registered</Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Close
                        </Button>             
                    </Modal.Footer>
                </Modal>
            </>)}
        </div>
    </>);
};