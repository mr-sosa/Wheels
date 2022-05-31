import React, { useContext } from 'react';
import './Detail.scss';
import passengers from './../../data/user.png';
import { TripContext } from '../../context/TripContext';

export const Detail = (props) => {
    const [detailTrip] = useContext(TripContext);
    /*const url = "/v1/trips/"+id;
    const [trip, setTrip] = useState([]);
    
    const fetchTrip = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
    
        const trip = data?.results.map((resp) => {
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
        setTrip(trip);
    };*/

    return (
        <div className="Detail">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Origin-Label">Salida:</h3>
                    </div>
                    <div className="col">
                        <h3 className="Detail-Origin-Input">{detailTrip.originAddress}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Destiny-Label">Destino:</h3>
                    </div>
                    <div className="col">
                        <h3 className="Detail-Destiny-Input">{detailTrip.destinationAddress}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Hour-Label">Hora de salida:</h3>
                    </div>
                    <div className="col">
                        <h3 className="Detail-Hour-Input">{detailTrip.hour}</h3>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Route-Label">Ruta:</h3>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Route-Input">{detailTrip.route}</h3>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Flex-Label">Flexible:</h3>
                    </div>
                    <div className="col">
                        <input className="Detail-Flex-Check" type="checkbox" checked={detailTrip.flexible} disabled="true"></input>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={passengers} alt="icon" className="Detail-Passengers-Img" />
                    </div>
                    <div className="col">
                        <p className="Detail-Passengers-Input">{detailTrip.quotas} cupos disponibles</p>
                    </div>
                    <div className="col">
                        <p className="Detail-Cost-Input">${detailTrip.cost}</p>
                    </div>
                <div className="row">
                    <div className="col">
                        <button className="Detail-Button">Reservar</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="Detail-Exit" onClick={props.onClick}>volver</p>
                    </div>
                </div>
            </div>  
        </div>
        </div>
    )
}