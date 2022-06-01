import React, { useState, useContext, useEffect } from "react";
<<<<<<< HEAD
import { UserContext } from "./../../context/UserContext";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
=======
import { UserContext } from './../../context/UserContext';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
>>>>>>> master

import "./Home.scss";

import { Map } from "../../components/Map/Map";
import { Search } from "./../../components/Search/Search";
import { Detail } from "../../components/Detail/Detail";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { MenuBtn } from "../../components/MenuBtn/MenuBtn";
import driverNoActive from "./../../data/driverNoActive.png";
import passengerActive from "./../../data/passengerActive.png";
import driverActive from "./../../data/driverActive.png";
import passengerNoActive from "./../../data/passengerNoActive.png";
import { Footer } from "../../components/Footer/Footer";

import { CrearViaje } from "../crearViaje/CrearViaje";
import 'reactjs-popup/dist/index.css';
import { Button, Collapse, Modal } from "react-bootstrap";
import { TripContext } from "../../context/TripContext";

export const Home = () => {
<<<<<<< HEAD
  const { user, isAuthenticated, logout } = useAuth0();
  const [showResults, setShowResults] = useState(false);
=======

  const [showResults, setShowResults] = useState(false);
  var id = "";
    const {user, isAuthenticated, logout} = useAuth0();
>>>>>>> master

  const onClick = (event) => {
    setShowResults(true);
  };

  //const { setUser, user } = useContext(UserContext);

  const [pMode, changeMode] = useState(true);
<<<<<<< HEAD
=======
    

>>>>>>> master

  const onClick2 = () => setShowResults(false);

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("username");
<<<<<<< HEAD

    if (userLocalStorage != null) {
      //setUser({
      //    name: userLocalStorage,
      //    token: localStorage.getItem('token')
      //});
    }
    // }, [setUser]
  });
=======
        if(userLocalStorage != null){
            //setUser({
            //    name: userLocalStorage,
            //    token: localStorage.getItem('token')
            //});
        }
    // }, [setUser]
    });
>>>>>>> master

  const [detailTrip, setDetailTrip] = useState("");
  /*function callbackTripDetail(tripId){
        id = tripId
    };*/

  /*function openNav() {
        document.getElementsByClassName("2").style.width = "250px";
        document.getElementsByTagName("Home").style.marginLeft = "0px";
    }
      
      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  /*function closeNav() {
        document.getElementsByClassName("2").style.width = "0";
        document.getElementsByTagName("Home").style.marginLeft = "0";
    }*/
<<<<<<< HEAD
  return (
    <>
      <div className="Home">
        {user && isAuthenticated && (
          <>
            <div className="Back" id="Back"></div>
            {pMode ? (
              <div className="Menu">
                <TripContext.Provider value={[detailTrip, setDetailTrip]}>
                  <button className="Menu-Search">
                    {showResults ? (
                      <Detail onClick={onClick2} />
                    ) : (
                      <Search onClick={onClick} />
                    )}
                  </button>
                </TripContext.Provider>
                <div className="Menu-Buttons">
                  <div className="Menu-Buttons-Style">
                    <img
                      alt="PasajeroIcon"
                      src={passengerActive}
                      className="Menu-Buttons-Style-Img"
                    />
                    <p className="Menu-Buttons-Style-Text">Pasajero</p>
                  </div>
                  <div className="Menu-Buttons-Style">
                    <img
                      alt="ConductorIcon"
                      src={driverNoActive}
                      className="Menu-Buttons-Style-Img"
                    />
                    <p
                      onClick={() => changeMode(false)}
                      className="Menu-Buttons-Style-Text"
                    >
                      Conductor
                    </p>
                  </div>
                </div>
                <Footer></Footer>
              </div>
            ) : (
              <div className="Menu">
                <Popup
                  trigger={
                    <button className="Menu-Search"> Crear Viaje</button>
                  }
                  position="top center"
                >
                  <CrearViaje />
                </Popup>
                <div className="Menu-Buttons">
                  <div className="Menu-Buttons-Style">
                    <img
                      alt="PasajeroIcon"
                      src={passengerNoActive}
                      className="Menu-Buttons-Style-Img"
                    />
                    <p
                      onClick={() => changeMode(true)}
                      className="Menu-Buttons-Style-Text"
                    >
                      Pasajero
                    </p>
                  </div>
                  <div className="Menu-Buttons-Style">
                    <img
                      alt="ConductorIcon"
                      src={driverActive}
                      className="Menu-Buttons-Style-Img"
                    />
                    <p className="Menu-Buttons-Style-Text">Conductor</p>
                  </div>
                </div>
                <Footer></Footer>
              </div>
            )}
            <Map></Map>
            <div id="logout-container">
              <button
                className="btn btn-warning"
                onClick={() => {
                  logout({ returnTo: "http://localhost:3001/" });
                  //localStorage.removeItem('username');
                  //localStorage.removeItem('token');
                  //setUser(null);
                }}
              >
                Logout
              </button>
            </div>
          </>
        )}
        {!user && !isAuthenticated && <Navigate to="/" />}
      </div>
    </>
=======

    const [open, setOpen] = useState(false);
    return(
        <>
            <div className="Home">
                {user && isAuthenticated &&(<>
                    <div className="Back" id="Back"></div>
                    {pMode?
                    <div className="Menu">
                        <TripContext.Provider value={[detailTrip, setDetailTrip]}>
                            <button className='Menu-Search'>{ showResults ? <Detail onClick={onClick2}/> : <Search onClick={onClick}/> }</button>
                        </TripContext.Provider>
                        <div className="Menu-Buttons">
                            <div className='Menu-Buttons-Style'>
                                <img alt='PasajeroIcon' src={passengerActive} className='Menu-Buttons-Style-Img' />
                                <p className='Menu-Buttons-Style-Text'>Pasajero</p>
                            </div>
                            <div className='Menu-Buttons-Style'>
                                <img alt='ConductorIcon' src={driverNoActive} className='Menu-Buttons-Style-Img' />
                                <p onClick={() =>changeMode(false)} className='Menu-Buttons-Style-Text'>Conductor</p>
                            </div>
                        </div>
                    </div>
                 :
                    <div className="Menu">
                        <Button className='Menu-Search'
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            Crear Viaje
                        </Button>
                        <Collapse in={open}>
                            <div className='Menu-Search'><CrearViaje></CrearViaje></div>
                        </Collapse>
                        <div className="Menu-Buttons">
                            <div className='Menu-Buttons-Style'>
                                <img alt='PasajeroIcon' src={passengerNoActive} className='Menu-Buttons-Style-Img' />
                                <p onClick={() =>{changeMode(true)}} className='Menu-Buttons-Style-Text'>Pasajero</p>
                            </div>
                            <div className='Menu-Buttons-Style'>
                                <img alt='ConductorIcon' src={driverActive} className='Menu-Buttons-Style-Img' />
                                <p className='Menu-Buttons-Style-Text'>Conductor</p>
                            </div>
                        </div>
                    </div>
                }
                <Map></Map>
                <div id='logout-container'>
                        <button className='btn btn-warning' onClick={() => {logout({returnTo: 'http://localhost:3001/'});
                                                                    //localStorage.removeItem('username');
                                                                    //localStorage.removeItem('token');
                                                                    //setUser(null);
                                                                }}>
                            Logout
                        </button>
                    </div></>
                )}
                {!user && !isAuthenticated && (<Navigate to="/" />)}
            </div>
          </>
>>>>>>> master
  );
};
