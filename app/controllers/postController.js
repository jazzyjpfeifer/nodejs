var Post = require('../models/postInstance');
var Category = require('../models/categoryInstance');
var Author = require('../models/authorInstance');

exports.post_show = function (req, res) {
    Post.
        find({}).
        populate('category').
        populate('author').
        exec (function (err, posts) {
        if(err){
            console.log(err);
        } else {
            console.log('The category type is %s', posts.category );
            res.render('posts/show', { title: 'Posts', posts:posts });
        }
    })
};

exports.post_new = function (req, res) {
    Category.
        find({}).
        select('_id description').
        sort({sequence: 1}).
        exec(function(err, listCategories) {
        if(err) {
            console.log(err);
        } else {
            console.log(listCategories);
        Author.
            find({}).
            select('_id name').
            exec(function(err, listAuthors) {
            if(err) {
                console.log(err);
            } else {
                console.log(listAuthors);
                res.render('posts/new', { title: 'New Post', categories:listCategories, authors:listAuthors});
            }
        })

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

    console.log('*********Author is***********' + author);

    Post.create(newPost, function (err, post) {
            if (err) {
                console.log(err);
            } else {
                console.log(post);
                res.redirect('/posts');
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

