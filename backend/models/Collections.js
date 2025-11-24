import mongoose from "mongoose";

const CollectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    memories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Memory",
      },
    ],
  },
  { timestamps: true }
);

const Collection = mongoose.model("Collection", CollectionSchema);
export default Collection;
