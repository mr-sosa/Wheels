import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { LandingPage } from './pages/landingPage/LandingPage';
import { Home } from './pages/home/Home';
import { NoPage } from './pages/noPage/NoPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
