const express = require('express');
const port = 9000;
const path = require("path");
const app = express();

//Requiring mongoose config
const db = require('./config/mongoose');


const Todo = require('./models/todoList');

//Adding parser to decode form data from string to an JSON object
app.use(express.urlencoded());

//Setting Express Router
app.use('/', require('./routes'));


//serving statis files like css,js or images
app.use(express.static('assets'));

//installing ejs and setting view engine
app.set('view engine','ejs');
app.set("views",'./views');


// app.get("/", function (req, res) {
//   Todo.find({}, function (err, todo) {
//     if (err) {
//       console.log("Error fetching Data from the database");
//       return;
//     }
//     return res.render("home", { title: "TODO App", todo_list: todo });
//   });
// });

// app.post("/create-task", function (req, res) {
//   Todo.create(req.body, function (err, createTask) {
//     if (err) {
//       console.log(`Error: ${err}`);
//       return;
//     }
//     console.log("************", createTask);
//     return res.redirect("back");
//   });
// });



//Setting app to listen at the port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})