const Todo = require("../models/todoList");
module.exports.deleteTask = function(req,res){

for(let i in req.body){
    Todo.findByIdAndDelete(req.body[i] , function(err){
        if(err){
            console.log("error in deleting an object from the database");
            return;
        }
    })
}
return res.redirect('back');
}

