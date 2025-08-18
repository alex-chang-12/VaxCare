import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { User, Settings, PlusCircle } from 'lucide-react';
import axios from "axios";
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import ConnectWithDoctor from './ConnectWithDoctor';


const initialProfileState = {
  name: '',
  age: '',
  dob: '',
  gender: '',
  relationshipWithParent: '',
  address: {
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  },
  photo: '',
  bloodGroup: '',
  consentForm: false,
  disability: false,
  vaccinationHistory: [],
  medicalCondition: {
    currentCondition: 'Healthy',
    otherDetails: ''
  },
  upcomingVaccinations: [],
  vaccineAvailabilityAlerts: false,
  healthInsurance: {
    providerName: '',
    policyNumber: '',
    coverageDetails: ''
  }
};

// Component for displaying a child profile
const ChildProfileView = ({ profile }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">{profile.name}</h2>
      <div className="grid grid-cols-2 gap-4">
        <p><strong>Age:</strong> {profile.age}</p>
        <p><strong>Date of Birth:</strong> {new Date(profile.dob).toLocaleDateString()}</p>
        <p><strong>Gender:</strong> {profile.gender}</p>
        <p><strong>Relationship:</strong> {profile.relationshipWithParent}</p>
        <p><strong>Address:</strong> {`${profile.address.street}, ${profile.address.city}, ${profile.address.state} ${profile.address.postalCode}, ${profile.address.country}`}</p>
        <p><strong>Blood Group:</strong> {profile.bloodGroup}</p>
        <p><strong>Consent Form:</strong> {profile.consentForm ? 'Yes' : 'No'}</p>
        <p><strong>Disability:</strong> {profile.disability ? 'Yes' : 'No'}</p>
        <p><strong>Medical Condition:</strong> {profile.medicalCondition.currentCondition}</p>
        <p><strong>Vaccine Alerts:</strong> {profile.vaccineAvailabilityAlerts ? 'Enabled' : 'Disabled'}</p>
      </div>
    </div>
  );
};


