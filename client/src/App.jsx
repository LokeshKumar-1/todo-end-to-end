import './App.css'

import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./screens/auth/Login/index.jsx";
import ProtectedRoute from "./utils/ProtectedRoute/index.jsx";
import Dashboard from "./screens/Dashboard/index.jsx";
import AddTodo from "./screens/AddTodo/index.jsx";


function App() {

    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/addTodo" element={<AddTodo/>}/>
            </Route>
            <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
    )
}

export default App
