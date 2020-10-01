const Todo = require("../models/todoList");

module.exports.createTask = function(req,res){
    Todo.create(req.body , function(err, createTask){
        if(err){
            console.log(`Error: ${err}`);
            return;
        }
        console.log("************", createTask);
        return res.redirect('back');
    })
}