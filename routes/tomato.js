var express = require('express');
const tomato_controlers= require('../controllers/tomato');
var router = express.Router();
/* GET tomatos */
router.get('/', tomato_controlers.tomato_view_all_Page );
module.exports = router;