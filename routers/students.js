const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const studentDebug = require('debug')('app:student:router')
const {
    Student
} = require('../models/student');

router.get(['/index', '/welcome'], (req, res) => {
    res.send('<h1>Welcome to My Student APIs</h1>');
})

//add a new Student

router.post('', async (req, res) => {
    let student_request = new Student({
        name: req.body.name,
        age: req.body.age
    });
    let savedStudent = await student_request.save();
    res.status(201).send(savedStudent);
})

// get All Student

router.get('', async (req, res) => {
    let students = await Student.find();
    res.send(students);
});

router.get('/name/:name', async (req, res) => {
    let students = await Student.find({
        name: req.params.name
    });
    res.send(students);
});

router.get('/id/:id', async (req, res) => {
    let student = await Student.findById(req.params.id);
    res.send(student);
});

router.delete('/id/:id', async (req, res) => {
    try {
        let studentToDelete = await Student.findById(req.params.id);
        await Student.deleteOne(studentToDelete);
        res.send('Deleted Student : ', studentToDelete);
    } catch (err) {
        studentDebug('Delete Error', err.message)
    }
});

router.put('/id/:id', async (req, res) => {
    try {
        let studentToUpdate = await Student.findById(req.params.id);
        studentToUpdate.set({
            name : req.body.name,
            age : req.body.age
        })
        
        await studentToUpdate.save();
        res.send('update Student : '+ studentToUpdate);
    } catch (err) {
        studentDebug('Update Error', err.message)
    }
});

module.exports = router;