const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
  const User_rpg = mongoose.model("Users");

  //creation code for registration process
  const { email, password } = req.body;
  //validations if possible
  const encPassword = await bcrypt.hash(password, 10);
  //creation code
  try {
    const createdUser = await User_rpg.create({
      email,
      password: encPassword,
    });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
    return;
  }

  res.status(200).json({ status: "User has been registered" });
};

module.exports = userRegister;
