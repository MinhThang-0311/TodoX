import { logInfo } from "../untils/logger.js";

export const requestLogger = (req, res, next) => {
  const start = Date.now();

  // Log khi response kết thúc
  res.on("finish", () => {
    const duration = Date.now() - start;
    const logMessage = `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`;
    logInfo(logMessage);
  });

  next();
};
