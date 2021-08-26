const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name:{ 
        type: String,
        required: true,
    },
    email: {
        type: String ,
        required: true,
        unique: true,
     },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    dOB: {
        type: String,
        required: true,
    },
    subjects: {type:String, required: true},
    description: {type:String},
});

const Student = mongoose.model('student', StudentSchema);
module.exports = Student;