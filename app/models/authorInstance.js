var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var authorSchema = new Schema({
    name: String,
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

module.exports = mongoose.model("Author", authorSchema);
