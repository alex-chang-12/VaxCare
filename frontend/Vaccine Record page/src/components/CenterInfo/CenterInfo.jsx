import React, { useState, useEffect } from "react";
import axios from "axios"; // Ensure you have axios installed
import './CenterInfo.css'

const CenterInfo = () => {
    const [centers, setCenters] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentCenter, setCurrentCenter] = useState(null);
    const [hoveredCenterId, setHoveredCenterId] = useState(null); // Track hovered center
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        fetchCenters();
    }, []);




    const fetchCenters = async () => {
        // Dummy data for now
        const dummyCenters = [
            { id: 1, name: "Center A", email: "centera@example.com", phone: "123-456-7890", address: "123 Main St", city: "City A", state: "State A", postalCode: "12345", latitude: "10.123456", longitude: "20.123456", weekdays: "Mon-Fri", weekends: "Sat-Sun", capacity: 100 },
            { id: 2, name: "Center B", email: "centerb@example.com", phone: "098-765-4321", address: "456 Elm St", city: "City B", state: "State B", postalCode: "67890", latitude: "11.123456", longitude: "21.123456", weekdays: "Mon-Fri", weekends: "Sat-Sun", capacity: 200 },
            { id: 3, name: "Center C", email: "centerc@example.com", phone: "555-555-5555", address: "789 Oak St", city: "City C", state: "State C", postalCode: "13579", latitude: "12.123456", longitude: "22.123456", weekdays: "Mon-Fri", weekends: "Sat-Sun", capacity: 300 }
        ];
        setCenters(dummyCenters);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/centers/${id}`); // Update with your API endpoint
            fetchCenters(); // Refresh the list after deletion
        } catch (error) {
            console.error("Error deleting center", error);
        }
    };

    const handleEdit = (center) => {
        setCurrentCenter(center);
        setIsEditing(true);
    };

    const handleUpdate = async (updatedCenter) => {
        try {
            await axios.put(`/api/centers/${updatedCenter.id}`, updatedCenter); // Update with your API endpoint
            fetchCenters(); // Refresh the list after updating
            setIsEditing(false);
            setCurrentCenter(null);
        } catch (error) {
            console.error("Error updating center", error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentCenter(null);
    };

    return (
        <div className="center-info-container">
            <h1>Vaccination Centers</h1>
            {isEditing && currentCenter ? (
                <div className="edit-form">
                    <h2>Edit Center</h2>
                    <div className="edit-fields">
                        <div className="edit-row">
                            <input
                                type="text"
                                value={currentCenter.name}
                                onChange={(e) => setCurrentCenter({ ...currentCenter, name: e.target.value })}
                                placeholder="Center Name"
                                className="edit-input"
                            />
                            <input
                                type="text"
                                value={currentCenter.email}
                                onChange={(e) => setCurrentCenter({ ...currentCenter, email: e.target.value })}
                                placeholder="Email"
                                className="edit-input"
                            />
                            <input
                                type="text"
                                value={currentCenter.phone}
                                onChange={(e) => setCurrentCenter({ ...currentCenter, phone: e.target.value })}
                                placeholder="Phone"
                                className="edit-input"
                            />
                        </div>
                        <div className="edit-row">
                            <input
                                type="text"
                                value={currentCenter.address}
                                onChange={(e) => setCurrentCenter({ ...currentCenter, address: e.target.value })}
                                placeholder="Address"
                                className="edit-input"
                            />
                            <input
                                type="text"
                                value={currentCenter.city}
                                onChange={(e) => setCurrentCenter({ ...currentCenter, city: e.target.value })}
                                placeholder="City"
                                className="edit-input"
                            />
                            <input
                                type="text"
                                value={currentCenter.state}
                                onChange={(e) => setCurrentCenter({ ...currentCenter, state: e.target.value })}
                                placeholder="State"
                                className="edit-input"
                            />
                        </div>
                        <div className="edit-row">
                            <input
                                type="text"
                                value={currentCenter.postalCode}
                                onChange={(e) => setCurrentCenter({ ...currentCenter, postalCode: e.target.value })}
                                placeholder="Postal Code"
                                className="edit-input"
                            />
                            <input
                                type="text"
                                value={currentCenter.latitude}
                                onChange={(e) => setCurrentCenter({ ...currentCenter, latitude: e.target.value })}
                                placeholder="Latitude"
                                className="edit-input"
                            />
                            <input
                                type="text"
                                value={currentCenter.longitude}
                                onChange={(e) => setCurrentCenter({ ...currentCenter, longitude: e.target.value })}
                                placeholder="Longitude"
                                className="edit-input"
                            />
                        </div>
                        <div className="edit-row">
                            <input
                                type="text"
                                value={currentCenter.weekdays}
                                onChange={(e) => setCurrentCenter({ ...currentCenter, weekdays: e.target.value })}
                                placeholder="Weekdays"
                                className="edit-input"
                            />
                            <input
                                type="text"
                                value={currentCenter.weekends}
                                onChange={(e) => setCurrentCenter({ ...currentCenter, weekends: e.target.value })}
                                placeholder="Weekends"
                                className="edit-input"
                            />
                            <input
                                type="number"
                                value={currentCenter.capacity}
                                onChange={(e) => setCurrentCenter({ ...currentCenter, capacity: e.target.value })}
                                placeholder="Capacity"
                                className="edit-input"
                            />
                        </div>
                    </div>
                    <div className="button-container">
                        <button onClick={() => handleUpdate(currentCenter)} className="update-button">Update</button>
                        <button onClick={handleCancel} className="cancel-button">Cancel</button>
                    </div>
                </div>
            ) : (
                <ul className="center-list">
                    {centers.map(center => (
                        <li key={center.id} className="center-item">
                            <span
                                className="center-name"
                                onMouseEnter={() => setHoveredCenterId(center.id)}
                                onMouseLeave={() => setHoveredCenterId(null)}
                            >
                                {center.name}
                            </span>
                            {hoveredCenterId === center.id && ( // Show tooltip only for hovered center
                                <div className="tooltip">
                                    <p>Email: {center.email}</p>
                                    <p>Phone: {center.phone}</p>
                                    <p>Address: {center.address}</p>
                                    <p>City: {center.city}</p>
                                    <p>State: {center.state}</p>
                                    <p>Postal Code: {center.postalCode}</p>
                                    <p>Capacity: {center.capacity}</p>
                                </div>
                            )}
                            <div className="center-actions">
                                <button className="edit-button" onClick={() => handleEdit(center)}>Edit</button>
                                <button className="delete-button" onClick={() => handleDelete(center.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CenterInfo;


