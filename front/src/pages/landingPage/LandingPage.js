import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

export const LandingPage = () => {
  return (
    <>
      <div className='landing'>          
        <h1 className='landing-title'>Wheels</h1>
        <div className='landing-buttons'>
          <Link to={'/login'}><button className='landing-buttons-style'>Log In</button></Link>
          <Link to={'/signup'}><button className='landing-buttons-style'>Sign Up</button></Link>
        </div>
      </div>
    </>
  );
};