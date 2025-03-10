import mongoose from "mongoose";

const emergencySchema = new mongoose.Schema(
  {
    location: { type: String, required: true },
    type: { type: String, required: true },
    severity: { type: String, enum: ["Low", "Medium", "High"], required: true },
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Emergency = mongoose.model("Emergency", emergencySchema);
export default Emergency;
