const AddTodo = require("../modals/AddTodoSchema")

exports.addTodo = async (req, res) => {
    try {
        const userDetails = req.user
        const {title, status} = req.body

        console.log(userDetails, "userDetails")
        if (!title) {
            return res.status(400).send({"message": "Please enter a title"})
        }

        const isExistingTask = await AddTodo.findOne({title})

        if (isExistingTask) return res.status(400).json({message: "Task already exists"})

        const newTodo = await AddTodo.create({userId: userDetails.id, title, status})
        return res.status(200).send(newTodo)

    } catch (e) {
        res.status(500).json({message: "Something went wrong", error: e});
    }
}


exports.getAllTodos = async (req, res) => {
    try {
        const userDetails = req.user

        const todoList = await AddTodo.find({userId: userDetails.id})
        console.log(todoList, "todoList")

        res.status(200).json(todoList)

    } catch (e) {
        res.status(500).json({message: "Something went wrong", error: e});
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const {todoId, title, status} = req.body

        if (!todoId || (!title && !status)) return res.status(400).json({"message": "Provide todo ID and at least one field to update"})

        const updatedTodo = await AddTodo.findOneAndUpdate(
            {_id: todoId},
            {$set: {title, status}},
            {new: true}
        )
        return res.status(200).send(updatedTodo)

    } catch (e) {
        res.status(500).json({message: "Something went wrong", error: e});
    }
}


exports.deleteTodo = async (req, res) => {
    try {
        const userDetails = req.user
        const {id} = req.params

        if (!id) return res.status(400).json({message: "Please provide todo ID"})

        const deleteTodo = await AddTodo.findOneAndDelete({_id: id, userId: userDetails.id})
        if (!deleteTodo) return res.status(404).send({"message": "No todos found"})

        return res.status(200).send(deleteTodo)

    } catch (e) {
        res.status(500).json({message: "Something went wrong", error: e});
    }
}