const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name: {type:String , required:true},
    email: String,
    password: String,
    skills : Array,
    students: Array,
    quizPosted: Array,
    tutorialPosted: Array
});

module.exports = mongoose.model('mentor', mentorSchema);
