const User = require("../modules/user.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config();
const register = async (req, res) => {
  console.log(req.body);
  try {
    const isUser = await User.findOne({ email: req.body.email });
    console.log(isUser);
    if (isUser) {
      return res.status(400).json({ message: "user already exist" });
    } else {
      const hash = await bcrypt.hash(req.body.password, 10);
      await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });
      return res.status(201).json({ message: "account created succefully" });
    }
  } catch (error) { }
  res.status(500).json({ message: "error" });
};

const login = async (req, res) => {
  console.log(req.body);
  try {
    const isUser = await User.findOne({ email: req.body.email });
    console.log(isUser);
    if (!isUser) {
      return res.status(404).json({ message: "user not found" });
    } else {
      const isMatch = await bcrypt.compare(req.body.password, isUser.password);
      console.log(isMatch);
      if (!isMatch) {
        res.status(401).json({ message: "wrong password" });
      } else {
        const exp = Date.now() + 1000 * 60 * 60;
        const token = jwt.sign(
          { id: isUser._id, exp, role: isUser.role },
          process.env.SECRET_KEY)
          console.log(process.env.SECRET_KEY)
        res.cookie("Authorzation", token)
          .json({
            message: "found user",
            user: {
              username: isUser.username,
              email: isUser.email,
              role: isUser.role,
              _id: isUser._id,
            },
          });
        return res.status(200)
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error" });
  }
};

module.exports = { register, login };
