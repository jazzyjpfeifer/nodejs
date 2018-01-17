exports.category_list = function (req, res) {
    res.render('categories/categories', { title: 'Categories' });
};

exports.category_add_form = function (req, res) {
    res.render('categories/category_add_form', { title: 'Add Category'});
};


/*
exports.index = function (req, res) {
    res.render('index', { title: 'BI-Steps.com' });
};
 */