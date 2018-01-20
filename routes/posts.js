var express = require('express');
var router = express.Router();

// Require controller
var post_controller = require('../app/controllers/postController');

router.get('/', post_controller.post_list);

router.get('/new', post_controller.post_new);

router.post('/', post_controller.post_save);

router.get('/:id/show', post_controller.post_show);

router.delete('/:id', post_controller.post_delete);


module.exports = router;

