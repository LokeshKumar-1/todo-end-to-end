import "./index.css"
import {useState} from "react";

const AddTodo = () => {

    const [newData, setNewData] = useState("");

    const addBtnEventHandler = async () => {
        console.log("pressed")
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