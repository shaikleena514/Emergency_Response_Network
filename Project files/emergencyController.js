import Emergency from "../models/emergencyModel.js";

// Create Emergency
export const createEmergency = async (req, res) => {
  const { location, type, severity } = req.body;
  try {
    const emergency = await Emergency.create({ location, type, severity, reportedBy: req.user.id });
    res.status(201).json(emergency);
  } catch (error) {
    res.status(500).json({ message: "Error creating emergency", error });
  }
};

// Get All Emergencies
export const getAllEmergencies = async (req, res) => {
  try {
    const emergencies = await Emergency.find().populate("reportedBy", "name email");
    res.json(emergencies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching emergencies", error });
  }
};
