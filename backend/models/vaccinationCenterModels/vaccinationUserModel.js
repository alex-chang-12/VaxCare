import mongoose from "mongoose";

const vaccinationUserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

const vaccinationUserInfo  = mongoose.models.user || mongoose.model("vaccinationUserInfo", vaccinationUserSchema);

export default vaccinationUserInfo;
