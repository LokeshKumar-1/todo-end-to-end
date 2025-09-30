import {Navigate, Outlet} from "react-router-dom";
import {VITE_STORAGE_KEY} from "../../config/env.js";
import {getToken} from "../../api/storageService.js";

const ProtectedRoute = () => {
    const isAuthorized = getToken()
    
    if (!isAuthorized) return <Navigate to="/login"/>
    return <Outlet/>;
}

export default ProtectedRoute;