import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VaccinationSidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className={`flex ${isOpen ? 'w-64' : 'w-20'} bg-gray-800 h-screen text-white duration-300`}>
            <div className="flex flex-col w-full">
                {/* Toggle Button */}
                <button
                    className="text-2xl p-4 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '◀' : '▶'}
                </button>

                {/* Sidebar Content */}
                <div className="mt-10">
                    <ul className="space-y-4">
                        <li>
                            <Link to="/vaccination-center/add-vaccination-center" className="flex items-center p-3 hover:bg-gray-700 rounded-md">

                                {isOpen && <span className="ml-2">Add Vaccine</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="/delete-vaccine" className="flex items-center p-3 hover:bg-gray-700 rounded-md">

                                {isOpen && <span className="ml-2">Delete Vaccine</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="/vaccination-center" className="flex items-center p-3 hover:bg-gray-700 rounded-md">

                                {isOpen && <span className="ml-2">Center Info</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="/view-schedule" className="flex items-center p-3 hover:bg-gray-700 rounded-md">

                                {isOpen && <span className="ml-2">View Schedule</span>}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default VaccinationSidebar;
