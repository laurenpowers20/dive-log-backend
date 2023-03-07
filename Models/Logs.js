import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Log = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("logs", Log);
