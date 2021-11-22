const express = require('express');
const mongoose = require('mongoose');
const app = express();
const studentRoute= require('./routes/students'); 
const facultyRoute=require('./routes/faculties');
const admissionRoute=require('./routes/admissions')
const cors = require('cors');
app.use(express.json());


app.use(cors());


app.use('/student',studentRoute); 
app.use('/faculty',facultyRoute);
app.use('/admission',admissionRoute);

mongoose.connect("mongodb://localhost:27017/school_db",()=>{ 

console.log("database connected") 
});



app.listen(4000);
