import mongoose from "mongoose";

const pilotSchema = mongoose.Schema(
  {
    pilotInfo: [{ name: String, email: String, phoneNumber: String }],
  },
  { timestamps: true }
);

const Pilot = mongoose.model("Pilot", pilotSchema);
export default Pilot;
