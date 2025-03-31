const express = require("express");
const studentRouter = express.Router (); 
const {
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
} = require ("./student.controller.js");

studentRouter.post ('/', createStudent);
studentRouter.get ('/', getAllStudents);
studentRouter.get ('/id=:id', getStudentById);
studentRouter.get ('/sid=:sid', getStudentBySchoolId);
studentRouter.get ('/fname=:fname/lname=:lname', getFirstStudentByFirstLastName);
studentRouter.get ('/lnames=:lname', getAllStudentsByLastName);
studentRouter.put ('/', updateAllStudents);
studentRouter.put ('/id=:id', updateStudentById);
studentRouter.put ('/fname=:fname/lnames=:lname', updateFirstStudentByFirstLastName);
studentRouter.put ('/lnames=:lname', updateAllStudentsByLastName);
studentRouter.delete ('/', deleteAllStudents);
studentRouter.delete ('/id=:id', deleteStudentById);
studentRouter.delete ('/sid=:sid', deleteStudentBySchoolId);
studentRouter.delete ('/name=:name', deleteFirstStudentByFirstLastName);
studentRouter.delete ('/names=:name', deleteAllStudentsByLastName);

module.exports = studentRouter;