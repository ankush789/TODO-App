const Todo = require("../models/todoList");
module.exports.home = function(req,res){
        Todo.find({}, function(err, todo){
            if(err){
                console.log("Error fetching Data from the database");
                return;
            }
            return res.render("home", { title: "TODO App", todo_list: todo });
        })
}