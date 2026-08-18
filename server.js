const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const config = {
  appName: process.env.APP_NAME || "Sample App",
  environment: process.env.APP_ENV || "unknown",
  message: process.env.APP_MESSAGE || "Hello!",
  version: process.env.APP_VERSION || "1.0.0",
};

app.get("/", (req, res) => {
  res.json({
    application: config.appName,
    environment: config.environment,
    message: config.message,
    version: config.version,
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
  });
});

app.listen(PORT, () => {
  console.log(`${config.appName} running on port ${PORT}`);
});