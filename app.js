const express = require("express");
const app = express();

//for route
app.get("/", (req, res) => {
  res.send("Welcome you");
 
});

//for listening
app.listen(5000, () => {
  console.log("Server is running in 5000");
});
