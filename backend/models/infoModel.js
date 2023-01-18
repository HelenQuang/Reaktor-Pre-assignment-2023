import mongoose from "mongoose";

const infoSchema = mongoose.Schema(
  {
    info: [
      {
        droneSerialNumber: String,
        distance: Number,
        pilotName: String,
        pilotEmail: String,
        pilotPhoneNumber: String,
        observedAt: Date,
      },
    ],
  },

  { timestamps: true }
);

infoSchema.index({ createdAt: 1 }, { expireAfterSeconds: 600 }); //After 10mins

const Info = mongoose.model("Info", infoSchema);
export default Info;
