import VaccinationCenter from "../../models/vaccinationCenterModels/vaccinationCenterModel.js";
export const vaccinationCenterInfo = async (req, res) => {
  const { userId } = req.user;
    try {
      const {
        email,
        name,
        phone,
        address,
        city,
        state,
        postalCode,
        lat,
        lng,
        weekdays,
        weekends,
        capacity,
      } = req.body;
  
      if (!name || !phone || !address || !city || !state || !postalCode || !capacity ) {
        return res.status(400).json({
          success: false,
          message: "Please provide all required fields",
        });
      }
  
      // Create a new vaccination center object
      const newVaccinationCenter = new VaccinationCenter({
        userId,
        email,
        name,
        phone,
        location: {
          address,
          city,
          state,
          postalCode,
          coordinates: {
            lat,
            lng,
          },
        },
        operatingHours: {
          weekdays,
          weekends,
        },
        capacity,
      });
  
      // Save the new vaccination center to the database
      const savedVaccinationCenter = await newVaccinationCenter.save();
  
      return res.status(201).json({
        success: true,
        message: 'Vaccination center created successfully',
        data: savedVaccinationCenter,
      });
    } catch (error) {
      console.error("Error creating vaccination center:", error);
      
      // Check if the error is related to validation issues in Mongoose
      if (error.name === "ValidationError") {
        return res.status(400).json({
          success: false,
          message: "Validation error: " + error.message,
        });
      }
  
      return res.status(500).json({
        success: false,
        message: 'Failed to create vaccination center',
        error: error.message,
      });
    }
  };


const updateVaccinationCenterInfoByAdmin = async(req,res)=>{
  const {vaccineCenterId}  = req.params;
  const {userId} = req.user;
  const vaccineData = req.body;
  try {
    const vaccineProfile = await VaccinationCenter.findByIdAndUpdate(
      {_id:vaccineCenterId,userId},
      vaccineData,
      {new : true, runValidators:true}
    )
    if(!vaccineProfile){
      console.log(`not registered center`);
      return res.status(404).json({success:false, message:"Vaccination center profile not found or unauthorized"})
    }

    console.log(vaccineProfile)
    return res.status(200).json({ success: true, message: "Vaccine profile updated successfully", data: vaccineProfile })
  } catch (error) {
    console.error("Error updating child profile:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
  }
}


const getVaccinationCenterInfoByAdmin = async (req, res) => {
  // Extract email from req.user which should be set by jwtAuth middleware
  const { email } = req.body;
  console.log("Fetching centers for email:", email); // Log the email for debugging
  
  try {
      // Fetch vaccination centers based on the user's email
      const vaccineCenterProfiles = await VaccinationCenter.find({ email });

      // Respond with success and data
      return res.json({ success: true, data: vaccineCenterProfiles });
  } catch (error) {
      // Log any errors encountered during the database operation
      console.error("Error fetching vaccination center profiles:", error);
      return res.status(500).json({ success: false, message: "Error fetching vaccination center profiles" });
  }
};











const getVaccinationCenterInfo = async(req,res) =>{
  // const {userId} = req.user;
  try{
      const vaccineCenterInfo = await VaccinationCenter.find()
      return res.json({success:true, message:"successfully fetch vaccine center info", data : vaccineCenterInfo})
  }catch(error){
      console.log(error)
      return res.json({success:false, message :"failed to get the info"});
  }
}


export {getVaccinationCenterInfo, updateVaccinationCenterInfoByAdmin,getVaccinationCenterInfoByAdmin}