import React from "react";
import "./App.css";
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
