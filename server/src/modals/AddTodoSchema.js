const mongoose = require('mongoose')

const addTodoSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.ObjectId, ref: "User"},
    title: {type: String, required: [true, "Please enter a title"], trim: true},
    status: {type: String, default: "pending"},
}, {timestamps: true})

module.exports = mongoose.model("AddTodo", addTodoSchema, "todo_lists");