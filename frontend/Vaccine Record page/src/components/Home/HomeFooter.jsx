// import React from 'react'

// const HomeFooter = () => {
//     return (
//         <>
//             <footer style={{ backgroundColor: '#03346E' }} className="text-black py-8">
//                 <div className="container mx-auto px-4">
//                     <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
//                         {/* Contact Information */}
//                         <div className="mb-6 lg:mb-0">
//                             <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
//                             <p className="mb-1">
//                                 Email: <a href="mailto:support@example.com" className="hover:underline">support@example.com</a>
//                             </p>
//                             <p>
//                                 Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
//                             </p>
//                         </div>

//                         {/* Social Media Links */}
//                         <div className="flex space-x-6 mb-6 lg:mb-0">
//                             {/* Facebook */}
//                             <a href="" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
//                                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M22 12.072C22 6.029 17.971 2 12 2S2 6.029 2 12.072c0 5.243 4.027 9.556 9.257 10.66v-7.56H7.897v-3.1h3.36v-2.19c0-3.313 1.988-5.095 4.89-5.095 1.398 0 2.598.104 2.947.151v3.42h-2.025c-1.594 0-1.898.759-1.898 1.865v2.45h3.796l-.495 3.1h-3.3v7.548C17.973 21.628 22 17.314 22 12.072z" />
//                                 </svg>
//                             </a>

//                             {/* Twitter */}
//                             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
//                                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M23 3a10.6 10.6 0 0 1-3.04.832A4.96 4.96 0 0 0 22.4 1.76a10.68 10.68 0 0 1-3.127 1.19A4.925 4.925 0 0 0 15.72 0c-2.707 0-4.92 2.211-4.92 4.92 0 .386.045.764.129 1.126A13.975 13.975 0 0 1 1.675 2.12a4.92 4.92 0 0 0 1.522 6.558A4.91 4.91 0 0 1 .96 8.56v.062a4.918 4.918 0 0 0 3.952 4.82A4.969 4.969 0 0 1 2 12.83a4.934 4.934 0 0 0 4.594 3.42A9.87 9.87 0 0 1 .56 17.16a13.905 13.905 0 0 0 7.548 2.21c9.056 0 14.006-7.49 14.006-13.986 0-.213-.005-.425-.014-.637A10.072 10.072 0 0 0 23 3z" />
//                                 </svg>
//                             </a>

//                             {/* LinkedIn */}
//                             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400">
//                                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7 19H4v-9h3v9zm-1.5-10.18c-.9 0-1.5-.61-1.5-1.35 0-.77.6-1.35 1.5-1.35.9 0 1.5.61 1.5 1.35 0 .74-.6 1.35-1.5 1.35zm11.5 10.18h-3v-4.56c0-1.09-.04-2.5-1.53-2.5-1.53 0-1.77 1.2-1.77 2.43v4.63h-3v-9h2.88v1.23h.04c.4-.75 1.39-1.55 2.86-1.55 3.07 0 3.64 2.02 3.64 4.64v5.68z" />
//                                 </svg>
//                             </a>
//                         </div>

//                         {/* Copyright Notice */}
//                         <div>
//                             <p className="text-gray-400 text-sm">&copy; 2024 BailBridgers. All rights reserved.</p>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </>
//     )
// }

// export default HomeFooter

// import React from 'react';

// const HomeFooter = () => {
//     return (
//         <footer className="bg-white">
//             {/* Links Section */}
//             <div className="container mx-auto py-4">
//                 <div className="flex justify-center items-center overflow-x-auto">
//                     <div className="flex space-x-10">
//                         <a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer">
//                             <img src="https://mumbaipolice.gov.in/images/Logowithlink/1.png" title="Digital India" alt="Digital India" className="w-40" />
//                         </a>
//                         <a href="https://www.startupindia.gov.in/" target="_blank" rel="noopener noreferrer">
//                             <img src="https://mumbaipolice.gov.in/images/Logowithlink/2.png" alt="" className="w-40" />
//                         </a>
//                         <a href="http://pib.gov.in/" target="_blank" rel="noopener noreferrer">
//                             <img src="https://mumbaipolice.gov.in/images/Logowithlink/4.png" title="not set" alt="not set" className="w-40" />
//                         </a>
//                         <a href="https://aaplesarkar.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer">
//                             <img src="https://mumbaipolice.gov.in/images/Logowithlink/8.png" title="Aaple Sarkar" alt="Aaple Sarkar" className="w-40" />
//                         </a>
//                         <a href="http://www.mhpolice.maharashtra.gov.in/Citizen/MH/Index.aspx" target="_blank" rel="noopener noreferrer">
//                             <img src="https://mumbaipolice.gov.in/images/Logowithlink/6.png" title="CCTNS" alt="CCTNS" className="w-40" />
//                         </a>
//                         <a href="http://mahapolice.gov.in/" target="_blank" rel="noopener noreferrer">
//                             <img src="https://mumbaipolice.gov.in/images/Logowithlink/7.png" title="Maharashtra Police" alt="Maharashtra Police" className="w-40" />
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             <hr className="my-4" />

