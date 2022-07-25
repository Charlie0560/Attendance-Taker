var mongoose = require("mongoose");

var StudentsSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
    },
    created: {
      type: Date,
      default: Date.now,
    },
    rollno: {
      type: Number,
      required: true,
    },
    collegeid: {
      type: String,
      required: true,
    },
    div: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Students", StudentsSchema);
