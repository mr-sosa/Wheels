import React from "react";
import './Home.scss';

import { Map } from './../../components/Map';
import driverNoActive from './../../data/driver-1.png';
import passengerActive from './../../data/passenger-2.png';

export const Home = () => {
    return(
        <>
            <div className="Home">
                <div className="Back" id="Back"></div>
                <div className="Menu">
                    <button className='Menu-Search'><a className='Menu-Search-Text'>¿A donde vas?</a></button>
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
            </div>
        </>
    );
};