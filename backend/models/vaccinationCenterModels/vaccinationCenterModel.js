import mongoose from "mongoose";

const vaccinationCenterSchema = new mongoose.Schema({
  email: { type: String },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: { 
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number }
    }
  },
  operatingHours: { 
    weekdays: { type: String },  
    weekends: { type: String } 
  },
  capacity: { type: Number, required: true },
});

const VaccinationCenter = mongoose.model('VaccinationCenterInformation', vaccinationCenterSchema);

export default VaccinationCenter; 