import React from "react";
import './Home.scss';

import { Map } from './../../components/Map';

export const Home = () => {
    return(
        <>
            <div className="Home">
                <div className="Back" id="Back"></div>
                <div className="Menu"><p>Prueba home</p> </div>
                <Map></Map>
            </div>
        </>
    );
};