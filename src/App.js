import React from "react";
import "./App.css";
import Login from './Login';
import {Route, Routes } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Leftbar/Widgets';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/home" element={<Feed />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Widgets/>
    </div>
  );
}

export default App;
