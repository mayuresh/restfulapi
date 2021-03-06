/**
 * Created by mayureshp on 1/28/2015.
 */

var mongoose = require('mongoose'),
    Todo = mongoose.model('Todo');

exports.todoById = function(req, res, next, id) {
    Todo.findOne({_id: id}, function(err, todo) {
       if (err) {
           next(err);
       };
        if(todo) {
            req.todo = todo;
            next();
        } else {
            var error = {
                error: "Todo Not found"
            }
            res.status(404).send(error);
        }

    });

}

exports.list = function (req, res, next) {
    Todo.find(function(err, todos) {
        if (err) {
            next(err);
        }
        res.send(todos);
    })
}

exports.create = function(req, res) {
    var todo = new Todo(req.body);
    todo.save(function(err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.send(req.body);
        }

    });

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

    todo.save(function(err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.send(todo);
        }
    });
}

exports.delete = function(req, res) {
    var todo = req.todo;
    todo.remove(function(err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.send(todo);
        }
    });

    res.send(todo);
}