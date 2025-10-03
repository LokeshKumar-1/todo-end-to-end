import "./index.css"
import {useState} from "react";
import {addNewTodoService} from "../../api/services/dash.service.js";

const AddTodo = ({getAllTodo}) => {

    const [newData, setNewData] = useState("");

    const addBtnEventHandler = async () => {
        const bodyContent = {
            title: newData,
        }
        const postResponse = await addNewTodoService(bodyContent)
        if (postResponse) {
            await getAllTodo()
        }
        setNewData("")
    }

    return (
        <div className="add-parent-cont">
            <input type={"text"} placeholder="Enter here.." value={newData} className="add-todo-input"
                   onChange={(e) => {
                       setNewData(e.target.value);
                   }}/>
            <button type={"button"} className="add-btn" onClick={addBtnEventHandler}>Add</button>
        </div>
    )
}

export default AddTodo;