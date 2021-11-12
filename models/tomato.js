const mongoose = require("mongoose")
const tomatoSchema = mongoose.Schema({
tomato_type: String,
expdata: Number,
cost: Number
})
module.exports = mongoose.model("Tomato",
tomatoSchema)