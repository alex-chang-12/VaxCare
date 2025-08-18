import mongoose from 'mongoose';

// Define the ParentUser schema
const parentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/.+\@.+\..+/, 'Please enter a valid email address'] }, // Email validation
    password: { type: String, required: true },
    /* children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChildProfile' }] */
}, { timestamps: true });

// Create and export the ParentUser model
const ParentUser = mongoose.models.user || mongoose.model('ParentUser', parentSchema);

export default ParentUser;
