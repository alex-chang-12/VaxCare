import mongoose from "mongoose"
export const connectDB = async () =>{
    try {
        await mongoose.connect(`mongodb+srv://pratikpatil9113:Pratik%406878@cluster0.fxavz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("db connected");
    } catch (error) {
        console.error("error ", error);
    }
}