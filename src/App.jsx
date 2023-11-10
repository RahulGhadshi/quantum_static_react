import React from "react";
import Header from "./components/Header";
import Openings from "./components/content/Openings";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="walkIn" element={<Openings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
