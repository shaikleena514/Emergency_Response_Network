import Report from "../models/reportModel.js";

// Create Report
export const createReport = async (req, res) => {
  const { emergencyId, responderId, status, notes } = req.body;
  try {
    const report = await Report.create({ emergencyId, responderId, status, notes });
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: "Error creating report", error });
  }
};

// Get All Reports
export const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find().populate("emergencyId responderId", "location type status");
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reports", error });
  }
};
