const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim:true
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});


UserSchema.pre('save', function () {
    if (!this.isModified("password"))
        return;
    const hash = bcrypt.hashSync(this.password, saltRounds);
    this.password = hash;
})


module.exports = new mongoose.model("User", UserSchema);
