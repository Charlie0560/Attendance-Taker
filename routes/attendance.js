const router = require("express").Router();
const Attendance = require("../models/Attendance");

router.post("/takeattendace", async (req, res) => {
  try {
    const { div, subject, teacher, lectureno, generatedcode } = req.body;
    const newAttendance = new Attendance({
      div,
      subject,
      teacher,
      lectureno,
      generatedcode,
    });
    const attendance = await newAttendance.save();
    res.status(200).json(attendance);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.put("/giveattendace/:id", async (req, res) => {
  const attendacneid = req.params.id;
  const attendacecode = req.body.code;

  const attendance = await Attendance.findById(attendacneid);
  try {
    if (attendacecode == attendance.generatedcode) {
      await attendance.updateOne({ $push: req.body });
      const attend = await Attendance.findById(attendacneid);
      attend.students.sort((a, b) => a.rollno - b.rollno);
      attend.save();
      res.status(200).json(attend);
    } else {
      res.status(404).json("Code is expired or wrong");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get attendance by id

router.get("/giveattendace/:id", async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id);
    res.status(200).json(attendance);
  } catch (err) {
    console.log("Attendance is not found");
    res.status(404).json(err);
  }
});

// get attendance by teacher name
router.get("/getbyteacher", async (req, res) => {
  try {
    const attendance = await Attendance.find({ teacher: req.body.teacher });
    res.status(200).json(attendance);
  } catch (err) {
    console.log("Teacher name is not found");
    res.status(404).json(err);
  }
});

// get all the  attendances
router.get("/getall", async (req, res) => {
  try {
    const data = await Attendance.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get attendance by division
router.get("/getbydiv", async (req, res) => {
  try {
    const div = req.body.div;
    const data = await Attendance.find({ div });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
