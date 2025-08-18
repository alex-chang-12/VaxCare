import React from 'react';

function Map() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-200 to-white">

            {/* Left Side - Text and Button */}
            <div className="md:w-1/2 px-6 space-y-4 text-left">
                <h1 className="text-4xl font-bold text-black">
                    Vaccinations at your fingertips
                </h1>
                <div className="border-2 border-orange-500 rounded-md px-4 py-2 inline-flex items-center space-x-2">
                    <span className="text-green-600 text-2xl">✔</span>
                    <span className="text-orange-600 font-bold text-2xl">200 Crore vaccinations</span>
                </div>
                <p className="text-black italic">
                    Easily manage your vaccination records. Get reminders for upcoming appointments and stay informed about the latest vaccine recommendations
                    <br />
                    {/* <span className="font-bold">– PM Narendra Modi</span> */}
                </p>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 mt-8 md:mt-0 px-6">
                <img
                    src="https://www.cowin.gov.in/assets/images/independance.svg"
                    alt="India Map with Vaccination"
                    className="w-4/5 h-auto"
                />
            </div>
        </div>
    );
}

export default Map;