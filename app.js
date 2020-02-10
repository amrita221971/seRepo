const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

/////////////////////////// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://seLab:selabpwd@cluster0-qlodt.mongodb.net/db';
const mongoDB = dev_db_url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
const dB = mongoose.connection;
dB.on('error', console.error.bind(console, 'mongoDB connection error:'));
////////////////////////////////////////////////
app.use(bodyParser.urlencoded({extended: true}));

///////routes
app.use('/api', routes);


app.listen(3000, function() {
    console.log("Listening on : 3000");
});
