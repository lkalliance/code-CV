const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true, bcrypt: true },
});

userSchema.plugin(require("mongoose-bcrypt"));

userSchema.methods.comparePassword = function (pword) {
  bcrypt.compare(pword, this.password, (err, isMatch) => console.log(isMatch));
};

const User = mongoose.model("User", userSchema);

module.exports = User;
