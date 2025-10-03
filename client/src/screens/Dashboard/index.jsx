import "./index.css"
import AddTodo from "../AddTodo/index.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {deleteToken} from "../../api/storageService.js";
import {deleteTodoService, getAllTodoService, updateTodoService} from "../../api/services/dash.service.js";

const todoList = [
    {
        id: 1,
        title: "Buy groceries",
        description: "Milk, Bread, Eggs, Butter",
        status: "pending", // or "completed"
        createdAt: "2025-09-30T10:00:00",
    },
    {
        id: 2,
        title: "Workout",
        description: "1 hour gym session",
        status: "completed",
        createdAt: "2025-09-29T08:30:00",
    },
    {
        id: 3,
        title: "Finish project report",
        description: "Complete and submit by tonight",
        status: "pending",
        createdAt: "2025-09-28T14:15:00",
    },
    {
        id: 4,
        title: "Call plumber",
        description: "Fix kitchen sink leakage",
        status: "pending",
        createdAt: "2025-09-27T16:45:00",
    },
    {
        id: 5,
        title: "Read a book",
        description: "Finish 2 chapters of Atomic Habits",
        status: "completed",
        createdAt: "2025-09-26T20:00:00",
    },
];

const Dashboard = () => {
    const navigate = useNavigate();

    const [listData, setListData] = useState(todoList)
    console.log(listData)


    useEffect(() => {
        getAllTodo()
    }, []);

    async function getAllTodo() {
        const responseData = await getAllTodoService()
        if (responseData) {
            setListData(responseData || [])
        }
    }

    const handleLogout = () => {
        deleteToken()
        navigate("/login")
    }

    const updateTodoHandler = async (selectedTodo) => {
        const bodyContent = {
            todoId: selectedTodo._id,
            status: selectedTodo.status === "pending" ? "completed" : "pending",
        }
        const postResponse = await updateTodoService(bodyContent)
        if (postResponse) {
            await getAllTodo()
        }
    }

    const deleteTodoHandler = async (selectedTodo) => {
        const deleteResponse = await deleteTodoService(selectedTodo._id)
        if (deleteResponse) {
            await getAllTodo()
        }
    }

    const renderListItem = (item) => {
        return (
            <li className="list-item" key={item?._id}>
                <div className="list-item-title">
                    <input type={"checkbox"} checked={item?.status === "completed"}
                           onChange={() => updateTodoHandler(item)}/>
                    <h2 style={{textDecoration: item?.status === "completed" ? "line-through" : "none"}}>{item?.title}</h2>
                </div>
                <button type={'button'} className="delete-btn" onClick={() => deleteTodoHandler(item)}>Delete</button>
            </li>
        )
    }

    return (
        <div className="dash-parent-cont">
            <div style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                <h1 style={{textAlign: "center", position: 'fixed'}}>My Todo</h1>
                <button type="button" className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
            <AddTodo getAllTodo={getAllTodo}/>
            <ul className="list-cont">
                {listData.map(item => renderListItem((item)))}
            </ul>
        </div>
    )
}

export default Dashboard