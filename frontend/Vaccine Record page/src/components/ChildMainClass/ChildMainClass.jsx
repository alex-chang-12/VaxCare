import React from 'react'
import ChildProfile from '../ChildProfile/ChildProfile'
import VaccinationRecord from '../ParentProfile/VaccinationRecord/VaccinationRecord'
import { Routes, Route } from 'react-router-dom';

const ChildMainClass = () => {
    return (
        <>
            <Routes>
                <Route path="/view" element={<VaccinationRecord />}></Route>
                <Route path="/cp/*" element={<ChildProfile />}></Route>
            </Routes>
        </>
    )
}

export default ChildMainClass
