var Post = require('../models/posts');
var Category = require('../models/category');
var Author = require('../models/author');

exports.post_list = function (req, res) {
    Post.
        find({}).
        populate('Category').
        populate('author').
        exec (function (err, posts) {
        if(err){
            console.log(err);
        } else {
            console.log('Check this out ' + posts);
            res.render('posts/index', { title: 'Posts', posts:posts });
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
        author = {
            id: req.author._id,
            name: req.author.name
    },
        newPost = {title: title, summary: summary, category: category, author: author};
        console.log('AUTHOR:' + author)
    Post.create(newPost, function (err, post) {
        Author.findOne({name: author}, function (err, foundAuthor) {
            if(err) {
                console.log(err);
            } else {
                foundAuthor.posts.push(post._id);
                foundAuthor.save(function(err, data){
                    if(err){
                        console.log(err);
                    } else {
                        //console.log(data);
                        res.redirect('/posts');
                    }
                })
            }
        });
    })
};

exports.post_show = function (req, res) {
    Post.findById(req.params.id).populate('category').exec(function(err, foundPost){
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

