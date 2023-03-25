import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route} from 'react-router-dom';
export const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App