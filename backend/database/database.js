import mongoose from "mongoose";
import { MONGO_URI } from "../config/env.config.js";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {});
    console.log("Connected to MongoDB database.");
  } catch (error) {
    console.error("Error connecting to MongoDB database:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
