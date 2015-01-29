/**
 * Created by mayureshp on 1/28/2015.
 */

var todos = require('../controllers/todo-controller');

module.exports = function(app) {
    app.param('todoId', todos.todoById);

    app.route('/api/todos')
        .get(todos.list)
        .post(todos.create);

    app.route('/api/todos/:todoId')
        .get(todos.read)
        .put(todos.update)
        .delete(todos.delete);
}