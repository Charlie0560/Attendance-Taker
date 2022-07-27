const router = require("express").Router();
const Attendance = require("../models/Attendance");

let timeout;
let deleid;
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
    deleid = attendance.id;
    res.status(200).json(attendance);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.put("/deletecode/:id",async(req,res)=>{
  try {
    const codeid = req.params.id;
    const att = await Attendance.findByIdAndUpdate(codeid,{ generatedcode: "" });
    // console.log(att);
    res.status(200).json("Code deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

const deletecode = async () => {
  
};
//find by id
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

// find by code and update
router.put("/giveattendace", async (req, res) => {
  const attendancecode = req.body.code;
  const attendance = await Attendance.find({ generatedcode: attendancecode });
  // console.log(attendance[0].id)
  if (attendance !== null) {
    try {
      const rid = attendance[0].id;
      const attbyid = await Attendance.findById(rid);
      await attbyid.updateOne({ $push: req.body });
      // console.log(attbyid);
      const updatedatt = await Attendance.findById(rid);
      updatedatt.students.sort((a, b) => a.rollno - b.rollno);
      updatedatt.save();
      res.status(200).json(updatedatt);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.status(404).json("Code is expired or wrong");
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

// get attendance by code
router.get("/getbycode", async (req, res) => {
  try {
    const attendance = await Attendance.find({ generatedcode: req.body.code });
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
    data.sort((p1, p2) => {
      return new Date(p2.createdAt) - new Date(p1.createdAt);
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get attendance by division
router.get("/getbydiv/:divname", async (req, res) => {
  try {
    const div = req.params.divname;
    const data = await Attendance.find({ div });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
