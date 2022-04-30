import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import './App.css';

import { LandingPage } from './pages/landingPage/LandingPage';
import { Home } from './pages/home/Home';
import { NoPage } from './pages/noPage/NoPage';
import { LogIn } from './pages/logIn/LogIn';


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
            <Route path='/login' element={<LogIn/>}/>
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
