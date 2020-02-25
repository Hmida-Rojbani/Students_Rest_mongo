const mongoose = require('mongoose');

let student_schema = new mongoose.Schema({
    name: String,
    age: Number
});

let Student = mongoose.model('Student',student_schema);

module.exports.Student = Student;