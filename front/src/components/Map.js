import React, { Component } from "react";
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import './Map.scss';
import tokens from './../tokens.json'
const GOOGLE_MAPS_TOKEN = tokens.GOOGLE_MAPS_TOKEN;

const bogota = { lat: 4.60971, lng: -74.08175 };

export const Map = () => {
    // Geolocation Permissions
    let userPosition = bogota;

    function success(position) {
      userPosition.lat = position.coords.latitude;
      userPosition.lng = position.coords.longitude;
    }
  
    function error() {
      alert('Unable to retrieve your location');
    }
  
    if(!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }      

    // Google Maps

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_TOKEN,
    });

    if (!isLoaded) {
        return (
            <>
            </>
        );
    }

    return(
        <>
            <div className="Map">
                <GoogleMap center={userPosition == bogota? bogota: userPosition} 
                        zoom={17}
                        mapContainerStyle=
                            {{width:'100vw', height:'100vh', background:'linear-gradient(180deg, rgba(29, 45, 68, 0) 50%, #1D2D44 92.6%)',}}
                        options={{
                            mapId:'6d581fda42e1c25d',
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,
                        }}>
                </GoogleMap>
            </div>
        </>
    );
};