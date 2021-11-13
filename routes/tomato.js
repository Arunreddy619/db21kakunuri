var express = require('express');
const tomato_controlers = require('../controllers/tomato');
var router = express.Router();

/* GET costumes */
router.get('/', tomato_controlers.tomato_view_all_Page);

router.get('/detail', tomato_controlers.tomato_view_one_Page);

/* GET create costume page */
router.get('/create', tomato_controlers.tomato_create_Page);


router.get('/update', tomato_controlers.tomato_update_Page); 

router.get('/delete', tomato_controlers.tomato_delete_Page); 

module.exports = router;