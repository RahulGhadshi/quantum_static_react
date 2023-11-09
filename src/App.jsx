import React from 'react';
import Header from "./components/Header";
import Openings from "./components/content/Openings";
import Login from "./components/login/Login";
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
        <Header />
        <Login />
        <Footer />
    </div>
  )
}

export default App
