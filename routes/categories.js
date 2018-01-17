var express = require('express');
var router = express.Router();

// Require controller
var category_controller = require('../app/controllers/categoryController');

router.get('/', category_controller.category_list);

router.get('/add', category_controller.category_add_form);

module.exports = router;

