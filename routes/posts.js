var express = require('express');
var router = express.Router();

// Require controller
var post_controller = require('../app/controllers/postController');

router.get('/', post_controller.post_list);

router.get('/add', post_controller.post_add);


module.exports = router;

