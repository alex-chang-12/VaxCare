import mongoose, { Mongoose } from "mongoose";
const vaccineModel = new mongoose.Schema({
    email: { type: String, required: true },
    name :{type:String, required:true, unique:true},
    type:{type:String,required:true},
    manufacturer:{type:String,required:true},
    doseCount:{type:Number, required:true},
    stock:{type:Number, required:true},
    expiryDate: {type: Date,required: true},
    description: {type: String},
}, { timestamps: true });

const vaccineModelSchema = mongoose.models.user || mongoose.model("vaccineModelSchema", vaccineModel);
export default vaccineModelSchema;
