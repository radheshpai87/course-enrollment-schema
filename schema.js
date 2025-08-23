const mongoose = require('mongoose');

const studentSchema = new mongoose.schema({
    name: {
        type: String,
        required: true,
        Purpose: 'Student’s full name'
    },
    email: {
        type: String,
        
    }
})