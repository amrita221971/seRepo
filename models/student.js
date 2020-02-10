const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {type:String , required:true},
    email: String,
    password: String,
    skills : Array,
    mentors: Array,
    quizzes: Array,
    tutorials: Array
});

module.exports = mongoose.model('student', studentSchema);
