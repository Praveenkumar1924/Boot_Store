import express from 'express';
import { Student } from '../models/student.js'; // Change the import to match the exported name

import bcrypt from 'bcrypt';

const router = express.Router();
import { verifyAdmin } from './auth.js';

router.post('/register',verifyAdmin, async (req,res) =>  {
    try {
        const {username, password, roll, grade} = req.body;
        const existingStudent = await Student.findOne({username}) // Use Student instead of student
        if(existingStudent) {
            return res.json({message: "Student is already registered"})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newStudent = new Student({ // Use Student instead of student
            username,
            password: hashPassword,
            roll: roll,
            grade
        })
        await newStudent.save()
        return res.json({registered: true})
    } catch(err) {
        return res.json({message: "Error in registering student"})
    }
})

export {router as studentRouter}
