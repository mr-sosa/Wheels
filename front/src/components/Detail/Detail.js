import React from 'react';
import './Detail.scss';
import passengers from './../../data/user.png';

export const Detail = (props) => {
    /*const { id } = props;
    const url = "/v1/trips/"+id;
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
                        <h3 className="Detail-Destiny-Label">Destino:</h3>
                    </div>
                    <div className="col">
                        <h3 className="Detail-Destiny-Input">C.C. Gran Estación</h3>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Hour-Label">Hora de salida:</h3>
                    </div>
                    <div className="col">
                        <h3 className="Detail-Hour-Input">06:00 am</h3>
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
                        <h3 className="Detail-Route-Input">Av. Dorado - Av. Las Americas - Av. Esperanza</h3>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="Detail-Flex-Label">Flexible:</h3>
                    </div>
                    <div className="col">
                        <input className="Detail-Flex-Check" type="checkbox" value="Bike" disabled="true"></input>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={passengers} alt="icon" className="Detail-Passengers-Img" />
                    </div>
                    <div className="col">
                        <p className="Detail-Passengers-Input">2 cupos disponibles</p>
                    </div>
                    <div className="col">
                        <p className="Detail-Cost-Input">$3.000</p>
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