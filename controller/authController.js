const User = require("../model/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const foundUser = await User.findOne({ username: req.body.username });
  if (!foundUser) return res.status(400).json({ error: "User not found" });

  const match = await bcrypt.compare(req.body.password, foundUser.password);

  if (match) {
    // create jwt
    const accessToken = jwt.sign(
      // payload---user info
      {
        "username": foundUser.username,
      },
      // get env secret key
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.json({ message: "login successfully", accessToken: accessToken });
  } else {
    res.status(401);
  }
};

module.exports = { handleLogin };
