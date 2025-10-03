import './App.css'

import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./screens/auth/Login/index.jsx";
import ProtectedRoute from "./utils/ProtectedRoute/index.jsx";
import Dashboard from "./screens/Dashboard/index.jsx";
import AddTodo from "./screens/AddTodo/index.jsx";
import GlobalPopup from "./components/popups/GlobalPopup.jsx";
import PublicRoute from "./utils/PublicRoute/index.jsx";
import {ToastContainer} from "react-toastify";


function App() {

    return (
        <>
            <Routes>
                <Route element={<PublicRoute/>}>
                    <Route path="/login" element={<Login/>}/>
                </Route>
                <Route element={<ProtectedRoute/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/addTodo" element={<AddTodo/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
            <GlobalPopup/>
        </>
    )
}

export default App
