
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from './../../context/UserContext';
import { Navigate } from 'react-router-dom';

import './Home.scss';

import { Map } from '../../components/Map/Map';
import { Search } from './../../components/Search/Search';
import { Detail } from "../../components/Detail/Detail";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { MenuBtn } from "../../components/MenuBtn/MenuBtn";
import driverNoActive from './../../data/driverNoActive.png';
import passengerActive from './../../data/passengerActive.png';
import driverActive from './../../data/driverActive.png';
import passengerNoActive from './../../data/passengerNoActive.png';

import { CrearViaje } from "../crearViaje/CrearViaje";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Button, Modal } from "react-bootstrap";
import { TripContext } from "../../context/TripContext";

export const Home = () => {
    const [showResults, setShowResults] = useState(false)

    const onClick = (event) => {
        setShowResults(true);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { setUser, user } = useContext(UserContext);

    const [pMode, changeMode] = useState(true)
    

    const onClick2 = () => setShowResults(false)

    useEffect(() => {
        const userLocalStorage = localStorage.getItem('username');

        if(userLocalStorage != null){
            setUser({
                name: userLocalStorage,
                token: localStorage.getItem('token')
            });
        }
    }, [setUser]);

    const [detailTrip, setDetailTrip] = useState("");
    /*function callbackTripDetail(tripId){
        id = tripId
    };*/

    /*function openNav() {
        document.getElementsByClassName("2").style.width = "250px";
        document.getElementsByTagName("Home").style.marginLeft = "0px";
    }
      
      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    /*function closeNav() {
        document.getElementsByClassName("2").style.width = "0";
        document.getElementsByTagName("Home").style.marginLeft = "0";
    }*/

    return(
        <>
            <div className="Home">
                {user && (<>
                    <div className="Back" id="Back"></div>
                    {pMode?
                    <div className="Menu">
                        <TripContext.Provider value={[detailTrip, setDetailTrip]}>
                            <button className='Menu-Search'>{ showResults ? <Detail onClick={onClick2}/> : <Search onClick={onClick}/> }</button>
                        </TripContext.Provider>
                        <div className="Menu-Buttons">
                            <div className='Menu-Buttons-Style'>
                                <img alt='PasajeroIcon' src={passengerActive} className='Menu-Buttons-Style-Img' />
                                <p className='Menu-Buttons-Style-Text'>Pasajero</p>
                            </div>
                            <div className='Menu-Buttons-Style'>
                                <img alt='ConductorIcon' src={driverNoActive} className='Menu-Buttons-Style-Img' />
                                <p onClick={() =>changeMode(false)} className='Menu-Buttons-Style-Text'>Conductor</p>
                            </div>
                        </div>
                    </div>
                 :
                    <div className="Menu">
                        
                        <button className='Menu-Search' onClick={() =>handleShow()}> Crear Viaje</button>
                        <div className="Menu-Buttons">
                            <div className='Menu-Buttons-Style'>
                                <img alt='PasajeroIcon' src={passengerNoActive} className='Menu-Buttons-Style-Img' />
                                <p onClick={() =>changeMode(true)} className='Menu-Buttons-Style-Text'>Pasajero</p>
                            </div>
                            <div className='Menu-Buttons-Style'>
                                <img alt='ConductorIcon' src={driverActive} className='Menu-Buttons-Style-Img' />
                                <p className='Menu-Buttons-Style-Text'>Conductor</p>
                            </div>
                        </div>
                    </div>
                }
                <Map></Map>
                <div id='logout-container'>
                        <button className='btn btn-warning' onClick={() => {
                                                                    localStorage.removeItem('username');
                                                                    localStorage.removeItem('token');
                                                                    setUser(null);}}>
                            Logout
                        </button>
                    </div></>
                )}
                {!user && (<Navigate to="/" />)}
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body><CrearViaje /></Modal.Body>
            </Modal>
        </>
    );
    
};