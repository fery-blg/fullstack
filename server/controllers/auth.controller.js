

const User = require("../modules/user.schema")
const bcrypt = require("bcrypt");




const register = async (req, res) => {

    
    console.log(req.body)
    try {
        const isUser = await User.findOne({ email: req.body.email });
        console.log(isUser);
        if (isUser) {
          return  res.status(400).json({ message: "user already exist" });
        } else {
            const hash = await bcrypt.hash(req.body.password, 10);
             await User.create({
              username : req.body.username,
                email: req.body.email,
                password: hash,
            });
          return  res.status(201).json({ message: "account created succefully" });
        }}

    catch (error) {
        }
        res.status(500).json({ message: "error"})
    }




    module.exports = { register}