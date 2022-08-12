//import logo from './logo.svg';
import './App.css';
// import Data from './Compo/Data';
// import Class from './Compo/Class';
// import { Component } from 'react';
import React from 'react'
//import { Logo } from './Compo/Logo';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Parents from './Iframe/Parents'
import Child from './Iframe/Child'
import Home from './Iframe/Home'
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='parent' element={<Parents/>}/>
          <Route exact path='child' element={<Child/>}/>
        </Routes>
      </Router>
    </div>
  )
}
