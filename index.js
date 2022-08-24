const express = require("express");
const app = express();
const mogoose = require("mongoose");
const dotenv = require("dotenv");
const studentRoute = require("./routes/students");
const attendanceRoute = require("./routes/attendance");
const teacherRoute = require("./routes/teachers");
const divisionRoute = require("./routes/division");
const batchRoute = require("./routes/batch");

dotenv.config();

try {
  mogoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("Connect to MONGODB");
  });
} catch (err) {
  console.log(err);
}
app.use(express.json());
app.use("/api/student", studentRoute);
app.use("/api/attendance", attendanceRoute);
app.use("/api/teacher", teacherRoute);
app.use("/api/div", divisionRoute);
app.use("/api/batch", batchRoute);

app.listen(5000, () => {
  console.log("Backend is running!");
});
