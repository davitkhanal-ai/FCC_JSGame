const home = async (req, res) => {
  try {
    res.render("index", { title: "Welcome to RPG" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occured" });
  }
};

module.exports = home;
