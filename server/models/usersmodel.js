const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "please provide a valid email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please provide a valid Email"],
  },
  password: {
    type: String,
    required: [true, "please provide password"],
    Minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "please cofirm password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "passwords are not the same",
    },
  },
});

usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model("user", usersSchema);
module.exports = User;
