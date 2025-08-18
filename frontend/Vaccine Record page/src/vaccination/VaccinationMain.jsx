import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import './VaccinationMain.css';
import VaccineRegisterForm from '../components/VaccineRegisterForm/VaccineRegisterForm';
import SidebarVaccine from '../components/Sidebar/Sidebar';
import CenterInfo from '../components/CenterInfo/CenterInfo';

const VaccinationMain = () => {
    return (
        <div className="vaccination-app">
            <SidebarVaccine />
            <Routes>
                <Route path="/vaccine-register" element={<VaccineRegisterForm />} />
                <Route path="/center-info" element={<CenterInfo />} />
                {/* <Route path="*" element={<Navigate to="/vaccine-register" />} />  */}
            </Routes>
        </div>
    );
};

export default VaccinationMain;