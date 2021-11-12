var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var tomato_controller = require('../controllers/tomato');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// tomato ROUTES ///
// POST request for creating a tomato.
router.post('/resource/tomato', tomato_controller.tomato_create_post);
// DELETE request to delete tomato.
router.delete('/resource/tomato/:id', tomato_controller.tomato_delete);
// PUT request to update tomato.
router.put('/resource/tomato/:id',
tomato_controller.tomato_update_put);
// GET request for one tomato.
router.get('/resource/tomato/:id', tomato_controller.tomato_detail);
// GET request for list of all tomato items.
router.get('/resource/tomato', tomato_controller.tomato_list);
module.exports = router;