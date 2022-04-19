import React from 'react';
import './LandingPage.scss';
export const LandingPage = () => {
    return (
      <>
        <div className='landing'>
          
          <h1 className='title'>Wheels</h1>
          <div className='buttons'>
            <button className='button-style'><a className='button-text'>Log In</a></button>
            <button className='button-style'><a className='button-text'>Sign Up</a></button>
          </div>
        </div>
      </>
    );
  };