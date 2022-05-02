import React, { useContext, useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { UserContext } from './../../context/UserContext';
import { useForm } from './../../hooks/useForm';
import './LogIn.scss';
import logo from './../../data/logo.png';

export const LogIn = () => {
    const URL = '/v1/auth/login';

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { setUser, user } = useContext(UserContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [{ username, password }, handleInputChange, reset] = useForm({
        username: '',
        password: '',
    });

    const doLogin = async (event) => {
        event.preventDefault();
        const response = await fetch(URL, {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }).then((resp) => resp.json());
        console.log(response);
        if (response && response.success) {
          setUser({
            name: response.data.username,
            token: response.token
          });
          localStorage.setItem('username', response.data.username);
          localStorage.setItem('token', response.token);
          setIsLoggedIn(true);
        }else if(response && !response.success){
            handleShow();
        };
    };

    const userLocalStorage = localStorage.getItem('username')

    if(userLocalStorage != null){
        setUser({
            name: userLocalStorage,
            token: localStorage.getItem('token')
        });
        return(<Navigate to="/home" />);
    }
    
    if(isLoggedIn){
        return(<Navigate to="/home" />);
    }

    return (<>
        <div className='container login'>
            {!user && (
            <>
                <div className='container-wheels'>
                    <h1 className='title'>Wheels</h1>
                    <img className='logo' src={logo} />
                </div>
                <form onSubmit={doLogin} className='container form'>
                    <h1 id='form-tittle'>Log in</h1>
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
                            Log In
                        </button>
                        <Link to={'/signup'}>Sign up</Link>
                    </div>
                </form>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Incorrect username and/or password</Modal.Body>
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