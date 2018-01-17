var express = require('express');
var router = express.Router();

// Require controller
var main_controller = require('../app/controllers/mainController');

/* GET home page. */
router.get('/', main_controller.index);

router.get('/admin', main_controller.admin);



module.exports = router;
