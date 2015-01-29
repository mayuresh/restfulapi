/**
 * Created by mayureshp on 1/28/2015.
 */

var todos = [];

exports.todoById = function(req, res, next, id) {
    todos.forEach(function(todo, index) {
       if (todo.id === parseInt(id)) {
           req.todo = todo;
       }
    });
    next();
}

exports.list = function (req, res) {
    res.send(todos);
}

exports.create = function(req, res) {
    todos.push(req.body);
    res.send(req.body);
    }

exports.read = function(req, res) {
    res.send(req.todo);
}

exports.update = function(req, res) {
    var todo = req.todo;
    if (req.body.todoText != undefined) {
        todo.todoText = req.body.todoText;
    }
    if (req.body.completed != undefined) {
        todo.completed = req.body.completed;
    }

    res.send(todo);
}

exports.delete = function(req, res) {
    var todo = req.todo;
    todos.splice(todos.indexOf(todo), 1);
    res.send(todo);
}
