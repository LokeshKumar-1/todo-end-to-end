const express = require('express')
const router = express.Router()
const {authMiddleware} = require("../middlewares/auth.middleware");
const {getAllTodos, addTodo, updateTodo, deleteTodo} = require('../controllers/dash.controller')


router.get("/get/todo", authMiddleware, getAllTodos)
router.post("/add/todo", authMiddleware, addTodo)
router.patch("/update/todo", authMiddleware, updateTodo)
router.delete("/delete/todo/:id", authMiddleware, deleteTodo)


// default router for mismatched urls
router.use((req, res) => {
    res.status(404).json({message: "Url not found"})
})


module.exports = router;