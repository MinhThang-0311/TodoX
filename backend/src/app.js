import express from "express";
import cors from "cors";
import todoRoutes from "./routers/todo.routers.js";
// import errorHandler from "./middlewares/errorHandler.js";
import { requestLogger } from "./middlewares/requestLogger.js";

const app = express();

// Middleware
app.use(cors()); //CORS = Cross-Origin Resource Sharing→ Là cơ chế bảo mật của trình duyệt, ngăn website A gọi API của server B nếu không được cho phép.
app.use(express.json());
app.use(requestLogger); // ✅ Tự động log mỗi request
// Routes
app.use("/api/todos", todoRoutes);

// Error handler
// app.use(errorHandler);

export default app;
