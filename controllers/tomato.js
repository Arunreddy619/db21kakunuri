var Tomato = require('../models/tomato');
// List of all tomatos
exports.tomato_list = function (req, res) {
    res.send('NOT IMPLEMENTED: tomato list');
};
// for a specific tomato.
exports.tomato_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Tomato.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle tomato create on POST.
exports.tomato_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Tomato();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"tomato_type":"goat", "cost":12, "size":"large"}
    document.tomato_type = req.body.tomato_type;
    document.expdate = req.body.expdate;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle tomato delete form on DELETE.
exports.tomato_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: tomato delete DELETE ' + req.params.id);
};
// Handle tomato update form on PUT.
exports.tomato_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Tomato.findById(req.params.id)
        // Do updates of properties
        if (req.body.tomato_type)
            toUpdate.tomato_type = req.body.tomato_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

exports.tomato_list = async function (req, res) {
    try {
        theTomato = await Tomato.find();
        res.send(theTomato);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.tomato_view_all_Page = async function (req, res) {
    try {
        theTomato = await Tomato.find();
        res.render('tomato', { title: 'Tomato Search Results', results: theTomato });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};