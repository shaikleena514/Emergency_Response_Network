import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    emergencyId: { type: mongoose.Schema.Types.ObjectId, ref: "Emergency", required: true },
    responderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["Pending", "In Progress", "Resolved"], default: "Pending" },
    notes: { type: String },
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);
export default Report;
