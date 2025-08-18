import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ChildMainClass from './components/ChildMainClass/ChildMainClass';
import VaccinationMain from './vaccination/VaccinationMain';
import Home from './components/Home/Home';
import HealthcareCenters from '../src/pages/HealthcareCenters'
import Chatbot from './pages/chatbot';
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <ToastContainer />
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <hr />
        <Routes>
          <Route path="/home/" element={<Home />}></Route>
          <Route path="/vaccine-center/" element={<HealthcareCenters />}></Route>
          <Route path="/chatbot" element={<Chatbot />}></Route>
          <Route path="/parent/*" element={<ChildMainClass />}></Route>
          <Route path="/vaccination-center/*" element={<VaccinationMain />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
