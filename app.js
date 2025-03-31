const express = require('express')

const studentRoute = require ("./student.router.js");

const app = express()
const port = 5000

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use ("/api/students", studentRoute);


    const mongoose = require('mongoose');

    
    mongoose.connect('mongodb://localhost:27017/studentsdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('✅ Connected to MongoDB locally!');
        app.listen(port, () => {
            console.log(`🚀 Server running at http://localhost:5000`);
        });
    })
    .catch((err) => {
        console.error('❌ Failed to connect to MongoDB:', err);
    });
    