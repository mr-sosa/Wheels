import React, { useContext, useState } from "react";
import './Home.scss';

import { Map } from '../../components/Map/Map';
import { Search } from './../../components/Search/Search';
import { Detail } from "../../components/Detail/Detail";
import { Click } from "../../components/Post/Post";
import driverNoActive from './../../data/driverNoActive.png';
import passengerActive from './../../data/passengerActive.png';
import driverActive from './../../data/driverActive.png';
import passengerNoActive from './../../data/passengerNoActive.png';
import { Link, Navigate } from 'react-router-dom';
import { CrearViaje } from "../crearViaje/CrearViaje";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Home = () => {
    const [showResults, setShowResults] = useState(false)
    const id = null
    const onClick = () => {
        setShowResults(true);
    }

    const [pMode, changeMode] = useState(true)
    console.log(pMode)
    

    const onClick2 = () => setShowResults(false)
    return(
        <>
            <div className="Home">
                <div className="Back" id="Back"></div>
                {pMode?
                    <div className="Menu">
                        <button className='Menu-Search'>{ showResults ? <Detail onClick={onClick2}/> : <Search onClick={onClick}/> }</button>
                        <div className="Menu-Buttons">
                            <div className='Menu-Buttons-Style'>
                                <img src={passengerActive} className='Menu-Buttons-Style-Img' />
                                <a className='Menu-Buttons-Style-Text'>Pasajero</a>
                            </div>
                            <div className='Menu-Buttons-Style'>
                                <img src={driverNoActive} className='Menu-Buttons-Style-Img' />
                                <a onClick={() =>changeMode(false)} className='Menu-Buttons-Style-Text'>Conductor</a>
                            </div>
                        </div>
                    </div>
                 :
                    <div className="Menu">
                        <Popup trigger={<button className='Menu-Search'> Crear Viaje</button>} position="top center">
                            <CrearViaje />
                        </Popup>
                        <button className='Menu-Search' onClick={() =><Navigate to="/crearViaje" />}>Crear Viaje</button>
                        <div className="Menu-Buttons">
                            <div className='Menu-Buttons-Style'>
                                <img src={passengerNoActive} className='Menu-Buttons-Style-Img' />
                                <a onClick={() =>changeMode(true)} className='Menu-Buttons-Style-Text'>Pasajero</a>
                            </div>
                            <div className='Menu-Buttons-Style'>
                                <img src={driverActive} className='Menu-Buttons-Style-Img' />
                                <a  className='Menu-Buttons-Style-Text'>Conductor</a>
                            </div>
                        </div>
                    </div>
                }
                <Map></Map>
            </div>
        </>
    );
};