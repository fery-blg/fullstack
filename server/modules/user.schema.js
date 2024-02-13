const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username : {type: 'string', required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      default :"user"}
})


const User = mongoose.model("User", schema);

module.exports = User;
