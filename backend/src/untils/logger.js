// src/utils/logger.js
import fs from "fs";
import path from "path";

const logPath = path.resolve("logs");
if (!fs.existsSync(logPath)) {
  fs.mkdirSync(logPath);
}

const writeLog = (level, message) => {
  const time = new Date().toISOString();
  const logMessage = `[${time}] ${level.toUpperCase()}: ${message}\n`;
  fs.appendFileSync(`${logPath}/app.log`, logMessage);
  console.log(logMessage.trim());
};

export const logInfo = (message) => writeLog("info", message);
export const logError = (message) => writeLog("error", message);
