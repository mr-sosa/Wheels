import React, { useState } from "react";
import './Home.scss';

import { Map } from '../../components/Map/Map';
import { Search } from './../../components/Search/Search';
import { Detail } from "../../components/Detail/Detail";
import { Click } from "../../components/Post/Post";
import driverNoActive from './../../data/driverNoActive.png';
import passengerActive from './../../data/passengerActive.png';

export const Home = () => {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)
    const onClick2 = () => setShowResults(false)
    return(
        <>
            <div className="Home">
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
            </div>
        </>
    );
};