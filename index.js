const express = require("express");
const robot = require("robotjs");
const path = require("path");

const app = express();
const port = 2137;

// Main site
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/static/index.html"));
});

// Click handler
app.get("/press/:key", (req, res) => {
  const key = req.params.key;
  robot.keyTap(key);
  res.send(`[i] Pressed ${key}`);
});

app.listen(port, () => {
  console.log(`[!] etsPanel is running on port ${port}`);
});
