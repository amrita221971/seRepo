const Event = require('../models/event');


exports.post_event = function (req , res) {
    let event=new Event({
      name:"abc",
      postedBy:"xyz",
      attendedBy:["a","b"]
    });

    event.save(function (err) {
        if (err) {return next(err);}

        res.send('event posted successfully');
    });
};
