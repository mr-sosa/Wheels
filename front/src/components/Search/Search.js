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

  const divStyle = {
    overflowY: "scroll",
    border: "0px",
    float: "left",
    height: "300px",
    position: "relative",
  };

  // the value of the search field
  const [localidadO, setLocalidadO] = useState("");
  // the search result
  const [foundLoaclidadOrg, setFoundLoaclidadOrg] = useState(trips);

  const filterLocOrg = (event) => {
    const x = event.target.value;
    //var x = document.getElementById("localidadOrigen").value;

    if (x !== "Seleccione una opción...") {
      const results = trips.filter((elm) => {
        return elm.originLocality;
      });
      setFoundLoaclidadOrg(results);
      console.log(foundLoaclidadOrg);
    } else {
      setFoundLoaclidadOrg(trips);
      //If the text field is empty, show all users
      console.log("paila");
    }

    setLocalidadO(x);
  };

  // the value of the search field
  const [localidadD, setLocalidadD] = useState("");
  // the search result
  const [foundLoaclidadDest, setFoundLoaclidadDest] = useState(trips);

  const filterLocDest = (event) => {
    const x = event.target.value;

    if (x !== "") {
      const results = trips.filter((elm) => {
        return elm.originLocality;
      });
      setFoundLoaclidadDest(results);
      console.log(foundLoaclidadDest);
    } else if (x === "Seleccione una opción...") {
      setFoundLoaclidadDest(trips);
    } else {
      setFoundLoaclidadDest(trips);
      //If the text field is empty, show all users
      console.log("paila");
    }

    setLocalidadD(x);
  };

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
                    onChange={filterLocOrg}
                  >
                    <option className="form-option" selected>
                      Seleccione una opción...
                    </option>
                    <option className="form-option">Uniandes</option>
                    <option className="form-option">Suba</option>
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
                    onChange={filterLocDest}
                  >
                    <option className="form-option" selected>
                      Seleccione una opción...
                    </option>
                    <option className="form-option">Uniandes</option>
                    <option className="form-option">Suba</option>
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
            <div style={divStyle} className="row">
              {foundLoaclidadOrg.map((elm, index) => (
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
      </div>
    </div>
  );
};
