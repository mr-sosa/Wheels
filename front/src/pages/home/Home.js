import React, { useState, useContext, useEffect } from "react";
import { UserContext } from './../../context/UserContext';
import { Navigate } from 'react-router-dom';
import './Home.scss';

import { Map } from '../../components/Map/Map';
import { Search } from './../../components/Search/Search';
import { Detail } from "../../components/Detail/Detail";
import { Click } from "../../components/Post/Post";
import driverNoActive from './../../data/driverNoActive.png';
import passengerActive from './../../data/passengerActive.png';

export const Home = () => {
    const [showResults, setShowResults] = useState(false)
    const { setUser, user } = useContext(UserContext);
    const id = null
    const onClick = () => {
        setShowResults(true);
    }
    
    const onClick2 = () => setShowResults(false)

    useEffect(() => {
        const userLocalStorage = localStorage.getItem('username');

        if(userLocalStorage != null){
            setUser({
                name: userLocalStorage,
                token: localStorage.getItem('token')
            });
        }
    }, []);

    return(
        <>
            <div className="Home">
                {user && (<>
                    <div className="Back" id="Back"></div>
                    <div className="Menu">
                        <button className='Menu-Search'>{ showResults ? <Detail onClick={onClick2}/> : <Search onClick={onClick}/> }</button>
                        <div className="Menu-Buttons">
                            <div className='Menu-Buttons-Style'>
                                <img src={passengerActive} className='Menu-Buttons-Style-Img' />
                                <a className='Menu-Buttons-Style-Text'>Pasajero</a>
                            </div>
                            <div className='Menu-Buttons-Style'>
                                <img src={driverNoActive} className='Menu-Buttons-Style-Img' />
                                <a className='Menu-Buttons-Style-Text'>Conductor</a>
                            </div>
                        </div>
                    </div>
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
        </>
    );
    
};