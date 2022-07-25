const router = require("express").Router();
const Students = require("../models/Students");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    const { fullname, email, password, rollno, div, collegeid } = req.body;
    if (password.length < 6) {
      res.status(500).json("Password must be of atleast 6 characters");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedpass = await bcrypt.hash(password, salt);
    const newStudent = new Students({
      fullname,
      email,
      password: hashedpass,
      rollno,
      div,
      collegeid,
    });
    const student = await newStudent.save();
    res.status(200).json(student);
    console.log(student);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const student = await Students.findOne({ email: req.body.email });
    if (!student) {
      errors.email = "student not found";
      res.status(404).json({ errors });
      return;
    }
    const validpassword = await bcrypt.compare(
      req.body.password,
      student.password
    );
    if (!validpassword) {
      errors.validpassword = "Wrong Credentials";
      res.status(400).json({ errors });
      return;
    }
    res.status(200).json(student);
    console.log(student);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// get all students
router.get("/allstudents", async (req, res) => {
  //   const students = await Students.find();
  const students = await Students.find().sort({ rollno: 1 });
  res.status(200).json(students);
});

//get all students by division
router.get("/allstudents/div", async (req, res) => {
  //   const students = await Students.find();
  const division = req.body.div;
  const students = await Students.find({ div: division }).sort({ rollno: 1 });
  res.status(200).json(students);
});


module.exports = router;
