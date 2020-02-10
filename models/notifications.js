const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    name: String ,
    sourceId: String,
    accessibleBy:Array
});

module.exports = mongoose.model('notification', notificationSchema);
