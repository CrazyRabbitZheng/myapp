const Student = require ("./student.model.js");


const createStudent = async (req, res) => {
    
    console.log ("Trying to create a student");
    console.log (req.body);
    try {
        // Here we'll use our model to save the data.
        const sched = await Student.create(req.body);
        res.status(200).json(sched);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
 };


const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find ({});
        res.status(200).json(students);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}


const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById (req.params.id); 
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


const getStudentBySchoolId = async (req, res) => {
    try {
        const student = await Student.findOne ({schoolId:req.params.sid});
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


const getFirstStudentByFirstLastName = async (req, res) => {
    try {
        const student = await Student.findOne ({firstName:req.params.fname, lastName:req.params.lname}); 
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


const getAllStudentsByLastName = async (req, res) => {
    try {
        const students = await Student.find ({lastName:req.params.lname}); 
        res.status(200).json(students);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


const updateAllStudents = async (req, res) => {
    try {
        const students = await Student.updateMany ({}, req.body, {new:true});
        res.status(200).json(students);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


const updateStudentById = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate (req.params.id, req.body, {new:true});
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


const updateFirstStudentByFirstLastName = async (req, res) => {
    try {
        const student = await Student.findOneAndUpdate ({firstName:req.params.fname, lastName:req.params.lname}, req.body, {new:true});
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


const updateAllStudentsByLastName = async (req, res) => {
    try {
        const students = await Student.updateMany ({lastName:req.params.lname}, req.body, {new:true});
        res.status(200).json(students);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}; 
  

const deleteAllStudents = async (req, res) => {
    try {
        const students = await Student.deleteMany ({});
        res.status(200).json(students);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


const deleteStudentById = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete (req.params.id);
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


const deleteStudentBySchoolId = async (req, res) => {
    try {
        const student = await Student.deleteOne ({schoolId:req.params.sid});
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


const deleteFirstStudentByFirstLastName = async (req, res) => {
    try {
        const student = await Student.deleteOne ({firstName:req.params.fname, lastName:req.params.lname}); 
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


const deleteAllStudentsByLastName = async (req, res) => {
    try {
        const student = await Student.deleteMany ({lastName:req.params.lname}); 
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    getStudentBySchoolId,
    getFirstStudentByFirstLastName,
    getAllStudentsByLastName,
    updateAllStudents,
    updateStudentById,
    updateFirstStudentByFirstLastName,
    updateAllStudentsByLastName,
    deleteAllStudents,
    deleteStudentById,
    deleteStudentBySchoolId,
    deleteFirstStudentByFirstLastName,
    deleteAllStudentsByLastName  
};