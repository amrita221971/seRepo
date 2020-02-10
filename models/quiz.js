const mongoose=require('mongoose');


const quizSchema= new mongoose.Schema({
  postedBy:String, //_id of the mentor who posted the quiz
  students:Array , //students who can access this quiz (mentees)
  questions :   Array //array of questions (questionSchema)
});
