import React, { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddVaccinationCenterUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    location: {
      address: '',
      city: '',
      state: '',
      postalCode: '',
      coordinates: {
        lat: '',
        lng: '',
      },
    },
    operatingHours: {
      weekdays: '',
      weekends: '',
    },
    capacity: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('location.')) {
      const locationField = name.split('.')[1];
      setFormData({
        ...formData,
        location: {
          ...formData.location,
          [locationField]: value,
        },
      });
    } else if (name.startsWith('location.coordinates.')) {
      const coordinatesField = name.split('.')[2];
      setFormData({
        ...formData,
        location: {
          ...formData.location,
          coordinates: {
            ...formData.location.coordinates,
            [coordinatesField]: value,
          },
        },
      });
    } else if (name.startsWith('operatingHours.')) {
      const operatingHoursField = name.split('.')[1];
      setFormData({
        ...formData,
        operatingHours: {
          ...formData.operatingHours,
          [operatingHoursField]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const flatData = {
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      address: formData.location.address,
      city: formData.location.city,
      state: formData.location.state,
      postalCode: formData.location.postalCode,
      lat: formData.location.coordinates.lat,
      lng: formData.location.coordinates.lng,
      weekdays: formData.operatingHours.weekdays,
      weekends: formData.operatingHours.weekends,
      capacity: formData.capacity,
    };

    try {
      console.log(flatData);  // Debugging log

      const response = await axios.post('http://localhost:5000/vaccine/center/create', flatData);
      setMessage(response.data.message);

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        setFormData({
          email: '',
          name: '',
          phone: '',
          location: {
            address: '',
            city: '',
            state: '',
            postalCode: '',
            coordinates: {
              lat: '',
              lng: '',
            },
          },
          operatingHours: {
            weekdays: '',
            weekends: '',
          },
          capacity: '',
        });
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      toast.error('An error occurred while adding the vaccination center.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Register Vaccination Center</h2>
      {message && <p className="mb-4 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            name="location.address"
            value={formData.location.address}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">City</label>
          <input
            type="text"
            name="location.city"
            value={formData.location.city}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">State</label>
          <input
            type="text"
            name="location.state"
            value={formData.location.state}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Postal Code</label>
          <input
            type="text"
            name="location.postalCode"
            value={formData.location.postalCode}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Latitude</label>
          <input
            type="number"
            name="location.coordinates.lat"
            value={formData.location.coordinates.lat}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Longitude</label>
          <input
            type="number"
            name="location.coordinates.lng"
            value={formData.location.coordinates.lng}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Operating Hours (Weekdays)</label>
          <input
            type="text"
            name="operatingHours.weekdays"
            value={formData.operatingHours.weekdays}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Operating Hours (Weekends)</label>
          <input
            type="text"
            name="operatingHours.weekends"
            value={formData.operatingHours.weekends}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Capacity</label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Register Center
        </button>
      </form>
    </div>
  );
};

export default AddVaccinationCenterUser;
