import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import {
  Typography,
} from '@mui/material';
import 'chart.js/auto';
import './VaccinationRecord.css';
import { Clock, Activity, ChevronLeft, ChevronRight, Phone, MapPin } from 'lucide-react';


const VaccinationRecord = () => {
  const [childProfiles, setChildProfiles] = useState([]);

  useEffect(() => {
    fetchChildProfiles();
  }, []);

  const fetchChildProfiles = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/parent/child/children`,
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (response.data.success) {
        console.log(response.data.data);
        setChildProfiles(response.data.data);
      } else {
        console.error('Error fetching child profiles');
      }
    } catch (error) {
      console.error('Error fetching child profiles:', error);
    }
  };
  const calculateVaccinationPercentage = (vaccinationHistory) => {
    if (!Array.isArray(vaccinationHistory) || vaccinationHistory.length === 0) {
      return 0;
    }
    const totalVaccines = vaccinationHistory.length;
    const administeredVaccines = vaccinationHistory.filter(vaccine => vaccine.vaccinationStatus === 'Administered').length;
    const percentage = (administeredVaccines / totalVaccines) * 100;
    return percentage.toFixed(2);
  };
  

const renderChildInfo = child => {
  const administeredVaccines = child.vaccinationHistory.filter(
    vaccine => vaccine.vaccinationStatus === 'Administered'
  ).length;
  const totalVaccines = child.vaccinationHistory.length;
  const vaccineData = {
    labels: ['Administered', 'Pending'],
    datasets: [
      {
        label: 'Vaccination Status',
        data: [administeredVaccines, totalVaccines - administeredVaccines],
        backgroundColor: ['#4CAF50', '#FF5722'],
        hoverBackgroundColor: ['#45a049', '#e64a19'],
      },
    ],
  };
  const vaccinationHistory = child.vaccinationHistory;
  const percentage = calculateVaccinationPercentage(vaccinationHistory); 

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <main className="max-w-7xl mx-auto">
        {/* Carousel
          <div className="relative mb-6 rounded-lg overflow-hidden">
            <img src={carouselImages[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full h-[300px] object-cover" />
            <button onClick={prevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
              <ChevronRight size={24} />
            </button>
          </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Child Profile */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex items-center">
              <img src="babyheadshot.jpg" alt="Child" className="w-24 h-24 rounded-full mr-4" />
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">{child.name}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">{child.age} years old • {child.gender}</p>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Next appointment: 15 May 2024</p>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Parent/Guardian</dt>
                  <dd className="mt-1 text-sm text-gray-900">Emily Johnson</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Contact</dt>
                  <dd className="mt-1 text-sm text-gray-900 flex items-center">
                    <Phone size={16} className="mr-2" /> blank
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-sm text-gray-900 flex items-center">
                    <MapPin size={16} className="mr-2" /> {child.address.street} {child.address.city} {child.address.state} {child.address.postalCode}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Primary Care Doctor</dt>
                  <dd className="mt-1 text-sm text-gray-900">Dr. Amanda Smith</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Vaccination Progress */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Vaccination Progress</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                    {percentage}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div style={{ width: `${percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Vaccinations */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Vaccinations</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              {child.upcomingVaccinations.map((vaccine, index) => (
                <li key={index} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="mr-3 text-gray-400" size={20} />
                      <p className="text-sm font-medium text-gray-900">{vaccine.vaccineName}</p>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Due on {new Date(vaccine.suggestedDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Vaccination History */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Vaccination History</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              {child.vaccinationHistory.map((vaccine, index) => (
                <li key={index} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Activity className="mr-3 text-gray-400" size={20} />
                      <p className="text-sm font-medium text-gray-900">{vaccine.vaccineName}</p>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {vaccine.vaccinationStatus === 'Administered'
                          ? `Completed on ${new Date(vaccine.dateAdministered).toLocaleDateString()}`
                          : 'Pending'}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

return (
  <div className="vaccination-record-container">
    <Typography variant="h4" gutterBottom>
      Child Vaccination Records
    </Typography>
    {childProfiles.length === 0 ? (
      <Typography>No child profiles found.</Typography>
    ) : (
      <>
        {childProfiles.map(child => renderChildInfo(child))}
        <hr />
      </>
    )}
  </div>
);
};

export default VaccinationRecord;
