var Content_Types = require('../models/content_types'),
    async = require('async');

exports.content_types_list = function (req, res) {
    Content_Types.find({}, function (err, allContent_Types) {
        if(err){
            console.log(err);
        } else {
            res.render('content_types/index', {title: 'Content Types', content_types:allContent_Types});
        }
    })
};

exports.content_types_new = function (req, res) {
    var count = Content_Types.count({}, function (err, count) {
        if(err) {
            console.log(err);
        } else {
            res.render('content_types/new', {title: 'Add Content Types', count: count});
        }
    })
};

exports.content_types_save = function (req, res) {
    var desc = req.body.description,
        seq = req.body.sequence,
        newContentType = {description: desc, sequence: seq};
    Content_Types.create(newContentType, function (err, results) {
        if(err) {
            console.log(err)
        } else {
            console.log(results);
            res.redirect('/content_types');
        }
    })
};

exports.content_types_edit = function (req, res) {
    Content_Types.findById(req.params.id, function (err, foundContentTypes) {
        res.render('content_types/edit', {title: 'Edit Content Types', content_types:foundContentTypes});
    })
};

exports.content_types_update = function (req, res) {
    var desc = req.body.description,
        seq = req.body.sequence;
    Content_Types.findByIdAndUpdate(req.params.id, {$set: {description: desc, sequence: seq}}, function (err, updatedContentType) {
        if(err) {
            console.log(err);
        } else {
            console.log('Records have been updated to the database: \n Description: ' + desc + '\n Sequence: ' + seq);
            res.redirect('/content_types');
        }
    })
};

/*
exports.category_update = function (req, res) {
    var desc = req.body.description;
    var seq = req.body.sequence;
    Category.findByIdAndUpdate(req.params.id, {$set: {description: desc, sequence: seq}}, function (err, updatedCategory) {
        if(err){
            console.log(err);
            res.redirect('/categories');
        } else {
            console.log('Records have been updated to the database: \n Description: ' + desc + '\n Sequence: ' + seq);
            res.redirect('/categories');
        }
    })
};
 */

exports.content_types_delete = function (req, res) {
    Content_Types.findByIdAndRemove(req.params.id, function (err) {
        if(err){
            res.redirect('/content_types');
        } else {
            res.redirect('/content_types');
        }
    })
};

