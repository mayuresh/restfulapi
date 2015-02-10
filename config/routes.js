/**
 * Created by mayureshp on 1/28/2015.
 */

module.exports = function(app) {
    require('../routes/todo.route')(app);

    app.use('/api/*', function(req, res, next) {
       res.status(404).json({'error': 'No such service present'});
    });

    app.use('*', function(req, res, next) {
       res.send('<html><body><h1>Page not found</h1></body>', 404);
    });
}
