import React from "react";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from './../../context/UserContext';
import './NoPage.scss';
import noFound from './../../data/404error.png';

export const NoPage = () => {
    const { user } = useContext(UserContext);
    return(
        <>
            <div className="NoPage">
                <div className="NoPage-1">
                    <img className="NoPage-1-img" src={noFound} />
                </div>
                <div className="NoPage-2">
                    <h1>Oops, Page No Found</h1>
                    <h3> The page you were looking for does not exist</h3>
                    {user ? 
                    <Link to='/home'><button className="NoPage-2-button">Go Home</button></Link> : 
                    <Link to='/'><button className="NoPage-2-button">Go Home</button></Link>}
                </div>
            </div>
        </>
    );
};