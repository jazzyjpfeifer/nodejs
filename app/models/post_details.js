var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var post_detailSchema = new Schema({
    content_type: String,
    content: String,
    file_path: String,
    sequence: Number
});



module.exports = mongoose.model("Post_Details", post_detailSchema);

