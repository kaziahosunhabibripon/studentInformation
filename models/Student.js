const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    Name: {
       type: String,
       required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        match: [
           /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
           "Please enter a valid email"
        ],
     },
    Phone: {
        type: String,
        required: true,
        unique: true,
     },
    Date_of_Birth: {
        type: Date,
        required: true,
     },
    Subjects: {
        type: String,
        required: true,
     },
   
},
{timestamps: true}
)

module.exports = mongoose.model('Student', studentSchema);