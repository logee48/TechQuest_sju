const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    unique: true,
  },
  Description: {
    type: String,
    unique: true,
  },
  Category: {
    type: String,
    unique: true,
  },
  Author: {
    type: String,
    unique: true,
  },
  Path: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Repo", userSchema);
