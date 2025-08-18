// import React from 'react'
// import { assets } from '../../assets/assets'

// const HomeInfoPolice = () => {
//     return (
//         <>

//             <section className="p-20">
//                 <div className="container mx-auto px-4">
//                     <div className="flex flex-wrap">
//                         {/* First Block */}
//                         <div className="w-full lg:w-1/3 p-4">
//                             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                                 <div className="relative h-90">
//                                     <img
//                                         className="w-full h-auto object-cover"
//                                         src={assets.ChiefMinister}
//                                         alt="Sri. Pinarayi Vijayan"
//                                     />
//                                 </div>
//                                 <div className="p-4 h-28">
//                                     <h4 className="text-lg font-semibold">Sri. Eknath Shinde</h4>
//                                     <p className="text-sm text-gray-600">Hon'ble Chief Minister of Maharashtra</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Second Block */}
//                         <div className="w-full lg:w-1/3 p-4">
//                             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                                 <div className="relative bg-blue h-90">
//                                     <img
//                                         className="w-full h-85 object-cover"
//                                         src={assets.PoliceImage1}
//                                         alt="Sri. Balram Kumar Upadhyay IPS"
//                                     />
//                                 </div>
//                                 <div className="p-4 h-28">
//                                     <h4 className="text-lg font-semibold">Sri. Amitabh Gupta  IPS</h4>
//                                     <p className="text-sm text-gray-600">
//                                         Director General of Prisons<br />
//                                         &amp; Correctional Services
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>


//                         <div className="w-full lg:w-1/3 p-4">
//                             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                                 <div className="relative bg-blue h-90">
//                                     <img
//                                         className="w-full h-100 object-cover"
//                                         src={assets.PoliceImage2}
//                                         alt="Sri. Balram Kumar Upadhyay IPS"
//                                     />
//                                 </div>
//                                 <div className="p-4 h-28">
//                                     <h4 className="text-lg font-semibold">Sri. Vivek Phansalkar  IPS</h4>
//                                     <p className="text-sm text-gray-600">
//                                         Commissioner of Police (CP) of <br />
//                                         Mumbai
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Find Institution Block */}
//                         {/* <div className="w-full lg:w-1/3 p-4">
//                             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                                 <div className="p-4">
//                                     <div className="mb-4">
//                                         <img
//                                             className="mx-auto"
//                                             src={assets.PoliceImage3}
//                                             alt="Find Institution Logo"
//                                         />
//                                     </div>
//                                     <div>
//                                         <div className="text-lg font-semibold mb-2">Find an Institution</div>
//                                         <div className="mb-4">
//                                             <select id="ddlDistrict" className="form-select mt-1 block w-full">
//                                                 <option value="0">Select district</option>
//                                                 <option value="1">Thiruvananthapuram</option>
//                                                 <option value="2">Kollam</option>
//                                                 <option value="3">Pathananthitta</option>
//                                                 <option value="4">Alappuzha</option>
//                                                 <option value="5">Kottayam</option>
//                                                 <option value="6">Iduki</option>
//                                                 <option value="7">Ernakulam</option>
//                                                 <option value="8">Thrissur</option>
//                                                 <option value="9">Palakkad</option>
//                                                 <option value="10">Malappuram</option>
//                                                 <option value="11">Kozhikode</option>
//                                                 <option value="12">Wayanad</option>
//                                                 <option value="13">Kannur</option>
//                                                 <option value="14">Kasaragod</option>
//                                             </select>
//                                         </div>
//                                         <div>
//                                             <select id="ddlInstitution" className="form-select mt-1 block w-full">
//                                                 <option value="" selected>
//                                                     Select institution
//                                                 </option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div> */}
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default HomeInfoPolice



import React from 'react';
import { assets } from '../../assets/assets';

const HomeInfoPolice = () => {
    return (
        <section className="p-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    {/* First Block */}
                    <div className="w-full lg:w-1/3 p-4">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                            <div className="relative h-64">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://www.unicef.org/india/sites/unicef.org.india/files/styles/large/public/UN0491574.jpg.webp?itok=MGx4Z_yy"
                                    alt="Sri. Pinarayi Vijayan"
                                />
                            </div>
                            <div className="p-4 h-28">
                                <h4 className="text-lg font-semibold">Five reasons why immunization is important</h4>
                                <br />
                                {/* <p className="text-sm text-gray-600">Five reasons why immunization is important</p> */}
                                <a href="https://www.unicef.org/india/stories/top-five-reasons-why-immunization-important">Read the story</a>
                            </div>
                        </div>
                    </div>

                    {/* Second Block */}
                    <div className="w-full lg:w-1/3 p-4">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                            <div className="relative bg-blue h-64">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://www.unicef.org/india/sites/unicef.org.india/files/styles/large/public/Immunization%20Schedule%20-%20FB-17.jpg.webp?itok=C7C0d4wD"
                                    alt="Sri. Balram Kumar Upadhyay IPS"
                                />
                            </div>
                            <div className="p-4 h-28">
                                <h4 className="text-lg font-semibold">Frequently asked questions on immunization of children</h4>
                                {/* <p className="text-sm text-gray-600">
                                    Answers to help parents make an informed and positive decision regarding their child’s health
                                </p> */}
                                <a href="https://www.unicef.org/india/stories/frequently-asked-questions-immunization-children">Read the story</a>
                            </div>
                        </div>
                    </div>

                    {/* Third Block */}
                    <div className="w-full lg:w-1/3 p-4">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                            <div className="relative bg-blue h-64">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://www.unicef.org/india/sites/unicef.org.india/files/styles/large/public/Immunization%20among%20Tribal%20Population%20in%20India_0.png.webp?itok=F_Hzf6df"
                                    alt="Sri. Vivek Phansalkar IPS"
                                />
                            </div>
                            <div className="p-4 h-28">
                                <h4 className="text-lg font-semibold">Immunization among Tribal Population in India</h4>
                                {/* <p className="text-sm text-gray-600">
                                    Commissioner of Police (CP) of <br />
                                    Mumbai
                                </p> */}
                                <a href="https://www.unicef.org/india/reports/immunization-among-tribal-population-india">Read the story</a>
                            </div>
                        </div>
                    </div>

                    {/* Find Institution Block */}
                    {/* <div className="w-full lg:w-1/3 p-4">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="p-4">
                                <div className="mb-4">
                                    <img
                                        className="mx-auto"
                                        src={assets.PoliceImage3}
                                        alt="Find Institution Logo"
                                    />
                                </div>
                                <div>
                                    <div className="text-lg font-semibold mb-2">Find an Institution</div>
                                    <div className="mb-4">
                                        <select id="ddlDistrict" className="form-select mt-1 block w-full">
                                            <option value="0">Select district</option>
                                            <option value="1">Thiruvananthapuram</option>
                                            <option value="2">Kollam</option>
                                            <option value="3">Pathananthitta</option>
                                            <option value="4">Alappuzha</option>
                                            <option value="5">Kottayam</option>
                                            <option value="6">Iduki</option>
                                            <option value="7">Ernakulam</option>
                                            <option value="8">Thrissur</option>
                                            <option value="9">Palakkad</option>
                                            <option value="10">Malappuram</option>
                                            <option value="11">Kozhikode</option>
                                            <option value="12">Wayanad</option>
                                            <option value="13">Kannur</option>
                                            <option value="14">Kasaragod</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select id="ddlInstitution" className="form-select mt-1 block w-full">
                                            <option value="" selected>
                                                Select institution
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default HomeInfoPolice;