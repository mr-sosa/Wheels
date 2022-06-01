import React, { useState, useEffect, useContext } from "react";
import useCollapse from "react-collapsed";
import { TripContext } from "../../context/TripContext";
import { Post } from "../Post/Post";
import "./Search.scss";
import { useForm } from "../../hooks/useForm";

export const Search = (props) => {
  const [detailTrip, setDetailTrip] = useContext(TripContext);

  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const url = "/v1/trips/";
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (JSON.parse(localStorage.getItem("trips")) === null) {
        console.log("nada :c");
      } else {
        setTrips(JSON.parse(localStorage.getItem("trips")));
      }
    } else {
      fetchTrips();
    }
  }, []);

  const fetchTrips = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(resp);
    const trips = data?.trips.map((resp) => {
      return {
        _id: resp._id,
        originAddress: resp.originAddress,
        destinationAddress: resp.destinationAddress,
        originLocality: resp.originLocality,
        destinationLocality: resp.destinationLocality,
        cost: resp.cost,
        quotas: resp.quotas,
        route: resp.route,
        flexible: resp.flexible,
        date: resp.date,
        hour: resp.hour,
      };
    });
    setTrips(trips);
    localStorage.setItem("trips", JSON.stringify(trips));
  };

  function onClick(pId) {
    props.onClick();
    setDetailTrip(pId);
    console.log(detailTrip);
  }

  const [formValues, handleInputChange] = useForm({});

  const { localidadO, localidadD } = formValues;

  return (
    <div className="Search">
      <div
        className="Search-Header"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? "¿A donde vas?" : "¿A donde vas?"}
      </div>
      <div {...getCollapseProps()}>
        <div className="container">
          <div className="Search-Content">
            <div className="row">
              <div className="col">
                <p className="Search-Content-Text">Localidad Origen:</p>
              </div>
              <div className="col">
                <div className="form-group">
                  <select
                    id="localidadOrigen"
                    className="form-control"
                    name="Localidad Origen"
                    value={localidadO}
                    onChange={handleInputChange}
                  >
                    <option className="form-option" selected>
                      Seleccione una opción...
                    </option>
                    <option className="form-option">Uniandes</option>
                    <option className="form-option">Barrios Unidos</option>
                    <option className="form-option">Chapinero</option>
                    <option className="form-option">Engativá</option>
                    <option className="form-option">Fontibón</option>
                    <option className="form-option">Puente Aranda</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <p>{localidadO}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="Search-Content-Text">Localidad Destino:</p>
              </div>
              <div className="col">
                <div className="form-group">
                  <select
                    id="localidadDestino"
                    className="form-control"
                    name="Localidad Destino"
                    value={localidadD}
                    onChange={handleInputChange}
                  >
                    <option className="form-option" selected>
                      Seleccione una opción...
                    </option>
                    <option className="form-option">Uniandes</option>
                    <option className="form-option">Barrios Unidos</option>
                    <option className="form-option">Chapinero</option>
                    <option className="form-option">Engativá</option>
                    <option className="form-option">Fontibón</option>
                    <option className="form-option">Puente Aranda</option>
                  </select>
                </div>
              </div>
              <div className="col"></div>
            </div>
            <div className="row">
              {trips.map((elm, index) => (
                <Post
                  onClick={() => {
                    onClick(elm);
                  }}
                  key={index}
                  hour={elm.hour}
                  route={elm.route}
                  cost={elm.cost}
                ></Post>
              ))}
            </div>
          </div>
        </div>
<<<<<<< HEAD
      );
}
=======
      </div>
    </div>
  );
};
>>>>>>> c9b3a621c3da01ad92f1377d0217c77c5bb09049
