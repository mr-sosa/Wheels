import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import './Detail.scss';

export const Detail = () => {


    return (
        <div className="Detail">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Destiny-Label">Destino:</h3>
                    </div>
                    <div className="col">
                        <h3 className="Detail-Destiny-Input"></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Hour-Label">Hora de salida:</h3>
                    </div>
                    <div className="col">
                        <h3 className="Detail-Hour-Input"></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Route-Label">Ruta:</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Route-Input"></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Flex-Label">Flexible:</h3>
                    </div>
                    <div className="col">
                        <input className="Detail-Flex-Check" type="checkbox" value="Bike"></input>
                    </div>
                </div>
                <div className="row"></div>
                <div className="row"></div>
            </div>  
        </div>
    )
}