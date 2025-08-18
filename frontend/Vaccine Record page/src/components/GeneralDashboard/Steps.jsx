import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing arrow icon

function Steps() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center py-0 mb-0">
            <h2 className="text-3xl font-bold mb-16 text-blue-600">Get Vaccinated in 3 Easy Steps</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
                {/* Step 1 */}
                <div className="flex flex-col items-center bg-blue-100 rounded-lg shadow-md p-6 w-full md:w-1/3 h-80"> {/* Fixed height */}
                    <img
                        src="https://www.cowin.gov.in/assets/images/Step_1.svg"
                        alt="Book Appointment"
                        className="w-4/5 h-auto mb-4" // Adjusted size for the image
                    />
                    <h3 className="text-xl font-semibold">Step 1</h3>
                    <p className="text-center font-medium text-lg">
                        Book an Appointment on <br />
                        HealthGuardian for your Child
                    </p>
                </div>

                {/* Arrow */}
                <FaArrowRight className="text-blue-600 w-10 h-10 hidden md:block" />

                {/* Step 2 */}
                <div className="flex flex-col items-center bg-blue-100 rounded-lg shadow-md p-6 w-full md:w-1/3 h-80"> {/* Fixed height */}
                    <img
                        src="https://www.cowin.gov.in/assets/images/Step_2.svg"
                        alt="Get Vaccinated"
                        className="w-4/5 h-auto mb-4" // Adjusted size for the image
                    />
                    <h3 className="text-xl font-semibold">Step 2</h3>
                    <p className="text-center font-medium text-lg">
                        Get Your Vaccination Safely at the <br />
                        Time of Your Appointment
                    </p>
                </div>

                {/* Arrow */}
                <FaArrowRight className="text-blue-600 w-10 h-10 hidden md:block" />

                {/* Step 3 */}
                <div className="flex flex-col items-center bg-blue-100 rounded-lg shadow-md p-6 w-full md:w-1/3 h-80"> {/* Fixed height */}
                    <img
                        src="https://www.cowin.gov.in/assets/images/Step_3.svg"
                        alt="Download Certificate"
                        className="w-4/5 h-auto mb-4" // Adjusted size for the image
                    />
                    <h3 className="text-xl font-semibold">Step 3</h3>
                    <p className="text-center font-medium text-lg">
                        Download Your Vaccination Certificate
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Steps;