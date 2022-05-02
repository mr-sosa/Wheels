import React, { useEffect, useState } from 'react';
import { Post } from '../../components/Post/Post';
import './Historial.scss';

import { Map } from '../../components/Map/Map';

import driverNoActive from './../../data/driverNoActive.png';
import passengerActive from './../../data/passengerActive.png';

export const Historial = () => {
    const [trips, setTrips] = useState([]);
    const url = 'v1/users/mv-garcia/trips';

    useEffect(() => {
      fetchTrips();
    }, []);
  
    const fetchTrips = async () => {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      const trips = data?.trips.map((resp) => {
        return {
            _id : resp._id,
            originAddress : resp.originAddress,
            destinationAddress : resp.destinationAddress,
            originLocality : resp.originLocality,
            destinationLocality : resp.destinationLocality,
            cost : resp.cost,
            quotas : resp.quotas,
            route : resp.route,
            flexible : resp.flexible,
            date : resp.date,
            hour: resp.hour,
        };
      });
      setTrips(trips);
    };

    return (
        <div className="Historial">
            <div className="Back" id="Back"></div>
            
            <div className="Main">
                <div className="Main-Container">
                    <div className="container">
                        <div className="row">
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="Main-Header">Historial de viajes</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            {trips.map((elm, index) => (
                                <Post
                                    key={index}
                                    _id={elm._id}
                                    hour={elm.hour}
                                    route={elm.route}
                                    cost={elm.cost}
                                ></Post>
                            ))}
                        </div>                      
                    </div>  
                </div>
                
                <div className="Main-Buttons">
                    <div className='Main-Buttons-Style'>
                        <img src={passengerActive} className='Main-Buttons-Style-Img' />
                        <a className='Main-Buttons-Style-Text'>Pasajero</a>
                    </div>
                    <div className='Main-Buttons-Style'>
                        <img src={driverNoActive} className='Main-Buttons-Style-Img' />
                        <a className='Main-Buttons-Style-Text'>Conductor</a>
                    </div>
                </div>
            </div>
            
            <Map></Map>
        </div>
    )
}