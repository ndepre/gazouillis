import React from "react";
import "./App.css";
import {Route, Routes } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Leftbar/Widgets';
import Login from './Account/Login';
import Logout from './Account/Logout';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/Home" element={<Feed />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Widgets/>
    </div>
  );
}

export default App;
