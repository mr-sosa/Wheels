import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import './Detail.scss';

export const Detail = (props) => {
    return (
        <div className="Detail">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Destiny-Label">Destino:</h3>
                    </div>
                    <div className="col">
                        <h3 className="Detail-Destiny-Input">casa</h3>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Hour-Label">Hora de salida:</h3>
                    </div>
                    <div className="col">
                        <h3 className="Detail-Hour-Input">33</h3>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Route-Label">Ruta:</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Route-Input">dasdasd</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Flex-Label">Flexible:</h3>
                    </div>
                    <div className="col">
                        <input className="Detail-Flex-Check" type="checkbox" value="Bike"></input>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                <div className="row">
                    <div className="col">
                        <button className="Detail-Button">Reservar</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="Detail-Exit" onClick={props.onClick}>cancelar</p>
                    </div>
                </div>
            </div>  
        </div>
        </div>
    )
}