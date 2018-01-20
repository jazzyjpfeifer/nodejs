var Author = require('../models/author');

exports.author_show = function (req, res) {
    Author.
        find({}).
        exec (function(err, allAuthors){
        if(err){
            console.log(err);
        } else {
            res.render('authors/show', {title: 'Authors', authors:allAuthors});
        }
    })
};

exports.author_new = function (req, res) {
    res.render('authors/new', {title: 'New Author'});
};

exports.author_save = function (req, res) {
    //getting data from form
    var name = req.body.name;
    var newAuthor = {name: name};
    Author.create(newAuthor, function (err, newlyCreated) {
        if(err){
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.redirect('/authors');
        }
    })
};

