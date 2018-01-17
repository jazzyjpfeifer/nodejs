exports.post_list = function (req, res) {
    res.render('posts/posts', { title: 'Posts' });
};

exports.post_add = function (req, res) {
    res.render('posts/post_form_add', { title: 'Add Post Form'});
};