//             {/* Information and Services Section */}
//             <div className="container mx-auto py-8">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {/* Mumbai Police Section */}
//                     <div className="space-y-4">
//                         <h4 className="text-xl  text-black font-bold">Mumbai Police</h4>
//                         <ul className="space-y-2">
//                             <li><a href="https://mumbaipolice.gov.in/PressRelease" title="Press Release" className="text-black hover:underline">Press Release</a></li>
//                             <li><a href="https://mumbaipolice.gov.in/faq" title="FAQ" className="text-black hover:underline">FAQ</a></li>
//                             <li><a href="https://mumbaipolice.gov.in/Martyrs" title="Martyrs" className="text-black hover:underline">Martyrs</a></li>
//                             <li><a href="https://mumbaipolice.gov.in/sitemap" title="Site Map" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Site Map</a></li>
//                         </ul>
//                         <ul className="space-y-2">
//                             <li><a href="https://mumbaipolice.gov.in/Senior_Officers" title="Senior Police Officers" className="text-black hover:underline">Senior Police Officers</a></li>
//                             <li><a href="https://mumbaipolice.gov.in/History" title="History" className="text-black hover:underline">History</a></li>
//                             <li><a href="https://mumbaipolice.gov.in/Recruitment" title="Police Recruitment" className="text-black hover:underline">Police Recruitment</a></li>
//                             <li><a href="https://mumbaipolice.gov.in/disclaimer" title="Disclaimer" className="text-black hover:underline">Disclaimer</a></li>
//                         </ul>
//                     </div>

//                     {/* Information & Services Section */}
//                     <div className="space-y-4">
//                         <h4 className="text-xl  text-black font-bold">Information & Services</h4>
//                         <ul className="space-y-2">
//                             <li><a href="https://mumbaipolice.gov.in/Safety_tips" title="Safety Tips" className="text-black hover:underline">Safety Tips</a></li>
//                             <li><a href="https://mumbaipolice.gov.in/Alert_wall" title="Citizen Wall" className="text-black hover:underline">Citizen Wall</a></li>
//                             <li><a href="https://mumbaipolice.gov.in/Initiative" title="Initiatives" className="text-black hover:underline">Initiatives</a></li>
//                             <li><a href="https://mumbaipolice.gov.in/Download" title="Licensing Unit" className="text-black hover:underline">Licensing Unit</a></li>
//                         </ul>
//                         <ul className="space-y-2">
//                             <li><a href="https://mumbaipolice.gov.in/MissingPerson" title="Missing Persons" className="text-black hover:underline">Missing Persons</a></li>
//                             <li><a href="https://mumbaipolice.gov.in/udb" title="Unidentified Dead Bodies" className="text-black hover:underline">Unidentified Dead Bodies</a></li>
//                             <li><a href="https://mumbaipolice.gov.in/ImpWeb" title="Useful websites" className="text-black hover:underline">Useful websites</a></li>
//                             <li><a href="https://mumbaipolice.gov.in/impcontacts" title="Emergency Contacts" className="text-black hover:underline">Emergency Contacts</a></li>
//                         </ul>
//                     </div>

//                     {/* Quick Links Section */}
//                     <div className="space-y-4">
//                         <h4 className="text-xl  text-black font-bold">Quick Links</h4>
//                         <ul className="space-y-2">
//                             {/* Add your quick links here, following the same structure */}
//                             <li><a href="https://mumbaipolice.gov.in" title="Quick Link 1" className="text-black hover:underline">Quick Link 1</a></li>
//                             <li><a href="https://mumbaipolice.gov.in" title="Quick Link 2" className="text-black hover:underline">Quick Link 2</a></li>
//                             <li><a href="https://mumbaipolice.gov.in" title="Quick Link 3" className="text-black hover:underline">Quick Link 3</a></li>
//                             <li><a href="https://mumbaipolice.gov.in" title="Quick Link 4" className="text-black hover:underline">Quick Link 4</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default HomeFooter;



import React from 'react';

