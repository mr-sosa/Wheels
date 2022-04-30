import React from "react";
import './NoPage.scss';
import noFound from './../../data/404error.png';
import { Link } from "react-router-dom";

export const NoPage = () => {
    return(
        <>
            <div className="NoPage">
                <div className="NoPage-1">
                    <img className="NoPage-1-img" src={noFound} />
                </div>
                <div className="NoPage-2">
                    <h1>Oops, Page No Found</h1>
                    <h3> The page you were looking for does not exist</h3>
                    <Link to='/home'><button className="NoPage-2-button">Go Home</button></Link>
                </div>
            </div>
        </>
    );
};