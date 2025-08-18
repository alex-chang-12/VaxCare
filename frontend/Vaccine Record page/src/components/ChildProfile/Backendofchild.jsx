// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { User, Settings, PlusCircle } from 'lucide-react';

// const ChildProfile = () => {
//   const [profiles, setProfiles] = useState([]);
//   const [newProfile, setNewProfile] = useState(initialProfileState);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch profiles from backend
//     axios.get('http://localhost:5000/profiles')
//       .then(response => setProfiles(response.data))
//       .catch(error => console.error('Error fetching profiles:', error));
//   }, []);

//   const handleSave = (profile, isNewProfile = false) => {
//     const url = isNewProfile ? 'http://localhost:5000/profiles' : `http://localhost:5000/profiles/${profile._id}`;
//     const method = isNewProfile ? 'POST' : 'PUT';

//     axios({ method, url, data: profile })
//       .then(() => {
//         if (isNewProfile) {
//           setProfiles(prev => [...prev, { ...profile, _id: Date.now() }]);
//         } else {
//           setProfiles(prev => prev.map(p => p._id === profile._id ? profile : p));
//         }
//         navigate('/cp/profiles');
//       })
//       .catch(error => console.error('Error saving profile:', error));
//   };

//   return (
//     <div className="flex bg-blue-50 min-h-screen">
//       <Sidebar />
//       <div className="flex-1 p-8 overflow-y-auto">
//         <Routes>
//           <Route path="profiles" element={
//             <>
//               <h2 className="text-3xl font-bold mb-6 text-blue-800">Child Profiles</h2>
//               {profiles.map(profile => (
//                 <div key={profile._id} className="mb-6">
//                   <ChildProfileView profile={profile} />
//                   <Link 
//                     to={`/cp/update/${profile._id}`}
//                     className="mt-2 inline-block bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//                   >
//                     Update Profile
//                   </Link>
//                 </div>
//               ))}
//             </>
//           } />
//           <Route path="update/:id" element={
//             <UpdateProfile profiles={profiles} handleSave={handleSave} />
//           } />
//           <Route path="add" element={
//             <>
//               <h2 className="text-3xl font-bold mb-6 text-blue-800">Add New Child</h2>
//               <ProfileForm 
//                 profile={newProfile}
//                 setProfile={setNewProfile}
//                 onSave={() => handleSave(newProfile, true)}
//                 isNewProfile={true}
//               />
//             </>
//           } />
//           <Route path="settings" element={
//             <>
//               <h2 className="text-3xl font-bold mb-6 text-blue-800">Settings</h2>
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <p>Settings page content goes here.</p>
//               </div>
//             </>
//           } />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default ChildProfile;
