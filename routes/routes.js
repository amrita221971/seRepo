const express = require('express');
const router = express.Router();

// Require the controllers
const controller = require('../controllers/controller');

router.get('/post_event',controller.post_event);


module.exports = router;
