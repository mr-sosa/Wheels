import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';
<<<<<<< Updated upstream
import { Footer } from "../../components/Footer/Footer";
=======
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import loading from './../../data/loading.svg';
>>>>>>> Stashed changes

export const LandingPage = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  if (isLoading){
    return (
    <>
      <div className='landing-2'> 
        <img src={loading} alt="Loading" className='Loading'/>
      </div>
    </>);
  }
  return (
    <>
      {isAuthenticated?
      <Navigate to="/home" /> 
      :
      <div className='landing'>          
        <h1 className='landing-title'>Wheels</h1>
        <div className='landing-buttons'>
          {/* <Link to={'/login'}><button className='landing-buttons-style'>Log In</button></Link> */}
          {/* <Link to={'/signup'}><button className='landing-buttons-style'>Sign Up</button></Link> */}
          <button className='landing-buttons-style' onClick={async()=>await loginWithRedirect({appState: { targetUrl: '/home' }})}>Log In</button>
        </div>
        
      </div>
<<<<<<< Updated upstream
      <Footer></Footer>
=======
      }
>>>>>>> Stashed changes
    </>
  );
};