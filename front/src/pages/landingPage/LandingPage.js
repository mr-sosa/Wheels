import React from 'react';
import './LandingPage.scss';

export const LandingPage = () => {
  return (
    <>
      <div className='landing'>          
        <h1 className='landing-title'>Wheels</h1>
        <div className='landing-buttons'>
          <button className='landing-buttons-style'><a className='landing-buttons-style-text'>Log In</a></button>
          <button className='landing-buttons-style'><a className='landing-buttons-style-text'>Sign Up</a></button>
        </div>
      </div>
    </>
  );
};