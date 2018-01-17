var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    description: String,
    sequence: Number

});

module.exports = mongoose.model("Category", categorySchema);
