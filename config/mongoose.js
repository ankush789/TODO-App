//require library
const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/todo_app_db');

//acquire the connection
const db = mongoose.connection;

//if error 
db.on('error', console.error.bind(console, 'Connection Error'));

//if successfully connected 
db.once('open', function(){
    console.log('Connected Successfully');
})