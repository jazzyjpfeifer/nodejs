var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    moment = require('moment');

var postSchema = new Schema({
    title: String,
    summary: String,
    author: { type: Schema.Types.ObjectId, ref: 'Author'},
    category: { id: {type: Schema.Types.ObjectId, ref: 'Category'} },
    date_posted: { type: Date, default: Date.now }
});

postSchema
    .virtual('date_posted_formatted')
    .get(function () {
        return moment(this.date_posted).format('MMMM Do, YYYY');
    });



module.exports = mongoose.model("Post", postSchema);

