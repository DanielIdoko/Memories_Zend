import mongoose from "mongoose";

const memorySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
    title: String,
    description: String,
    mediaUrls: [String],
    tags: [String],
    collection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
      index: true,
    },
  },
  { timestamps: true }
);

const Memory = mongoose.model("Memory", memorySchema);
export default Memory;