const ProfileForm = ({ profile, setProfile, onSave, isNewProfile }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile(prev => {
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        return {
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: type === 'checkbox' ? checked : value
          }
        };
      }
      return { ...prev, [name]: type === 'checkbox' ? checked : value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (isNewProfile) {
        // Creating a new profile
        response = await axios.post(`http://localhost:5000/parent/child/child-create`, profile, {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });
      } else {
        // Updating an existing profile
        response = await axios.put(`http://localhost:5000/parent/child/update/${profile._id}`, profile, {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });
      }

      if (response.data.success) {
        localStorage.setItem('token', response.data.token); // Optional: Set token for authentication if required
        toast.success(response.data.message);
        onSave(); // Callback function after successful save
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      toast.error('An error occurred while saving the profile. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 text-blue-800">Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name || ''}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-blue-800">Age:</label>
          <input
            type="number"
            name="age"
            value={profile.age || ''}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-blue-800">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={profile.dob || ''}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-blue-800">Gender:</label>
          <select
            name="gender"
            value={profile.gender || ''}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-blue-800">Relationship with Parent:</label>
          <input
            type="text"
            name="relationshipWithParent"
            value={profile.relationshipWithParent || ''}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* Address Fields */}
        {['street', 'city', 'state', 'postalCode', 'country'].map(field => (
          <div key={field}>
            <label className="block mb-2 text-blue-800">{`${field.charAt(0).toUpperCase() + field.slice(1)}:`}</label>
            <input
              type="text"
              name={`address.${field}`}
              value={profile.address?.[field] || ''}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
        ))}
        <div>
          <label className="block mb-2 text-blue-800">Blood Group:</label>
          <select
            name="bloodGroup"
            value={profile.bloodGroup || ''}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Blood Group</option>
            {['O+', 'O-', 'AB+', 'AB-', 'B+', 'B-', 'A+', 'A-'].map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
        </div>
        {/* Checkboxes for boolean fields */}
        {['consentForm', 'disability', 'vaccineAvailabilityAlerts'].map(field => (
          <div key={field} className="flex items-center">
            <label className="block mb-2 text-blue-800">{`${field.replace(/([A-Z])/g, ' $1')}:`}</label>
            <input
              type="checkbox"
              name={field}
              checked={profile[field] || false}
              onChange={handleChange}
              className="mr-2"
            />
            <span>{field === 'consentForm' ? 'Signed' : 'Yes'}</span>
          </div>
        ))}
        <div>
          <label className="block mb-2 text-blue-800">Current Medical Condition:</label>
          <input
            type="text"
            name="medicalCondition.currentCondition"
            value={profile.medicalCondition?.currentCondition || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>
      <button type="submit" className="mt-6 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        {isNewProfile ? 'Add Child' : 'Update Profile'}
      </button>
    </form>
  );
};


// Sidebar component
const Sidebar = () => {
  return (
    <div className="relative w-64 bg-blue-600 text-white p-6 h-screen">
      <h1 className="text-2xl font-bold mb-8">Profile</h1>
      <nav>
        <Link to="/parent/cp/profiles" className="flex items-center mb-4 hover:bg-blue-700 p-2 rounded">
          <User size={20} />
          <span className="ml-3">Child Profiles</span>
        </Link>
        <Link to="/parent/cp/add" className="flex items-center mb-4 hover:bg-blue-700 p-2 rounded">
          <PlusCircle size={20} />
          <span className="ml-3">Add Another Child</span>
        </Link>
        <Link to="/parent/cp/settings" className="flex items-center mb-4 hover:bg-blue-700 p-2 rounded">
          <Settings size={20} />
          <span className="ml-3">Settings</span>
        </Link>
        <Link to="/parent/cp/doctor" className="flex items-center mb-4 hover:bg-blue-700 p-2 rounded">
          <Settings size={20} />
          <span className="ml-3">Connect with Doctor</span>
        </Link>
      </nav>
    </div>
  );
};

// Main child profile component
// const ChildProfile = () => {
//   const [profiles, setProfiles] = useState([]);
//   const [newProfile, setNewProfile] = useState(initialProfileState);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/parent/child/children`, {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         });
//         if (response.data.success) {
//           console.log(response.data.data);
//           setProfiles(response.data.data);
//         } else {
//           console.error('Error fetching child list')
//         }
//       } catch (error) {
//         console.log(`error fetching profiles`, error);
//       }
//     }
//     fetchProfiles();
//   }, []);

//   const handleSave = (profile, isNewProfile = false) => {
//     if (isNewProfile) {
//       setProfiles(prev => [...prev, { ...profile, _id: `CHD${Date.now()}` }]);
//     } else {
//       setProfiles(prev => prev.map(p => p._id === profile._id ? profile : p));
//     }
//     navigate('/parent/cp/profiles');
//   };
//   return (
//     <div className="flex bg-blue-50 min-h-screen">
//       <Sidebar />
//       <div className="flex-1 p-8 overflow-y-auto">
//         <Routes>
//           <Route path="profiles" element={
//             <>
//               <h2 className="text-3xl font-bold mb-6 text-blue-800">Child Profiles</h2>
//               {profiles.length === 0 ? (
//                 <p>No child profiles available.</p>
//               ) : (
//                 profiles.map(profile => (
//                   <div className="mb-6">
//                     <ChildProfileView key={profile.id} profile={profile} />
//                     <Link
//                       to={`/cp/update/${profile.id}`}
//                       className="mt-2 inline-block bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//                     >
//                       Update Profile
//                     </Link>
//                   </div>
//                 ))
//               )}
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


//           <Route path="doctor" element={
//             <>
//               <h2 className='text-3xl font-bold mb-6 text-blue-800'>Connect With Doctor</h2>
//               <ConnectWithDoctor />
//             </>
//           } />
//         </Routes>


//       </div>
//     </div>
//   );
// };
const ChildProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState(initialProfileState);
  const navigate = useNavigate();

  // Fetch child profiles from the server when the component loads
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/parent/child/children', {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });
        if (response.data.success) {
          console.log(response.data.data);
          setProfiles(response.data.data);
        } else {
          console.error('Error fetching child list');
        }
      } catch (error) {
        console.log('Error fetching profiles', error);
      }
    };
    fetchProfiles();
  }, []);

  // Save new or updated profile
  const handleSave = (profile, isNewProfile = false) => {
    if (isNewProfile) {
      // Add new profile with a temporary ID
      setProfiles(prev => [...prev, { ...profile, _id: `CHD${Date.now()}` }]);
    } else {
      // Update existing profile
      setProfiles(prev => prev.map(p => p._id === profile._id ? profile : p));
    }
    navigate('/parent/cp/profiles'); // Navigate back to the profiles list after saving
  };

  return (
    <div className="flex bg-blue-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <Routes>
          {/* Child Profiles List */}
          <Route path="profiles" element={
            <>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Child Profiles</h2>
              {profiles.length === 0 ? (
                <p>No child profiles available.</p>
              ) : (
                profiles.map(profile => (
                  <div key={profile._id} className="mb-6"> {/* Use _id as the key */}
                    <ChildProfileView profile={profile} />
                    <Link
                      to={`parent/cp/update/${profile._id}`} // Use _id in the link
                      className="mt-2 inline-block bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                      Update Profile
                    </Link>
                  </div>
                ))
              )}
            </>
          } />

          {/* Update Child Profile */}
          <Route path="update/:id" element={
            <UpdateProfile profiles={profiles} handleSave={handleSave} />
          } />

          {/* Add New Child Profile */}
          <Route path="add" element={
            <>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Add New Child</h2>
              <ProfileForm
                profile={newProfile}
                setProfile={setNewProfile}
                onSave={() => handleSave(newProfile, true)} // Pass true for new profile
                isNewProfile={true} // Indicate this is a new profile
              />
            </>
          } />

          {/* Settings Page */}
          <Route path="settings" element={
            <>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Settings</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p>Settings page content goes here.</p>
              </div>
            </>
          } />

          {/* Connect With Doctor */}
          <Route path="doctor" element={
            <>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Connect With Doctor</h2>
              <ConnectWithDoctor />
            </>
          } />
        </Routes>
      </div>
    </div>
  );
};



<ConnectWithDoctor />

// Update profile component
const UpdateProfile = ({ profiles, handleSave }) => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const profileToUpdate = profiles?.find(p => p._id === id);
    if (profileToUpdate) {
      setProfile(profileToUpdate || null);
    }
  }, [id, profiles]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Update Profile</h2>
      <ProfileForm
        profile={profile}
        setProfile={setProfile}
        onSave={() => handleSave(profile)}
        isNewProfile={false}
      />
    </>
  );
};

export default ChildProfile;