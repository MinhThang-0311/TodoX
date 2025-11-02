import mongoose from "mongoose";
import { logInfo, logError } from "../src/untils/logger.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    logInfo("✅ MongoDB connected successfully!");
  } catch (error) {
    logError("❌ MongoDB connection failed: " + error.message);
    process.exit(1);
  }
};


