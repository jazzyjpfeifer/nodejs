exports.index = function (req, res) {
    res.render('index', { title: 'BI-Steps.com' });
};

exports.admin = function (req, res) {
    res.render('admin', { title: 'Admin' });

};