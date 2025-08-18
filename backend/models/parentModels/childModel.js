// import mongoose from 'mongoose';

// // Define the ChildProfile schema
// const childSchema = new mongoose.Schema({
//     userId : {type:String},
//     name: { type: String, required: true },
//     age: { type: Number, required: true, min: 0 }, // Ensure age is positive
//     dob: { type: Date, required: true },
//     gender: { type: String, enum: ['Male', 'Female'], required: true },
//     relationshipWithParent: { type: String, required: true },
//     address: {
//         street: { type: String, required: true },
//         city: { type: String, required: true },
//         state: { type: String, required: true },
//         postalCode: { type: String, required: true },
//         country: { type: String, required: true }
//     },
//     photo: { type: String, default: '' }, 
//     bloodGroup: { type: String, enum: ['O+', 'O-', 'AB+', 'AB-', 'B+', 'B-', 'A+', 'A-'], required: true },
//     consentForm: { type: Boolean, default: false },
//     disability: { type: Boolean, default: false },
//     vaccinationHistory: [{
//         vaccineName: { type: String, enum: ['BCG', 'DTP', 'Hepatitis B', 'Polio', 'MMR', 'Pneumococcal', 'HPV'], required: true },
//         vaccinationStatus: { type: String, enum: ['Administered', 'Pending'], required: true },
//         dateAdministered: { type: Date },
//         doseNumber: { type: Number },
//         vaccinationCenter: { type: String, default: '' }, // Default value
//         previousIllness: { type: String, default: '' },
//         doctorsRecommendations: { type: String, default: '' }
//     }],
//     medicalCondition: {
//         currentCondition: { type: String, default: 'Healthy' }, // Default condition
//         otherDetails: { type: String, default: '' }
//     },
//     upcomingVaccinations: [{
//         vaccineName: { type: String, required: true },
//         suggestedDate: { type: Date },
//         slotBooking: { type: String, default: 'Pending' }, // Default booking status
//         vaccinationCenter: { type: String, default: '' }
//     }],
//     vaccineAvailabilityAlerts: { type: Boolean, default: false },
//     healthInsurance: {
//         providerName: { type: String, default: '' },
//         policyNumber: { type: String, default: '' },
//         coverageDetails: { type: String, default: '' }
//     },
//     parents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ParentUser' }],
// }, { timestamps: true });

// // Create and export the ChildProfile model
// const ChildProfile = mongoose.model('ChildProfile', childSchema);

// export default ChildProfile;




import mongoose from 'mongoose';

// Define the ChildProfile schema
const childSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 0 }, // Ensure age is positive
    dob: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female'], required: true },
    relationshipWithParent: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true }
    },
    photo: { type: String, default: '' },
    bloodGroup: { type: String, enum: ['O+', 'O-', 'AB+', 'AB-', 'B+', 'B-', 'A+', 'A-'], required: true },
    consentForm: { type: Boolean, default: false },
    disability: { type: Boolean, default: false },
    vaccinationHistory: [{
        vaccineName: { type: String, enum: ['BCG', 'DTP', 'Hepatitis B', 'Polio', 'MMR', 'Pneumococcal', 'HPV'], required: true },
        vaccinationStatus: { type: String, enum: ['Administered', 'Pending'], required: true },
        dateAdministered: { type: Date },
        doseNumber: { type: Number, default: 1 }, // Add default for dose number
        vaccinationCenter: { type: String, default: '' },
        previousIllness: { type: String, default: '' },
        doctorsRecommendations: { type: String, default: '' }
    }],
    medicalCondition: {
        currentCondition: { type: String, default: 'Healthy' }, // Default condition
        otherDetails: { type: String, default: '' }
    },
    upcomingVaccinations: [{
        vaccineName: { type: String, required: true },
        suggestedDate: { type: Date },
        slotBooking: { type: String, enum: ['Pending', 'Booked', 'Completed'], default: 'Pending' }, // Enum for slot booking
        vaccinationCenter: { type: String, default: '' }
    }],
    vaccineAvailabilityAlerts: { type: Boolean, default: false },
    healthInsurance: {
        providerName: { type: String, default: '' },
        policyNumber: { type: String, default: '' },
        coverageDetails: { type: String, default: '' }
    },
    parents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ParentUser' }] // Reference to ParentUser
}, { timestamps: true });

// Create and export the ChildProfile model
const ChildProfile = mongoose.model('ChildProfile', childSchema);

export default ChildProfile;
