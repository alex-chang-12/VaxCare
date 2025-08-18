import vaccineModelSchema from "../../models/vaccinationCenterModels/vaccineModel.js";


const createVaccine = async(req,res) =>{
    try {
        const vaccineData = req.body;
        const vaccine = new vaccineModelSchema(vaccineData);
        await vaccine.save();

        res.status(201).json({
            message: "vaccine created successfully",
            data : vaccine
        })
    } catch (error) {
        res.status(400).json({
            message:"error creating vaccine",
            error:error.message
        })
    }
}

const getAllVaccines = async(req,res) =>{
    try {
        const vaccines = await vaccineModelSchema.find();
        res.status(200).json({
            message : "vaccines retrieved successfully",
            data : vaccines
        })
    } catch (error) {
        res.status(500).json({
            message:"error retrieving vaccine",
            error:error.message
        })
    }
}

const getVaccinesById = async(req,res) =>{ 
    try {
        const vaccineId = req.params.id;
        const vaccine = await vaccineModelSchema.findById(vaccineId);
        if(!vaccine){
            return res.status(404).json({
                message:"vaccine not found"
            })
        }
        res.status(200).json({
            message:'vaccine retrieved successfully',
            data :vaccine
        })
    } catch (error) {
        res.status(500).json({
            message:'error retrieving vaccine',
            error : error.message
        })
    }
}

export {createVaccine, getAllVaccines, getVaccinesById};