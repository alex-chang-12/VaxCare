import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    location: { type: String, required: true },
    contactNumber : {type:String, required:true},
}, { timestamps: true });

const DoctorUser = mongoose.models.user || mongoose.model('doctor', doctorSchema);

export default DoctorUser;