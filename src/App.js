import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import "./App.css";
import FreeComponent from './freeComponent';
import AuthComponent from './AuthComponent';

export const App = () => {
  return (
    <>
      <Navbar />
    <Routes>
    <Route exact path = "/" element = {<Home />}/>
    <Route path = "/about" element = {<About />}/>
    <Route path = "/contact" element = {<Contact />}/>
    <Route path = "/login" element = {<Login />}/>
    <Route path = "/signup" element = {<Signup />}/>
    <Route path = "/free" element = {<FreeComponent />}/>
    <Route path = "/signup" element = {<AuthComponent />}/>
    </Routes>
    </>
  )
}

export default App