const mongoose = require('mongoose');

const subjectSchema = new SubjectSchema({
    Subject :{ 
        type: String,
        required: true,
    },
    Name: { 
        type: String,
        required: true,
    },
},
{timestamps: true}
)
module.exports = mongoose.model('Subject', subjectSchema);