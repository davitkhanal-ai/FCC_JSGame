const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  email: {
    type: String,
    required: "This field is required.",
  },
  password: {
    type: String,
    required: "This field is required.",
  },
});

module.exports = mongoose.model("Users", authSchema);
