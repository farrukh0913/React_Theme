import './App.css';
import React, { useState } from 'react';
import Layout from './layout';
import { Route } from "react-router-dom";
import Login from './components/login';
import { Routes } from "react-router-dom";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Layout />} />
      </Routes>
    </>

  );
}

export default App;
