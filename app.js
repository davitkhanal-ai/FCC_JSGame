// index.js

const express = require("express");
const app = express();
const path = require("path");

// requiring the dotenv
require("dotenv").config();

// Serve static files from the freecodecamp directory
app.use(express.static("freecodecamp"));

// Define a route to serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "freecodecamp", "index.html"));
});

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