const HomeFooter = () => {
    return (
        <footer style={{ backgroundColor: '#f8f9fa' }} className="text-black py-6">

            <div className="container mx-auto py-6">
                <div className="relative">
                    <div className="flex overflow-x-auto items-center justify-center space-x-8 py-4 items-center">
                        <a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                            <img src="https://mumbaipolice.gov.in/images/Logowithlink/1.png" title="Digital India" alt="Digital India" className="w-32 h-auto" />
                        </a>
                        <a href="https://www.startupindia.gov.in/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                            <img src="https://mumbaipolice.gov.in/images/Logowithlink/2.png" title="Startup India" alt="Startup India" className="w-32 h-auto" />
                        </a>
                        {/* <a href="http://pib.gov.in/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                            <img src="https://mumbaipolice.gov.in/images/Logowithlink/4.png" title="Press Information Bureau" alt="Press Information Bureau" className="w-32 h-auto" />
                        </a> */}
                        <a href="https://aaplesarkar.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                            <img src="https://mumbaipolice.gov.in/images/Logowithlink/8.png" title="Aaple Sarkar" alt="Aaple Sarkar" className="w-32 h-auto" />
                        </a>
                        <a href="http://www.mhpolice.maharashtra.gov.in/Citizen/MH/Index.aspx" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                            <img src="https://mumbaipolice.gov.in/images/Logowithlink/6.png" title="CCTNS" alt="CCTNS" className="w-32 h-auto" />
                        </a>
                        <a href="http://mahapolice.gov.in/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                            <img src="https://mumbaipolice.gov.in/images/Logowithlink/7.png" title="Maharashtra Police" alt="Maharashtra Police" className="w-32 h-auto" />
                        </a>
                    </div>
                </div>
            </div>


            <hr className="my-4 border-gray-600" />

            <div className="container mx-auto px-8 py-8 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold">Mumbai Police</h4>
                        <ul className="space-y-2">
                            <li><a href="https://mumbaipolice.gov.in/PressRelease" title="Press Release" className="hover:underline">Press Release</a></li>
                            <li><a href="https://mumbaipolice.gov.in/faq" title="FAQ" className="hover:underline">FAQ</a></li>
                            <li><a href="https://mumbaipolice.gov.in/Martyrs" title="Martyrs" className="hover:underline">Martyrs</a></li>
                            <li><a href="https://mumbaipolice.gov.in/sitemap" title="Site Map" target="_blank" rel="noopener noreferrer" className="hover:underline">Site Map</a></li>
                        </ul>
                        <ul className="space-y-2">
                            <li><a href="https://mumbaipolice.gov.in/Senior_Officers" title="Senior Police Officers" className="hover:underline">Senior Police Officers</a></li>
                            <li><a href="https://mumbaipolice.gov.in/History" title="History" className="hover:underline">History</a></li>
                            <li><a href="https://mumbaipolice.gov.in/Recruitment" title="Police Recruitment" className="hover:underline">Police Recruitment</a></li>
                            <li><a href="https://mumbaipolice.gov.in/disclaimer" title="Disclaimer" className="hover:underline">Disclaimer</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-bold">Information & Services</h4>
                        <ul className="space-y-2">
                            <li><a href="https://mumbaipolice.gov.in/Safety_tips" title="Safety Tips" className="hover:underline">Safety Tips</a></li>
                            <li><a href="https://mumbaipolice.gov.in/Alert_wall" title="Citizen Wall" className="hover:underline">Citizen Wall</a></li>
                            <li><a href="https://mumbaipolice.gov.in/Initiative" title="Initiatives" className="hover:underline">Initiatives</a></li>
                            <li><a href="https://mumbaipolice.gov.in/Download" title="Licensing Unit" className="hover:underline">Licensing Unit</a></li>
                        </ul>
                        <ul className="space-y-2">
                            <li><a href="https://mumbaipolice.gov.in/MissingPerson" title="Missing Persons" className="hover:underline">Missing Persons</a></li>
                            <li><a href="https://mumbaipolice.gov.in/udb" title="Unidentified Dead Bodies" className="hover:underline">Unidentified Dead Bodies</a></li>
                            <li><a href="https://mumbaipolice.gov.in/ImpWeb" title="Useful websites" className="hover:underline">Useful websites</a></li>
                            <li><a href="https://mumbaipolice.gov.in/impcontacts" title="Emergency Contacts" className="hover:underline">Emergency Contacts</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-bold">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="https://mumbaipolice.gov.in" title="Quick Link 1" className="hover:underline">Quick Link 1</a></li>
                            <li><a href="https://mumbaipolice.gov.in" title="Quick Link 2" className="hover:underline">Quick Link 2</a></li>
                            <li><a href="https://mumbaipolice.gov.in" title="Quick Link 3" className="hover:underline">Quick Link 3</a></li>
                            <li><a href="https://mumbaipolice.gov.in" title="Quick Link 4" className="hover:underline">Quick Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default HomeFooter;
