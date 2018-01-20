var Post = require('../models/posts');
var Category = require('../models/category');
var Author = require('../models/author');

var async = require('async');

exports.post_list = function (req, res) {
    Post.
        find({}).
        populate('category').
        populate('author').
        exec (function (err, posts) {
        if(err){
            console.log(err);
        } else {
            res.render('posts/index', { title: 'Posts', posts:posts });
        }
    })
};

exports.post_new = function (req, res) {
    async.parallel({
        categories: function (callback) {
            Category.
                find({}).
                select('_id description').
                sort({sequence: 1}).
                exec(callback);
        },
        authors: function (callback) {
            Author.
                find({}).
                select('_id name').
                exec(callback);
        },
    }, function (err, results) {
        if(err) {
            console.log(err)
        } else {
            res.render('posts/new', { title: 'New Post', categories: results.categories, authors: results.authors});
        }
    })
};

exports.post_save = function (req, res) {
    //getting data from form
    var title = req.body.title,
        summary = req.body.summary,
        category = req.body.category,
        author = req.body.author,
        newPost = {title: title, summary: summary, category: category, author: author};
    Post.create(newPost, function (err, post) {
        if(err){
            console.log(err);
        } else {
            res.redirect('/posts');
        }
    })
};

exports.post_show = function (req, res) {
    Post.findById(req.params.id)
        .populate('category')
        .populate('author')
        .exec(function(err, foundPost){
        if(err){
            console.log(err);
        } else {
            console.log(foundPost);
            res.render('posts/show', {title: 'New Post', post: foundPost});
        }
    })
};

exports.post_delete = function (req, res) {
    Post.findByIdAndRemove(req.params.id, function (err) {
        if(err) {
            console.log(err)
        } else {
            console.log('Record was deleted from the database successfully')
            res.redirect('/posts');
        }
    })
};

