var express = require('express');
var router = express.Router();

// Require controller
var author_controller = require('../app/controllers/authorController');

router.get('/', author_controller.author_index);

router.get('/new', author_controller.author_new);

router.post('/', author_controller.author_save);

router.get('/:id/show', author_controller.author_show);

router.get('/:id/edit', author_controller.author_edit);

router.put('/:id', author_controller.author_update);

router.delete('/:id', author_controller.author_delete);

module.exports = router;

