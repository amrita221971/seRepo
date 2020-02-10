const mongoose = require('mongoose');

const eventSchema=new mongoose.Schema({
  name:String,
  postedBy:String,
  attendedBy:Array
});

module.exports=mongoose.model('event',eventSchema);
