import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import './App.scss';

import { LandingPage } from './pages/landingPage/LandingPage';
import { Home } from './pages/home/Home';
import { CrearViaje } from './pages/crearViaje/CrearViaje';
import { NoPage } from './pages/noPage/NoPage';
import { LogIn } from './pages/logIn/LogIn';
import { SignUp } from './pages/signup/SignUp';


function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='*' element={<NoPage/>}/>
            <Route path='/crearViaje' element={<CrearViaje/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
