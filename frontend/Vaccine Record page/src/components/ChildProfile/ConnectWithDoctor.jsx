import React, { useState, useEffect } from 'react';
import axios from "axios";
import { assets } from '../../assets/assets';


const ConnectWithDoctor = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [doctor, setDoctor] = useState([]);


    useEffect(() => {
        fetchDoctorProfiles();
    }, []);

    const fetchDoctorProfiles = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/parent/child/doctor`
            );

            if (response.data.success) {
                console.log(response.data.data);
                setDoctor(Array.isArray(response.data.data) ? response.data.data : []);
            } else {
                console.error('error in fetching doctor list');
            }

        } catch (error) {
            console.log('error : ', error);
        }
    }



    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };


    const filteredDoctors = doctor.filter((doctors) =>
        doctors.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctors.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctors.location.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const handleWhatsAppClick = (phoneNumber) => {
        const formattedNumber = phoneNumber.replace(/\s+/g, '');
        const whatsappUrl = `https://wa.me/${formattedNumber}`;
        window.open(whatsappUrl, '_blank');
    };


    return (

        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Connect with a Doctor</h2>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by name, specialization, or location"
                className="w-full p-2 mb-4 border rounded-md"
            />
            <ul>
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor) => (
                        <>
                            <li key={doctor.name} className="mb-2">
                                <strong>{doctor.name}</strong> - {doctor.specialization} - {doctor.location} <br />
                                Contact: {doctor.contactNumber}
                            </li>
                            <div className="mt-4 md:mt-0 md:block md:items-center">
                                <button className="bg-[#00008B] text-white text-lg px-6 py-2 rounded-full hover:bg-primary-light transition duration-300">
                                    Apply
                                </button>
                                <div className="p-3">
                                    <img className='cursor-pointer w-10 h-10 rounded-full border-4 border-gray-300 shadow-lg object-cover' src={assets.whatsapp} alt="Connect with Whatsapp" onClick={() => handleWhatsAppClick(doctor.contactNumber)} />
                                </div>
                            </div>
                        </>
                    ))
                ) : (
                    <li>No doctors found</li>
                )}
            </ul>
        </div>
    );
};



export default ConnectWithDoctor;