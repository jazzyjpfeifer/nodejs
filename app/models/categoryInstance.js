var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var categorySchema = new Schema({
    description: String,
    sequence: Number,
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

module.exports = mongoose.model("Category", categorySchema);
