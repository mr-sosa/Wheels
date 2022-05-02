import React, {useState, useEffect, useRef} from 'react';
import useCollapse from 'react-collapsed';
import { Post } from '../Post/Post';
import './Search.scss';


function LocationsCollapsible() {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    return (
        <div className="Locations">
            <div className="Locations-Header" {...getToggleProps({ 
                onClick: () => setExpanded((prevExpanded) => !prevExpanded), 
                })}>
                {isExpanded ? 
                <div className="container">
                    <div className="row">
                        <div className="col">
                            Seleccione una opción
                        </div>
                        <div className="col-1">
                        
                        </div>
                        <div className="col">
                            <span className="Locations-Header-Arrow">&#10148;</span>
                        </div>
                    </div>
                </div> : 
                <div className="container">
                    <div className="row">
                        <div className="col">
                            Seleccione una opción
                        </div>
                        <div className="col-1">
                        
                        </div>
                        <div className="col">
                            <span className="Locations-Header-Arrow">&#10148;</span>
                        </div>
                    </div>
                </div>}
            </div>
            <div {...getCollapseProps()}>
                <hr></hr>
                <div className="Locations-Content">
                    <div class="row">
                        <p className="Locations-Content-Text">Muestra localidades</p>
                    </div>               
                </div>
            </div>
        </div>
    )
}

export const Search = (props) => {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    
    const url = "/v1/trips/";
    const [trips, setTrips] = useState([]);

    useEffect(() => {
      fetchTrips();
    }, []);
  
    const fetchTrips = async () => {
      const resp = await fetch(url);
      const data = await resp.json();
  
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
        <div className="Search">
            <div className="Search-Header" {...getToggleProps({ 
                onClick: () => setExpanded((prevExpanded) => !prevExpanded), 
                })}>
                {isExpanded ? "¿A donde vas?" : "¿A donde vas?"}
            </div>
            <div {...getCollapseProps()}>
                <div className="container">
                    <div className="Search-Content">
                        <div className="row">
                            <div className="col">
                                <p className="Search-Content-Text">Localidad:</p>
                            </div>
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col">
                                <LocationsCollapsible></LocationsCollapsible>
                            </div>
                            <div className="col"></div>
                        </div>
                        <div className="row">
                            {trips.map((elm, index) => (
                                <Post onClick={() => {props.onClick();}}
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
            </div>
        </div>
    )
}