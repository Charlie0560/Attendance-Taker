var mongoose = require("mongoose");

var TeacherSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        trim: true
    }
    ,
    email: {
        type: String,
        required: true
    }
    ,
    password: {
        type: String,
        length: 6
    },
    department:{
        type: String,
        required: true
    }

},{timestamps: true});

module.exports = mongoose.model("Teachers", TeacherSchema);