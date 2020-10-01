//Schemas are written for mongoose to access the database and populate it.
const mongoose = require('mongoose');

//Defining Schema
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    }
});

//Defining Collection using Schema
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
