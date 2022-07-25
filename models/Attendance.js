var mongoose = require("mongoose");

var AttedanceSchema = new mongoose.Schema(
  {
    div: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
    lectureno: {
      type: Number,
    },
    generatedcode: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    students: {
      type: Array,
      default: [],
      rollno: {
        type: Number,
      },
      studentname: {
        type: String,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendace", AttedanceSchema);
