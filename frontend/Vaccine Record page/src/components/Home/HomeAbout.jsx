import React from 'react';

const HomeAbout = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start bg-gray-100 p-6 rounded-lg shadow-lg space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="flex justify-center w-full lg:w-1/3">
                <img
                    src="https://www.discoverwalks.com/blog/wp-content/uploads/2024/02/480px-k.m.cherian.jpg"
                    alt=" Dr. K. M. Cherian (b. 1938)-Pediatric Immunologist"
                    title=" Dr. K. M. Cherian (b. 1938)-Pediatric Immunologist"
                    className="w-64 h-64 object-cover rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl" // Added hover effect classes
                />
            </div>
            <div className="text-center lg:text-left lg:w-2/3">
                <h3 className="text-3xl font-bold text-gray-800 mb-4" title="From CP's Desk">From Doctor's Desk</h3>
                <hr className="border-gray-300 mb-4" />
                <p className="text-lg text-gray-700 leading-relaxed">
                    Child vaccination is vital for combating diseases like measles and polio. Despite progress, misinformation persists, causing hesitancy among parents. It’s crucial to understand that vaccines undergo rigorous testing for safety and efficacy. By vaccinating our children, we not only protect them but also uphold community health. Parents must stay informed and consult healthcare professionals to ensure their children receive timely vaccinations, securing a healthier future for all.
                </p>
                <p className="mt-4 font-semibold text-gray-800">
                    Dr. K. M. Cherian (b. 1938)-Pediatric Immunologist
                </p>
            </div>
        </div>
    );
};

export default HomeAbout;