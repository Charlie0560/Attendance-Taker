const router = require("express").Router();
const Teachers = require("../models/Teachers");

router.post("/createteacher", async(req,res)=>{
    try{
        const{fullname, email, password , department} = req.body;
        const newTeacher = new Teachers({
            fullname, email, password , department
        });
        const teacher = await newTeacher.save();
        res.status(200).json(teacher);
    }
    catch(err){
        res.status(500).json(err);
    }
})

// get a teacher 
router.get("/getateacher",async(req,res)=>{
    try{
        const teachername = req.body.teacher;
        const teacher = await Teachers.find({fullname: teachername});
        res.status(200).json(teacher);
    }catch(err){
        res.status(404).json("Teacher not found");
    }
})

// get teachers by department
router.get("/getbydepart",async(req,res)=>{
    try{
        const department = req.body.department;
        const teacher = await Teachers.find({department});
        res.status(200).json(teacher);
    }catch(err){
        res.status(404).json("Department not found");
    }
})

module.exports = router;