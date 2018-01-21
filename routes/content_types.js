var express = require('express');
var router = express.Router();

// Require controller
var content_types_controller = require('../app/controllers/content_typesController');

router.get('/', content_types_controller.content_types_list);

router.get('/new', content_types_controller.content_types_new);

router.post('/', content_types_controller.content_types_save);

router.get('/:id/edit', content_types_controller.content_types_edit);

router.put('/:id', content_types_controller.content_types_update);

router.delete('/:id', content_types_controller.content_types_delete);

module.exports = router;

