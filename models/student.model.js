const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        CIN: {
            type: Number,
            unique: true,
            required: 'CIN is mandatory',
            maxlength: 8,
            minlength: 8
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            trim: true
        }
    }
)
// "     Yassine.sta@esprit.tn   " => "yassine.sta@esprit.tn"

// student ==> students, catagory ==> categories, etc..
const Student = mongoose.model('student', studentSchema);

module.exports = { Student }