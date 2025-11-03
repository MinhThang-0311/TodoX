import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import app from "./src/app.js";
import { logError, logInfo } from "./src/untils/logger.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Kết nối MongoDB
// connectDB();

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => logInfo(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    logError("Server failed to start: " + err.message);
  }
};

startServer();